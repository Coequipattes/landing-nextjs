export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Co'équi'pattes",
    description:
      "Monitrice d'équitation diplômée et pet-sitter professionnelle à Vannes",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://coequipattes.fr",
    telephone: "+33766744337",
    email: "coequipattes@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "4 rue Tamara de Lempicka",
      addressLocality: "Vannes",
      postalCode: "56000",
      addressCountry: "FR",
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 47.6559,
        longitude: -2.7603,
      },
      geoRadius: "10000",
    },
    priceRange: "€",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cours d'équitation",
            description: "Cours particuliers et collectifs d'équitation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Pet-sitting",
            description:
              "Visites à domicile et promenades pour vos animaux",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
