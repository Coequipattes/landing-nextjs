import type { Metadata } from "next";
import { Playfair_Display, Quicksand, Caveat } from "next/font/google";
import "./globals.css";

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
    "Monitrice d'équitation diplômée et pet-sitter professionnelle à Vannes. Cours d'équitation personnalisés et garde d'animaux avec amour.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://coequipattes.fr",
  ),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Co'équi'pattes",
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
