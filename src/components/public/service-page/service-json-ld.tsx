import type { ServicePageData } from "@/content/service-pages/types";
import { env } from "@/lib/env";

export function ServiceJsonLd({ data }: { data: ServicePageData }) {
  const siteUrl = env.siteUrl;
  const pageUrl = `${siteUrl}/${data.slug}`;
  const businessId = `${siteUrl}/#business`;

  const graph = [
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: data.serviceSchema.name,
      serviceType: data.serviceSchema.serviceType,
      description: data.serviceSchema.description,
      provider: { "@id": businessId },
      areaServed: { "@type": "City", name: data.area.city },
      url: pageUrl,
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: data.metaTitle,
      description: data.metaDescription,
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": businessId },
      inLanguage: "fr-FR",
      primaryImageOfPage: data.hero.image.startsWith("TODO")
        ? undefined
        : { "@type": "ImageObject", url: `${siteUrl}${data.hero.image}` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumbs`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: siteUrl },
        {
          "@type": "ListItem",
          position: 2,
          name: data.serviceSchema.name,
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: data.faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ];

  const payload = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  const json = JSON.stringify(payload).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD payload escaped with < — matches src/components/public/json-ld.tsx pattern.
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
