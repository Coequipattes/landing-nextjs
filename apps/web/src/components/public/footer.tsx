import Link from "next/link";

const serviceLinks = [
  { slug: "visites-chien-vannes", label: "Visites à domicile (chien)" },
  { slug: "visites-chat-vannes", label: "Visites à domicile (chat)" },
  { slug: "promenade-chien-vannes", label: "Promenades de chien" },
  { slug: "equitation-vannes", label: "Cours d'équitation" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary py-16 text-center">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="font-display text-2xl font-bold text-primary mb-3">
          Co'équi'pattes
        </div>
        <p className="text-muted-foreground text-sm mb-10">
          Monitrice d'équitation & Pet-sitter — Vannes (56)
        </p>

        <div className="mb-10">
          <div className="text-[0.75rem] uppercase tracking-[3px] text-primary font-semibold mb-4">
            Mes services
          </div>
          <ul className="flex justify-center gap-x-6 gap-y-2 flex-wrap">
            {serviceLinks.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/${s.slug}`}
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-10">
          <div className="text-[0.75rem] uppercase tracking-[3px] text-primary font-semibold mb-4">
            Zones d&apos;intervention
          </div>
          <p className="text-muted-foreground text-sm max-w-[640px] mx-auto leading-relaxed">
            Vannes et alentours : Séné, Saint-Avé, Arradon, Ploeren,
            Theix-Noyalo, Plescop — et communes voisines dans un rayon de 10 km.
          </p>
        </div>

        <div className="text-muted-foreground text-xs space-y-2">
          <p>
            &copy; {new Date().getFullYear()} Co'équi'pattes — Manon Millot —
            Tous droits réservés
          </p>
          <p className="text-muted-foreground/70">
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
