import type { ServicePageData } from "@/content/service-pages/types";
import { SectionHeader } from "../section-header";

export function ServiceBenefits({ data }: { data: ServicePageData }) {
  return (
    <section className="py-16 md:py-25 px-6">
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader
          label="Pourquoi me choisir"
          title="Une approche dédiée à votre tranquillité"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {data.benefits.map((b) => (
            <div
              key={b.title}
              className="bg-black-card border border-pink/10 rounded-2xl p-6 md:p-8 hover:-translate-y-1 hover:border-pink hover:shadow-[0_15px_40px_rgba(255,165,201,0.12)] transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-3">
                {b.title}
              </h3>
              <p className="text-gray-light leading-[1.7]">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
