import { createFileRoute } from "@tanstack/react-router";
import { ImageResponse } from "@vercel/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { displayUrl } from "@/lib/env";

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

export const Route = createFileRoute("/og-a/opengraph-image")({
  server: {
    handlers: {
      GET: async () => {
        const [playfairBold, quicksandSemibold, caveatBold] = await Promise.all(
          [
            loadFont("Playfair Display", 700),
            loadFont("Quicksand", 600),
            loadFont("Caveat", 700),
          ],
        );

        const logoData = readFileSync(
          join(process.cwd(), "public/logo_blanc.png"),
        );
        const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

        return new ImageResponse(
          <div
            style={{
              background: "#0a0a0a",
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "56px 80px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Filigrane logo blanc — transparent, côté droit */}
            <img
              src={logoSrc}
              width={520}
              height={596}
              style={{
                position: "absolute",
                right: 40,
                top: 17,
                opacity: 0.18,
              }}
            />

            {/* Glow rose haut-droite */}
            <div
              style={{
                position: "absolute",
                top: -120,
                right: -80,
                width: 500,
                height: 500,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(232,89,139,0.12) 0%, transparent 65%)",
                display: "flex",
              }}
            />
            {/* Glow rose bas-gauche */}
            <div
              style={{
                position: "absolute",
                bottom: -100,
                left: -60,
                width: 380,
                height: 380,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(255,165,201,0.10) 0%, transparent 65%)",
                display: "flex",
              }}
            />

            {/* Header brand */}
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#ffa5c9",
                  display: "flex",
                }}
              />
              <span
                style={{
                  color: "#555",
                  fontSize: 12,
                  fontFamily: "Quicksand",
                  letterSpacing: "2.5px",
                  textTransform: "uppercase",
                }}
              >
                Co&apos;équi&apos;pattes
              </span>
            </div>

            {/* Bloc texte central */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 24,
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 1,
                    background: "rgba(255,165,201,0.4)",
                    display: "flex",
                  }}
                />
                <span
                  style={{
                    color: "#ffa5c9",
                    fontSize: 12,
                    fontFamily: "Quicksand",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                  }}
                >
                  Vannes · Bretagne
                </span>
              </div>

              <div
                style={{
                  fontSize: 68,
                  fontWeight: 700,
                  color: "#ffffff",
                  fontFamily: "Playfair Display",
                  lineHeight: 1.05,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <span>L&apos;équitation &amp;</span>
                <span>la garde d&apos;animaux</span>
              </div>

              <div
                style={{
                  fontSize: 72,
                  color: "#ffa5c9",
                  fontFamily: "Caveat",
                  lineHeight: 1,
                  marginTop: 8,
                }}
              >
                avec amour.
              </div>
            </div>

            {/* Footer */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span
                style={{
                  color: "#333",
                  fontSize: 12,
                  fontFamily: "Quicksand",
                  letterSpacing: "1.5px",
                }}
              >
                {displayUrl}
              </span>
              <span
                style={{
                  color: "#2a2a2a",
                  fontSize: 12,
                  fontFamily: "Quicksand",
                  letterSpacing: "0.5px",
                }}
              >
                Monitrice diplômée · Pet-sitter professionnelle
              </span>
            </div>
          </div>,
          {
            width: 1200,
            height: 630,
            fonts: [
              { name: "Playfair Display", data: playfairBold, weight: 700 },
              { name: "Quicksand", data: quicksandSemibold, weight: 600 },
              { name: "Caveat", data: caveatBold, weight: 700 },
            ],
          },
        );
      },
    },
  },
});
