import { createFileRoute } from "@tanstack/react-router";
import { ImageResponse } from "@vercel/og";
import { loadCardFonts } from "@/lib/og-fonts";
import {
  CARD_FORMAT,
  CARD_THEME,
  markSvgDataUri,
  PrintGuides,
  resolveCardTheme,
} from "@/lib/print-card-format";

// Verso — reproduction fidèle de l'original (commit dbaeb96, Figma "Verso V1
// — logo + contact + QR") : header logo+brand, séparateurs, bullets, QR,
// footer contact. Seuls palette, polices (DM Serif Text/Inter) et logo (mark.svg
// vectoriel) changent.
export const Route = createFileRoute("/carte-verso-v1")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const DEBUG_GUIDES =
          new URL(request.url).searchParams.get("guides") === "1";
        const theme = CARD_THEME[resolveCardTheme(request.url)];

        const fonts = await loadCardFonts();
        const logoSrc = markSvgDataUri(theme.ink, theme.accent);

        // QR toujours foncé sur clair, quel que soit le thème de la carte :
        // un QR inversé (clair sur foncé) casse trop souvent le scan.
        // Lien taggé UTM (cf. TRACKING.md) : /s/qr/carte-visite → source=qr,
        // campaign=carte-visite, sans afficher d'URL "louche" sur la carte.
        const qrBuffer = await fetch(
          `https://api.qrserver.com/v1/create-qr-code/?size=600x600&data=https%3A%2F%2Fcoequipattes.fr%2Fs%2Fqr%2Fcarte-visite&bgcolor=${CARD_THEME.light.bg.slice(1)}&color=${CARD_THEME.light.ink.slice(1)}&format=png`,
        ).then((r) => r.arrayBuffer());
        const qrSrc = `data:image/png;base64,${Buffer.from(qrBuffer).toString("base64")}`;

        return new ImageResponse(
          <div
            style={{
              background: theme.bg,
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
                background: theme.bg,
                display: "flex",
                alignItems: "center",
                padding: "0 140px",
                gap: 100,
                overflow: "hidden",
              }}
            >
              {/* Glow gauche */}
              <div
                style={{
                  position: "absolute",
                  left: -100,
                  top: "50%",
                  marginTop: -300,
                  width: 600,
                  height: 600,
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(232,91,121,0.08) 0%, transparent 70%)",
                  display: "flex",
                }}
              />

              {/* Panneau gauche — infos */}
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: 0,
                }}
              >
                {/* Logo + brand */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 30,
                    marginBottom: 70,
                  }}
                >
                  <img
                    src={logoSrc}
                    width={296}
                    height={296}
                    alt=""
                    style={{ objectFit: "contain" }}
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 7,
                    }}
                  >
                    <span
                      style={{
                        color: theme.ink,
                        fontSize: 94,
                        fontFamily: "DM Serif Text",
                        lineHeight: 1,
                      }}
                    >
                      Co&apos;équi&apos;pattes
                    </span>
                    <span
                      style={{
                        color: theme.accent,
                        fontSize: 54,
                        fontFamily: "Inter",
                        fontWeight: 600,
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                      }}
                    >
                      Vannes · Bretagne
                    </span>
                  </div>
                </div>

                {/* Séparateur */}
                <div
                  style={{
                    width: "100%",
                    height: 2,
                    background:
                      "linear-gradient(90deg, rgba(232,91,121,0.3) 0%, transparent 100%)",
                    marginBottom: 70,
                    display: "flex",
                  }}
                />

                {/* Bullet points */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 40,
                  }}
                >
                  {[
                    "Pet-sitter professionnelle",
                    "Monitrice d'équitation indépendante",
                  ].map((label) => (
                    <div
                      key={label}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 26,
                      }}
                    >
                      <div
                        style={{
                          width: 11,
                          height: 11,
                          borderRadius: "50%",
                          background: theme.accent,
                          flexShrink: 0,
                          display: "flex",
                        }}
                      />
                      <span
                        style={{
                          color: theme.sub,
                          fontSize: 70,
                          fontFamily: "Inter",
                          letterSpacing: "0.5px",
                        }}
                      >
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Séparateur vertical */}
              <div
                style={{
                  width: 2,
                  height: 780,
                  background:
                    "linear-gradient(180deg, transparent 0%, rgba(232,91,121,0.18) 30%, rgba(232,91,121,0.18) 70%, transparent 100%)",
                  flexShrink: 0,
                  display: "flex",
                }}
              />

              {/* Panneau droit — QR */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 36,
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    background: CARD_THEME.light.bg,
                    borderRadius: 26,
                    padding: 26,
                    display: "flex",
                  }}
                >
                  <img
                    src={qrSrc}
                    width={520}
                    height={520}
                    alt=""
                    style={{ display: "flex" }}
                  />
                </div>
                <span
                  style={{
                    color: theme.sub,
                    fontSize: 66,
                    fontFamily: "Inter",
                    letterSpacing: "2px",
                  }}
                >
                  coequipattes.fr
                </span>

                {/* Présence réseaux sociaux — icône seule, pas d'URL affichée */}
                <span
                  style={{
                    color: theme.accent,
                    fontSize: 34,
                    fontFamily: "Inter",
                    letterSpacing: "0.5px",
                  }}
                >
                  Retrouvez-moi aussi sur
                </span>
                <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                  <svg
                    width="44"
                    height="44"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={theme.ink}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <svg
                    width="44"
                    height="44"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={theme.ink}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </div>
              </div>

              {/* Footer */}
              <div
                style={{
                  position: "absolute",
                  bottom: 100,
                  left: 0,
                  right: 0,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    color: theme.accent,
                    fontSize: 54,
                    fontFamily: "Inter",
                    fontWeight: 600,
                    letterSpacing: "1.5px",
                  }}
                >
                  07 66 74 43 37 · co.equi.pattes@gmail.com
                </span>
              </div>
            </div>
            {DEBUG_GUIDES && <PrintGuides />}
          </div>,
          {
            ...CARD_FORMAT.canvas,
            fonts,
          },
        );
      },
    },
  },
});
