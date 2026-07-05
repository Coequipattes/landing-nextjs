import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk, Caveat } from "next/font/google";
import "./globals.css";
import { env } from "@/lib/env";

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
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
    "Garde de chien, chat et NAC à Vannes et alentours. Pet-sitter à domicile, visites, promenades. Monitrice d'équitation diplômée. Avis 5★ Google.",
  metadataBase: new URL(env.siteUrl),
  keywords: [
    "monitrice équitation Vannes",
    "cours équitation Vannes",
    "pet-sitter Vannes",
    "pet sitter Séné",
    "garde chien Vannes",
    "garde chat Vannes",
    "promeneur de chien Vannes",
    "garde animaux Vannes",
    "équitation Arradon",
    "pet-sitting Theix",
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
      "Garde de chien, chat et NAC à Vannes et alentours. Pet-sitter à domicile, visites, promenades. Monitrice d'équitation diplômée. Avis 5★ Google.",
    url: env.siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Pet Sitter à Vannes — Garde Chien, Chat & Animaux | Co'équi'pattes",
    description:
      "Garde de chien, chat et NAC à Vannes et alentours. Pet-sitter à domicile, visites, promenades. Monitrice d'équitation diplômée. Avis 5★ Google.",
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
      className={`${hanken.variable} ${fraunces.variable} ${caveat.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
