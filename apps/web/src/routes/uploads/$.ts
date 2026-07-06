import { readFile } from "node:fs/promises";
import path from "node:path";
import { createFileRoute } from "@tanstack/react-router";

const MIME: Record<string, string> = {
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  png: "image/png",
  gif: "image/gif",
  webp: "image/webp",
  avif: "image/avif",
  svg: "image/svg+xml",
};

export const Route = createFileRoute("/uploads/$")({
  server: {
    handlers: {
      GET: async ({ params }) => {
        // params._splat is a string like "gallery/foo.jpg"
        const segments = (params._splat ?? "").split("/").filter(Boolean);
        if (segments.length === 0) {
          return new Response("Not Found", { status: 404 });
        }
        const filePath = path.join(
          process.cwd(),
          "public",
          "uploads",
          ...segments,
        );

        // Prevent path traversal
        const uploadsRoot = path.join(process.cwd(), "public", "uploads");
        if (!filePath.startsWith(uploadsRoot)) {
          return new Response("Forbidden", { status: 403 });
        }

        try {
          const file = await readFile(filePath);
          const ext =
            segments[segments.length - 1].split(".").pop()?.toLowerCase() ?? "";
          const contentType = MIME[ext] ?? "application/octet-stream";
          return new Response(file, {
            headers: {
              "Content-Type": contentType,
              "Cache-Control": "public, max-age=31536000, immutable",
            },
          });
        } catch {
          return new Response("Not Found", { status: 404 });
        }
      },
    },
  },
});
