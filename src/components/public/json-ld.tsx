import { env } from "@/lib/env";
import { serverEnv } from "@/lib/env.server";

export function JsonLd() {
  const siteUrl = env.siteUrl;

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": `${siteUrl}/#business`,
        name: "Co'équi'pattes",
        description:
          "Monitrice d'équitation diplômée et pet-sitter professionnelle à Vannes. Cours d'équitation personnalisés et garde d'animaux avec passion.",
        url: siteUrl,
        telephone: "+33766744337",
        email: serverEnv.contactEmailTo,
        image: `${siteUrl}/opengraph-image`,
        logo: `${siteUrl}/logo_rose.jpeg`,
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
          { "@type": "AdministrativeArea", name: "Morbihan" },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Services Co'équi'pattes",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Cours d'équitation",
                description:
                  "Cours particuliers et collectifs d'équitation pour tous niveaux, animés par une monitrice diplômée à Vannes",
                provider: { "@id": `${siteUrl}/#business` },
                areaServed: { "@type": "City", name: "Vannes" },
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Pet-sitting",
                description:
                  "Visites à domicile, promenades et garde d'animaux à Vannes et alentours",
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
        name: "Co'équi'pattes — Monitrice d'équitation & Pet-sitter à Vannes",
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${siteUrl}/#business` },
        inLanguage: "fr-FR",
        description:
          "Monitrice d'équitation diplômée et pet-sitter professionnelle à Vannes. Cours d'équitation personnalisés et garde d'animaux avec passion.",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
