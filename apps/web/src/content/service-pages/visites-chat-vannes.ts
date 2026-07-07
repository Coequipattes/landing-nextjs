import type { ServicePageData } from "./types";

// DRAFT - à valider Manon : l'ensemble du contenu éditorial ci-dessous
// (intro, bénéfices, FAQ, CTA) doit être relu avant publication.
export const visitesChatVannes: ServicePageData = {
  slug: "visites-chat-vannes",
  metaTitle: "Garde de chat à Vannes · Visites à domicile | Co'équi'pattes",
  metaDescription:
    "Garde de chat à Vannes : votre chat reste chez lui. Visites à domicile, alimentation, jeux, suivi photo. NAC acceptés. Pré-visite gratuite.",
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
      "Mes visites s'organisent autour des vrais besoins du chat : alimentation à heures régulières, entretien complet de la litière, eau fraîche, contrôle visuel de son état, et surtout du temps de présence : jeu, câlins, brossage selon ses envies. Je laisse aussi quelques signes de vie discrets (volets ouverts, courrier rentré) pour maintenir l'illusion d'une maison habitée.",
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
        "Je m'adapte au rythme du chat : si Minou se cache, je n'insiste pas, je laisse les signes de mon passage et je reviens.",
    },
    {
      title: "Multi-chats acceptés",
      description:
        "Plusieurs chats dans le foyer ? Pas de surcoût caché, la visite couvre toute la maisonnée.",
    },
    {
      title: "Litière et alimentation",
      description:
        "Entretien complet de la litière à chaque passage, rations adaptées et eau changée.",
    },
    {
      title: "NAC bienvenus",
      description:
        "Lapins, cochons d'Inde, rongeurs, oiseaux et certains reptiles : je gère aussi vos autres compagnons sur la même visite.",
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
      q: "Combien de visites par jour pour un chat ?",
      a: "Le nombre de visites se décide avec vous, selon les besoins de votre chat : souvent une à deux par jour pour un chat autonome, davantage pour un chaton, un chat âgé ou sous traitement. Je n'impose pas de limite.",
    },
    {
      q: "Vous gérez plusieurs chats ?",
      a: "Oui, sans surcoût caché : la visite couvre l'ensemble du foyer. Je m'adapte simplement à la durée nécessaire pour nourrir, brosser et passer du temps avec chaque chat.",
    },
    {
      q: "Vous donnez les médicaments ?",
      a: "Oui, sur prescription vétérinaire et après démonstration lors de la pré-visite. Comprimés mélangés à la nourriture, gouttes, injections sous-cutanées simples : je regarde avec vous ce qui est dans mes compétences ou ce qui nécessite un autre intervenant.",
    },
    {
      q: "Vous gardez les chats craintifs ?",
      a: "Oui, je m'adapte totalement au rythme du chat. S'il préfère rester caché, je remplis sa gamelle, change sa litière, je lui parle doucement et je le laisse tranquille. La présence régulière finit souvent par le rassurer au fil des visites.",
    },
    {
      q: "Acceptez-vous les NAC (lapins, rongeurs, oiseaux) ?",
      a: "Oui, lapins, cochons d'Inde, hamsters, rats, oiseaux et certains reptiles peuvent être pris en charge sur la même visite que le chat.",
    },
  ],
  testimonialKeywords: ["chat", "chats", "visite", "litière", "NAC"],
  serviceSchema: {
    name: "Garde de chat à domicile à Vannes",
    serviceType: "Cat sitting",
    description:
      "Visites à domicile pour chat à Vannes et alentours : alimentation, litière, jeu, suivi photo. Multi-chats et NAC acceptés.",
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
