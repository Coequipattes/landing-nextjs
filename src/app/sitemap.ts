import type { MetadataRoute } from "next";
import { servicePages } from "@/content/service-pages";
import { env } from "@/lib/env";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const baseUrl = env.siteUrl.replace(/\/$/, "");

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...servicePages.map((page) => ({
      url: `${baseUrl}/${page.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
