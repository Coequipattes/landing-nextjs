"use client";

import Link from "next/link";
import { useState } from "react";
import {
  type IconId,
  type ServiceCategory,
  type ServiceHubCard,
  servicesHub,
} from "@/content/services-hub";
import { ToggleChip } from "@coequipattes/ui/components/toggle-chip";
import { SectionHeader } from "./section-header";

const CATEGORIES: { id: ServiceCategory; label: string; iconId: IconId }[] = [
  { id: "chien", label: "Chien", iconId: "dog" },
  { id: "chat", label: "Chat", iconId: "cat" },
  { id: "cheval", label: "Cheval", iconId: "horse" },
];

// Icônes SVG inline (stroke-based, cohérence pink, pas d'emoji).
// La couleur/taille est pilotée par `className` (stroke-pink dans les cartes,
// stroke-current dans les pills pour suivre le texte).
function ServiceIcon({ id, className }: { id: IconId; className?: string }) {
  const cls = className ?? "w-6 h-6 stroke-pink";
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "1.6",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: cls,
    "aria-hidden": true,
  };
  switch (id) {
    case "paw-heart":
      return (
        <svg {...common}>
          <path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.5-7 10-7 10Z" />
          <circle cx="6" cy="5" r="1.4" />
          <circle cx="10" cy="3.4" r="1.4" />
          <circle cx="14" cy="3.4" r="1.4" />
          <circle cx="18" cy="5" r="1.4" />
        </svg>
      );
    case "dog":
      return (
        <svg {...common}>
          <path d="M10 5 7 3v4l-2 1v5l2 2v5h3v-3h4v3h3v-5l2-2v-4l-2-1V3l-3 2" />
          <path d="M11 12h.01M13 12h.01" />
        </svg>
      );
    case "cat":
      return (
        <svg {...common}>
          <path d="M5 4v5a7 7 0 0 0 14 0V4l-3 3h-1.5M19 4l-3 3M8 9h.01M16 9h.01M9 13c.7 1 2 1.5 3 1.5s2.3-.5 3-1.5" />
          <path d="M12 14.5v3" />
          <path d="M7 21c1-1.5 3-2.5 5-2.5s4 1 5 2.5" />
        </svg>
      );
    case "leash":
      return (
        <svg {...common}>
          <circle cx="6" cy="5" r="2" />
          <path d="M8 5h2a3 3 0 0 1 3 3v4" />
          <path d="M13 12c-1 3 1 5 3 5h2a2 2 0 0 1 2 2v2" />
          <path d="M15 19h-3a1.5 1.5 0 0 1 0-3h1" />
        </svg>
      );
    case "horse":
      return (
        <svg {...common}>
          <path d="M4 21v-4c0-3 2-6 5-6h2l2-3h2l1 2 3 1v3l-2 1v6" />
          <path d="M9 21v-3" />
          <path d="M17 8.5h.01" />
          <path d="M14 6l1-3" />
        </svg>
      );
    case "home":
      return (
        <svg {...common}>
          <path d="M4 11.5 12 5l8 6.5" />
          <path d="M6 10.5V19h12v-8.5" />
          <path d="M10 19v-4.5h4V19" />
        </svg>
      );
    case "book":
      return (
        <svg {...common}>
          <path d="M12 6.5C10.3 5.4 7.7 5 5 5v12c2.7 0 5.3.4 7 1.5 1.7-1.1 4.3-1.5 7-1.5V5c-2.7 0-5.3.4-7 1.5Z" />
          <path d="M12 6.5v12" />
        </svg>
      );
    case "heart":
      return (
        <svg {...common}>
          <path d="M12 20s-7-4.4-7-9.5A3.5 3.5 0 0 1 12 7a3.5 3.5 0 0 1 7 3.5C19 15.6 12 20 12 20Z" />
        </svg>
      );
    case "trophy":
      return (
        <svg {...common}>
          <path d="M8 4h8v4.5a4 4 0 0 1-8 0Z" />
          <path d="M8 5.5H5V7a3 3 0 0 0 3 3M16 5.5h3V7a3 3 0 0 1-3 3" />
          <path d="M12 12.5V16M9.5 20h5M10.5 20l.4-4h2.2l.4 4" />
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
      className="w-3.5 h-3.5 stroke-current transition-transform duration-300 group-hover/cta:translate-x-1"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function HubCard({ card, hidden }: { card: ServiceHubCard; hidden: boolean }) {
  const priced = Boolean(card.price);
  const hasPage = card.href.startsWith("/");
  // Page dédiée -> "Découvrir" ; prix mais pas de page -> "Réserver" (vers
  // le contact) ; pas de prix -> "Demander le tarif".
  const cta = hasPage ? "Découvrir" : priced ? "Réserver" : "Demander le tarif";
  return (
    <div
      className={`group flex h-full w-full flex-col justify-between gap-5 rounded-2xl border border-pink/15 bg-black-card p-6 transition-colors duration-300 hover:border-pink/35 sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] ${
        hidden ? "hidden" : ""
      }`}
    >
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-pink/25 bg-pink/10 transition-colors duration-300 group-hover:bg-pink/15">
          <ServiceIcon id={card.iconId} className="w-5 h-5 stroke-pink" />
        </div>
        <div className="min-w-0">
          <h3 className="font-display font-semibold leading-tight text-white text-lg mb-1.5 min-h-[2.5em]">
            {card.title}
          </h3>
          <p className="text-gray-light leading-relaxed text-[0.9rem] min-h-[3.25em]">
            {card.teaser}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between gap-3">
        {priced && (
          <span className="font-display text-lg font-bold text-pink">
            {card.price}
          </span>
        )}
        <Link
          href={card.href}
          aria-label={`${cta} : ${card.title}`}
          className="group/cta ml-auto inline-flex items-center gap-1.5 rounded-full text-[0.8rem] font-semibold uppercase tracking-[1px] text-pink transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
          {cta}
          <Arrow />
        </Link>
      </div>
    </div>
  );
}

export function ServicesHub() {
  const [active, setActive] = useState<ServiceCategory>("chien");
  // Note "sur devis" : visible seulement si la catégorie active contient une
  // prestation sans tarif fixe (pas de prix + pas de page dédiée).
  const surDevisInActive = servicesHub.some(
    (card) =>
      card.category === active && !card.price && !card.href.startsWith("/"),
  );

  return (
    <section
      id="services"
      className="relative bg-black-soft px-6 py-16 md:py-24"
    >
      {/* Halo de fond très léger pour donner de la profondeur */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-12 mx-auto h-[480px] max-w-[1100px] bg-[radial-gradient(ellipse_at_center,rgba(255,165,201,0.05)_0%,transparent_60%)]"
      />

      <div className="relative mx-auto max-w-[1200px]">
        <SectionHeader
          label="Mes services"
          title={
            <>
              <span className="block">Comment je peux</span>
              <span className="text-pink">vous aider</span>
            </>
          }
          subtitle="Chien, chat ou cheval — choisissez votre univers, je m'occupe du reste avec la même attention, à Vannes et alentours."
        />

        {/* Filtre par animal — un visiteur ne voit que l'univers qui le
            concerne. Les cartes des trois univers restent dans le DOM
            (masquées via `hidden`) pour garder les liens internes crawlables. */}
        <div
          role="tablist"
          aria-label="Filtrer les services par animal"
          className="mb-10 flex flex-wrap justify-center gap-3 md:mb-12"
        >
          {CATEGORIES.map((cat) => {
            const isActive = active === cat.id;
            return (
              <ToggleChip
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                active={isActive}
                onClick={() => setActive(cat.id)}
              >
                <ServiceIcon id={cat.iconId} className="w-4 h-4 stroke-current" />
                {cat.label}
              </ToggleChip>
            );
          })}
        </div>

        {/* key={active} : remonte la grille pour rejouer le fade à chaque
            bascule, sans retirer les cartes masquées du rendu. */}
        <div
          key={active}
          className="flex flex-wrap content-start justify-center gap-6 lg:min-h-[27rem] animate-[fadeIn_0.4s_var(--transition)]"
        >
          {servicesHub.map((card) => (
            <HubCard
              key={card.slug}
              card={card}
              hidden={card.category !== active}
            />
          ))}
        </div>

        {surDevisInActive && (
          <p className="mx-auto mt-8 max-w-[640px] text-center text-[0.85rem] leading-relaxed text-gray-light/80 animate-[fadeIn_0.4s_var(--transition)]">
            <span className="font-semibold text-pink">Demander le tarif ?</span>{" "}
            Pour ces prestations, le prix dépend des besoins de l&apos;animal,
            du lieu et de la durée. Contactez-moi pour une estimation
            personnalisée.
          </p>
        )}
      </div>
    </section>
  );
}
