import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const runtime = "nodejs";
export const size = { width: 2008, height: 1276 };
export const contentType = "image/png";

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

export default async function Image() {
  const [playfairBold, quicksandSemibold] = await Promise.all([
    loadFont("Playfair Display", 700),
    loadFont("Quicksand", 600),
  ]);

  const logoData = readFileSync(join(process.cwd(), "public/logo_rose_cropped.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  const qrBuffer = await fetch(
    "https://api.qrserver.com/v1/create-qr-code/?size=600x600&data=https%3A%2F%2Fcoequipattes.fr&bgcolor=fdf8f2&color=0e0612&format=png",
  ).then((r) => r.arrayBuffer());
  const qrSrc = `data:image/png;base64,${Buffer.from(qrBuffer).toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#0e0612",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          padding: "0 140px",
          gap: 100,
          position: "relative",
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
              "radial-gradient(circle, rgba(232,89,139,0.08) 0%, transparent 70%)",
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
              gap: 28,
              marginBottom: 60,
            }}
          >
            <img
              src={logoSrc}
              width={240}
              height={240}
              style={{ objectFit: "contain" }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 6,
              }}
            >
              <span
                style={{
                  color: "#ffffff",
                  fontSize: 82,
                  fontFamily: "Playfair Display",
                  fontWeight: 700,
                  lineHeight: 1,
                }}
              >
                Co&apos;équi&apos;pattes
              </span>
              <span
                style={{
                  color: "#ffa5c9",
                  fontSize: 44,
                  fontFamily: "Quicksand",
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
                "linear-gradient(90deg, rgba(255,165,201,0.3) 0%, transparent 100%)",
              marginBottom: 60,
              display: "flex",
            }}
          />

          {/* Bullet points */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 36,
            }}
          >
            {[
              "Monitrice d'équitation indépendante",
              "Pet-sitter professionnelle",
            ].map((label) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: 24 }}>
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: "#ffa5c9",
                    flexShrink: 0,
                    display: "flex",
                  }}
                />
                <span
                  style={{
                    color: "#ccc",
                    fontSize: 60,
                    fontFamily: "Quicksand",
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
            height: 700,
            background:
              "linear-gradient(180deg, transparent 0%, rgba(255,165,201,0.18) 30%, rgba(255,165,201,0.18) 70%, transparent 100%)",
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
            gap: 32,
            flexShrink: 0,
          }}
        >
          <div
            style={{
              background: "#fdf8f2",
              borderRadius: 24,
              padding: 24,
              display: "flex",
            }}
          >
            <img
              src={qrSrc}
              width={480}
              height={480}
              style={{ display: "flex" }}
            />
          </div>
          <span
            style={{
              color: "#ccc",
              fontSize: 56,
              fontFamily: "Quicksand",
              letterSpacing: "2px",
            }}
          >
            coequipattes.fr
          </span>
        </div>

        {/* Footer */}
        <div
          style={{
            position: "absolute",
            bottom: 52,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              color: "#ffa5c9",
              fontSize: 44,
              fontFamily: "Quicksand",
              letterSpacing: "1.5px",
            }}
          >
            07 66 74 43 37  ·  co.equi.pattes@gmail.com
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Playfair Display", data: playfairBold, weight: 700 },
        { name: "Quicksand", data: quicksandSemibold, weight: 600 },
      ],
    },
  );
}
