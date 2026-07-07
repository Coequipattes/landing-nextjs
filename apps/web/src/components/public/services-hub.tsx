import {
  BadgeCheck,
  BedDouble,
  Brush,
  Cat,
  Dog,
  DoorOpen,
  Dumbbell,
  Footprints,
  GraduationCap,
  House,
  type LucideIcon,
  Medal,
  Wheat,
} from "lucide-react";
import {
  type IconId,
  type ServiceCategory,
  type ServiceHubCard,
  servicesHub,
} from "@/content/services-hub";
import { ServiceCard } from "@coequipattes/ui/components/service-card";
import { SectionHeader } from "./section-header";

const CATEGORIES: {
  id: ServiceCategory;
  heading: string;
  iconId: IconId;
}[] = [
  { id: "chien", heading: "Pour votre chien", iconId: "dog" },
  { id: "chat", heading: "Pour votre chat", iconId: "cat" },
  { id: "cheval", heading: "Pour votre cheval", iconId: "horse" },
];

// Icônes : lucide-react pour tous les glyphes. lucide n'a pas d'icône
// équestre, donc l'univers cheval utilise `Wheat` (foin/écurie), thématique
// et cohérent avec le trait fin du reste. La couleur suit `currentColor`
// (donc `text-*`) et la taille vient de `className` ou du conteneur
// (IconMedallion force `size-5`).
const LUCIDE_BY_ID: Partial<Record<IconId, LucideIcon>> = {
  dog: Dog,
  cat: Cat,
  horse: Wheat,
  walk: Footprints,
  visit: DoorOpen,
  livein: BedDouble,
  boarding: House,
  lesson: GraduationCap,
  training: Dumbbell,
  care: Brush,
  competition: Medal,
  galop: BadgeCheck,
};

function ServiceIcon({ id, className }: { id: IconId; className?: string }) {
  const Icon = LUCIDE_BY_ID[id];
  if (!Icon) return null;
  return <Icon className={className} strokeWidth={1.6} aria-hidden="true" />;
}

function HubCard({ card }: { card: ServiceHubCard }) {
  const priced = Boolean(card.price);
  const hasPage = card.href.startsWith("/");
  // Page dédiée -> "Découvrir" ; prix mais pas de page -> "Réserver" (vers
  // le contact) ; pas de prix -> "Demander le tarif".
  const cta = hasPage ? "Découvrir" : priced ? "Réserver" : "Demander le tarif";
  return (
    <ServiceCard
      icon={<ServiceIcon id={card.iconId} className="text-primary" />}
      title={card.title}
      teaser={card.teaser}
      price={card.price}
      href={card.href}
      cta={cta}
      className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
    />
  );
}

export function ServicesHub() {
  // Note "sur devis" : visible s'il existe au moins une prestation sans tarif
  // fixe (pas de prix + pas de page dédiée).
  const surDevis = servicesHub.some(
    (card) => !card.price && !card.href.startsWith("/"),
  );

  return (
    <section id="services" className="relative bg-background px-6 py-16 md:py-24">
      {/* Halo de fond très léger pour donner de la profondeur */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-12 mx-auto h-[480px] max-w-[1100px] bg-[radial-gradient(ellipse_at_center,var(--blush)_0%,transparent_60%)] opacity-50"
      />

      <div className="relative mx-auto max-w-[1200px]">
        <SectionHeader
          label="Mes services"
          title={
            <>
              <span className="block">Comment je peux</span>
              <span className="text-primary">vous aider</span>
            </>
          }
          subtitle="Chien, chat ou cheval : je m'occupe des trois, avec la même attention, à Vannes et alentours."
        />

        {/* Les trois univers sont affichés côte à côte (plus de filtre par
            défaut sur un seul animal) : le visiteur voit d'emblée que je
            propose des prestations pour chiens, chats ET chevaux. */}
        <div className="space-y-14 md:space-y-20">
          {CATEGORIES.map((cat) => {
            const cards = servicesHub.filter((c) => c.category === cat.id);
            if (cards.length === 0) return null;
            return (
              <div key={cat.id}>
                <div className="mb-8 flex items-center justify-center gap-4 md:mb-10">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blush">
                    <ServiceIcon
                      id={cat.iconId}
                      className="h-7 w-7 text-primary"
                    />
                  </span>
                  <div className="text-left">
                    <h3 className="font-display text-2xl leading-tight text-foreground md:text-3xl">
                      {cat.heading}
                    </h3>
                    <p className="text-[0.8rem] font-semibold uppercase tracking-[2px] text-primary">
                      {cards.length} prestation{cards.length > 1 ? "s" : ""}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap content-start justify-center gap-6">
                  {cards.map((card) => (
                    <HubCard key={card.slug} card={card} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {surDevis && (
          <p className="mx-auto mt-12 max-w-[640px] text-center text-[0.85rem] leading-relaxed text-muted-foreground">
            <span className="font-semibold text-primary">
              Demander le tarif ?
            </span>{" "}
            Pour certaines prestations, le prix dépend des besoins de
            l&apos;animal, du lieu et de la durée. Contactez-moi pour une
            estimation personnalisée.
          </p>
        )}
      </div>
    </section>
  );
}
