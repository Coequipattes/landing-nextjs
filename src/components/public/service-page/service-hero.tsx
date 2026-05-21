import Image from "next/image";
import type { ServicePageData } from "@/content/service-pages/types";

export function ServiceHero({ data }: { data: ServicePageData }) {
  const { h1, baseline, image, imageAlt } = data.hero;
  const isPlaceholder = image.startsWith("TODO");

  return (
    <section className="relative overflow-hidden pt-[120px] pb-16 md:pb-24 px-6">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(255,165,201,0.12)_0%,transparent_55%),radial-gradient(ellipse_at_80%_20%,rgba(255,165,201,0.08)_0%,transparent_50%),var(--black)]" />
      <div className="max-w-[1200px] mx-auto relative grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-15 items-center">
        <div>
          <h1 className="font-display text-3xl md:text-[3rem] font-bold text-white mb-5 leading-[1.15]">
            {h1}
          </h1>
          <p className="text-[1.1rem] md:text-[1.2rem] text-gray-light leading-[1.7] mb-8">
            {baseline}
          </p>
          <div className="inline-flex gap-4 flex-wrap">
            <a
              href="#contact"
              className="px-9 py-3.5 rounded-full font-semibold text-[0.95rem] uppercase tracking-[1px] bg-pink text-black hover:bg-white hover:-translate-y-[2px] hover:shadow-[0_8px_25px_var(--pink-glow)] transition-all duration-300"
            >
              Me contacter
            </a>
            <a
              href="#tarifs"
              className="px-9 py-3.5 rounded-full font-semibold text-[0.95rem] uppercase tracking-[1px] bg-transparent text-white border-2 border-pink hover:bg-pink hover:text-black hover:-translate-y-[2px] transition-all duration-300"
            >
              Voir les tarifs
            </a>
          </div>
        </div>
        <div className="relative h-[320px] md:h-[440px] rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
          {isPlaceholder ? (
            <div className="absolute inset-0 flex items-center justify-center bg-black-card border border-pink/20 text-pink text-sm p-6 text-center">
              {image}
            </div>
          ) : (
            <Image
              src={image}
              alt={imageAlt}
              fill
              priority
              className="object-cover"
            />
          )}
        </div>
      </div>
    </section>
  );
}
