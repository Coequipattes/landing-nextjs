import type { ServicePageData } from "./types";

// DRAFT - à valider Manon : l'ensemble du contenu éditorial ci-dessous
// (intro, bénéfices, FAQ, CTA) doit être relu avant publication.
export const gardeChatVannes: ServicePageData = {
  slug: "garde-chat-vannes",
  metaTitle:
    "Garde de chat à Vannes — Visites à domicile, pas en pension | Co'équi'pattes",
  metaDescription:
    "Garde de chat à Vannes : votre chat reste chez lui. Visites à domicile, alimentation, jeux, suivi photo. NAC acceptés. Pré-visite gratuite.",
  hero: {
    h1: "Garde de chat à Vannes",
    baseline:
      "Visites à domicile pour votre chat pendant vos absences — pas de chenil, pas de cage de transport : il reste sur son territoire.",
    image: "/garde_chat.webp",
    imageAlt: "Manon prenant soin d'un chat lors d'une garde à Vannes",
  },
  intro: {
    paragraphs: [
      "[DRAFT] Le chat est un animal territorial : pour lui, le pire des stress n'est pas votre absence, c'est le changement d'environnement. Pension collective, transport en voiture, odeurs inconnues — autant de facteurs qui peuvent déclencher anxiété, refus alimentaire, voire problèmes de santé. La solution la plus respectueuse de sa nature est simple : qu'il reste chez vous. C'est exactement ce que je propose à Vannes et dans le Morbihan.",
      "[DRAFT] Mes visites s'organisent autour des vrais besoins du chat : alimentation à heures régulières, entretien complet de la litière, eau fraîche, contrôle visuel de son état, et surtout du temps de présence — jeu, câlins, brossage selon ses envies. Je laisse aussi quelques signes de vie discrets (volets ouverts, courrier rentré) pour maintenir l'illusion d'une maison habitée.",
      "[DRAFT] Multi-chats, chat craintif, chat sous traitement, NAC qui partagent l'espace : je m'adapte à toutes les configurations. Une pré-visite gratuite permet de faire connaissance dans le calme, de noter vos consignes précises et de repérer les cachettes habituelles. Certifiée France Petsitters, assurée responsabilité civile pro (Abeille Assurances), j'interviens en toute sécurité chez vous.",
    ],
  },
  benefits: [
    {
      title: "Visites à domicile (pas de pension)",
      description:
        "Votre chat reste sur son territoire — pas de cage de transport, pas d'odeurs étrangères, pas de stress collectif.",
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
        "Quelques photos et un message court à chaque visite — vous gardez le lien à distance.",
    },
  ],
  pricing: {
    highlight:
      "Une formule unique adaptée au chat : visite à domicile, durée modulable selon vos besoins.",
    cardSlugs: ["visite-domicile"],
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
      a: "Une à deux visites par jour suffisent généralement pour un chat adulte autonome (alimentation, litière, jeu, câlins). Pour un chaton, un chat âgé ou sous traitement, le rythme peut être adapté. On en discute lors de la pré-visite. [DRAFT]",
    },
    {
      q: "Vous gérez plusieurs chats ?",
      a: "Oui, sans surcoût caché : la visite couvre l'ensemble du foyer. Je m'adapte simplement à la durée nécessaire pour nourrir, brosser et passer du temps avec chaque chat. [DRAFT - à confirmer politique tarifaire avec Manon]",
    },
    {
      q: "Vous donnez les médicaments ?",
      a: "Oui, sur prescription vétérinaire et après démonstration lors de la pré-visite. Comprimés mélangés à la nourriture, gouttes, injections sous-cutanées simples : on regarde ensemble ce qui est dans mes compétences ou ce qui nécessite un autre intervenant. [DRAFT]",
    },
    {
      q: "Vous gardez les chats craintifs ?",
      a: "Oui, je m'adapte totalement au rythme du chat. S'il préfère rester caché, je remplis sa gamelle, change sa litière, je lui parle doucement et je le laisse tranquille. La présence régulière finit souvent par le rassurer au fil des visites. [DRAFT]",
    },
    {
      q: "Acceptez-vous les NAC (lapins, rongeurs, oiseaux) ?",
      a: "Oui, lapins, cochons d'Inde, hamsters, rats, oiseaux et certains reptiles peuvent être pris en charge sur la même visite que le chat. [DRAFT - liste précise des espèces à confirmer avec Manon, notamment côté reptiles].",
    },
  ],
  testimonialKeywords: ["chat", "chats", "visite", "litière", "NAC"],
  serviceSchema: {
    name: "Garde de chat à domicile à Vannes",
    serviceType: "Cat sitting",
    description:
      "Visites à domicile pour chat à Vannes et dans le Morbihan : alimentation, litière, jeu, suivi photo. Multi-chats et NAC acceptés.",
  },
  cta: {
    headline: "Votre chat préfère son canapé",
    subline: "Évitez le stress du chenil",
  },
  related: [
    { slug: "pet-sitting-vannes", label: "Pet-sitting à Vannes" },
    { slug: "garde-chien-vannes", label: "Garde de chien à Vannes" },
    { slug: "promeneur-chien-vannes", label: "Promeneur de chien à Vannes" },
  ],
};
