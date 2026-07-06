import { createFileRoute } from "@tanstack/react-router";
import { servicePages } from "@/content/service-pages";
import { env } from "@/lib/env";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const now = new Date().toISOString();
        const baseUrl = env.siteUrl.replace(/\/$/, "");

        const urls = [
          `  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>`,
          ...servicePages.map(
            (page) => `  <url>
    <loc>${baseUrl}/${page.slug}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`,
          ),
        ];

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;

        return new Response(xml, {
          headers: { "Content-Type": "application/xml" },
        });
      },
    },
  },
});
