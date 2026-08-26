export type PriceCard = {
  slug: string;
  title: string;
  price: string;
  unit?: string;
  description: string;
  features: string[];
  featured?: boolean;
};

export type PriceExtra = {
  title: string;
  price: string;
  unit?: string;
  description: string;
};

export const equitationCards: PriceCard[] = [
  {
    slug: "seance-essai",
    title: "Séance d'essai",
    price: "25€",
    description: "Découvrez mon approche lors d'une première séance",
    features: [
      "1 heure de cours",
      "Tous niveaux",
      "Évaluation personnalisée",
      "Sans engagement",
    ],
  },
  {
    slug: "abonnement-hebdo",
    title: "Abonnement hebdo",
    price: "30€",
    unit: "/cours",
    description: "Cours particulier 1 fois par semaine",
    features: [
      "1 cours par semaine",
      "Suivi personnalisé",
      "Progression régulière",
      "Créneau fixe ou flexible",
      "Économisez 5€/cours",
    ],
    featured: true,
  },
  {
    slug: "cours-particulier",
    title: "Cours particulier",
    price: "35€",
    unit: "/cours",
    description: "Cours individuel à l'unité",
    features: [
      "1 heure de cours",
      "Accompagnement personnalisé",
      "Tous niveaux",
      "Réservation flexible",
    ],
  },
];

export const petsittingCards: PriceCard[] = [
  {
    slug: "promenade-15",
    title: "Promenade 15 min",
    price: "10€",
    description: "Petite sortie express",
    features: [],
  },
  {
    slug: "promenade-20",
    title: "Promenade 20 min",
    price: "12€",
    description: "Sortie courte, autour de chez vous",
    features: [],
  },
  {
    slug: "promenade-30",
    title: "Promenade 30 min",
    price: "15€",
    description: "Sortie standard, autour de chez vous",
    features: [],
  },
  {
    slug: "promenade-45",
    title: "Promenade 45 min",
    price: "20€",
    description: "Sortie longue, hors quartier possible",
    features: [],
    featured: true,
  },
  {
    slug: "promenade-60",
    title: "Promenade 1 h",
    price: "25€",
    description: "Grande balade, baignade possible",
    features: [],
  },
  {
    slug: "visite-domicile-15",
    title: "Visite 15 min",
    price: "10€",
    description: "Pour chats et chiens, à leur domicile",
    features: [],
  },
  {
    slug: "visite-domicile-30",
    title: "Visite 30 min",
    price: "13,60€",
    description: "Pour chats et chiens, à leur domicile",
    features: [],
  },
  {
    slug: "visite-domicile-45",
    title: "Visite 45 min",
    price: "18€",
    description: "Pour chats et chiens, à leur domicile",
    features: [],
    featured: true,
  },
  {
    slug: "visite-domicile-60",
    title: "Visite 1 h",
    price: "23€",
    description: "Pour chats et chiens, à leur domicile",
    features: [],
  },
];

export const hebergementChienCard: PriceCard = {
  slug: "hebergement-chien",
  title: "Pension privative — chien",
  price: "30€",
  unit: "/jour",
  description: "Pension privative chez moi, un seul chien à la fois",
  features: [
    "Séjours courts : de quelques heures à 2 jours",
    "Un seul chien (ou 2 du même foyer) à la fois",
    "Accès à tout le logement, jamais en cage",
    "Vous fournissez nourriture, panier et jouets",
  ],
};

export const hebergementChatCard: PriceCard = {
  slug: "hebergement-chat",
  title: "Pension privative — chat",
  price: "20€",
  unit: "/jour",
  description: "Pension privative chez moi, un seul chat à la fois",
  features: [
    "Sans limite de durée : de quelques jours à une longue absence",
    "Un seul chat à la fois, jamais mêlé à d'autres foyers",
    "Accès à tout le logement, jamais en cage",
    "Vous fournissez litière, bac, gamelles, nourriture et jouets",
  ],
};

export const gardeADomicileCard: PriceCard = {
  slug: "garde-domicile",
  title: "Garde à domicile",
  price: "30€",
  unit: "/jour",
  description: "Je m'installe chez vous, à demeure",
  features: [
    "Présence à demeure, je dors sur place",
    "À partir de 3 nuits (2 animaux ou moins), sans minimum dès 3 animaux",
    "Repas, sorties, soins simples",
    "Maison occupée et surveillée",
  ],
};

export const equitationExtras: PriceExtra[] = [
  {
    title: "Cours collectif",
    price: "25€",
    unit: "/cours",
    description: "À partir de 3 cavaliers — Ambiance conviviale",
  },
  {
    title: "Travail de cheval",
    price: "35€",
    unit: "/séance",
    description: "Je travaille votre cheval pendant votre absence",
  },
];

export function getPriceCardBySlug(slug: string): PriceCard | undefined {
  return [
    ...equitationCards,
    ...petsittingCards,
    hebergementChienCard,
    hebergementChatCard,
    gardeADomicileCard,
  ].find((c) => c.slug === slug);
}
