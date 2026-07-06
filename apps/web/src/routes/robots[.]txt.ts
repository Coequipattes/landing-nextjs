import { createFileRoute } from "@tanstack/react-router";
import { env } from "@/lib/env";

export const Route = createFileRoute("/robots.txt")({
  server: {
    handlers: {
      GET: async () => {
        const siteUrl = env.siteUrl.replace(/\/$/, "");

        const text = `User-agent: *
Allow: /
Disallow: /admin/

Sitemap: ${siteUrl}/sitemap.xml`;

        return new Response(text, {
          headers: { "Content-Type": "text/plain" },
        });
      },
    },
  },
});
