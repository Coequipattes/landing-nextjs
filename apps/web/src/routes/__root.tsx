import { type ReactNode, useEffect } from "react";
import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";
import { env } from "@/lib/env";
import { initAnalyticsTracking } from "@/lib/analytics";

import appCss from "../styles.css?url";

const SITE_NAME = "Co'équi'pattes";
const DEFAULT_TITLE =
  "Pet Sitter à Vannes — Garde Chien, Chat & Animaux | Co'équi'pattes";
const DEFAULT_DESCRIPTION =
  "Garde de chien et de chat à Vannes et dans le Morbihan. Pet-sitter à domicile, visites, promenades. Monitrice d'équitation diplômée. Avis 5★ Google.";
const KEYWORDS = [
  "monitrice équitation Vannes",
  "cours équitation Vannes",
  "pet-sitter Vannes",
  "pet sitter Séné",
  "garde chien Vannes",
  "garde chat Vannes",
  "promeneur de chien Vannes",
  "garde animaux Vannes",
  "équitation Arradon",
  "pet-sitting Theix",
  "monitrice diplômée équitation",
  "Co'équi'pattes",
].join(", ");

const OG_IMAGE = `${env.siteUrl}/opengraph-image`;

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: DEFAULT_TITLE },
      { name: "description", content: DEFAULT_DESCRIPTION },
      { name: "keywords", content: KEYWORDS },
      { name: "author", content: "Manon Millot — Co'équi'pattes" },
      {
        name: "robots",
        content:
          "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "fr_FR" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:title", content: DEFAULT_TITLE },
      { property: "og:description", content: DEFAULT_DESCRIPTION },
      { property: "og:url", content: env.siteUrl },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content: "Co'équi'pattes — cours d'équitation & pet-sitting à Vannes",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: DEFAULT_TITLE },
      { name: "twitter:description", content: DEFAULT_DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
      {
        name: "twitter:image:alt",
        content: "Co'équi'pattes — cours d'équitation & pet-sitting à Vannes",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", href: "/icon.svg", type: "image/svg+xml" },
    ],
  }),
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (import.meta.env.PROD) initAnalyticsTracking();
  }, []);

  return (
    <html lang="fr">
      <head>
        <HeadContent />
        {/* Umami analytics — self-hosted, chargé en production uniquement
            pour ne pas polluer les stats avec le trafic de dev. */}
        {import.meta.env.PROD ? (
          <script
            defer
            src="https://umami.benjamin-niddam.dev/script.js"
            data-website-id="091dda4e-f90c-4f0c-bf14-0f4ffd529974"
          />
        ) : null}
      </head>
      <body>
        {children}
        {import.meta.env.DEV ? (
          <TanStackDevtools
            config={{ position: "bottom-right" }}
            plugins={[
              {
                name: "Tanstack Router",
                render: <TanStackRouterDevtoolsPanel />,
              },
            ]}
          />
        ) : null}
        <Scripts />
      </body>
    </html>
  );
}
