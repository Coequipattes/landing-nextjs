import { createFileRoute, redirect } from "@tanstack/react-router";

// Lien de tracking 100% libre : coequipattes.fr/s/<channel>/<campaign?>.
// <channel> se scinde au premier tiret en utm_source + utm_medium.
// <campaign> (segment optionnel) devient utm_campaign tel quel ; à défaut,
// utm_campaign retombe sur le medium (ou le channel entier si pas de tiret).
// Aucune table, aucun code à toucher pour un nouveau canal ou une nouvelle
// campagne. Ex: /s/insta-bio, /s/insta-story/soldes-ete, /s/qr/carte-visite.
export const Route = createFileRoute("/s/$channel/{-$campaign}")({
  beforeLoad: ({ params }) => {
    const [source, ...rest] = params.channel.split("-");
    const medium = rest.join("-") || undefined;
    throw redirect({
      to: "/",
      search: {
        utm_source: source,
        utm_medium: medium,
        utm_campaign: params.campaign ?? medium ?? source,
      },
      statusCode: 302,
    });
  },
});
