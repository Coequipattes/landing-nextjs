import { env } from "@/lib/env";
import type { Review } from "@/lib/google-reviews";

// Profils externes de la même entité (signal d'entité fort pour le SEO/AEO).
// Ajouter ici la fiche Google Business Profile, l'Instagram, le Facebook dès
// qu'ils existent — les moteurs de réponse (ChatGPT, Perplexity, Gemini)
// s'appuient sur ces liens pour reconnaître et citer l'entreprise.
const SAME_AS = [
  "https://blooming-pets.com/pet-sitter-vannes-56000-25030-manon/",
  "https://www.instagram.com/coequipattes/",
  "https://www.facebook.com/share/16y4rKuQPP/",
  // "https://www.google.com/maps/place/?q=place_id:XXXX",  // fiche GBP
];

export function JsonLd({ reviews = [] }: { reviews?: Review[] }) {
  const siteUrl = env.siteUrl;
  const businessId = `${siteUrl}/#business`;

  const visibleReviews = reviews.filter((r) => r.visible);
  const reviewCount = visibleReviews.length;
  const ratingValue =
    reviewCount > 0
      ? (
          visibleReviews.reduce((sum, r) => sum + r.rating, 0) / reviewCount
        ).toFixed(1)
      : "5.0";

  // Quelques avis réels exposés en structured data (citables par les IA).
  // Ils correspondent aux avis affichés sur le site (section témoignages).
  const reviewNodes = visibleReviews.slice(0, 6).map((r) => ({
    "@type": "Review",
    reviewRating: {
      "@type": "Rating",
      ratingValue: String(r.rating),
      bestRating: "5",
      worstRating: "1",
    },
    author: { "@type": "Person", name: r.authorName },
    reviewBody: r.text,
  }));

  const aggregateRating =
    reviewCount > 0
      ? {
          "@type": "AggregateRating",
          ratingValue,
          reviewCount,
          bestRating: "5",
          worstRating: "1",
        }
      : undefined;

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": businessId,
        name: "Co'équi'pattes",
        legalName: "Co'équi'pattes — Manon Millot",
        slogan: "Rassurer, pas impressionner.",
        description:
          "Monitrice d'équitation diplômée et pet-sitter professionnelle à Vannes. Cours d'équitation personnalisés, garde de chien et de chat à domicile, promenades et pension privative.",
        url: siteUrl,
        telephone: "+33766744337",
        email: env.contactEmail,
        image: [
          `${siteUrl}/opengraph-image`,
          `${siteUrl}/assets/garde_chien_domicile_2.webp`,
        ],
        logo: `${siteUrl}/logo/logo_rose.png`,
        priceRange: "€",
        currenciesAccepted: "EUR",
        paymentAccepted: "Espèces, Virement, Chèque",
        identifier: {
          "@type": "PropertyValue",
          propertyID: "SIREN",
          value: "90417432300025",
        },
        sameAs: SAME_AS,
        knowsAbout: [
          "Garde de chien",
          "Garde de chat",
          "Pet-sitting à domicile",
          "Promenade de chien",
          "Pension privative pour animaux",
          "Nouveaux animaux de compagnie (NAC)",
          "Cours d'équitation",
          "Travail de cheval",
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: "4 rue Tamara de Lempicka",
          addressLocality: "Vannes",
          postalCode: "56000",
          addressRegion: "Bretagne",
          addressCountry: "FR",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 47.6559,
          longitude: -2.7603,
        },
        areaServed: [
          { "@type": "City", name: "Vannes" },
          { "@type": "City", name: "Séné" },
          { "@type": "City", name: "Arradon" },
          { "@type": "City", name: "Saint-Avé" },
          { "@type": "City", name: "Theix-Noyalo" },
          { "@type": "City", name: "Ploeren" },
          { "@type": "City", name: "Plescop" },
          { "@type": "AdministrativeArea", name: "Morbihan" },
        ],
        serviceArea: {
          "@type": "GeoCircle",
          geoMidpoint: {
            "@type": "GeoCoordinates",
            latitude: 47.6559,
            longitude: -2.7603,
          },
          geoRadius: 10000,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "08:00",
            closes: "20:00",
          },
        ],
        founder: {
          "@type": "Person",
          name: "Manon Millot",
          jobTitle: "Monitrice d'équitation diplômée & pet-sitter",
          description:
            "Monitrice d'équitation diplômée d'État et pet-sitter professionnelle à Vannes, assurée et membre de France Petsitters.",
          knowsAbout: [
            "Équitation",
            "Comportement équin",
            "Garde d'animaux",
            "Bien-être animal",
          ],
        },
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Certification",
          name: "France Petsitters",
        },
        ...(aggregateRating ? { aggregateRating } : {}),
        ...(reviewNodes.length > 0 ? { review: reviewNodes } : {}),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Services Co'équi'pattes",
          itemListElement: [
            {
              "@type": "Offer",
              price: "25",
              priceCurrency: "EUR",
              itemOffered: {
                "@type": "Service",
                name: "Séance d'essai équitation",
                description:
                  "Première séance d'équitation d'une heure, tous niveaux, sans engagement, avec évaluation personnalisée",
                provider: { "@id": businessId },
                areaServed: { "@type": "City", name: "Vannes" },
              },
            },
            {
              "@type": "Offer",
              price: "30",
              priceCurrency: "EUR",
              itemOffered: {
                "@type": "Service",
                name: "Abonnement hebdomadaire équitation",
                description:
                  "Cours particulier d'équitation 1 fois par semaine, suivi personnalisé, créneau fixe ou flexible",
                provider: { "@id": businessId },
                areaServed: { "@type": "City", name: "Vannes" },
              },
            },
            {
              "@type": "Offer",
              price: "35",
              priceCurrency: "EUR",
              itemOffered: {
                "@type": "Service",
                name: "Cours particulier d'équitation",
                description:
                  "Cours individuel d'équitation à l'unité, 1 heure, tous niveaux, animé par une monitrice diplômée",
                provider: { "@id": businessId },
                areaServed: { "@type": "City", name: "Vannes" },
              },
            },
            {
              "@type": "Offer",
              price: "25",
              priceCurrency: "EUR",
              itemOffered: {
                "@type": "Service",
                name: "Cours collectif d'équitation",
                description:
                  "Cours collectif d'équitation à partir de 3 cavaliers, ambiance conviviale",
                provider: { "@id": businessId },
                areaServed: { "@type": "City", name: "Vannes" },
              },
            },
            {
              "@type": "Offer",
              price: "35",
              priceCurrency: "EUR",
              itemOffered: {
                "@type": "Service",
                name: "Travail de cheval",
                description:
                  "Travail de votre cheval pendant votre absence par une monitrice diplômée",
                provider: { "@id": businessId },
                areaServed: { "@type": "City", name: "Vannes" },
              },
            },
            {
              "@type": "Offer",
              priceSpecification: {
                "@type": "PriceSpecification",
                minPrice: "10.20",
                maxPrice: "20",
                priceCurrency: "EUR",
              },
              itemOffered: {
                "@type": "Service",
                name: "Visite à domicile",
                description:
                  "Visite à domicile pour chats, NAC et tous animaux (30 min à 1 h)",
                provider: { "@id": businessId },
                areaServed: { "@type": "City", name: "Vannes" },
              },
            },
            {
              "@type": "Offer",
              priceSpecification: {
                "@type": "PriceSpecification",
                minPrice: "12",
                maxPrice: "22",
                priceCurrency: "EUR",
              },
              itemOffered: {
                "@type": "Service",
                name: "Promenade chien",
                description:
                  "Balades adaptées au rythme de votre chien (30 min à 1 h)",
                provider: { "@id": businessId },
                areaServed: { "@type": "City", name: "Vannes" },
              },
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Co'équi'pattes",
        inLanguage: "fr-FR",
        publisher: { "@id": businessId },
      },
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/#webpage`,
        url: siteUrl,
        name: "Pet Sitter à Vannes — Garde Chien, Chat & Animaux | Co'équi'pattes",
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": businessId },
        inLanguage: "fr-FR",
        description:
          "Garde de chien, chat et NAC à Vannes et alentours. Pet-sitter à domicile, visites, promenades. Monitrice d'équitation diplômée. Avis 5★ Google.",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD payload escaped with < — matches src/components/public/service-page/service-json-ld.tsx pattern.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
