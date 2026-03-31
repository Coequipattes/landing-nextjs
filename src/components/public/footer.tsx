const footerLinks = [
  { href: "#about", label: "Qui suis-je" },
  { href: "#services", label: "Services" },
  { href: "#tarifs", label: "Tarifs" },
  { href: "#temoignages", label: "Témoignages" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
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
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-light text-sm hover:text-pink transition-colors"
            >
              {link.label}
            </a>
          ))}
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
