import { Button } from "@coequipattes/ui/components/button";
import { MediaFrame } from "@coequipattes/ui/components/media-frame";

export function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center overflow-hidden pt-[110px] pb-16 md:pt-[128px] md:pb-20 px-6"
    >
      {/* Background — crème chaleureux + touches blush douces (zéro noir) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,var(--blush)_0%,transparent_55%),radial-gradient(ellipse_at_85%_15%,var(--blush)_0%,transparent_50%),var(--background)]"
      />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Visual — first on mobile (above text), right on desktop */}
          <div className="order-1 lg:order-2 lg:col-span-5 animate-[fadeInUp_0.9s_var(--transition)]">
            <div className="relative mx-auto w-full max-w-[420px] lg:max-w-none">
              <MediaFrame
                ratio="4/5"
                framed
                focus="center 20%"
                className="rounded-3xl"
              >
                <img
                  src="/uploads/manon.jpg"
                  alt="Manon, fondatrice de Co'équi'pattes, monitrice d'équitation et pet sitter à Vannes"
                  loading="eager"
                  fetchPriority="high"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </MediaFrame>
            </div>
          </div>

          {/* Text + CTAs */}
          <div className="order-2 lg:order-1 lg:col-span-7 text-center lg:text-left animate-[fadeInUp_1.1s_var(--transition)]">
            <p className="font-accent text-primary text-2xl md:text-3xl mb-2 md:mb-3">
              Bonjour, moi c&apos;est
            </p>

            <h1 className="font-display leading-[1.05] mb-5 md:mb-6">
              <span className="block text-primary text-5xl md:text-7xl lg:text-[5.5rem]">
                Manon
              </span>
              <span className="block text-foreground text-xl md:text-2xl lg:text-[1.75rem] font-normal mt-3 md:mt-4 leading-snug">
                votre pet sitter &amp; monitrice
                <br className="hidden md:block" /> d&apos;équitation à Vannes
              </span>
            </h1>

            <div className="max-w-[600px] mx-auto lg:mx-0 mb-8 md:mb-10">
              <h2 className="font-display text-xl md:text-2xl text-primary mb-4 md:mb-5">
                Une approche douce, humaine et passionnée
              </h2>
              <p className="text-base md:text-[1.05rem] text-foreground/90 leading-[1.8] mb-4">
                Côté équitation, j&apos;accompagne cavaliers et cavalières de
                tous niveaux dans une approche respectueuse du cheval, basée sur
                l&apos;écoute, la progression en douceur et le plaisir de
                partager. Mon objectif est de vous aider à développer une
                relation harmonieuse avec votre monture, dans la confiance et la
                compréhension.
              </p>
              <p className="text-base md:text-[1.05rem] text-foreground/90 leading-[1.8]">
                En parallèle, je prends soin de vos animaux de compagnie lors de
                vos absences. Que ce soit pour des visites à domicile, des
                promenades ou une présence rassurante,{" "}
                <strong className="text-primary font-semibold">
                  n&apos;ayant pas d&apos;animal personnel, je peux consacrer
                  100&nbsp;% de mon attention à vos compagnons
                </strong>{" "}
                afin d&apos;offrir un service sur-mesure et entièrement dédié à
                leurs besoins.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 md:gap-4 justify-center lg:justify-start">
              <Button asChild size="lg">
                <a href="#services">Voir mes services</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#contact">Prendre contact</a>
              </Button>
            </div>

            {/* Trust signals — subtle line under CTAs */}
            <ul className="mt-8 md:mt-10 flex flex-wrap gap-x-5 gap-y-2 justify-center lg:justify-start text-[0.85rem] text-muted-foreground">
              <li className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="inline-block w-1.5 h-1.5 rounded-full bg-primary"
                />
                Vannes et alentours
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
