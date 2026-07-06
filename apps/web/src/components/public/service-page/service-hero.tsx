import { Button } from "@coequipattes/ui/components/button";
import { MediaFrame } from "@coequipattes/ui/components/media-frame";
import type { ServicePageData } from "@/content/service-pages/types";

export function ServiceHero({ data }: { data: ServicePageData }) {
  const { h1, baseline, image, imageAlt } = data.hero;
  const isPlaceholder = image.startsWith("TODO");

  return (
    <section className="relative overflow-hidden pt-[120px] pb-16 md:pb-24 px-6">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,var(--blush)_0%,transparent_55%),radial-gradient(ellipse_at_80%_20%,var(--blush)_0%,transparent_50%),var(--background)]" />
      <div className="max-w-[1200px] mx-auto relative grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-15 items-center">
        <div>
          <h1 className="font-display text-3xl md:text-[3rem] font-bold text-foreground mb-5 leading-[1.15]">
            {h1}
          </h1>
          <p className="text-[1.1rem] md:text-[1.2rem] text-muted-foreground leading-[1.7] mb-8">
            {baseline}
          </p>
          <div className="inline-flex gap-4 flex-wrap">
            <Button asChild size="lg">
              <a href="#contact">Me contacter</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#tarifs">Voir les tarifs</a>
            </Button>
          </div>
        </div>
        <MediaFrame className="h-[320px] md:h-[440px]">
          {isPlaceholder ? (
            <div className="absolute inset-0 flex items-center justify-center text-primary text-sm p-6 text-center">
              {image}
            </div>
          ) : (
            <img
              src={image}
              alt={imageAlt}
              loading="eager"
              className="absolute inset-0 h-full w-full object-cover"
            />
          )}
        </MediaFrame>
      </div>
    </section>
  );
}
