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
    slug: "promenade",
    title: "Promenade",
    price: "12-22€",
    description: "Balades adaptées au rythme de votre chien",
    features: [
      "30 min : 12€ / 16€*",
      "45 min : 15€ / 19€*",
      "1 heure : 18€ / 22€*",
    ],
  },
  {
    slug: "visite-promenade",
    title: "Visite + promenade",
    price: "15-18€",
    description: "Promenade de 30 min + 15 min de soins",
    features: [
      "30 min de promenade",
      "15 min de soins avant/après",
      "Nourrissage, jeux et câlins",
      "Prix : 15€ / 18€*",
    ],
    featured: true,
  },
  {
    slug: "visite-domicile",
    title: "Visite à domicile",
    price: "10-20€",
    description: "Pour chats, NAC et tous animaux",
    features: [
      "30 min : 10,20€ / 13,60€*",
      "45 min : 13€ / 16€*",
      "1 heure : 16€ / 20€*",
    ],
  },
];

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
  return [...equitationCards, ...petsittingCards].find((c) => c.slug === slug);
}
