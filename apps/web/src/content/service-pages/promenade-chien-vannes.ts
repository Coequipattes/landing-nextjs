import type { ServicePageData } from "./types";

// DRAFT - à valider Manon : l'ensemble du contenu éditorial ci-dessous
// (intro, bénéfices, FAQ, CTA) doit être relu avant publication.
export const promenadeChienVannes: ServicePageData = {
  slug: "promenade-chien-vannes",
  metaTitle:
    "Promeneuse de chien à Vannes · Balades quotidiennes | Co'équi'pattes",
  metaDescription:
    "Promeneuse de chien à Vannes : balades 15 à 60 min adaptées au rythme de votre chien. Pour actifs et propriétaires âgés, ponctuel ou régulier.",
  hero: {
    h1: "Promenades de chien à Vannes",
    baseline:
      "Des balades régulières adaptées à votre chien, quand vous n'avez pas le temps ou plus l'énergie de sortir, pour qu'il garde sa dépense quotidienne.",
    image: "/assets/promenade_chien.webp",
    imageAlt: "Manon, promeneuse de chien, lors d'une balade à Vannes",
  },
  intro: {
    paragraphs: [
      "Tous les chiens ont besoin de sortir tous les jours, et pas qu'à la va-vite avant de partir au boulot. Mais entre les journées de télétravail trop denses, les déplacements pro, une mobilité qui se réduit avec l'âge ou simplement une météo dissuasive, on finit par culpabiliser de ne pas offrir assez à son chien. C'est exactement pour répondre à ces situations que j'interviens comme promeneuse de chien à Vannes.",
      "Mes balades durent 30, 45 ou 60 minutes selon la formule choisie et l'énergie de votre chien, et sont toujours adaptées à son rythme : un jeune chien de berger n'a pas les mêmes besoins qu'un labrador sénior. Les balades de 45 min et 1 h peuvent se dérouler en dehors des quartiers résidentiels, dans des lieux plus adaptés aux chiens ; pour ceux qui aiment l'eau, des moments de baignade peuvent aussi y être intégrés.",
      "Je m'adapte à vos besoins, que vous ayez besoin d'une balade ponctuelle ou de sorties régulières. Le tarif est généralement à l'unité ; un tarif dégressif intervient en cas de volume important, par exemple une sortie chaque jour. Tout commence par une pré-visite gratuite : je rencontre votre chien dans son cadre et je cale avec vous un créneau qui s'intègre dans votre journée.",
    ],
  },
  benefits: [
    {
      title: "Balades 30 / 45 / 60 min",
      description:
        "Choisissez la durée selon l'énergie de votre chien et votre budget, pas de formule rigide imposée.",
    },
    {
      title: "Sortie sécurisée et attentive",
      description:
        "Promenade encadrée, calée sur le tempérament de votre chien. Lâcher en liberté uniquement avec votre accord et dans une zone adaptée.",
    },
    {
      title: "Rythme adapté à votre chien",
      description:
        "Cadence, distance, pauses olfactives : tout est calé sur l'âge, la condition physique et le tempérament de votre compagnon, mais aussi sur la météo. Par forte pluie ou par canicule, j'adapte la durée et l'intensité de la sortie.",
    },
    {
      title: "Au départ de chez vous",
      description:
        "Je viens chercher votre chien à domicile. Les sorties courtes se font autour de chez vous ; pour les balades de 45 min et 1 h, je peux l'emmener dans des lieux plus adaptés aux chiens, avec baignade possible pour ceux qui aiment l'eau.",
    },
  ],
  pricing: {
    highlight:
      "À l'unité ou en sorties régulières, je m'adapte à votre rythme.",
    cardSlugs: [
      "promenade-15",
      "promenade-20",
      "promenade-30",
      "promenade-45",
      "promenade-60",
    ],
  },
  faq: [
    {
      q: "Vous promenez plusieurs chiens en même temps ?",
      a: "Non, sauf si les chiens appartiennent à la même personne, ou si des propriétaires différents sont d'accord pour que leurs chiens soient promenés ensemble.",
    },
    {
      q: "Vous lâchez les chiens en liberté ?",
      a: "Oui, mais uniquement avec l'accord du propriétaire, et toujours dans une zone adaptée et sécurisée.",
    },
    {
      q: "Et s'il pleut ?",
      a: "La promenade est maintenue : de mon côté, la pluie n'est jamais un problème. Si votre chien n'aime pas la pluie, la sortie peut se limiter à ses besoins, suivie d'une séance de jeux et de câlins en intérieur.",
    },
    {
      q: "À quelle heure passez-vous ?",
      a: "Quand vous le souhaitez : je m'adapte aux besoins de vos chiens.",
    },
    {
      q: "Promenade régulière ou ponctuelle ?",
      a: "Les deux : que vous ayez des besoins au quotidien ou de temps en temps, je m'adapte à votre rythme.",
    },
  ],
  testimonialKeywords: ["promenade", "balade", "promener", "marche"],
  serviceSchema: {
    name: "Promenades de chien à Vannes",
    serviceType: "Dog walking",
    description:
      "Promenades de chien à Vannes et alentours : balades 15 à 60 min adaptées au rythme de votre chien, ponctuelles ou régulières, pré-visite gratuite.",
  },
  cta: {
    headline: "Votre chien sort tous les jours",
    subline: "Même quand vous êtes débordé",
  },
  related: [
    { slug: "visites-chien-vannes", label: "Visites à domicile pour chien" },
    { slug: "visites-chat-vannes", label: "Visites à domicile pour chat" },
  ],
};
