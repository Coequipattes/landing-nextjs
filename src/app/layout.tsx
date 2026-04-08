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
    default: "Co'équi'pattes — Monitrice d'équitation & Pet-sitter à Vannes",
    template: "%s | Co'équi'pattes",
  },
  description:
    "Monitrice d'équitation diplômée et pet-sitter professionnelle à Vannes. Cours d'équitation personnalisés et garde d'animaux avec passion.",
  metadataBase: new URL(env.siteUrl),
  keywords: [
    "monitrice équitation Vannes",
    "cours équitation Vannes",
    "pet-sitter Vannes",
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
    title: "Co'équi'pattes — Monitrice d'équitation & Pet-sitter à Vannes",
    description:
      "Monitrice d'équitation diplômée et pet-sitter professionnelle à Vannes. Cours d'équitation personnalisés et garde d'animaux avec passion.",
    url: env.siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Co'équi'pattes — Monitrice d'équitation & Pet-sitter à Vannes",
    description:
      "Monitrice d'équitation diplômée et pet-sitter professionnelle à Vannes. Cours d'équitation personnalisés et garde d'animaux avec passion.",
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
