import { createFileRoute } from "@tanstack/react-router";
import { verifySession } from "@/lib/auth";
import {
  getGalleryItems,
  addGalleryImage,
  deleteGalleryImage,
  updateGalleryImage,
} from "@/lib/gallery";

async function requireAuth(): Promise<Response | null> {
  if (!(await verifySession())) {
    return Response.json({ error: "Non autorisé" }, { status: 401 });
  }
  return null;
}

export const Route = createFileRoute("/api/admin/galerie")({
  server: {
    handlers: {
      GET: async () => {
        const denied = await requireAuth();
        if (denied) return denied;
        const items = await getGalleryItems();
        return Response.json(items);
      },

      POST: async ({ request }) => {
        const denied = await requireAuth();
        if (denied) return denied;

        const formData = await request.formData();
        const file = formData.get("file") as File;
        const title = formData.get("title") as string;
        const category = formData.get("category") as string;

        if (!file || !title || !category) {
          return Response.json(
            { error: "Champs requis manquants" },
            { status: 400 },
          );
        }

        const item = await addGalleryImage(file, title, category);
        return Response.json(item, { status: 201 });
      },

      PUT: async ({ request }) => {
        const denied = await requireAuth();
        if (denied) return denied;

        const { src, title, category } = await request.json();
        if (!src) {
          return Response.json({ error: "src requis" }, { status: 400 });
        }

        await updateGalleryImage(src, { title, category });
        return Response.json({ success: true });
      },

      DELETE: async ({ request }) => {
        const denied = await requireAuth();
        if (denied) return denied;

        const { src } = await request.json();
        if (!src) {
          return Response.json({ error: "src requis" }, { status: 400 });
        }

        await deleteGalleryImage(src);
        return Response.json({ success: true });
      },
    },
  },
});
