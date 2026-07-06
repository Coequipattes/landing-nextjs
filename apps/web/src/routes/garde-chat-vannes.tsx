import { createFileRoute, redirect } from "@tanstack/react-router";

// Redirection permanente (301) — anciennement dans next.config.ts.
export const Route = createFileRoute("/garde-chat-vannes")({
  beforeLoad: () => {
    throw redirect({ to: "/visites-chat-vannes", statusCode: 301 });
  },
});
