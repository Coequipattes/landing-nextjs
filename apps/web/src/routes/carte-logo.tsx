import { createFileRoute } from "@tanstack/react-router";
import { ImageResponse } from "@vercel/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { CARD_FORMAT, PrintGuides } from "@/lib/print-card-format";

async function loadFont(family: string, weight: number): Promise<ArrayBuffer> {
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=${family.replace(/ /g, "+")}:wght@${weight}&display=swap`,
    {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1",
      },
    },
  ).then((r) => r.text());

  const url = css.match(/src: url\((.+?)\)/)?.[1];
  if (!url) throw new Error(`Font URL not found for ${family} ${weight}`);
  return fetch(url).then((r) => r.arrayBuffer());
}

export const Route = createFileRoute("/carte-logo")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const DEBUG_GUIDES =
          new URL(request.url).searchParams.get("guides") === "1";

        const quicksandSemibold = await loadFont("Quicksand", 600);

        const logoData = readFileSync(
          join(process.cwd(), "public/logo_rose.png"),
        );
        const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

        return new ImageResponse(
          <div
            style={{
              background: "#0e0612",
              width: "100%",
              height: "100%",
              display: "flex",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: CARD_FORMAT.bleed,
                top: CARD_FORMAT.bleed,
                width: CARD_FORMAT.trim.width,
                height: CARD_FORMAT.trim.height,
                background: "#0e0612",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }}
            >
              {/* Glow centré */}
              <div
                style={{
                  position: "absolute",
                  width: 1000,
                  height: 1000,
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(232,89,139,0.12) 0%, transparent 65%)",
                  display: "flex",
                }}
              />

              {/* Anneaux */}
              <div
                style={{
                  position: "absolute",
                  width: 1100,
                  height: 1100,
                  borderRadius: "50%",
                  border: "5px solid rgba(255,165,201,0.40)",
                  display: "flex",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  width: 1200,
                  height: 1200,
                  borderRadius: "50%",
                  border: "5px dashed rgba(255,165,201,0.22)",
                  display: "flex",
                }}
              />

              {/* Logo */}
              <img
                src={logoSrc}
                width={1060}
                height={1060}
                style={{ objectFit: "contain", position: "relative" }}
              />

              {/* Dégradé bas */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: 300,
                  background:
                    "linear-gradient(to bottom, transparent 0%, #0e0612 60%)",
                  display: "flex",
                }}
              />

              {/* Brand + nom */}
              <div
                style={{
                  position: "absolute",
                  bottom: 100,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 16,
                }}
              >
                <span
                  style={{
                    color: "#ffffff",
                    fontSize: 78,
                    fontFamily: "Quicksand",
                    letterSpacing: "6px",
                    textTransform: "uppercase",
                  }}
                >
                  Co&apos;équi&apos;pattes
                </span>
                <span
                  style={{
                    color: "#ffa5c9",
                    fontSize: 62,
                    fontFamily: "Quicksand",
                    letterSpacing: "3px",
                  }}
                >
                  Manon Millot
                </span>
              </div>
            </div>
            {DEBUG_GUIDES && <PrintGuides />}
          </div>,
          {
            ...CARD_FORMAT.canvas,
            fonts: [
              { name: "Quicksand", data: quicksandSemibold, weight: 600 },
            ],
          },
        );
      },
    },
  },
});
