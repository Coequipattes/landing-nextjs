import type { ServicePageData } from "./types";

export const hebergementChienVannes: ServicePageData = {
  slug: "hebergement-chien-vannes",
  metaTitle:
    "Hébergement de chien à Vannes — pension privative | Co'équi'pattes",
  metaDescription:
    "Hébergement de chien à Vannes : pension privative chez moi, un seul chien à la fois, jamais en cage. Séjours courts, dès 30€/24h. Rencontre préalable.",
  hero: {
    h1: "Hébergement de chien à Vannes",
    baseline:
      "Une pension privative où votre chien est le seul accueilli — jamais mélangé à des animaux qu'il ne connaît pas, pour des séjours courts en toute sérénité.",
    // DRAFT - photo dédiée hébergement à fournir par Manon.
    image: "/manon_chiens.webp",
    imageAlt: "Manon accueillant un chien en hébergement privatif à Vannes",
  },
  intro: {
    paragraphs: [
      "Confier son chien, même pour quelques heures ou une nuit, n'est jamais anodin. Certains chiens ont simplement besoin d'un cadre plus calme et plus proche de leur quotidien. C'est pour répondre à ce besoin que je propose un hébergement privatif, chez moi, réservé à un seul chien — ou à une fratrie de deux chiens du même foyer — à la fois.",
      "Concrètement, pendant toute la durée du séjour, aucun autre animal n'est accueilli chez moi en parallèle. Votre chien évolue dans mon logement comme il évoluerait dans le vôtre, avec accès à toutes les pièces, et pas seulement à un coin ou une cage qui lui serait réservé. Je gère moi-même ses sorties et ses soins, avec la même attention que s'il s'agissait de mon propre chien.",
      "Cette formule est pensée pour les gardes de courte durée : de quelques heures à deux jours maximum. Un rendez-vous professionnel qui s'éternise, une urgence, une journée où vous ne pouvez vraiment pas l'emmener avec vous — votre chien passe ce moment dans un vrai foyer, avec quelqu'un de disponible pour lui seul.",
      "Je vous demande simplement de fournir tout ce dont il a l'habitude : sa nourriture, ses jouets, son panier. Ce sont ses repères et ses odeurs familières qui font toute la différence pour qu'il se sente à l'aise, même en dehors de chez lui. Comme pour mes autres prestations, tout commence par une rencontre : je fais connaissance avec votre chien, on discute de ses habitudes, et on définit ensemble les modalités du séjour.",
    ],
  },
  // DRAFT - bénéfices et FAQ dérivés du texte de Manon, à relire/valider.
  benefits: [
    {
      title: "Pension privative",
      description:
        "Votre chien est le seul accueilli — ou une fratrie de deux chiens du même foyer. Jamais mêlé à des animaux qu'il ne connaît pas.",
    },
    {
      title: "Chez moi, jamais en cage",
      description:
        "Votre chien a accès à tout mon logement, comme chez vous, et pas seulement à un coin ou une cage qui lui serait réservé.",
    },
    {
      title: "Pensé pour les séjours courts",
      description:
        "De quelques heures à deux jours maximum : un rendez-vous qui s'éternise, une urgence, une journée où vous ne pouvez pas l'emmener.",
    },
    {
      title: "Une présence pour lui seul",
      description:
        "Je gère moi-même ses sorties et ses soins, avec la même attention que s'il s'agissait de mon propre chien.",
    },
    {
      title: "Ses repères l'accompagnent",
      description:
        "Vous fournissez sa nourriture, ses jouets et son panier : ses odeurs familières l'aident à se sentir à l'aise, même hors de chez lui.",
    },
    {
      title: "Rencontre préalable",
      description:
        "Comme pour mes autres prestations, tout commence par une rencontre pour faire connaissance et définir ensemble les modalités du séjour.",
    },
  ],
  pricing: {
    highlight:
      "Un hébergement privatif chez moi, à partir de 30€ / 24 h.",
    cardSlugs: ["hebergement-chien"],
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
      q: "Combien de chiens accueillez-vous à la fois ?",
      a: "Un seul chien à la fois — ou une fratrie de deux chiens du même foyer. Pendant toute la durée du séjour, aucun autre animal n'est accueilli chez moi en parallèle.",
    },
    {
      q: "Quelle est la durée maximale d'un séjour ?",
      a: "L'hébergement est pensé pour les gardes de courte durée : de quelques heures à deux jours maximum.",
    },
    {
      q: "Mon chien sera-t-il en cage ?",
      a: "Non. Votre chien évolue dans tout mon logement, avec accès à toutes les pièces, comme il le ferait chez vous.",
    },
    {
      q: "Que dois-je apporter ?",
      a: "Tout ce dont il a l'habitude : sa nourriture, ses jouets et son panier. Ce sont ses repères et ses odeurs familières qui font toute la différence.",
    },
    {
      q: "Comment se passe la première fois ?",
      a: "Tout commence par une rencontre : je fais connaissance avec votre chien, on discute de ses habitudes et on définit ensemble les modalités du séjour.",
    },
  ],
  testimonialKeywords: ["hébergement", "pension", "garde", "chien"],
  serviceSchema: {
    name: "Hébergement de chien à Vannes",
    serviceType: "Dog boarding",
    description:
      "Hébergement de chien à Vannes : pension privative à domicile, un seul chien à la fois, jamais en cage, pour des séjours de courte durée.",
  },
  cta: {
    headline: "Un vrai foyer pour votre chien",
    subline: "Hébergement privatif, courte durée",
  },
  related: [
    { slug: "garde-a-domicile-vannes", label: "Garde à domicile" },
    { slug: "visites-chien-vannes", label: "Visites à domicile pour chien" },
  ],
};
