import type { ServicePageData } from "@/content/service-pages/types";
import { env } from "@/lib/env";

// Génère les métadonnées <head> d'une page service : title/description uniques,
// canonical absolu, Open Graph + Twitter cards avec image OG dédiée à la page
// (/og-service/<slug>/opengraph-image). Centralisé pour rester cohérent sur les
// 7 pages service.
export function serviceHead(data: ServicePageData) {
  const canonical = `${env.siteUrl}/${data.slug}`;
  const ogImage = `${env.siteUrl}/og-service/${data.slug}/opengraph-image`;
  const imageAlt = data.hero.imageAlt || data.serviceSchema.name;

  return {
    meta: [
      { title: data.metaTitle },
      { name: "description", content: data.metaDescription },
      { property: "og:title", content: data.metaTitle },
      { property: "og:description", content: data.metaDescription },
      { property: "og:url", content: canonical },
      { property: "og:type", content: "website" },
      { property: "og:image", content: ogImage },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: imageAlt },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: data.metaTitle },
      { name: "twitter:description", content: data.metaDescription },
      { name: "twitter:image", content: ogImage },
      { name: "twitter:image:alt", content: imageAlt },
    ],
    links: [{ rel: "canonical", href: canonical }],
  };
}
