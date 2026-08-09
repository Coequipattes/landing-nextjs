// Contenu de la section "Mes services" sur la home (/).
// Catalogue par animal (chien / chat / cheval) : un visiteur ne voit que
// l'univers qui le concerne. Les prestations déjà tarifées renvoient vers
// leur page SEO dédiée ; les nouvelles (sans tarif arrêté) invitent à
// "Demander le tarif" via le formulaire de contact.
//
// NB copy : les accroches des prestations encore non tarifées sont
// PROVISOIRES, à faire valider par Manon (hébergement, visites/soins/
// concours/galop cheval).

// Icônes sémantiques par type de prestation (mappées vers lucide-react dans
// services-hub.tsx). "dog"/"cat"/"horse" ne servent qu'aux en-têtes d'univers.
export type IconId =
  | "dog"
  | "cat"
  | "horse"
  | "walk"
  | "visit"
  | "livein"
  | "boarding"
  | "lesson"
  | "training"
  | "care"
  | "competition"
  | "galop";

export type ServiceCategory = "chien" | "chat" | "cheval";

export type ServiceHubCard = {
  slug: string;
  category: ServiceCategory;
  title: string;
  teaser: string; // 1 ligne d'accroche
  href: string; // page SEO dédiée, ou "#contact" si sans tarif
  iconId: IconId;
  price?: string; // "dès X€" — absent => CTA "Demander le tarif"
};

export const servicesHub: ServiceHubCard[] = [
  // ——— Chien ———
  {
    slug: "chien-balades",
    category: "chien",
    title: "Balades",
    teaser:
      "Sorties 15 à 60 min, en laisse, adaptées à l'énergie de votre chien.",
    href: "/promenade-chien-vannes",
    iconId: "walk",
    price: "dès 10€",
  },
  {
    slug: "chien-visites",
    category: "chien",
    title: "Visites à domicile",
    teaser:
      "Je passe chez vous de 15 min à 1 h : repas, jeux, câlins et présence.",
    href: "/visites-chien-vannes",
    iconId: "visit",
    price: "dès 10€",
  },
  {
    slug: "chien-garde",
    category: "chien",
    title: "Garde à domicile",
    teaser: "Je vis chez vous, jour et nuit, toute la durée souhaitée.",
    href: "/garde-a-domicile-vannes",
    iconId: "livein",
    price: "30€/jour",
  },
  {
    slug: "chien-hebergement",
    category: "chien",
    title: "Pension privative",
    teaser:
      "Courte durée (quelques heures à 2 jours) : votre chien vit chez moi comme s'il était le mien, sans être mêlé à d'autres animaux. 2 chiens possibles s'ils ont le même maître.",
    href: "/pension-chien-vannes",
    iconId: "boarding",
    price: "dès 30€/jour",
  },

  // ——— Chat ———
  {
    slug: "chat-visites",
    category: "chat",
    title: "Visites à domicile",
    teaser:
      "Je passe chez vous de 15 min à 1 h : repas, litière, jeux et présence.",
    href: "/visites-chat-vannes",
    iconId: "visit",
    price: "dès 10€",
  },
  {
    slug: "chat-garde",
    category: "chat",
    title: "Garde à domicile",
    teaser: "Je vis chez vous, jour et nuit, toute la durée souhaitée.",
    href: "/garde-a-domicile-vannes",
    iconId: "livein",
    price: "30€/jour",
  },
  {
    slug: "chat-hebergement",
    category: "chat",
    title: "Pension privative",
    teaser:
      "Sans limite de durée : j'accueille votre chat chez moi, un seul à la fois, sans cage. Il vit avec moi comme s'il était le mien.",
    href: "/pension-chat-vannes",
    iconId: "boarding",
    price: "dès 20€/jour",
  },

  // ——— Cheval ———
  {
    slug: "cheval-cours",
    category: "cheval",
    title: "Cours d'équitation",
    teaser:
      "Cours particuliers ou collectifs, tous niveaux, pédagogie respectueuse.",
    href: "/equitation-vannes",
    iconId: "lesson",
    price: "dès 25€",
  },
  {
    slug: "cheval-travail",
    category: "cheval",
    title: "Travail du cheval",
    teaser:
      "Je travaille votre cheval à pied ou monté, en respectant son rythme.",
    href: "/equitation-vannes",
    iconId: "training",
    price: "dès 35€",
  },
  {
    slug: "cheval-visites",
    category: "cheval",
    title: "Visites",
    teaser:
      "Passage pour nourrir et vérifier votre cheval pendant votre absence.",
    href: "#contact",
    iconId: "visit",
    price: "20€/visite",
  },
  {
    slug: "cheval-soins",
    category: "cheval",
    title: "Soins",
    teaser:
      "Pansage, soins et attention au quotidien, selon les besoins du cheval.",
    href: "#contact",
    iconId: "care",
  },
  {
    slug: "cheval-concours",
    category: "cheval",
    title: "Accompagnement concours",
    teaser: "Présence et accompagnement le jour J, selon le lieu et la durée.",
    href: "#contact",
    iconId: "competition",
  },
  {
    slug: "cheval-galop",
    category: "cheval",
    title: "Passage de galop",
    teaser: "Préparation aux galops fédéraux, selon votre niveau et le rythme.",
    href: "#contact",
    iconId: "galop",
  },
];
