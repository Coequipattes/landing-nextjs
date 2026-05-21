"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const footerLinks = [
  { hash: "about", label: "Qui suis-je" },
  { hash: "services", label: "Services" },
  { hash: "temoignages", label: "Témoignages" },
  { hash: "contact", label: "Contact" },
];

const serviceLinks = [
  { slug: "garde-chien-vannes", label: "Garde de chien à Vannes" },
  { slug: "garde-chat-vannes", label: "Garde de chat à Vannes" },
  { slug: "promeneur-chien-vannes", label: "Promeneur de chien à Vannes" },
  { slug: "equitation-vannes", label: "Cours d'équitation à Vannes" },
];

export function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const hrefFor = (hash: string) => (isHome ? `#${hash}` : `/#${hash}`);

  return (
    <footer className="border-t border-pink/10 py-16 text-center">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="font-display text-2xl font-bold text-pink mb-3">
          Co'équi'pattes
        </div>
        <p className="text-gray-light text-sm mb-8">
          Monitrice d'équitation & Pet-sitter — Vannes (56)
        </p>
        <div className="flex justify-center gap-6 flex-wrap mb-10">
          {footerLinks.map((link) =>
            isHome ? (
              <a
                key={link.hash}
                href={`#${link.hash}`}
                className="text-gray-light text-sm hover:text-pink transition-colors"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.hash}
                href={hrefFor(link.hash)}
                className="text-gray-light text-sm hover:text-pink transition-colors"
              >
                {link.label}
              </Link>
            ),
          )}
        </div>
        <div className="mb-10">
          <div className="text-[0.75rem] uppercase tracking-[3px] text-pink font-semibold mb-4">
            Nos services à Vannes
          </div>
          <ul className="flex justify-center gap-x-6 gap-y-2 flex-wrap">
            {serviceLinks.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/${s.slug}`}
                  className="text-gray-light text-sm hover:text-pink transition-colors"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-gray text-xs space-y-2">
          <p>
            &copy; {new Date().getFullYear()} Co'équi'pattes — Manon Millot —
            Tous droits réservés
          </p>
          <p className="text-gray/70">
            Entreprise individuelle — SIREN 90417432300025 — 4 rue Tamara de
            Lempicka, 56000 Vannes
            <br />
            TVA non applicable — article 293 B du CGI · Assurance : Abeille
            Assurances · Membre de France Petsitters
          </p>
        </div>
      </div>
    </footer>
  );
}
