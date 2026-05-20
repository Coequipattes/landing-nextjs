import type { ServicePageData } from "./types";

export const gardeChienVannes: ServicePageData = {
  slug: "garde-chien-vannes",
  metaTitle: "TODO: meta title 50-60 car (cible: garde chien Vannes)",
  metaDescription:
    "TODO: meta description 140-160 car — promesse + bénéfice + CTA (cible: garde chien Vannes)",
  hero: {
    h1: "TODO: H1 — Garde de chien à Vannes",
    baseline: "TODO: baseline ~12-18 mots — chien + zone Vannes",
    image: "TODO: chemin /uploads/garde-chien-vannes.jpg (photo dédiée Manon)",
  },
  intro: {
    paragraphs: [
      "TODO: paragraphe 1 (60-90 mots) — focus chien + Vannes",
      "TODO: paragraphe 2 (60-90 mots) — méthode + spécificités garde chien",
      "TODO: paragraphe 3 (60-90 mots) — preuve + transition CTA",
    ],
  },
  benefits: [
    { title: "TODO: bénéfice chien 1", description: "TODO: 1-2 phrases" },
    { title: "TODO: bénéfice chien 2", description: "TODO: 1-2 phrases" },
    { title: "TODO: bénéfice chien 3", description: "TODO: 1-2 phrases" },
    { title: "TODO: bénéfice chien 4", description: "TODO: 1-2 phrases" },
  ],
  pricing: {
    highlight: "TODO: phrase d'accroche tarifs garde chien",
    cardSlugs: ["promenade", "visite-promenade", "visite-domicile"],
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
    { q: "TODO: Q1 garde chien Vannes", a: "TODO: A1 (50-100 mots)" },
    { q: "TODO: Q2 garde chien Vannes", a: "TODO: A2" },
    { q: "TODO: Q3 garde chien Vannes", a: "TODO: A3" },
    { q: "TODO: Q4 garde chien Vannes", a: "TODO: A4" },
    { q: "TODO: Q5 garde chien Vannes", a: "TODO: A5" },
  ],
  testimonialKeywords: ["chien", "balade", "promenade", "garde"],
  serviceSchema: {
    name: "Garde de chien à Vannes",
    serviceType: "DogSitting",
    description: "TODO: description Service schema 150-200 car — garde chien",
  },
  cta: {
    headline: "TODO: headline CTA garde chien",
    subline: "TODO: subline rassurante garde chien",
  },
  related: [
    { slug: "promeneur-chien-vannes", label: "Promeneur de chien à Vannes" },
    { slug: "pet-sitting-vannes", label: "Pet-sitting à Vannes" },
    { slug: "garde-chat-vannes", label: "Garde de chat à Vannes" },
  ],
};
