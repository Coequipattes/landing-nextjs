import { createFileRoute } from "@tanstack/react-router";
import { verifySession } from "@/lib/auth";
import {
  getReviews,
  fetchGoogleReviews,
  toggleReviewVisibility,
} from "@/lib/google-reviews";
import { serverEnv } from "@/lib/env.server";

export const Route = createFileRoute("/api/admin/reviews")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        // Allow cron access via Bearer token OR admin session
        const authHeader = request.headers.get("authorization");
        const cronSecret = serverEnv.cronSecret;

        if (authHeader === `Bearer ${cronSecret}` && cronSecret) {
          // Cron access — refresh reviews
          const reviews = await fetchGoogleReviews();
          return Response.json({ refreshed: true, count: reviews.length });
        }

        // Admin session access — just list
        if (!(await verifySession())) {
          return Response.json({ error: "Non autorisé" }, { status: 401 });
        }

        const reviews = await getReviews();
        return Response.json(reviews);
      },

      POST: async () => {
        if (!(await verifySession())) {
          return Response.json({ error: "Non autorisé" }, { status: 401 });
        }

        // Force refresh from Google
        const reviews = await fetchGoogleReviews();
        return Response.json({ refreshed: true, count: reviews.length });
      },

      PUT: async ({ request }) => {
        if (!(await verifySession())) {
          return Response.json({ error: "Non autorisé" }, { status: 401 });
        }

        const { authorName, visible } = await request.json();
        await toggleReviewVisibility(authorName, visible);
        return Response.json({ success: true });
      },
    },
  },
});
