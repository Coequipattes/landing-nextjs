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
  const quicksandSemibold = await loadFont("Quicksand", 600);

  const logoData = readFileSync(join(process.cwd(), "public/logo_rose.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#0e0612",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
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
            border: "4px solid rgba(255,165,201,0.14)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 1200,
            height: 1200,
            borderRadius: "50%",
            border: "4px dashed rgba(255,165,201,0.06)",
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
            bottom: 52,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 10,
          }}
        >
          <span
            style={{
              color: "#aaa",
              fontSize: 58,
              fontFamily: "Quicksand",
              letterSpacing: "5px",
              textTransform: "uppercase",
            }}
          >
            Co&apos;équi&apos;pattes
          </span>
          <span
            style={{
              color: "#aaa",
              fontSize: 50,
              fontFamily: "Quicksand",
              letterSpacing: "2px",
            }}
          >
            Manon Millot
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Quicksand", data: quicksandSemibold, weight: 600 }],
    },
  );
}
