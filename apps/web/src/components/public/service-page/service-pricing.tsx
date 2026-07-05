import { PriceCard } from "@coequipattes/ui/components/price-card";
import { getPriceCardBySlug } from "@/content/pricing-data";
import type { ServicePageData } from "@/content/service-pages/types";
import { SectionHeader } from "../section-header";

export function ServicePricing({ data }: { data: ServicePageData }) {
  const cards = data.pricing.cardSlugs
    .map((slug) => getPriceCardBySlug(slug))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));
  // Note "haute saison" affichée seulement si un tarif marqué d'un * existe.
  const hasSeasonalPricing = cards.some(
    (c) => c.price.includes("*") || c.features.some((f) => f.includes("*")),
  );

  return (
    <section
      id="tarifs"
      className="py-16 md:py-25 px-6 bg-secondary"
    >
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader
          label="Tarifs"
          title="Des offres transparentes"
          subtitle={data.pricing.highlight}
        />
        <div className="flex flex-wrap justify-center gap-8">
          {cards.map((card) => (
            <PriceCard
              key={card.slug}
              title={card.title}
              price={
                <>
                  {card.price}
                  {card.unit && (
                    <small className="text-[1.2rem] font-normal text-muted-foreground">
                      {card.unit}
                    </small>
                  )}
                </>
              }
              subtitle={card.description}
              features={card.features}
              href="#contact"
              popular={card.featured}
              className="w-full max-w-md sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.334rem)]"
            />
          ))}
        </div>
        {hasSeasonalPricing && (
          <p className="mt-8 text-center text-sm text-muted-foreground">
            * Tarif haute saison : du 1er juillet au 31 août et du 24 décembre
            au 2 janvier.
          </p>
        )}
      </div>
    </section>
  );
}
