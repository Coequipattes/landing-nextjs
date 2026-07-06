// Chargement des polices de marque pour les rendus next/og (OG images, cartes,
// posts réseaux sociaux). Récupère les woff2 depuis Google Fonts.

async function loadFont(family: string, weight: number): Promise<ArrayBuffer> {
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=${family.replace(/ /g, "+")}:wght@${weight}&display=swap`,
    {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1",
      },
    },
  ).then((r) => r.text());

  const url = css.match(/src: url\((.+?)\)/)?.[1];
  if (!url) throw new Error(`Font URL not found for ${family} ${weight}`);
  return fetch(url).then((r) => r.arrayBuffer());
}

export async function loadBrandFonts() {
  const [playfairBold, quicksandSemibold, quicksandMedium, caveatBold] =
    await Promise.all([
      loadFont("Playfair Display", 700),
      loadFont("Quicksand", 600),
      loadFont("Quicksand", 500),
      loadFont("Caveat", 700),
    ]);

  return [
    { name: "Playfair Display", data: playfairBold, weight: 700 as const },
    { name: "Quicksand", data: quicksandSemibold, weight: 600 as const },
    { name: "Quicksand", data: quicksandMedium, weight: 500 as const },
    { name: "Caveat", data: caveatBold, weight: 700 as const },
  ];
}

// Polices de la marque « clair chaleureux » (Fraunces display / Hanken Grotesk
// sans / Caveat manuscrit), alignées sur styles.css. Utilisées par les OG images
// du site (racine + pages service). Les cartes/posts parrainage gardent
// loadBrandFonts (rendu Satori historique, hors périmètre).
export async function loadClairFonts() {
  const [fraunces, hankenSemibold, hankenMedium, caveatBold] =
    await Promise.all([
      loadFont("Fraunces", 700),
      loadFont("Hanken Grotesk", 600),
      loadFont("Hanken Grotesk", 500),
      loadFont("Caveat", 700),
    ]);

  return [
    { name: "Fraunces", data: fraunces, weight: 700 as const },
    { name: "Hanken Grotesk", data: hankenSemibold, weight: 600 as const },
    { name: "Hanken Grotesk", data: hankenMedium, weight: 500 as const },
    { name: "Caveat", data: caveatBold, weight: 700 as const },
  ];
}
