import type { Metadata } from "next";
import { Playfair_Display, Quicksand, Caveat } from "next/font/google";
import "./globals.css";
import { env } from "@/lib/env";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default:
      "Pet Sitter à Vannes — Garde Chien, Chat & Animaux | Co'équi'pattes",
    template: "%s | Co'équi'pattes",
  },
  description:
    "Garde de chien, chat et NAC à Vannes et dans le Morbihan. Pet-sitter à domicile, visites, promenades. Monitrice d'équitation diplômée. Avis 5★ Google.",
  metadataBase: new URL(env.siteUrl),
  keywords: [
    "monitrice équitation Vannes",
    "cours équitation Vannes",
    "pet-sitter Vannes",
    "pet sitter Morbihan",
    "garde chien Vannes",
    "garde chat Vannes",
    "promeneur de chien Vannes",
    "garde animaux Vannes",
    "équitation Morbihan",
    "pet-sitting Morbihan",
    "monitrice diplômée équitation",
    "Co'équi'pattes",
  ],
  alternates: {
    canonical: env.siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Co'équi'pattes",
    title: "Pet Sitter à Vannes — Garde Chien, Chat & Animaux | Co'équi'pattes",
    description:
      "Garde de chien, chat et NAC à Vannes et dans le Morbihan. Pet-sitter à domicile, visites, promenades. Monitrice d'équitation diplômée. Avis 5★ Google.",
    url: env.siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Pet Sitter à Vannes — Garde Chien, Chat & Animaux | Co'équi'pattes",
    description:
      "Garde de chien, chat et NAC à Vannes et dans le Morbihan. Pet-sitter à domicile, visites, promenades. Monitrice d'équitation diplômée. Avis 5★ Google.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${quicksand.variable} ${playfair.variable} ${caveat.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
