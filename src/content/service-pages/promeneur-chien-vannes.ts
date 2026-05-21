import type { ServicePageData } from "./types";

// DRAFT - à valider Manon : l'ensemble du contenu éditorial ci-dessous
// (intro, bénéfices, FAQ, CTA) doit être relu avant publication.
export const promeneurChienVannes: ServicePageData = {
  slug: "promeneur-chien-vannes",
  metaTitle:
    "Promeneur de chien à Vannes — Balades quotidiennes | Co'équi'pattes",
  metaDescription:
    "Promeneur de chien à Vannes : balades 30 à 60 min, en laisse, adaptées au rythme de votre chien. Pour actifs et propriétaires âgés.",
  hero: {
    h1: "Promeneur de chien à Vannes",
    baseline:
      "Des balades régulières adaptées à votre chien, quand vous n'avez pas le temps ou plus l'énergie de sortir — pour qu'il garde sa dépense quotidienne.",
    image: "/manon_chiens.webp",
    imageAlt: "Manon, promeneuse de chien, lors d'une balade à Vannes",
  },
  intro: {
    paragraphs: [
      "[DRAFT] Tous les chiens ont besoin de sortir tous les jours, et pas qu'à la va-vite avant de partir au boulot. Mais entre les journées de télétravail trop denses, les déplacements pro, une mobilité qui se réduit avec l'âge ou simplement une météo dissuasive, on finit par culpabiliser de ne pas offrir assez à son chien. C'est exactement pour répondre à ces situations que j'interviens comme promeneuse de chien à Vannes.",
      "[DRAFT] Mes balades durent 30, 45 ou 60 minutes selon la formule choisie et l'énergie de votre chien. Toujours en laisse — c'est ma règle de sécurité non négociable, quelle que soit la sociabilité du chien — et toujours adaptées à son rythme : un jeune chien de berger n'a pas les mêmes besoins qu'un labrador sénior. Je varie les itinéraires autour de Vannes pour offrir des stimulations olfactives nouvelles à chaque sortie.",
      "[DRAFT] Pour les propriétaires qui ont besoin d'une régularité, un forfait hebdomadaire ou plurihebdomadaire est plus avantageux qu'une balade à l'unité. Tout commence par une pré-visite gratuite : je rencontre votre chien dans son cadre, j'observe son comportement à la laisse, et nous calons un créneau qui s'intègre dans votre journée. Certifiée France Petsitters et assurée responsabilité civile pro.",
    ],
  },
  benefits: [
    {
      title: "Balades 30 / 45 / 60 min",
      description:
        "Choisissez la durée selon l'énergie de votre chien et votre budget — pas de formule rigide imposée.",
    },
    {
      title: "En laisse, sécurité avant tout",
      description:
        "Pas de lâcher en liberté, même pour les chiens sociables : c'est la garantie d'une promenade sans imprévu.",
    },
    {
      title: "Rythme adapté à votre chien",
      description:
        "Cadence, distance, pauses olfactives : tout est calé sur l'âge, la condition physique et le tempérament de votre compagnon.",
    },
    {
      title: "Lieux variés autour de Vannes",
      description:
        "Je change régulièrement d'itinéraire pour offrir de la nouveauté et stimuler l'odorat. [DRAFT - lieux favoris à confirmer Manon : bois, bord de mer, parcs]",
    },
    {
      title: "Idéal pour actifs et télétravailleurs",
      description:
        "Une coupure de milieu de journée pour votre chien, sans que vous ayez à interrompre votre journée pro.",
    },
    {
      title: "Forfait régulier avantageux",
      description:
        "Pour une promenade plusieurs fois par semaine, un forfait s'applique pour réduire le coût unitaire. [DRAFT - tarif forfait à confirmer Manon]",
    },
  ],
  pricing: {
    highlight:
      "Une balade à l'unité ou un forfait régulier — formule au choix selon votre rythme.",
    cardSlugs: ["promenade", "visite-promenade"],
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
      q: "Vous promenez plusieurs chiens en même temps ?",
      a: "[DRAFT - politique à confirmer Manon] Par défaut, je privilégie la promenade individuelle pour une attention pleine à votre chien et une sécurité maximale. Les promenades groupées peuvent être envisagées au cas par cas si les chiens se connaissent et sont compatibles.",
    },
    {
      q: "Vous lâchez les chiens en liberté ?",
      a: "Non, jamais. La balade se fait toujours en laisse, quelle que soit la sociabilité du chien. C'est ma règle de sécurité non négociable : un imprévu (vélo, autre chien réactif, gibier) peut transformer une seconde d'inattention en accident. [DRAFT]",
    },
    {
      q: "Et s'il pleut ?",
      a: "On y va quand même — le chien s'en moque souvent plus que nous. J'ai l'équipement adapté de mon côté (cape, chaussures), et au retour je sèche votre chien avec une serviette laissée à disposition. Seuls les orages avec risque de foudre justifient un report. [DRAFT]",
    },
    {
      q: "À quelle heure passez-vous ?",
      a: "Horaires flexibles : matin, milieu de journée ou fin d'après-midi. On cale ensemble un créneau régulier lors de la pré-visite, en fonction de votre planning et des habitudes de votre chien. [DRAFT]",
    },
    {
      q: "Promenade régulière ou ponctuelle ?",
      a: "Les deux sont possibles. La promenade à l'unité dépanne pour un imprévu, le forfait hebdomadaire ou plurihebdomadaire est plus avantageux pour une routine installée. [DRAFT - détails tarifs forfait à confirmer Manon]",
    },
  ],
  testimonialKeywords: ["promenade", "balade", "promener", "marche"],
  serviceSchema: {
    name: "Promeneur de chien à Vannes",
    serviceType: "Dog walking",
    description:
      "Promenades de chien à Vannes et dans le Morbihan : balades 30 à 60 min en laisse, formule à l'unité ou forfait régulier, pré-visite gratuite.",
  },
  cta: {
    headline: "Votre chien sort tous les jours",
    subline: "Même quand vous êtes débordé",
  },
  related: [
    { slug: "garde-chien-vannes", label: "Garde de chien à Vannes" },
    { slug: "pet-sitting-vannes", label: "Pet-sitting à Vannes" },
    { slug: "garde-chat-vannes", label: "Garde de chat à Vannes" },
  ],
};
