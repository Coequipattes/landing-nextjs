import type { ServicePageData } from "./types";

// DRAFT - à valider Manon : l'ensemble du contenu éditorial ci-dessous
// (intro, bénéfices, FAQ, CTA) doit être relu avant publication.
export const visitesChatVannes: ServicePageData = {
  slug: "visites-chat-vannes",
  metaTitle: "Garde de chat à Vannes · Visites à domicile | Co'équi'pattes",
  metaDescription:
    "Garde de chat à Vannes : votre chat reste chez lui. Visites à domicile, alimentation, jeux, suivi photo. Pré-visite gratuite.",
  hero: {
    h1: "Visites à domicile pour chat à Vannes",
    baseline:
      "Des visites de 30 min à 1 h chez vous pendant vos absences : votre chat reste sur son territoire, avec ses repères et ses habitudes.",
    image: "/garde_chat.webp",
    imageAlt:
      "Manon prenant soin d'un chat lors d'une visite à domicile à Vannes",
  },
  intro: {
    paragraphs: [
      "Partir en vacances ou en déplacement professionnel ne devrait pas rimer avec angoisse. C'est la raison pour laquelle je me déplace chez vous pour des visites de 30 min à 1 h, une ou plusieurs fois par jour : votre animal reste dans son environnement, avec ses odeurs, son panier, son jardin et ses horaires habituels.",
      "Mes visites s'organisent autour des vrais besoins du chat : alimentation à heures régulières, entretien complet de la litière, eau fraîche, contrôle visuel de son état, et, s'il en a envie, un temps de présence : jeu, câlins ou brossage. Je laisse aussi quelques signes de vie discrets (volets ouverts, courrier rentré) pour maintenir l'illusion d'une maison habitée.",
      "Avant chaque mission, une pré-visite gratuite est obligatoire. C'est le moment où votre chat et moi-même faisons connaissance dans un cadre rassurant, où je note les consignes (alimentation, traitements, habitudes...) et où nous calons ensemble le rythme des visites.",
    ],
  },
  benefits: [
    {
      title: "Sur son territoire",
      description:
        "Votre chat reste chez lui, avec ses repères et ses habitudes, aucun changement d'environnement.",
    },
    {
      title: "Respect du territoire",
      description:
        "Je m'adapte à l'humeur du chat : s'il se cache ou n'a pas envie d'interagir, je ne le force jamais. Je m'occupe de l'essentiel (gamelle, litière, eau), je lui parle doucement et je le laisse venir à son rythme.",
    },
    {
      title: "Multi-chats acceptés",
      description:
        "Plusieurs chats dans le foyer ? La visite couvre toute la maisonnée jusqu'à trois chats ; à partir du quatrième, un supplément s'applique.",
    },
    {
      title: "Litière et alimentation",
      description:
        "Entretien complet de la litière à chaque passage, rations adaptées et eau changée.",
    },
    {
      title: "Suivi photo quotidien",
      description:
        "Quelques photos et un message court à chaque visite, vous gardez le lien à distance.",
    },
    {
      title: "Gestion clés sécurisée",
      description:
        "Remise lors de la pré-visite, restitution à votre retour. Si je dois me déplacer pour la remise ou la restitution, une participation de 5 € par déplacement s'applique.",
    },
  ],
  pricing: {
    highlight:
      "Une formule unique adaptée au chat : visite à domicile, durée modulable selon vos besoins.",
    cardSlugs: [
      "visite-domicile-30",
      "visite-domicile-45",
      "visite-domicile-60",
    ],
  },
  faq: [
    {
      q: "Combien de visites par jour pour un chat ?",
      a: "Le nombre de visites se décide avec vous, selon les besoins de votre chat : souvent une à deux par jour pour un chat autonome, davantage pour un chaton, un chat âgé ou sous traitement. Je n'impose pas de limite.",
    },
    {
      q: "Vous gérez plusieurs chats ?",
      a: "Oui : la visite couvre l'ensemble du foyer jusqu'à trois chats ; à partir du quatrième, un supplément s'applique. Je m'adapte à la durée nécessaire pour nourrir, brosser et passer du temps avec chaque chat.",
    },
    {
      q: "Vous donnez les médicaments ?",
      a: "Oui, sur prescription vétérinaire et après démonstration lors de la pré-visite. Comprimés mélangés à la nourriture, gouttes, injections sous-cutanées simples : je regarde avec vous ce qui est dans mes compétences ou ce qui nécessite un autre intervenant.",
    },
    {
      q: "Vous gardez les chats craintifs ?",
      a: "Oui, je m'adapte totalement au rythme du chat. S'il préfère rester caché, je remplis sa gamelle, change sa litière, je lui parle doucement et je le laisse tranquille. La présence régulière finit souvent par le rassurer au fil des visites.",
    },
  ],
  testimonialKeywords: ["chat", "chats", "visite", "litière"],
  serviceSchema: {
    name: "Garde de chat à domicile à Vannes",
    serviceType: "Cat sitting",
    description:
      "Visites à domicile pour chat à Vannes et alentours : alimentation, litière, jeu, suivi photo. Multi-chats acceptés.",
  },
  cta: {
    headline: "Votre chat préfère son canapé",
    subline: "Il reste chez lui, dans ses repères",
  },
  related: [
    { slug: "visites-chien-vannes", label: "Visites à domicile pour chien" },
    { slug: "promenade-chien-vannes", label: "Promenades de chien à Vannes" },
  ],
};
