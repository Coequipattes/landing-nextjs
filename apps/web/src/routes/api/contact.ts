import { createFileRoute } from "@tanstack/react-router";
import { sendContactEmail } from "@/lib/resend";

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const body = await request.json();
        const { name, email, subject, message } = body;

        if (!name || !email || !message) {
          return Response.json(
            { error: "Champs requis manquants" },
            { status: 400 },
          );
        }

        try {
          await sendContactEmail({
            name,
            email,
            subject: subject || "Contact",
            message,
          });
          return Response.json({ success: true });
        } catch {
          return Response.json(
            { error: "Erreur lors de l'envoi" },
            { status: 500 },
          );
        }
      },
    },
  },
});
