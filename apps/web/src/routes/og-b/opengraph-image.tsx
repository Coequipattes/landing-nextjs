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

export const Route = createFileRoute("/og-b/opengraph-image")({
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
              alignItems: "center",
              padding: "0 72px",
              gap: 60,
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Halos */}
            <div
              style={{
                position: "absolute",
                left: -40,
                top: "50%",
                marginTop: -200,
                width: 400,
                height: 400,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(232,89,139,0.10) 0%, transparent 70%)",
                display: "flex",
              }}
            />
            <div
              style={{
                position: "absolute",
                right: -60,
                top: "50%",
                marginTop: -160,
                width: 320,
                height: 320,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(255,165,201,0.06) 0%, transparent 70%)",
                display: "flex",
              }}
            />

            {/* Médaillon — fond clair pour que le JPEG soit lisible */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                position: "relative",
              }}
            >
              {/* Anneaux décoratifs */}
              <div
                style={{
                  position: "absolute",
                  width: 370,
                  height: 370,
                  borderRadius: "50%",
                  border: "1px solid rgba(255,165,201,0.18)",
                  display: "flex",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  width: 406,
                  height: 406,
                  borderRadius: "50%",
                  border: "1px dashed rgba(255,165,201,0.08)",
                  display: "flex",
                }}
              />
              <div
                style={{
                  width: 330,
                  height: 330,
                  borderRadius: "50%",
                  background: "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={logoSrc}
                  width={300}
                  height={300}
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>

            {/* Séparateur vertical */}
            <div
              style={{
                width: 1,
                height: 300,
                background:
                  "linear-gradient(180deg, transparent 0%, rgba(255,165,201,0.22) 30%, rgba(255,165,201,0.22) 70%, transparent 100%)",
                flexShrink: 0,
                display: "flex",
              }}
            />

            {/* Texte */}
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 22,
                }}
              >
                <div
                  style={{
                    width: 28,
                    height: 1,
                    background: "rgba(255,165,201,0.5)",
                    display: "flex",
                  }}
                />
                <span
                  style={{
                    color: "#ffa5c9",
                    fontSize: 11,
                    fontFamily: "Quicksand",
                    letterSpacing: "2.5px",
                    textTransform: "uppercase",
                  }}
                >
                  Vannes · Bretagne
                </span>
              </div>

              <div
                style={{
                  fontSize: 48,
                  fontWeight: 700,
                  color: "#ffffff",
                  fontFamily: "Playfair Display",
                  lineHeight: 1.1,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <span>Équitation &amp; garde</span>
                <span>d&apos;animaux</span>
              </div>

              <div
                style={{
                  fontSize: 46,
                  color: "#ffa5c9",
                  fontFamily: "Caveat",
                  lineHeight: 1.1,
                  marginTop: 8,
                }}
              >
                avec amour, depuis Vannes
              </div>

              <div
                style={{
                  color: "#3a3a3a",
                  fontSize: 13,
                  fontFamily: "Quicksand",
                  letterSpacing: "0.3px",
                  marginTop: 22,
                }}
              >
                Monitrice diplômée · Pet-sitter professionnelle
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginTop: 14,
                }}
              >
                <div
                  style={{
                    width: 16,
                    height: 1,
                    background: "#252525",
                    display: "flex",
                  }}
                />
                <span
                  style={{
                    color: "#2e2e2e",
                    fontSize: 11,
                    fontFamily: "Quicksand",
                    letterSpacing: "1.5px",
                  }}
                >
                  {displayUrl}
                </span>
              </div>
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
