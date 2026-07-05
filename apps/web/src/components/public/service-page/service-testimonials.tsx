import { ReviewCard } from "@coequipattes/ui/components/review-card";
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
            <ReviewCard
              key={`${r.authorName}-${r.text.slice(0, 40)}`}
              rating={r.rating}
              quote={r.text}
              author={r.authorName}
              meta={r.context}
              initials={r.authorInitials}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
