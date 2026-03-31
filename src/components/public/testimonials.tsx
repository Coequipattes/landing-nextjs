import { SectionHeader } from "./section-header";

type Review = {
  text: string;
  authorName: string;
  authorInitials: string;
  context: string;
  visible?: boolean;
};

export function Testimonials({ reviews }: { reviews: Review[] }) {
  const visible = reviews.filter((r) => r.visible !== false);

  return (
    <section id="temoignages" className="py-16 md:py-25 px-6">
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader
          label="Témoignages"
          title="Ce que disent mes clients"
        />

        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide px-1">
          {visible.map((review) => (
            <div
              key={review.authorName}
              className="bg-black-card border border-pink/10 rounded-2xl p-6 md:p-10 w-[85vw] min-w-0 max-w-[500px] shrink-0 snap-center hover:border-pink/30 transition-colors duration-300"
            >
              <div className="text-pink text-6xl font-display leading-none mb-4">
                "
              </div>
              <p className="text-gray-light leading-[1.8] mb-8 text-[0.95rem]">
                {review.text}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-pink/20 flex items-center justify-center text-pink font-bold text-sm">
                  {review.authorInitials}
                </div>
                <div>
                  <h4 className="text-white font-semibold">
                    {review.authorName}
                  </h4>
                  <p className="text-gray text-sm">{review.context}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
