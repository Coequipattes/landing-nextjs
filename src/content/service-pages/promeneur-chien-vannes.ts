import type { ServicePageData } from "./types";

export const promeneurChienVannes: ServicePageData = {
  slug: "promeneur-chien-vannes",
  metaTitle: "TODO: meta title 50-60 car (cible: promeneur chien Vannes)",
  metaDescription:
    "TODO: meta description 140-160 car — balades sur-mesure (cible: promeneur chien Vannes)",
  hero: {
    h1: "TODO: H1 — Promeneur de chien à Vannes",
    baseline: "TODO: baseline ~12-18 mots — balades + Vannes",
    image:
      "TODO: chemin /uploads/promeneur-chien-vannes.jpg (photo dédiée Manon)",
  },
  intro: {
    paragraphs: [
      "TODO: paragraphe 1 (60-90 mots) — focus promenade + Vannes",
      "TODO: paragraphe 2 (60-90 mots) — méthode balades + sécurité",
      "TODO: paragraphe 3 (60-90 mots) — preuve + transition CTA",
    ],
  },
  benefits: [
    { title: "TODO: bénéfice promenade 1", description: "TODO: 1-2 phrases" },
    { title: "TODO: bénéfice promenade 2", description: "TODO: 1-2 phrases" },
    { title: "TODO: bénéfice promenade 3", description: "TODO: 1-2 phrases" },
    { title: "TODO: bénéfice promenade 4", description: "TODO: 1-2 phrases" },
  ],
  pricing: {
    highlight: "TODO: phrase d'accroche tarifs promenade",
    cardSlugs: ["promenade", "visite-promenade"],
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
    { q: "TODO: Q1 promeneur chien Vannes", a: "TODO: A1 (50-100 mots)" },
    { q: "TODO: Q2 promeneur chien Vannes", a: "TODO: A2" },
    { q: "TODO: Q3 promeneur chien Vannes", a: "TODO: A3" },
    { q: "TODO: Q4 promeneur chien Vannes", a: "TODO: A4" },
    { q: "TODO: Q5 promeneur chien Vannes", a: "TODO: A5" },
  ],
  testimonialKeywords: ["promenade", "balade", "chien", "marche"],
  serviceSchema: {
    name: "Promeneur de chien à Vannes",
    serviceType: "DogWalking",
    description:
      "TODO: description Service schema 150-200 car — promenade chien",
  },
  cta: {
    headline: "TODO: headline CTA promeneur",
    subline: "TODO: subline rassurante promeneur",
  },
  related: [
    { slug: "garde-chien-vannes", label: "Garde de chien à Vannes" },
    { slug: "pet-sitting-vannes", label: "Pet-sitting à Vannes" },
    { slug: "garde-chat-vannes", label: "Garde de chat à Vannes" },
  ],
};
