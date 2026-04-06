import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

export type Review = {
  text: string;
  authorName: string;
  authorInitials: string;
  context: string;
  visible: boolean;
};

const DATA_PATH = path.join(process.cwd(), "src/data/reviews.json");

export async function getReviews(): Promise<Review[]> {
  const raw = await readFile(DATA_PATH, "utf-8");
  return JSON.parse(raw);
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
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    throw new Error("Missing GOOGLE_PLACES_API_KEY or GOOGLE_PLACE_ID");
  }

  const url = `https://places.googleapis.com/v1/places/${placeId}?languageCode=fr`;
  const res = await fetch(url, {
    headers: {
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask": "reviews",
    },
  });
  const data = await res.json();

  if (!data.reviews) {
    return [];
  }

  // Load existing to preserve visibility state
  let existing: Review[] = [];
  try {
    existing = await getReviews();
  } catch {
    // No existing file
  }

  const existingMap = new Map(existing.map((r) => [r.authorName, r]));

  const reviews: Review[] = data.reviews.map(
    (r: {
      authorAttribution: { displayName: string };
      text: { text: string };
      relativePublishTimeDescription: string;
    }) => {
      const prev = existingMap.get(r.authorAttribution.displayName);
      return {
        text: r.text.text,
        authorName: r.authorAttribution.displayName,
        authorInitials: getInitials(r.authorAttribution.displayName),
        context: r.relativePublishTimeDescription,
        visible: prev?.visible ?? true,
      };
    },
  );

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
