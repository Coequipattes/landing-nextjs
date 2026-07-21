import { createFileRoute, redirect } from "@tanstack/react-router";

// Lien court pour le champ "Site web" de la page Facebook.
export const Route = createFileRoute("/facebook")({
  beforeLoad: () => {
    throw redirect({
      to: "/",
      search: { utm_source: "facebook", utm_medium: "bio", utm_campaign: "lien_page" },
      statusCode: 302,
    });
  },
});
