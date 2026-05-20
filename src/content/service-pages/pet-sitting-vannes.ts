import type { ServicePageData } from "./types";

export const petSittingVannes: ServicePageData = {
  slug: "pet-sitting-vannes",
  metaTitle: "TODO: meta title 50-60 car (cible: pet-sitter Vannes ombrelle)",
  metaDescription:
    "TODO: meta description 140-160 car — promesse + bénéfice + CTA (cible: pet-sitter Vannes)",
  hero: {
    h1: "TODO: H1 — Pet-sitter à Vannes (variation de la cible)",
    baseline:
      "TODO: baseline ~12-18 mots — promesse principale, ton chaleureux",
    image: "TODO: chemin /uploads/pet-sitting-vannes.jpg (photo dédiée Manon)",
  },
  intro: {
    paragraphs: [
      "TODO: paragraphe 1 (60-90 mots) — qui je suis + zone + promesse",
      "TODO: paragraphe 2 (60-90 mots) — méthode + différenciation",
      "TODO: paragraphe 3 (60-90 mots) — preuve sociale + transition CTA",
    ],
  },
  benefits: [
    { title: "TODO: bénéfice 1", description: "TODO: 1-2 phrases" },
    { title: "TODO: bénéfice 2", description: "TODO: 1-2 phrases" },
    { title: "TODO: bénéfice 3", description: "TODO: 1-2 phrases" },
    { title: "TODO: bénéfice 4", description: "TODO: 1-2 phrases" },
  ],
  pricing: {
    highlight:
      "TODO: phrase d'accroche tarifs (ex: Tarifs transparents, sans engagement)",
    cardSlugs: ["visite-domicile", "promenade", "visite-promenade"],
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
    { q: "TODO: Q1 pet-sitting Vannes", a: "TODO: A1 (50-100 mots)" },
    { q: "TODO: Q2 pet-sitting Vannes", a: "TODO: A2" },
    { q: "TODO: Q3 pet-sitting Vannes", a: "TODO: A3" },
    { q: "TODO: Q4 pet-sitting Vannes", a: "TODO: A4" },
    { q: "TODO: Q5 pet-sitting Vannes", a: "TODO: A5" },
  ],
  testimonialKeywords: ["pet", "sitter", "garde", "chien", "chat"],
  serviceSchema: {
    name: "Pet-sitting à Vannes",
    serviceType: "PetSitting",
    description:
      "TODO: description Service schema 150-200 car — utilisé dans JSON-LD",
  },
  cta: {
    headline: "TODO: headline CTA final (ex: Confiez-moi vos compagnons)",
    subline: "TODO: subline rassurante + invitation contact",
  },
  related: [
    { slug: "garde-chien-vannes", label: "Garde de chien à Vannes" },
    { slug: "garde-chat-vannes", label: "Garde de chat à Vannes" },
    { slug: "promeneur-chien-vannes", label: "Promeneur de chien à Vannes" },
  ],
};
