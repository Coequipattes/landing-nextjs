import type { ServicePageData } from "./types";

// DRAFT - à valider Manon : l'ensemble du contenu éditorial ci-dessous
// (intro, bénéfices, FAQ, CTA) doit être relu avant publication.
export const petSittingVannes: ServicePageData = {
  slug: "pet-sitting-vannes",
  metaTitle:
    "Pet sitter à Vannes (56) — Garde chien, chat & NAC | Co'équi'pattes",
  metaDescription:
    "Pet sitter professionnelle à Vannes : visites à domicile, promenades, garde de chat, chien et NAC. Tarifs transparents, certifiée France Petsitters.",
  hero: {
    h1: "Pet sitter à Vannes",
    baseline:
      "Garde d'animaux à domicile dans le Morbihan : visites, promenades et soins pour chiens, chats et NAC, par une professionnelle certifiée.",
    // DRAFT - image dédiée à fournir par Manon (/uploads/pet-sitting-vannes.jpg).
    // Fallback gracieux géré par ServiceHero si le fichier n'existe pas encore.
    image: "/uploads/manon.jpg",
    imageAlt: "Manon, fondatrice de Co'équi'pattes, avec un cheval",
  },
  intro: {
    paragraphs: [
      "[DRAFT] Je m'appelle Manon, je suis pet sitter professionnelle à Vannes et dans tout le Morbihan. Mon métier : prendre soin de vos compagnons à votre domicile lorsque vous êtes absent, qu'il s'agisse d'une journée de travail, d'un week-end ou de plusieurs semaines de vacances. Chiens, chats, lapins, rongeurs et autres NAC : chaque animal mérite un suivi attentif, respectueux de son rythme et de ses habitudes.",
      "[DRAFT] Mon approche repose sur trois principes simples : le respect de l'animal et de son environnement, la transparence avec ses propriétaires, et une vraie continuité de soins. Concrètement, chaque prestation commence par une pré-visite gratuite pour faire connaissance, comprendre vos consignes et observer la dynamique avec votre compagnon. Pendant les gardes, vous recevez chaque jour des photos et un petit compte-rendu pour rester serein, où que vous soyez.",
      "[DRAFT] Certifiée France Petsitters et couverte par une assurance responsabilité civile professionnelle (Abeille Assurances), j'interviens à Vannes et dans un rayon d'une dizaine de kilomètres autour du Golfe du Morbihan : Conleau, Séné, Theix-Noyalo, Arradon, Saint-Avé, Plescop, Ploeren. Mon objectif : que vos absences se passent aussi bien pour vous que pour eux.",
    ],
  },
  benefits: [
    {
      title: "Visites à domicile",
      description:
        "Votre animal reste dans son environnement habituel, sans stress de transport ni de pension collective.",
    },
    {
      title: "Suivi photo quotidien",
      description:
        "Vous recevez chaque jour des photos et un message court pour suivre la garde et garder le lien.",
    },
    {
      title: "Pré-visite gratuite",
      description:
        "Une rencontre obligatoire avant toute prestation pour faire connaissance et caler vos consignes.",
    },
    {
      title: "Certifiée France Petsitters",
      description:
        "Formation reconnue par la fédération nationale des pet sitters professionnels.",
    },
    {
      title: "Assurée Abeille Assurances",
      description:
        "Responsabilité civile professionnelle pour intervenir chez vous en toute sérénité.",
    },
    {
      title: "Multi-espèces",
      description:
        "Chiens, chats, lapins, cochons d'Inde, rongeurs, oiseaux et certains reptiles : chaque espèce a ses besoins, je m'adapte.",
    },
  ],
  pricing: {
    highlight:
      "Tarifs transparents, adaptés à la durée de la visite et à la fréquence.",
    cardSlugs: ["visite-domicile", "promenade", "visite-promenade"],
  },
  area: {
    city: "Vannes",
    neighborhoods: [
      "Vannes centre",
      "Conleau",
      "Séné",
      "Theix-Noyalo",
      "Arradon",
      "Saint-Avé",
      "Plescop",
      "Ploeren",
    ],
    radiusKm: 10,
  },
  faq: [
    {
      q: "Quels animaux gardez-vous ?",
      a: "Chiens, chats et NAC (lapins, cochons d'Inde, rongeurs, oiseaux, certains reptiles). [DRAFT - à confirmer avec Manon la liste précise des NAC pris en charge, notamment côté reptiles.]",
    },
    {
      q: "Garde chez vous ou chez moi ?",
      a: "À votre domicile uniquement. Votre animal reste dans son environnement habituel, avec ses odeurs, ses repères et son rythme — c'est moins stressant pour lui qu'une pension ou un transport.",
    },
    {
      q: "Êtes-vous assurée ?",
      a: "Oui, je dispose d'une assurance responsabilité civile professionnelle souscrite chez Abeille Assurances, qui couvre l'ensemble de mes interventions à domicile.",
    },
    {
      q: "Comment se passe la première rencontre ?",
      a: "Par une pré-visite découverte gratuite et obligatoire avant toute prestation. Nous faisons connaissance, vous me montrez les habitudes de votre animal, ses lieux de vie et ses consignes (alimentation, traitements, contacts d'urgence). Cela me permet d'intervenir sereinement le jour J.",
    },
    {
      q: "Quelles communes desservez-vous ?",
      a: "Vannes et un rayon d'environ 10 km autour : Conleau, Séné, Theix-Noyalo, Arradon, Saint-Avé, Plescop, Ploeren. Au-delà, un forfait kilométrique de 0,25€/km s'applique — n'hésitez pas à me solliciter pour un devis.",
    },
  ],
  testimonialKeywords: [
    "pet sitter",
    "garde",
    "chat",
    "chien",
    "absence",
    "vacances",
  ],
  serviceSchema: {
    name: "Pet-sitting à domicile à Vannes",
    serviceType: "Pet sitting",
    description:
      "Visites à domicile pour chien, chat et NAC à Vannes et dans le Morbihan. Pré-visite gratuite, suivi photo.",
  },
  cta: {
    headline: "Confiez-nous vos compagnons",
    subline: "Pré-visite gratuite, sans engagement",
  },
  related: [
    { slug: "garde-chien-vannes", label: "Garde de chien à Vannes" },
    { slug: "garde-chat-vannes", label: "Garde de chat à Vannes" },
    {
      slug: "promeneur-chien-vannes",
      label: "Promeneur de chien à Vannes",
    },
  ],
};
