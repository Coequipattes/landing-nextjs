import { createFileRoute, redirect } from "@tanstack/react-router";

// Lien de tracking 100% libre : coequipattes.fr/s/<slug>.
// Tout avant le premier tiret devient utm_source, le reste utm_campaign —
// aucune table à maintenir, aucun code à toucher pour un nouveau canal
// ou une nouvelle campagne. Ex: /s/insta-bio, /s/google-business,
// /s/insta-story-soldes-ete, /s/qr-carte-visite.
export const Route = createFileRoute("/s/$slug")({
  beforeLoad: ({ params }) => {
    const [source, ...rest] = params.slug.split("-");
    throw redirect({
      to: "/",
      search: { utm_source: source, utm_campaign: rest.join("-") || source },
      statusCode: 302,
    });
  },
});
