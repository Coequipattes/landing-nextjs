import type { ServicePageData } from "./types";

export const gardeChatVannes: ServicePageData = {
  slug: "garde-chat-vannes",
  metaTitle: "TODO: meta title 50-60 car (cible: garde chat Vannes)",
  metaDescription:
    "TODO: meta description 140-160 car — promesse + bénéfice + CTA (cible: garde chat Vannes)",
  hero: {
    h1: "TODO: H1 — Garde de chat à Vannes",
    baseline: "TODO: baseline ~12-18 mots — chat + zone Vannes",
    image: "TODO: chemin /uploads/garde-chat-vannes.jpg (photo dédiée Manon)",
  },
  intro: {
    paragraphs: [
      "TODO: paragraphe 1 (60-90 mots) — focus chat + Vannes",
      "TODO: paragraphe 2 (60-90 mots) — méthode visites domicile + spécificités chat",
      "TODO: paragraphe 3 (60-90 mots) — preuve + transition CTA",
    ],
  },
  benefits: [
    { title: "TODO: bénéfice chat 1", description: "TODO: 1-2 phrases" },
    { title: "TODO: bénéfice chat 2", description: "TODO: 1-2 phrases" },
    { title: "TODO: bénéfice chat 3", description: "TODO: 1-2 phrases" },
    { title: "TODO: bénéfice chat 4", description: "TODO: 1-2 phrases" },
  ],
  pricing: {
    highlight: "TODO: phrase d'accroche tarifs garde chat",
    cardSlugs: ["visite-domicile"],
  },
  area: {
    city: "Vannes",
    neighborhoods: [
      "TODO: confirmer quartiers desservis avec Manon",
      "Centre-ville",
      "Conleau",
      "Kercado",
      "Ménimur",
    ],
    radiusKm: 10,
  },
  faq: [
    { q: "TODO: Q1 garde chat Vannes", a: "TODO: A1 (50-100 mots)" },
    { q: "TODO: Q2 garde chat Vannes", a: "TODO: A2" },
    { q: "TODO: Q3 garde chat Vannes", a: "TODO: A3" },
    { q: "TODO: Q4 garde chat Vannes", a: "TODO: A4" },
    { q: "TODO: Q5 garde chat Vannes", a: "TODO: A5" },
  ],
  testimonialKeywords: ["chat", "visite", "domicile", "nourrissage"],
  serviceSchema: {
    name: "Garde de chat à Vannes",
    serviceType: "CatSitting",
    description: "TODO: description Service schema 150-200 car — garde chat",
  },
  cta: {
    headline: "TODO: headline CTA garde chat",
    subline: "TODO: subline rassurante garde chat",
  },
  related: [
    { slug: "pet-sitting-vannes", label: "Pet-sitting à Vannes" },
    { slug: "garde-chien-vannes", label: "Garde de chien à Vannes" },
    { slug: "promeneur-chien-vannes", label: "Promeneur de chien à Vannes" },
  ],
};
