import { getPriceCardBySlug } from "@/content/pricing-data";
import type { ServicePageData } from "@/content/service-pages/types";
import { SectionHeader } from "../section-header";

export function ServicePricing({ data }: { data: ServicePageData }) {
  const cards = data.pricing.cardSlugs
    .map((slug) => getPriceCardBySlug(slug))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  return (
    <section
      id="tarifs"
      className="py-16 md:py-25 px-6 bg-gradient-to-b from-black to-black-soft"
    >
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader
          label="Tarifs"
          title="Des offres transparentes"
          subtitle={data.pricing.highlight}
        />
        <div className="flex flex-wrap justify-center gap-8">
          {cards.map((card) => (
            <div
              key={card.slug}
              className={`bg-black-card border-2 rounded-3xl p-8 md:p-10 text-center transition-all duration-400 relative overflow-hidden hover:-translate-y-2 hover:border-pink hover:shadow-[0_20px_50px_rgba(255,165,201,0.2)] w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.334rem)] max-w-md ${
                card.featured ? "border-pink scale-105" : "border-pink/10"
              }`}
            >
              {card.featured && (
                <div className="absolute top-5 -right-9 bg-pink text-black px-10 py-1 text-[0.75rem] font-bold tracking-[1px] rotate-45">
                  POPULAIRE
                </div>
              )}
              <h3 className="text-xl md:text-[1.8rem] text-white mb-4">
                {card.title}
              </h3>
              <div className="font-display text-3xl md:text-[3rem] font-bold text-pink my-5">
                {card.price}
                {card.unit && (
                  <small className="text-[1.2rem] text-gray font-normal">
                    {card.unit}
                  </small>
                )}
              </div>
              <p className="text-gray-light mb-8 leading-relaxed">
                {card.description}
              </p>
              <ul className="text-left mb-8 space-y-0">
                {card.features.map((f) => (
                  <li
                    key={f}
                    className="py-3 text-gray-light flex items-center gap-3 border-b border-pink/5 last:border-b-0"
                  >
                    <span className="text-pink font-bold text-[1.2rem] shrink-0">
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="block w-full py-3.5 rounded-full font-semibold text-[0.95rem] uppercase tracking-[1px] bg-pink text-black hover:bg-white hover:-translate-y-[2px] hover:shadow-[0_8px_25px_var(--pink-glow)] transition-all duration-300 text-center"
              >
                Réserver
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
