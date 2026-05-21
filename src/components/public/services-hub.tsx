import Link from "next/link";
import { type IconId, servicesHub } from "@/content/services-hub";
import { SectionHeader } from "./section-header";

// Icônes SVG inline (stroke-based, cohérence pink, pas d'emoji).
function ServiceIcon({ id, className }: { id: IconId; className?: string }) {
  const base = "w-7 h-7 stroke-pink";
  const cls = `${base} ${className ?? ""}`.trim();
  switch (id) {
    case "paw-heart":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={cls}
          aria-hidden="true"
        >
          <path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.5-7 10-7 10Z" />
          <circle cx="6" cy="5" r="1.4" />
          <circle cx="10" cy="3.4" r="1.4" />
          <circle cx="14" cy="3.4" r="1.4" />
          <circle cx="18" cy="5" r="1.4" />
        </svg>
      );
    case "dog":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={cls}
          aria-hidden="true"
        >
          <path d="M10 5 7 3v4l-2 1v5l2 2v5h3v-3h4v3h3v-5l2-2v-4l-2-1V3l-3 2" />
          <path d="M11 12h.01M13 12h.01" />
        </svg>
      );
    case "cat":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={cls}
          aria-hidden="true"
        >
          <path d="M5 4v5a7 7 0 0 0 14 0V4l-3 3h-1.5M19 4l-3 3M8 9h.01M16 9h.01M9 13c.7 1 2 1.5 3 1.5s2.3-.5 3-1.5" />
          <path d="M12 14.5v3" />
          <path d="M7 21c1-1.5 3-2.5 5-2.5s4 1 5 2.5" />
        </svg>
      );
    case "leash":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={cls}
          aria-hidden="true"
        >
          <circle cx="6" cy="5" r="2" />
          <path d="M8 5h2a3 3 0 0 1 3 3v4" />
          <path d="M13 12c-1 3 1 5 3 5h2a2 2 0 0 1 2 2v2" />
          <path d="M15 19h-3a1.5 1.5 0 0 1 0-3h1" />
        </svg>
      );
    case "horse":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={cls}
          aria-hidden="true"
        >
          <path d="M4 21v-4c0-3 2-6 5-6h2l2-3h2l1 2 3 1v3l-2 1v6" />
          <path d="M9 21v-3" />
          <path d="M17 8.5h.01" />
          <path d="M14 6l1-3" />
        </svg>
      );
  }
}

function Arrow() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4 stroke-current transition-transform duration-300 group-hover:translate-x-1"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

type CardProps = {
  card: (typeof servicesHub)[number];
};

function HubCard({ card }: CardProps) {
  return (
    <Link
      href={card.href}
      className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-pink/15 bg-black-card p-7 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-pink/60 hover:shadow-[0_18px_45px_rgba(255,165,201,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
        card.emphasis ? "md:p-10" : ""
      }`}
    >
      {/* Glow décoratif coin haut-gauche */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-12 -left-12 h-40 w-40 rounded-full bg-pink/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
      {/* Top bar pink animée */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-transparent via-pink to-transparent transition-transform duration-500 group-hover:scale-x-100"
      />

      <div className="relative">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-pink/25 bg-pink/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-pink/20">
            <ServiceIcon id={card.iconId} />
          </div>
          <span className="text-[0.7rem] font-semibold uppercase tracking-[1.5px] text-pink/80">
            {card.kicker}
          </span>
        </div>

        <h3
          className={`font-display font-semibold leading-tight text-white ${
            card.emphasis ? "text-2xl md:text-[1.9rem]" : "text-xl md:text-2xl"
          } mb-3`}
        >
          {card.title}
        </h3>

        <p
          className={`text-gray-light leading-relaxed ${
            card.emphasis ? "md:text-[1.05rem]" : "text-[0.95rem]"
          }`}
        >
          {card.teaser}
        </p>
      </div>

      <div className="relative mt-7 flex items-center justify-between gap-4">
        <span className="font-display text-xl font-bold text-pink">
          {card.priceFrom}
        </span>
        <span className="inline-flex items-center gap-2 text-[0.85rem] font-semibold uppercase tracking-[1px] text-pink transition-colors group-hover:text-white">
          Découvrir
          <Arrow />
        </span>
      </div>
    </Link>
  );
}

export function ServicesHub() {
  // L'ordre des cartes vient déjà du data : ombrelle d'abord, équitation en dernier.
  const [umbrella, ...others] = servicesHub;

  return (
    <section
      id="services"
      className="relative px-6 py-16 md:py-24"
      aria-labelledby="services-hub-title"
    >
      {/* Halo de fond très léger pour donner de la profondeur */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-12 mx-auto h-[480px] max-w-[1100px] bg-[radial-gradient(ellipse_at_center,rgba(255,165,201,0.05)_0%,transparent_60%)]"
      />

      <div className="relative mx-auto max-w-[1200px]">
        <SectionHeader
          label="Nos services"
          title={
            <>
              <span className="block">5 façons</span>
              <span className="text-pink">
                de prendre soin de ce qui compte
              </span>
            </>
          }
          subtitle="Pet-sitting, garde à domicile, balades, équitation — un seul interlocuteur, une approche douce, des prestations sur-mesure à Vannes et dans le Morbihan."
        />

        {/* Layout asymétrique :
            - mobile : 1 colonne, l'ombrelle en premier
            - lg+ : carte ombrelle pleine hauteur à gauche, grille 2×2 à droite. */}
        <div className="grid grid-cols-1 gap-5 md:gap-6 lg:grid-cols-5 lg:items-stretch">
          <div className="lg:col-span-2 lg:h-full">
            <HubCard card={umbrella} />
          </div>

          <div className="grid grid-cols-1 gap-5 md:gap-6 sm:grid-cols-2 lg:col-span-3">
            {others.map((card) => (
              <HubCard key={card.slug} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
