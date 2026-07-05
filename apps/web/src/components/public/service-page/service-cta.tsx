import { Button } from "@coequipattes/ui/components/button";
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
          <Button asChild size="lg">
            <a href="#contact">Me contacter</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="tel:+33766744337">Appeler</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
