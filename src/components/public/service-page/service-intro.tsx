import type { ServicePageData } from "@/content/service-pages/types";

export function ServiceIntro({ data }: { data: ServicePageData }) {
  return (
    <section className="py-16 md:py-20 px-6 bg-black-soft">
      <div className="max-w-[800px] mx-auto space-y-5">
        {data.intro.paragraphs.map((p) => (
          <p key={p} className="text-[1.05rem] text-gray-light leading-[1.8]">
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}
