import type { ServicePageData } from "./types";

// DRAFT - à valider Manon : contenu éditorial provisoire (intro, bénéfices,
// FAQ, CTA) + tarif "sur devis" en attendant la grille de prix.
// Service distinct des "visites à domicile" : ici Manon s'installe chez le
// client (à demeure, elle dort sur place) pour toute la durée, en s'absentant
// le temps de ses autres prestations.
export const gardeADomicileVannes: ServicePageData = {
  slug: "garde-a-domicile-vannes",
  metaTitle:
    "Garde à domicile à Vannes · pet sitter à demeure | Co'équi'pattes",
  metaDescription:
    "Garde à domicile à Vannes et alentours : je m'installe chez vous pour veiller sur votre animal pendant votre absence. Tarif sur devis, pré-visite gratuite.",
  hero: {
    h1: "Garde à domicile à Vannes",
    baseline:
      "Je m'installe chez vous pendant votre absence : votre animal garde ses repères et une présence à demeure, sans changer d'environnement.",
    image: "/manon_chiens.webp",
    imageAlt: "Manon en garde à domicile auprès d'un animal à Vannes",
  },
  intro: {
    paragraphs: [
      "Certains animaux supportent mal la solitude, surtout sur de longues absences : un chien anxieux, un chiot, un animal âgé ou sous traitement, ou simplement plusieurs animaux à gérer. Pour ces situations, la garde à domicile est la formule la plus rassurante : je m'installe chez vous pour toute la durée convenue, je dors sur place et reste présente la majeure partie du temps.",
      "Votre animal reste dans son environnement, avec ses odeurs, son rythme et ses habitudes. Je m'occupe de tout au quotidien : repas, sorties, jeux, soins simples. Je m'absente uniquement le temps de mes autres prestations (promenades, visites), puis je reviens à votre domicile, qui reste habité et surveillé pendant votre absence.",
      "Ce service est proposé à partir de 3 nuits sur place pour 2 animaux ou moins ; à partir de 3 animaux, il n'y a pas de durée minimum. Tout commence par une pré-visite gratuite : je fais connaissance avec votre animal, je note ses consignes et je définis avec vous les modalités. Un contrat est établi avant chaque prestation. Le tarif est fixé sur devis : il dépend de la durée, de vos besoins et notamment du nombre d'animaux présents.",
    ],
  },
  benefits: [
    {
      title: "À demeure chez vous",
      description:
        "Je m'installe chez vous et j'y dors pour toute la durée. Je ne m'absente que le temps de mes autres prestations (promenades, visites) auprès d'autres animaux.",
    },
    {
      title: "Zéro changement d'environnement",
      description:
        "Pas de transport ni de lieu inconnu : votre animal garde sa maison, ses odeurs et son rythme.",
    },
    {
      title: "Idéal pour les besoins particuliers",
      description:
        "Animal anxieux, chiot, animal âgé ou sous traitement, plusieurs animaux : une présence rapprochée sécurise les situations délicates.",
    },
    {
      title: "Maison occupée et surveillée",
      description:
        "Pendant votre absence, votre logement reste habité (courrier, plantes, volets) et ma présence dissuade les intrusions.",
    },
    {
      title: "Durée sur-mesure",
      description:
        "À partir de 3 nuits sur place pour 2 animaux ou moins, sans durée minimum dès 3 animaux, et jusqu'à plusieurs semaines selon votre absence.",
    },
    {
      title: "Pré-visite gratuite",
      description:
        "Je fais connaissance avec votre animal et je note toutes les consignes avant le premier jour de garde.",
    },
  ],
  pricing: {
    highlight:
      "Une présence à demeure chez vous : tarif sur devis, selon la durée, vos besoins et le nombre d'animaux.",
    cardSlugs: ["garde-domicile"],
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
      q: "Êtes-vous présente en permanence ?",
      a: "Je m'installe chez vous et j'y dors pour toute la durée convenue. Je m'absente uniquement le temps de mes autres prestations (promenades, visites) ; le reste du temps, je suis auprès de votre animal.",
    },
    {
      q: "Pour quels animaux ?",
      a: "Chiens, chats et autres animaux de compagnie. La garde à domicile convient particulièrement aux animaux qui supportent mal la solitude ou qui demandent une surveillance rapprochée.",
    },
    {
      q: "Combien ça coûte ?",
      a: "Le tarif est établi sur devis : il dépend de la durée, de vos besoins et notamment du nombre d'animaux présents au domicile.",
    },
    {
      q: "Et pour la maison ?",
      a: "Votre logement reste habité et surveillé : je peux m'occuper du courrier, des plantes et des volets, et ma présence dissuade les intrusions.",
    },
    {
      q: "Y a-t-il une durée minimum ?",
      a: "Oui : la garde à domicile est proposée à partir de 3 nuits sur place pour 2 animaux ou moins. À partir de 3 animaux, il n'y a pas de durée minimum.",
    },
    {
      q: "Comment réserver ?",
      a: "Contactez-moi pour vérifier mes disponibilités. Je fixe ensuite avec vous une pré-visite gratuite avant toute garde, et un contrat est établi avant chaque prestation.",
    },
  ],
  testimonialKeywords: ["garde", "domicile", "absence", "vacances"],
  serviceSchema: {
    name: "Garde d'animaux à domicile à Vannes",
    serviceType: "Pet sitting",
    description:
      "Garde à domicile à Vannes et alentours : pet sitter à demeure chez vous pendant votre absence, pour chien, chat et autres animaux. Sur devis, pré-visite gratuite.",
  },
  cta: {
    headline: "Partez l'esprit tranquille",
    subline: "Une présence à demeure auprès de votre animal",
  },
  related: [
    { slug: "visites-chien-vannes", label: "Visites à domicile pour chien" },
    { slug: "visites-chat-vannes", label: "Visites à domicile pour chat" },
  ],
};
