import type { ServicePageData } from "@/content/service-pages/types";
import { SectionHeader } from "../section-header";

type Review = {
  text: string;
  authorName: string;
  authorInitials: string;
  context: string;
  rating: number;
  visible?: boolean;
};

export function ServiceTestimonials({
  data,
  reviews,
}: {
  data: ServicePageData;
  reviews: Review[];
}) {
  const filtered = reviews
    .filter((r) => r.visible !== false)
    .filter((r) =>
      data.testimonialKeywords.some((kw) =>
        r.text.toLowerCase().includes(kw.toLowerCase()),
      ),
    )
    .slice(0, 3);

  if (filtered.length === 0) return null;

  return (
    <section className="py-16 md:py-25 px-6">
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader label="Témoignages" title="Ils m'ont fait confiance" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {filtered.map((r) => (
            <article
              key={`${r.authorName}-${r.text.slice(0, 40)}`}
              className="bg-black-card border border-pink/10 rounded-2xl p-6 md:p-8"
            >
              <p className="text-pink mb-3">
                <span className="sr-only">{`Note : ${r.rating} sur 5`}</span>
                <span aria-hidden="true">
                  {"★".repeat(Math.round(r.rating))}
                </span>
              </p>
              <p className="text-gray-light leading-[1.7] mb-4 italic">
                « {r.text} »
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-pink/20 flex items-center justify-center text-pink font-bold text-xs shrink-0">
                  {r.authorInitials}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold leading-tight">
                    {r.authorName}
                  </p>
                  {r.context && (
                    <p className="text-gray text-xs">{r.context}</p>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
