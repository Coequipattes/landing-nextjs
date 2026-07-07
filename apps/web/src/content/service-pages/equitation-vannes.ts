import type { ServicePageData } from "./types";

export const equitationVannes: ServicePageData = {
  slug: "equitation-vannes",
  metaTitle:
    "Cours d'équitation à Vannes · Monitrice diplômée | Co'équi'pattes",
  metaDescription:
    "Cours d'équitation personnalisés à Vannes : particulier, collectif, travail de cheval. Monitrice diplômée, pédagogie respectueuse.",
  hero: {
    h1: "Cours d'équitation à Vannes",
    baseline:
      "Cours particuliers ou collectifs, travail du cheval propriétaire : une pédagogie individualisée et respectueuse du couple cheval-cavalier. Uniquement pour les cavaliers propriétaires ou demi-pensionnaires : je ne fournis pas de cavalerie.",
    // DRAFT - photo dédiée équitation à fournir par Manon (/uploads/equitation-vannes.jpg).
    image: "/uploads/manon.jpg",
    imageAlt: "Manon, monitrice d'équitation diplômée, avec un cheval",
  },
  intro: {
    paragraphs: [
      "L'équitation est ma première passion. Au-delà du sport, c'est un dialogue avec un être vivant, et c'est ce dialogue que j'enseigne. Monitrice diplômée, je propose des cours adaptés à chaque cavalier, du débutant complet qui n'a jamais touché un cheval au cavalier confirmé qui veut perfectionner une discipline. Mon approche met le bien-être du cheval au cœur de l'apprentissage : un cavalier respectueux fait un meilleur sportif.",
      "Pédagogie individualisée : chaque cavalier a son rythme, ses appréhensions, ses objectifs. Que vous souhaitiez reprendre après une longue pause, vous remettre en confiance après une chute, préparer un examen ou simplement passer un moment de qualité avec un cheval, on construit ensemble un plan progressif. Les séances peuvent se faire en particulier (attention totale, progression rapide) ou en collectif à partir de 3 cavaliers.",
      "Au-delà des cours, je propose aussi le travail de cheval propriétaire : si vous avez votre propre monture et que vous manquez de temps pour la travailler, je peux la sortir, la détendre, la remettre dans le bon mouvement. C'est précieux pour entretenir le niveau du cheval sans qu'il prenne de mauvaises habitudes pendant vos absences.",
    ],
  },
  benefits: [
    {
      title: "Monitrice diplômée",
      description:
        "Formation reconnue et expérience pédagogique solide : encadrement professionnel.",
    },
    {
      title: "Cours particulier ou collectif",
      description:
        "Particulier pour une progression rapide et personnalisée, collectif à partir de 3 cavaliers pour l'émulation et un tarif plus accessible.",
    },
    {
      title: "Travail de cheval propriétaire",
      description:
        "Vous avez votre cheval mais pas toujours le temps ? Je le sors et l'entretiens dans le bon mouvement.",
    },
    {
      title: "Pédagogie individualisée",
      description:
        "Le rythme s'adapte au cavalier, pas l'inverse : débutant en confiance, confirmé en perfectionnement.",
    },
    {
      title: "Tous niveaux : débutant à confirmé",
      description:
        "Première montée, reprise après une pause, préparation d'examen ou perfectionnement technique : je m'adapte.",
    },
    {
      title: "Respect du couple cheval-cavalier",
      description:
        "Le bien-être du cheval est au cœur de l'enseignement : un cavalier respectueux progresse mieux et plus durablement.",
    },
  ],
  pricing: {
    highlight:
      "Trois formules pour découvrir, progresser régulièrement ou pratiquer ponctuellement.",
    cardSlugs: ["seance-essai", "abonnement-hebdo", "cours-particulier"],
  },
  area: {
    city: "Vannes",
    neighborhoods: [
      // DRAFT - localisation exacte à confirmer Manon (écurie partenaire ?
      // déplacement chez le cavalier propriétaire ? structure dédiée ?)
      "Vannes",
      "Alentours de Vannes",
    ],
    radiusKm: 15,
  },
  faq: [
    {
      q: "À partir de quel âge accueillez-vous les cavaliers ?",
      a: "[DRAFT - âge minimum à confirmer Manon, typiquement à partir de 6-8 ans pour des cours adaptés enfants, ou réservé adultes selon la structure d'enseignement].",
    },
    {
      q: "Faut-il avoir son propre cheval ?",
      a: "Oui. Mes cours s'adressent uniquement aux cavaliers propriétaires ou demi-pensionnaires : je ne fournis pas de cavalerie. Lors de la prise de contact, je précise le fonctionnement exact pour votre situation.",
    },
    {
      q: "Vous prenez les débutants complets ?",
      a: "Oui, et c'est même un plaisir : pas de mauvaises habitudes à corriger, on construit les bonnes bases dès le départ. Première séance dédiée à la prise de contact, au pansage et à la mise en selle dans un cadre rassurant.",
    },
    {
      q: "Vous proposez des stages pendant les vacances ?",
      a: "[DRAFT - à confirmer Manon : oui/non, formats, périodes].",
    },
    {
      q: "Quels sont vos diplômes ?",
      a: "Je suis monitrice diplômée, et tous mes encadrements sont effectués dans le cadre légal de l'enseignement équestre.",
    },
  ],
  testimonialKeywords: [
    "équitation",
    "cheval",
    "monitrice",
    "cours",
    "cavalier",
  ],
  serviceSchema: {
    name: "Cours d'équitation à Vannes",
    serviceType: "Horseback riding lesson",
    description:
      "Cours d'équitation à Vannes : séances particulières, collectives et travail de cheval propriétaire, encadrés par une monitrice diplômée.",
  },
  cta: {
    headline: "Reprenez les rênes",
    subline: "Cours personnalisé, tous niveaux",
  },
  related: [
    { slug: "visites-chien-vannes", label: "Visites à domicile pour chien" },
    { slug: "visites-chat-vannes", label: "Visites à domicile pour chat" },
  ],
};
