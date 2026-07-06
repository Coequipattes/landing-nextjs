import { createFileRoute, redirect } from "@tanstack/react-router";

// Redirection permanente (301) — anciennement dans next.config.ts.
export const Route = createFileRoute("/garde-chien-vannes")({
  beforeLoad: () => {
    throw redirect({ to: "/visites-chien-vannes", statusCode: 301 });
  },
});
