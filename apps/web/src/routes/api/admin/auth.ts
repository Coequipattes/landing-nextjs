import { createFileRoute } from "@tanstack/react-router";
import { createSession, destroySession, verifyPassword } from "@/lib/auth";
import { serverEnv } from "@/lib/env.server";

export const Route = createFileRoute("/api/admin/auth")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const { email, password } = await request.json();

        if (email !== serverEnv.adminEmail) {
          return Response.json(
            { error: "Identifiants invalides" },
            { status: 401 },
          );
        }

        const valid = await verifyPassword(password);
        if (!valid) {
          return Response.json(
            { error: "Identifiants invalides" },
            { status: 401 },
          );
        }

        await createSession();
        return Response.json({ success: true });
      },

      DELETE: async () => {
        await destroySession();
        return Response.json({ success: true });
      },
    },
  },
});
