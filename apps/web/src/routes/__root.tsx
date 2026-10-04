import { type ReactNode, useEffect } from "react";
import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";
import { ArrowRight, PawPrint } from "lucide-react";
import { Button } from "@coequipattes/ui/components/button";
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
  notFoundComponent: NotFoundPage,
  shellComponent: RootDocument,
});

function NotFoundPage() {
  return (
    <main className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-background px-6 text-foreground">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_8%,var(--blush)_0%,transparent_58%),var(--background)]"
      />

      <header className="mx-auto flex w-full max-w-6xl items-center py-6">
        <a
          href="/"
          className="font-display text-2xl font-semibold text-primary"
          aria-label="Co'équi'pattes, accueil"
        >
          Co'équi'pattes
        </a>
      </header>

      <section className="mx-auto flex w-full max-w-3xl flex-1 items-center justify-center py-12">
        <div className="w-full rounded-[2rem] border border-primary/10 bg-card/80 px-7 py-12 text-center shadow-[0_24px_80px_rgba(95,57,50,0.07)] backdrop-blur-sm sm:px-14 sm:py-16">
          <div className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-full border border-primary/15 bg-primary/10 text-primary">
            <PawPrint className="h-9 w-9" strokeWidth={1.6} aria-hidden="true" />
          </div>
          <p className="font-accent text-2xl text-primary">Ah mince…</p>
          <p className="mt-3 text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
            Erreur 404
          </p>
          <h1 className="mx-auto mt-5 max-w-2xl font-display text-4xl leading-tight sm:text-5xl">
            Cette page semble introuvable.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
            Le lien a peut-être changé ou l'adresse comporte une erreur.
            Retrouvez les services proposés par Manon pour vos animaux et vos
            chevaux à Vannes.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="gap-2 px-6">
              <a href="/#services">
                Voir les services disponibles
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
            <a
              href="/"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Retour à l'accueil
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

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
