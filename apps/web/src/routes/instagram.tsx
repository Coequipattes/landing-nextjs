import { createFileRoute, redirect } from "@tanstack/react-router";

// Lien court à coller dans la bio Instagram — porte le tag UTM sans URL à rallonge.
export const Route = createFileRoute("/instagram")({
  beforeLoad: () => {
    throw redirect({
      to: "/",
      search: { utm_source: "instagram", utm_medium: "bio", utm_campaign: "lien_bio" },
      statusCode: 302,
    });
  },
});
