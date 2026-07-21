import { createFileRoute, notFound, redirect } from "@tanstack/react-router";

// Liens de campagne ponctuels (story, post précis...) — pas de redéploiement
// nécessaire pour une nouvelle campagne : coequipattes.fr/s/insta-story/<nom-libre>.
// Placements fixes (bio, page, fiche GBP...) : voir /instagram, /facebook, /google, /qr, /mail.
const SOURCES: Record<string, { source: string; medium: string }> = {
  "insta-story": { source: "instagram", medium: "story" },
  "insta-post": { source: "instagram", medium: "post" },
  "fb-story": { source: "facebook", medium: "story" },
  "fb-post": { source: "facebook", medium: "post" },
};

export const Route = createFileRoute("/s/$source/$campaign")({
  beforeLoad: ({ params }) => {
    const channel = SOURCES[params.source];
    if (!channel) throw notFound();
    throw redirect({
      to: "/",
      search: {
        utm_source: channel.source,
        utm_medium: channel.medium,
        utm_campaign: params.campaign,
      },
      statusCode: 302,
    });
  },
});
