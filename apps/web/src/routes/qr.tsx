import { createFileRoute, redirect } from "@tanstack/react-router";

// Lien court à encoder dans le QR code (carte de visite, flyer).
export const Route = createFileRoute("/qr")({
  beforeLoad: () => {
    throw redirect({
      to: "/",
      search: { utm_source: "qrcode", utm_medium: "print", utm_campaign: "carte_visite" },
      statusCode: 302,
    });
  },
});
