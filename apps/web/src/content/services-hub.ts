// Contenu de la section "Mes services" sur la home (/).
// Catalogue par animal (chien / chat / cheval) : un visiteur ne voit que
// l'univers qui le concerne. Les prestations déjà tarifées renvoient vers
// leur page SEO dédiée ; les nouvelles (sans tarif arrêté) invitent à
// "Demander le tarif" via le formulaire de contact.
//
// NB copy : les accroches des prestations encore non tarifées sont
// PROVISOIRES, à faire valider par Manon (hébergement, visites/soins/
// concours/galop cheval).

export type IconId =
  | "paw-heart"
  | "dog"
  | "cat"
  | "leash"
  | "horse"
  | "home"
  | "book"
  | "heart"
  | "trophy";

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
      "Sorties 30 à 60 min, en laisse, adaptées à l'énergie de votre chien.",
    href: "/promeneur-chien-vannes",
    iconId: "leash",
    price: "dès 12€",
  },
  {
    slug: "chien-visites",
    category: "chien",
    title: "Visites à domicile",
    teaser:
      "Je passe chez vous de 30 min à 1 h : repas, jeux, câlins et présence.",
    href: "/visites-chien-vannes",
    iconId: "paw-heart",
    price: "dès 10,20€",
  },
  {
    slug: "chien-garde",
    category: "chien",
    title: "Garde à domicile",
    teaser: "Je vis chez vous, jour et nuit, toute la durée souhaitée.",
    href: "/garde-a-domicile-vannes",
    iconId: "dog",
  },
  {
    slug: "chien-hebergement",
    category: "chien",
    title: "Hébergement courte durée",
    teaser:
      "Courte durée (quelques heures à 2 jours) : votre chien vit chez moi comme s'il était le mien, sans être mêlé à d'autres animaux. 2 chiens possibles s'ils ont le même maître.",
    href: "#contact",
    iconId: "home",
    price: "dès 30€/24h",
  },

  // ——— Chat ———
  {
    slug: "chat-visites",
    category: "chat",
    title: "Visites à domicile",
    teaser:
      "Je passe chez vous de 30 min à 1 h : repas, litière, jeux et présence.",
    href: "/visites-chat-vannes",
    iconId: "cat",
    price: "dès 10,20€",
  },
  {
    slug: "chat-garde",
    category: "chat",
    title: "Garde à domicile",
    teaser: "Je vis chez vous, jour et nuit, toute la durée souhaitée.",
    href: "/garde-a-domicile-vannes",
    iconId: "paw-heart",
  },
  {
    slug: "chat-hebergement",
    category: "chat",
    title: "Hébergement sans limite de durée",
    teaser:
      "Sans limite de durée : j'accueille votre chat chez moi, un seul à la fois, sans cage. Il vit avec moi comme s'il était le mien.",
    href: "#contact",
    iconId: "home",
    price: "dès 18€/24h",
  },

  // ——— Cheval ———
  {
    slug: "cheval-cours",
    category: "cheval",
    title: "Cours d'équitation",
    teaser:
      "Cours particuliers ou collectifs, tous niveaux, pédagogie respectueuse.",
    href: "/equitation-vannes",
    iconId: "book",
    price: "dès 25€",
  },
  {
    slug: "cheval-travail",
    category: "cheval",
    title: "Travail du cheval",
    teaser:
      "Je travaille votre cheval à pied ou monté, en respectant son rythme.",
    href: "/equitation-vannes",
    iconId: "horse",
    price: "dès 35€",
  },
  {
    slug: "cheval-visites",
    category: "cheval",
    title: "Visites",
    teaser:
      "Passage pour nourrir et vérifier votre cheval pendant votre absence.",
    href: "#contact",
    iconId: "horse",
    price: "20€/visite",
  },
  {
    slug: "cheval-soins",
    category: "cheval",
    title: "Soins",
    teaser:
      "Pansage, soins et attention au quotidien, selon les besoins du cheval.",
    href: "#contact",
    iconId: "heart",
  },
  {
    slug: "cheval-concours",
    category: "cheval",
    title: "Accompagnement concours",
    teaser:
      "Présence et accompagnement le jour J, selon le lieu et la durée.",
    href: "#contact",
    iconId: "trophy",
  },
  {
    slug: "cheval-galop",
    category: "cheval",
    title: "Passage de galop",
    teaser:
      "Préparation aux galops fédéraux, selon votre niveau et le rythme.",
    href: "#contact",
    iconId: "book",
  },
];
