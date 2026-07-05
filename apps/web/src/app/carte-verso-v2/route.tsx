import { ImageResponse } from "next/og";
import { CARD_FORMAT, PrintGuides } from "@/lib/print-card-format";

export const runtime = "nodejs";

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

export async function GET(request: Request) {
  const DEBUG_GUIDES = new URL(request.url).searchParams.get("guides") === "1";

  const quicksandSemibold = await loadFont("Quicksand", 600);

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
            alignItems: "center",
            justifyContent: "center",
            gap: 100,
            overflow: "hidden",
          }}
        >
        {/* Glow centré */}
        <div
          style={{
            position: "absolute",
            width: 800,
            height: 800,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(232,89,139,0.08) 0%, transparent 65%)",
            display: "flex",
          }}
        />

        {/* QR code */}
        <div
          style={{
            background: "#fdf8f2",
            borderRadius: 28,
            padding: 28,
            display: "flex",
            flexShrink: 0,
          }}
        >
          <img
            src={qrSrc}
            width={560}
            height={560}
            style={{ display: "flex" }}
          />
        </div>

        {/* Séparateur */}
        <div
          style={{
            width: 2,
            height: 600,
            background:
              "linear-gradient(180deg, transparent 0%, rgba(255,165,201,0.18) 30%, rgba(255,165,201,0.18) 70%, transparent 100%)",
            flexShrink: 0,
            display: "flex",
          }}
        />

        {/* Contact */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 44,
          }}
        >
          {[
            { label: "+33 7 66 74 43 37" },
            { label: "co.equi.pattes@gmail.com" },
            { label: "coequipattes.fr" },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 24,
              }}
            >
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
                  fontSize: 54,
                  fontFamily: "Quicksand",
                  letterSpacing: "0.5px",
                }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
        </div>
        {DEBUG_GUIDES && <PrintGuides />}
      </div>
    ),
    {
      ...CARD_FORMAT.canvas,
      fonts: [{ name: "Quicksand", data: quicksandSemibold, weight: 600 }],
    },
  );
}
