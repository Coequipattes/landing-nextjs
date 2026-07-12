import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

export type Review = {
  id: string;
  text: string;
  authorName: string;
  authorInitials: string;
  context: string;
  rating: number;
  visible: boolean;
};

type GooglePlaceReview = {
  name?: string;
  authorAttribution: { displayName: string };
  text: { text: string };
  relativePublishTimeDescription: string;
  rating: number;
};

// L'API Google Places ne renvoie jamais que les 5 avis "les plus pertinents"
// du moment (limite fixe côté Google, sans pagination) — un même avis peut
// entrer/sortir de cette fenêtre d'un fetch à l'autre. `name` (identifiant de
// ressource Google) est stable d'un fetch à l'autre quand présent ; à défaut
// (anciennes entrées migrées, ou champ absent), on retombe sur un composite
// auteur+texte, suffisant en pratique pour dédupliquer le même avis.
function deriveReviewId(authorName: string, text: string, googleName?: string) {
  return googleName ?? `${authorName}::${text}`;
}

const DATA_PATH = path.join(process.cwd(), "src/data/reviews.json");

export async function getReviews(): Promise<Review[]> {
  try {
    const raw = await readFile(DATA_PATH, "utf-8");
    return JSON.parse(raw);
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") {
      console.warn(`reviews.json introuvable à ${DATA_PATH}, retour []`);
      return [];
    }
    throw err;
  }
}

export async function saveReviews(reviews: Review[]) {
  await writeFile(DATA_PATH, JSON.stringify(reviews, null, 2));
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export async function fetchGoogleReviews(): Promise<Review[]> {
  const { serverEnv } = await import("./env.server");
  const { googlePlacesApiKey: apiKey, googlePlaceId: placeId } = serverEnv;

  const existing = await getReviews();

  const url = `https://places.googleapis.com/v1/places/${placeId}?languageCode=fr`;
  const res = await fetch(url, {
    headers: {
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask": "reviews",
    },
  });
  const data = await res.json();

  if (!data.reviews) {
    return existing;
  }

  // Fusionne (upsert par id) au lieu de remplacer : un avis qui sort de la
  // fenêtre des "5 plus pertinents" de Google au prochain fetch ne doit pas
  // disparaître du site. Les anciennes entrées sans `id` (avant ce correctif)
  // sont migrées à la volée via le même composite auteur+texte.
  const merged = new Map(
    existing.map((r) => [r.id ?? deriveReviewId(r.authorName, r.text), r]),
  );

  for (const r of data.reviews as GooglePlaceReview[]) {
    const id = deriveReviewId(r.authorAttribution.displayName, r.text.text, r.name);
    const prev = merged.get(id);
    merged.set(id, {
      id,
      text: r.text.text,
      authorName: r.authorAttribution.displayName,
      authorInitials: getInitials(r.authorAttribution.displayName),
      context: r.relativePublishTimeDescription,
      rating: r.rating,
      visible: prev?.visible ?? true,
    });
  }

  const reviews = Array.from(merged.values());
  await saveReviews(reviews);
  return reviews;
}

export async function toggleReviewVisibility(
  authorName: string,
  visible: boolean,
) {
  const reviews = await getReviews();
  const review = reviews.find((r) => r.authorName === authorName);
  if (!review) throw new Error("Review not found");
  review.visible = visible;
  await saveReviews(reviews);
}
