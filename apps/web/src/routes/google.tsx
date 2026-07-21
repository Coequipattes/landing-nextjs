import { createFileRoute, redirect } from "@tanstack/react-router";

// Lien court pour le champ "Site web" de la fiche Google Business Profile.
export const Route = createFileRoute("/google")({
  beforeLoad: () => {
    throw redirect({
      to: "/",
      search: {
        utm_source: "google_business",
        utm_medium: "referral",
        utm_campaign: "fiche_gbp",
      },
      statusCode: 302,
    });
  },
});
