// Contenu de la section "Nos services" sur la home (/).
// Volontairement distinct du contenu des pages dédiées :
// la home est un HUB qui teaser et drive vers les pages détail.
// Les accroches sont courtes, le tarif est un "à partir de" pour répondre
// au "ça coûte combien" sans charger la page d'accueil.

export type ServiceHubCard = {
  slug: string;
  href: string;
  title: string; // mot-clé SEO exact (ex: "Pet sitter à Vannes")
  kicker: string; // étiquette courte au-dessus du titre
  teaser: string; // 1-2 lignes accroche unique au hub
  priceFrom: string; // "à partir de X€" pour transparence
  iconId: IconId;
  tone: "ombrelle" | "chien" | "chat" | "balade" | "cheval";
  emphasis?: boolean; // mise en avant visuelle (carte large)
};

export type IconId = "paw-heart" | "dog" | "cat" | "leash" | "horse";

export const servicesHub: ServiceHubCard[] = [
  {
    slug: "pet-sitting-vannes",
    href: "/pet-sitting-vannes",
    title: "Pet sitter à Vannes",
    kicker: "L'offre complète",
    teaser:
      "Visites à domicile, promenades et soins pour chiens, chats et NAC. Votre compagnon reste chez lui.",
    priceFrom: "dès 10,20€",
    iconId: "paw-heart",
    tone: "ombrelle",
    emphasis: true,
  },
  {
    slug: "garde-chien-vannes",
    href: "/garde-chien-vannes",
    title: "Garde de chien à Vannes",
    kicker: "Vacances & déplacements",
    teaser:
      "L'alternative au chenil : 1 à 3 visites par jour chez vous, suivi photo après chaque passage.",
    priceFrom: "dès 10,20€",
    iconId: "dog",
    tone: "chien",
  },
  {
    slug: "garde-chat-vannes",
    href: "/garde-chat-vannes",
    title: "Garde de chat à Vannes",
    kicker: "Sans pension, sans stress",
    teaser:
      "Votre chat reste sur son territoire. Repas, litière, jeux et un vrai temps de présence.",
    priceFrom: "dès 10,20€",
    iconId: "cat",
    tone: "chat",
  },
  {
    slug: "promeneur-chien-vannes",
    href: "/promeneur-chien-vannes",
    title: "Promeneur de chien à Vannes",
    kicker: "Régularité au quotidien",
    teaser:
      "Balades 30 / 45 / 60 minutes, toujours en laisse, adaptées à l'âge et l'énergie de votre chien.",
    priceFrom: "dès 12€",
    iconId: "leash",
    tone: "balade",
  },
  {
    slug: "equitation-vannes",
    href: "/equitation-vannes",
    title: "Cours d'équitation à Vannes",
    kicker: "Monitrice diplômée",
    teaser:
      "Cours particuliers, collectifs ou travail de cheval propriétaire — une pédagogie qui respecte le couple.",
    priceFrom: "dès 25€",
    iconId: "horse",
    tone: "cheval",
  },
];
