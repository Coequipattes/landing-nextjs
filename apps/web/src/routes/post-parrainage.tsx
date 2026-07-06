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

// Visuel post Instagram / Facebook — format portrait 4:5 (1080×1350).
const size = { width: 1080, height: 1350 };

const STEPS = [
  "Recommandez mes services à un proche.",
  "À sa première réservation, votre filleul profite de 10 % de réduction sur une prestation.",
  "Sa prestation réalisée et réglée, vous profitez à votre tour de 10 % sur votre prochaine réservation.",
];

export const Route = createFileRoute("/post-parrainage")({
  server: {
    handlers: {
      GET: async () => {
        const [playfairBold, quicksandSemibold, quicksandMedium, caveatBold] =
          await Promise.all([
            loadFont("Playfair Display", 700),
            loadFont("Quicksand", 600),
            loadFont("Quicksand", 500),
            loadFont("Caveat", 700),
          ]);

        const logoData = readFileSync(
          join(process.cwd(), "public/logo_rose.png"),
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
              padding: "64px 72px 60px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Filigrane logo — discret, bas-droite */}
            <img
              src={logoSrc}
              width={420}
              height={420}
              style={{
                position: "absolute",
                right: -70,
                bottom: -60,
                opacity: 0.06,
              }}
            />

            {/* Glow rose haut-droite */}
            <div
              style={{
                position: "absolute",
                top: -160,
                right: -120,
                width: 540,
                height: 540,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(232,89,139,0.14) 0%, transparent 65%)",
                display: "flex",
              }}
            />
            {/* Glow rose bas-gauche */}
            <div
              style={{
                position: "absolute",
                bottom: -160,
                left: -120,
                width: 460,
                height: 460,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(255,165,201,0.10) 0%, transparent 65%)",
                display: "flex",
              }}
            />

            {/* Header brand */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: "#ffa5c9",
                    display: "flex",
                  }}
                />
                <span
                  style={{
                    color: "#888",
                    fontSize: 19,
                    fontFamily: "Quicksand",
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                  }}
                >
                  Co&apos;équi&apos;pattes
                </span>
              </div>
              <span
                style={{
                  color: "#555",
                  fontSize: 17,
                  fontFamily: "Quicksand",
                  letterSpacing: "2.5px",
                  textTransform: "uppercase",
                }}
              >
                Vannes · Bretagne
              </span>
            </div>

            {/* Bloc titre */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  marginBottom: 22,
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 2,
                    background: "rgba(255,165,201,0.5)",
                    display: "flex",
                  }}
                />
                <span
                  style={{
                    color: "#ffa5c9",
                    fontSize: 21,
                    fontFamily: "Quicksand",
                    letterSpacing: "4px",
                    textTransform: "uppercase",
                  }}
                >
                  Programme de parrainage
                </span>
              </div>

              <div
                style={{
                  fontSize: 90,
                  fontWeight: 700,
                  color: "#ffffff",
                  fontFamily: "Playfair Display",
                  lineHeight: 1.04,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <span>Partagez ce que</span>
                <span>vous aimez.</span>
              </div>

              <div
                style={{
                  fontSize: 76,
                  color: "#ffa5c9",
                  fontFamily: "Caveat",
                  lineHeight: 1,
                  marginTop: 14,
                }}
              >
                Et soyez récompensés.
              </div>
            </div>

            {/* Double badge 10 % */}
            <div style={{ display: "flex", gap: 24 }}>
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                  padding: "30px 32px",
                  borderRadius: 22,
                  background: "rgba(255,165,201,0.10)",
                  border: "1px solid rgba(255,165,201,0.30)",
                }}
              >
                <span
                  style={{
                    fontSize: 88,
                    fontFamily: "Playfair Display",
                    fontWeight: 700,
                    color: "#ffa5c9",
                    lineHeight: 1,
                  }}
                >
                  10 %
                </span>
                <span
                  style={{
                    fontSize: 22,
                    fontFamily: "Quicksand",
                    color: "#e8e8e8",
                    letterSpacing: "1px",
                  }}
                >
                  pour votre filleul
                </span>
              </div>

              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                  padding: "30px 32px",
                  borderRadius: 22,
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <span
                  style={{
                    fontSize: 88,
                    fontFamily: "Playfair Display",
                    fontWeight: 700,
                    color: "#ffffff",
                    lineHeight: 1,
                  }}
                >
                  10 %
                </span>
                <span
                  style={{
                    fontSize: 22,
                    fontFamily: "Quicksand",
                    color: "#e8e8e8",
                    letterSpacing: "1px",
                  }}
                >
                  pour vous
                </span>
              </div>
            </div>

            {/* Étapes */}
            <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
              {STEPS.map((step, i) => (
                <div
                  key={i}
                  style={{ display: "flex", alignItems: "center", gap: 22 }}
                >
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: "50%",
                      background: "rgba(255,165,201,0.12)",
                      border: "1px solid rgba(255,165,201,0.35)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 28,
                        fontFamily: "Playfair Display",
                        fontWeight: 700,
                        color: "#ffa5c9",
                      }}
                    >
                      {i + 1}
                    </span>
                  </div>
                  <span
                    style={{
                      flex: 1,
                      fontSize: 26,
                      fontFamily: "Quicksand",
                      fontWeight: 500,
                      color: "#d8d8d8",
                      lineHeight: 1.32,
                    }}
                  >
                    {step}
                  </span>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderTop: "1px solid rgba(255,255,255,0.08)",
                paddingTop: 26,
              }}
            >
              <span
                style={{
                  color: "#bbb",
                  fontSize: 22,
                  fontFamily: "Quicksand",
                  fontWeight: 600,
                  letterSpacing: "1px",
                }}
              >
                {displayUrl}
              </span>
              <span
                style={{
                  color: "#555",
                  fontSize: 18,
                  fontFamily: "Quicksand",
                  letterSpacing: "0.5px",
                }}
              >
                Réservation en ligne
              </span>
            </div>
          </div>,
          {
            ...size,
            fonts: [
              { name: "Playfair Display", data: playfairBold, weight: 700 },
              { name: "Quicksand", data: quicksandSemibold, weight: 600 },
              { name: "Quicksand", data: quicksandMedium, weight: 500 },
              { name: "Caveat", data: caveatBold, weight: 700 },
            ],
          },
        );
      },
    },
  },
});
