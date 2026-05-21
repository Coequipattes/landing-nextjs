import type { ServicePageData } from "./types";

// DRAFT - à valider Manon : l'ensemble du contenu éditorial ci-dessous
// (intro, bénéfices, FAQ, CTA) doit être relu avant publication.
export const gardeChienVannes: ServicePageData = {
  slug: "garde-chien-vannes",
  metaTitle:
    "Garde de chien à Vannes — Visites à domicile | Co'équi'pattes",
  metaDescription:
    "Garde de chien à Vannes pendant vos absences. Visites à domicile, promenades, suivi photo quotidien. Pré-visite gratuite, assurance pro.",
  hero: {
    h1: "Garde de chien à Vannes",
    baseline:
      "Une alternative au chenil pour vos vacances et déplacements : votre chien reste chez lui, avec ses repères et un suivi quotidien personnalisé.",
    // DRAFT - photo dédiée chien à fournir par Manon (/uploads/garde-chien-vannes.jpg).
    // Fallback temporaire : photo générique Manon.
    image: "/uploads/manon.jpg",
  },
  intro: {
    paragraphs: [
      "[DRAFT] Partir en vacances ou en déplacement professionnel ne devrait pas rimer avec angoisse pour votre chien. La pension, le chenil, voire la famille rapidement dépassée par les besoins quotidiens : les solutions classiques ont toutes le même défaut, elles arrachent votre compagnon à son environnement. À Vannes et alentours, je propose une approche différente : la garde à domicile, où votre chien continue sa vie normalement, avec ses odeurs, son panier, son jardin et ses horaires de balade.",
      "[DRAFT] Concrètement, j'organise une à trois visites par jour selon l'âge et les besoins de votre chien. Chaque passage comprend la sortie, le repas, un temps de jeu ou de câlin, et la vérification de l'état général. Pour les absences longues, je peux aussi assurer le tri du courrier, l'arrosage des plantes ou l'ouverture des volets — autant de petits gestes qui maintiennent la maison vivante et dissuadent les intrusions.",
      "[DRAFT] Avant chaque mission, une pré-visite gratuite est obligatoire. C'est le moment où votre chien apprend à me connaître dans un cadre rassurant, où je note ses consignes (alimentation, traitements, vétérinaire référent) et où nous calons ensemble le rythme des visites. Je suis certifiée France Petsitters et couverte par une assurance responsabilité civile professionnelle (Abeille Assurances) pour intervenir en toute sécurité chez vous.",
    ],
  },
  benefits: [
    {
      title: "Routine respectée",
      description:
        "Horaires de repas, lieux de balade habituels, rituels du soir : tout reste comme avant pour limiter le stress de l'absence.",
    },
    {
      title: "1 à 3 visites par jour",
      description:
        "Selon la durée de votre absence et les besoins de votre chien, on adapte la fréquence (idéalement 2 visites quotidiennes).",
    },
    {
      title: "Suivi photo après chaque passage",
      description:
        "Vous recevez photos et compte-rendu court à chaque visite — vous gardez le lien et la sérénité.",
    },
    {
      title: "Gestion clés sécurisée",
      description:
        "Remise lors de la pré-visite, restitution à votre retour. Trousseau identifié sans adresse pour éviter tout risque.",
    },
    {
      title: "Pré-visite gratuite obligatoire",
      description:
        "Indispensable pour faire connaissance, valider les consignes et confirmer la prestation sans engagement.",
    },
    {
      title: "Assurance pro Abeille",
      description:
        "Responsabilité civile professionnelle et certification France Petsitters pour intervenir chez vous en toute légalité.",
    },
  ],
  pricing: {
    highlight:
      "Trois formules pour s'adapter à la durée d'absence et à l'autonomie de votre chien.",
    cardSlugs: ["promenade", "visite-domicile", "visite-promenade"],
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
      q: "Combien de visites par jour proposez-vous ?",
      a: "Selon les besoins de votre chien et la durée d'absence : 1 à 3 visites par jour, idéalement 2 pour un chien adulte autonome. Un chiot, un chien âgé ou sous traitement aura naturellement besoin d'un rythme plus soutenu. Nous calons cela ensemble lors de la pré-visite. [DRAFT]",
    },
    {
      q: "Comment se passe la gestion des clés ?",
      a: "Remise lors de la pré-visite, restitution à votre retour. Les clés sont identifiées par un code interne (jamais par votre nom ou votre adresse) et conservées de manière sécurisée pendant la mission. [DRAFT - à confirmer protocole exact avec Manon]",
    },
    {
      q: "Acceptez-vous les chiens réactifs ou anxieux ?",
      a: "Oui, après évaluation lors de la pré-visite gratuite. Si une réactivité ou une anxiété forte est détectée, nous voyons ensemble si la garde à domicile reste pertinente ou s'il faut envisager une autre solution. Je préfère refuser une mission plutôt que mettre un chien ou moi-même en difficulté. [DRAFT]",
    },
    {
      q: "Que se passe-t-il en cas d'urgence vétérinaire ?",
      a: "Contact immédiat avec vous (ou la personne référente que vous aurez désignée) et prise en charge selon vos consignes pré-établies — transport chez votre vétérinaire habituel ou vers la clinique d'urgence la plus proche. Les coordonnées vétérinaires sont recueillies lors de la pré-visite. [DRAFT]",
    },
    {
      q: "Pouvez-vous garder un chiot ?",
      a: "Oui, à partir de [DRAFT - âge minimum à confirmer Manon, typiquement 3-4 mois et sevré]. Un chiot demande plus de visites quotidiennes (apprentissage de la propreté, repas fractionnés, sociabilisation) — la formule est adaptée en conséquence.",
    },
  ],
  testimonialKeywords: ["chien", "garde", "vacances", "absence", "promenade"],
  serviceSchema: {
    name: "Garde de chien à domicile à Vannes",
    serviceType: "Dog sitting",
    description:
      "Garde de chien à domicile à Vannes et dans le Morbihan pendant vos absences : visites quotidiennes, promenades, suivi photo, pré-visite gratuite.",
  },
  cta: {
    headline: "Partez sereinement",
    subline: "Votre chien reste dans son environnement",
  },
  related: [
    { slug: "pet-sitting-vannes", label: "Pet-sitting à Vannes" },
    { slug: "promeneur-chien-vannes", label: "Promeneur de chien à Vannes" },
    { slug: "garde-chat-vannes", label: "Garde de chat à Vannes" },
  ],
};
