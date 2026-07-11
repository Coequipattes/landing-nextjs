import type { ServicePageData } from "./types";

// DRAFT - à valider Manon : l'ensemble du contenu éditorial ci-dessous
// (intro, bénéfices, FAQ, CTA) doit être relu avant publication.
export const visitesChienVannes: ServicePageData = {
  slug: "visites-chien-vannes",
  metaTitle: "Garde de chien à Vannes · Visites à domicile | Co'équi'pattes",
  metaDescription:
    "Garde de chien à Vannes pendant vos absences. Visites à domicile, promenades, suivi photo quotidien. Pré-visite gratuite.",
  hero: {
    h1: "Visites à domicile pour chien à Vannes",
    baseline:
      "Des visites de 30 min à 1 h chez vous pendant vos absences : votre chien reste dans son environnement, avec ses repères et un suivi à chaque passage.",
    image: "/assets/visite_chien_domicile.webp",
    imageAlt:
      "Manon prenant soin d'un chien lors d'une visite à domicile à Vannes",
    imageFocus: "center 35%",
  },
  intro: {
    paragraphs: [
      "Partir en vacances ou en déplacement professionnel ne devrait pas rimer avec angoisse. C'est la raison pour laquelle je me déplace chez vous pour des visites de 30 min à 1 h, une ou plusieurs fois par jour : votre animal reste dans son environnement, avec ses odeurs, son panier, son jardin et ses horaires habituels.",
      "Le nombre de visites se décide avec vous, selon l'âge et les besoins de votre chien, jusqu'à 5 passages par jour. Chaque passage comprend la sortie, le repas, un temps de jeu ou de câlin, et la vérification de l'état général. Pour les absences longues, je peux aussi m'occuper du courrier, arroser les plantes ou ouvrir les volets, autant de petits gestes qui maintiennent la maison vivante et dissuadent les intrusions.",
      "Avant chaque mission, une pré-visite gratuite est obligatoire. C'est le moment où votre chien et moi-même faisons connaissance dans un cadre rassurant, où je note les consignes (alimentation, traitements, habitudes...) et où nous calons ensemble le rythme des visites.",
    ],
  },
  benefits: [
    {
      title: "Routine respectée",
      description:
        "Horaires de repas, lieux de balade habituels, rituels du soir : tout reste comme avant pour limiter le stress de l'absence.",
    },
    {
      title: "Jusqu'à 5 visites par jour",
      description:
        "Le nombre de passages se décide avec vous, selon l'âge et les besoins de votre chien.",
    },
    {
      title: "Suivi photo après chaque passage",
      description:
        "Vous recevez photos et compte-rendu court à chaque visite, vous gardez le lien et la sérénité.",
    },
    {
      title: "Gestion clés sécurisée",
      description:
        "Remise lors de la pré-visite, restitution à votre retour. Trousseau identifié sans adresse pour éviter tout risque. Si je dois me déplacer pour la remise ou la restitution, une participation de 5 € par déplacement s'applique.",
    },
    {
      title: "Pré-visite gratuite obligatoire",
      description:
        "Indispensable pour faire connaissance, valider les consignes et confirmer la prestation sans engagement.",
    },
  ],
  pricing: {
    highlight:
      "Une formule à domicile, à la durée modulable selon l'autonomie de votre chien.",
    cardSlugs: [
      "visite-domicile-30",
      "visite-domicile-45",
      "visite-domicile-60",
    ],
  },
  faq: [
    {
      q: "Combien de visites par jour proposez-vous ?",
      a: "Jusqu'à 5 visites par jour, selon les besoins de votre chien : un chiot, un chien âgé ou sous traitement demande un rythme plus soutenu. Le nombre se décide avec vous.",
    },
    {
      q: "Comment se passe la gestion des clés ?",
      a: "Si vous n'avez pas de boîte à clés, vous me déposez un jeu de clés et venez le récupérer chez moi à votre retour. Si je dois me déplacer pour la remise ou la restitution, une participation de 5 € par déplacement est facturée.",
    },
    {
      q: "Acceptez-vous les chiens réactifs ou anxieux ?",
      a: "J'accepte les chiens anxieux sans souci. Pour les chiens réactifs, cela dépend du gabarit du chien, on en parle ensemble lors de la pré-visite.",
    },
    {
      q: "Que se passe-t-il en cas d'urgence vétérinaire ?",
      a: "Je suis en mesure de conduire votre chien chez son vétérinaire habituel ou chez mon vétérinaire sanitaire.",
    },
    {
      q: "Pouvez-vous garder un chiot ?",
      a: "Oui, c'est tout à fait possible. Un chiot demande simplement des passages plus fréquents (propreté, repas fractionnés, sociabilisation).",
    },
  ],
  testimonialKeywords: ["chien", "garde", "vacances", "absence", "promenade"],
  serviceSchema: {
    name: "Garde de chien à domicile à Vannes",
    serviceType: "Dog sitting",
    description:
      "Garde de chien à domicile à Vannes et alentours pendant vos absences : visites quotidiennes, promenades, suivi photo, pré-visite gratuite.",
  },
  cta: {
    headline: "Partez sereinement",
    subline: "Votre chien reste dans son environnement",
  },
  related: [
    { slug: "promenade-chien-vannes", label: "Promenades de chien à Vannes" },
    { slug: "visites-chat-vannes", label: "Visites à domicile pour chat" },
  ],
};
