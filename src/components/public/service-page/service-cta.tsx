import type { ServicePageData } from "@/content/service-pages/types";

export function ServiceCta({ data }: { data: ServicePageData }) {
  return (
    <section className="py-20 md:py-28 px-6 bg-gradient-to-b from-black-soft to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(255,165,201,0.1)_0%,transparent_60%)] pointer-events-none" />
      <div className="max-w-[800px] mx-auto text-center relative">
        <h2 className="font-display text-2xl md:text-[2.4rem] font-bold text-white mb-5 leading-[1.2]">
          {data.cta.headline}
        </h2>
        <p className="text-[1.1rem] text-gray-light mb-10 leading-[1.7]">
          {data.cta.subline}
        </p>
        <div className="inline-flex gap-4 flex-wrap justify-center">
          <a
            href="#contact"
            className="px-9 py-3.5 rounded-full font-semibold text-[0.95rem] uppercase tracking-[1px] bg-pink text-black hover:bg-white hover:-translate-y-[2px] hover:shadow-[0_8px_25px_var(--pink-glow)] transition-all duration-300"
          >
            Me contacter
          </a>
          <a
            href="tel:+33766744337"
            className="px-9 py-3.5 rounded-full font-semibold text-[0.95rem] uppercase tracking-[1px] bg-transparent text-white border-2 border-pink hover:bg-pink hover:text-black hover:-translate-y-[2px] transition-all duration-300"
          >
            Appeler
          </a>
        </div>
      </div>
    </section>
  );
}
