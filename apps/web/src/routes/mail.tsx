import { createFileRoute, redirect } from "@tanstack/react-router";

// Lien court pour la signature email.
export const Route = createFileRoute("/mail")({
  beforeLoad: () => {
    throw redirect({
      to: "/",
      search: { utm_source: "email", utm_medium: "email", utm_campaign: "signature" },
      statusCode: 302,
    });
  },
});
