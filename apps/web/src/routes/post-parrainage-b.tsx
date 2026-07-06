import { createFileRoute } from "@tanstack/react-router";
import { ImageResponse } from "@vercel/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { displayUrl } from "@/lib/env";
import { loadBrandFonts } from "@/lib/og-fonts";

// Variante B — titre littéral, double récompense en gros au centre.
const size = { width: 1080, height: 1350 };

const STEPS = [
  "Recommandez-moi à un proche.",
  "Il réserve : 10 % offerts sur une prestation.",
  "Sa prestation réglée : 10 % pour vous.",
];

export const Route = createFileRoute("/post-parrainage-b")({
  server: {
    handlers: {
      GET: async () => {
        const fonts = await loadBrandFonts();
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
            <img
              src={logoSrc}
              width={420}
              height={420}
              style={{
                position: "absolute",
                left: -90,
                top: -70,
                opacity: 0.06,
              }}
            />
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

            {/* Header */}
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

            {/* Titre littéral */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  marginBottom: 20,
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
                  Pour vous remercier
                </span>
              </div>
              <div
                style={{
                  fontSize: 92,
                  fontWeight: 700,
                  color: "#ffffff",
                  fontFamily: "Playfair Display",
                  lineHeight: 1.02,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <span>Programme</span>
                <span>de parrainage</span>
              </div>
              <div
                style={{
                  fontSize: 74,
                  color: "#ffa5c9",
                  fontFamily: "Caveat",
                  lineHeight: 1,
                  marginTop: 12,
                }}
              >
                Tout le monde y gagne.
              </div>
            </div>

            {/* Double récompense centrale */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 36,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                <span
                  style={{
                    fontSize: 128,
                    fontFamily: "Playfair Display",
                    fontWeight: 700,
                    color: "#ffa5c9",
                    lineHeight: 1,
                  }}
                >
                  10%
                </span>
                <span
                  style={{
                    fontSize: 22,
                    fontFamily: "Quicksand",
                    color: "#cfcfcf",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                  }}
                >
                  votre filleul
                </span>
              </div>
              <span
                style={{
                  fontSize: 72,
                  fontFamily: "Playfair Display",
                  color: "#555",
                  lineHeight: 1,
                  marginBottom: 28,
                }}
              >
                +
              </span>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                <span
                  style={{
                    fontSize: 128,
                    fontFamily: "Playfair Display",
                    fontWeight: 700,
                    color: "#ffffff",
                    lineHeight: 1,
                  }}
                >
                  10%
                </span>
                <span
                  style={{
                    fontSize: 22,
                    fontFamily: "Quicksand",
                    color: "#cfcfcf",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                  }}
                >
                  vous
                </span>
              </div>
            </div>

            {/* Étapes condensées */}
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              {STEPS.map((step, i) => (
                <div
                  key={i}
                  style={{ display: "flex", alignItems: "center", gap: 20 }}
                >
                  <div
                    style={{
                      width: 50,
                      height: 50,
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
                        fontSize: 26,
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
                      fontSize: 27,
                      fontFamily: "Quicksand",
                      fontWeight: 500,
                      color: "#d8d8d8",
                      lineHeight: 1.3,
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
          { ...size, fonts },
        );
      },
    },
  },
});
