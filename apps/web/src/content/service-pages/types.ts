export type ServicePageData = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  hero: {
    h1: string;
    baseline: string;
    image: string;
    imageAlt: string;
    // Optionnel : object-position CSS pour recadrer le sujet (ex. "center 70%").
    imageFocus?: string;
  };
  intro: { paragraphs: string[] };
  benefits: { title: string; description: string }[];
  pricing: { highlight: string; cardSlugs: string[] };
  // Optionnel : par défaut, la zone provient de `content/coverage.ts`.
  // Une page peut surcharger une partie (ex. équitation).
  area?: { city?: string; neighborhoods?: string[]; radiusKm?: number };
  faq: { q: string; a: string }[];
  testimonialKeywords: string[];
  serviceSchema: { name: string; serviceType: string; description: string };
  cta: { headline: string; subline: string };
  related: { slug: string; label: string }[];
};
