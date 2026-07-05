import { env } from "@/lib/env";

export function JsonLd() {
  const siteUrl = env.siteUrl;

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${siteUrl}/#business`,
        name: "Co'équi'pattes",
        description:
          "Monitrice d'équitation diplômée et pet-sitter professionnelle à Vannes. Cours d'équitation personnalisés et garde d'animaux avec passion.",
        url: siteUrl,
        telephone: "+33766744337",
        email: env.contactEmail,
        image: `${siteUrl}/opengraph-image`,
        logo: `${siteUrl}/logo_rose.png`,
        priceRange: "€",
        address: {
          "@type": "PostalAddress",
          streetAddress: "4 rue Tamara de Lempicka",
          addressLocality: "Vannes",
          postalCode: "56000",
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
        },
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Certification",
          name: "France Petsitters",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5.0",
          reviewCount: 24,
          bestRating: "5",
          worstRating: "1",
        },
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
                provider: { "@id": `${siteUrl}/#business` },
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
                provider: { "@id": `${siteUrl}/#business` },
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
                provider: { "@id": `${siteUrl}/#business` },
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
                provider: { "@id": `${siteUrl}/#business` },
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
                provider: { "@id": `${siteUrl}/#business` },
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
                provider: { "@id": `${siteUrl}/#business` },
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
                provider: { "@id": `${siteUrl}/#business` },
                areaServed: { "@type": "City", name: "Vannes" },
              },
            },
            {
              "@type": "Offer",
              priceSpecification: {
                "@type": "PriceSpecification",
                minPrice: "15",
                maxPrice: "18",
                priceCurrency: "EUR",
              },
              itemOffered: {
                "@type": "Service",
                name: "Visite + promenade",
                description:
                  "Promenade de 30 min plus 15 min de soins (nourrissage, jeux et câlins)",
                provider: { "@id": `${siteUrl}/#business` },
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
        publisher: { "@id": `${siteUrl}/#business` },
      },
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/#webpage`,
        url: siteUrl,
        name: "Pet Sitter à Vannes — Garde Chien, Chat & Animaux | Co'équi'pattes",
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${siteUrl}/#business` },
        inLanguage: "fr-FR",
        description:
          "Garde de chien, chat et NAC à Vannes et alentours. Pet-sitter à domicile, visites, promenades. Monitrice d'équitation diplômée. Avis 5★ Google.",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
