import type { ServicePageData } from "./types";

export const hebergementChatVannes: ServicePageData = {
  slug: "pension-chat-vannes",
  metaTitle: "Pension privative pour chat à Vannes | Co'équi'pattes",
  metaDescription:
    "Hébergement de chat à Vannes : pension privative chez moi, un seul chat à la fois, sans cage ni limite de durée. Dès 18€/24h. Rencontre préalable.",
  hero: {
    h1: "Pension privative pour chat à Vannes",
    baseline:
      "Une pension privative où votre chat est le seul accueilli, sans cage ni durée limitée, pour un séjour aussi serein que chez vous.",
    // DRAFT - photo dédiée hébergement chat à fournir par Manon.
    image: "/garde_chat.webp",
    imageAlt: "Manon accueillant un chat en hébergement privatif à Vannes",
  },
  intro: {
    paragraphs: [
      "Un chat qui change d'environnement, c'est souvent plus stressant qu'on ne l'imagine. Un chat n'aime pas le changement, encore moins s'il doit partager l'espace avec d'autres animaux qu'il ne connaît pas. C'est pour lui offrir un séjour aussi proche que possible de son quotidien que je propose un hébergement privatif, chez moi, réservé à un seul chat à la fois.",
      "Concrètement, je n'accueille jamais plusieurs chats de foyers différents en même temps, et il n'y a pas de cage : votre chat vit entièrement avec moi, avec accès à toutes les pièces de mon logement, exactement comme il le ferait chez vous. Je gère moi-même son quotidien, ses repas et son bien-être, avec la même attention que s'il s'agissait de mon propre chat.",
      "Contrairement à l'hébergement pour chien, cette formule n'a pas de limite de durée : elle convient aussi bien à une garde de quelques jours qu'à une absence prolongée, vacances ou déplacement professionnel.",
      "Je vous demande simplement de fournir tout ce dont il a l'habitude : litière, bac, gamelles, nourriture, jouets. Ce sont ses repères et ses odeurs familières qui font toute la différence pour qu'il se sente à l'aise, même en dehors de chez lui. Comme pour mes autres prestations, tout commence par une rencontre : je fais connaissance avec votre chat, on discute de ses habitudes, et on définit ensemble les modalités du séjour.",
    ],
  },
  // DRAFT - bénéfices et FAQ dérivés du texte de Manon, à relire/valider.
  benefits: [
    {
      title: "Pension privative",
      description:
        "Votre chat est le seul accueilli : je n'accueille jamais plusieurs chats de foyers différents en même temps.",
    },
    {
      title: "Sans cage, tout le logement",
      description:
        "Pas de cage : votre chat vit avec moi, avec accès à toutes les pièces, exactement comme il le ferait chez vous.",
    },
    {
      title: "Sans limite de durée",
      description:
        "De quelques jours à une absence prolongée — vacances ou déplacement professionnel : cette formule n'impose aucune durée maximale.",
    },
    {
      title: "Son quotidien préservé",
      description:
        "Je gère moi-même ses repas, ses soins et son bien-être, avec la même attention que s'il s'agissait de mon propre chat.",
    },
    {
      title: "Ses repères l'accompagnent",
      description:
        "Vous apportez litière, bac, gamelles, nourriture et jouets : ses odeurs familières l'aident à se sentir à l'aise.",
    },
    {
      title: "Rencontre préalable",
      description:
        "Comme pour mes autres prestations, tout commence par une rencontre pour faire connaissance et définir ensemble les modalités du séjour.",
    },
  ],
  pricing: {
    highlight:
      "Un hébergement privatif chez moi, sans limite de durée, à partir de 18€ / 24 h.",
    cardSlugs: ["hebergement-chat"],
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
      q: "Combien de chats accueillez-vous à la fois ?",
      a: "Un seul chat à la fois. Je n'accueille jamais plusieurs chats de foyers différents en même temps.",
    },
    {
      q: "Y a-t-il une durée maximale de séjour ?",
      a: "Non. Contrairement à l'hébergement pour chien, cette formule n'a pas de limite de durée : elle convient aussi bien à quelques jours qu'à une absence prolongée.",
    },
    {
      q: "Mon chat sera-t-il en cage ?",
      a: "Non, il n'y a pas de cage : votre chat a accès à toutes les pièces de mon logement, exactement comme il le ferait chez vous.",
    },
    {
      q: "Que dois-je apporter ?",
      a: "Tout ce dont il a l'habitude : litière, bac, gamelles, nourriture et jouets. Ce sont ses repères et ses odeurs familières qui font toute la différence.",
    },
    {
      q: "Comment se passe la première fois ?",
      a: "Tout commence par une rencontre : je fais connaissance avec votre chat, on discute de ses habitudes et on définit ensemble les modalités du séjour.",
    },
  ],
  testimonialKeywords: ["hébergement", "pension", "chat"],
  serviceSchema: {
    name: "Pension privative pour chat à Vannes",
    serviceType: "Cat boarding",
    description:
      "Hébergement de chat à Vannes : pension privative à domicile, un seul chat à la fois, sans cage ni limite de durée.",
  },
  cta: {
    headline: "Un séjour serein pour votre chat",
    subline: "Pension privative, sans cage",
  },
  related: [
    { slug: "garde-a-domicile-vannes", label: "Garde à domicile" },
    { slug: "visites-chat-vannes", label: "Visites à domicile pour chat" },
  ],
};
