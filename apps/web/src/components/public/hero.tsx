import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "@coequipattes/ui/components/button";
import { MediaFrame } from "@coequipattes/ui/components/media-frame";

const ScrollArrow = () => (
  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary/30 bg-background/60 backdrop-blur-sm">
    <ArrowDown
      className="w-5 h-5 text-primary/70"
      strokeWidth={1.8}
      aria-hidden="true"
    />
  </div>
);

export function Hero() {
  const [arrowVisible, setArrowVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setArrowVisible(window.scrollY < 60);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="about"
      className="relative overflow-hidden lg:min-h-[100svh] lg:flex lg:items-center"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,var(--blush)_0%,transparent_55%),radial-gradient(ellipse_at_85%_15%,var(--blush)_0%,transparent_50%),var(--background)]"
      />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 lg:px-16">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center lg:pt-[100px] lg:pb-16">

          {/* Colonne image — mobile : premier écran plein avec image + h1 */}
          <div className="lg:col-span-5 lg:order-2 animate-[fadeInUp_0.9s_var(--transition)]">
            <div className="relative min-h-[100dvh] flex flex-col items-center justify-center gap-6 pt-[100px] pb-24 lg:min-h-0 lg:block lg:pt-0 lg:pb-0 lg:gap-0">

              {/* Scroll indicator — mobile uniquement */}
              <div
                aria-hidden="true"
                className={`fixed bottom-4 left-1/2 -translate-x-1/2 z-40 lg:hidden animate-bounce transition-opacity duration-500 ${arrowVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
              >
                <ScrollArrow />
              </div>

              <div className="w-full max-w-[230px] sm:max-w-[300px] lg:max-w-none">
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

              {/* H1 — mobile uniquement */}
              <div className="text-center lg:hidden">
                <p className="font-accent text-primary text-2xl mb-2">
                  Bonjour, je suis
                </p>
                <h1 className="font-display leading-[1.05]">
                  <span className="block text-primary text-5xl">Manon</span>
                  <span className="block text-foreground text-xl font-normal mt-3 leading-snug">
                    Votre partenaire équestre et animalier
                    <br /> dans la région Vannetaise
                  </span>
                </h1>
              </div>
            </div>
          </div>

          {/* Colonne texte */}
          <div className="lg:col-span-7 lg:order-1 text-center lg:text-left pb-16 lg:pb-0 animate-[fadeInUp_1.1s_var(--transition)]">

            {/* H1 — desktop uniquement */}
            <div className="hidden lg:block mb-5 lg:mb-10">
              <p className="font-accent text-primary text-3xl mb-3 lg:mb-5">
                Bonjour, je suis
              </p>
              <h1 className="font-display leading-[1.05] mb-6 lg:mb-8">
                <span className="block text-primary text-7xl lg:text-[5.5rem]">
                  Manon
                </span>
                <span className="block text-foreground text-2xl lg:text-[1.75rem] font-normal mt-4 lg:mt-6 leading-snug">
                  Votre partenaire équestre et animalier
                  <br /> dans la région Vannetaise
                </span>
              </h1>
            </div>

            <div className="max-w-[600px] mx-auto lg:mx-0 mb-8 md:mb-10 lg:mb-12">
              <h2 className="font-display text-xl md:text-2xl text-primary mb-4 md:mb-5 lg:mb-7">
                Une approche douce, humaine et passionnée
              </h2>
              <p className="text-base md:text-[1.05rem] text-foreground/90 leading-[1.8] mb-4 lg:mb-7 text-justify lg:text-left hyphens-auto">
                Pour vos animaux de compagnie, je deviens votre{" "}
                <strong className="text-primary font-semibold">
                  relais de confiance
                </strong>
                , que ce soit pour une visite à domicile, une balade, une garde
                à domicile ou une pension privative. Leurs habitudes, leurs
                petites manies, ce qui les rassure ou les anime : j&apos;y fais
                autant attention que vous. Pas une gardienne de passage&nbsp;:{" "}
                <strong className="text-primary font-semibold">
                  quelqu&apos;un qui prend soin d&apos;eux comme si
                  c&apos;était les siens.
                </strong>
              </p>
              <p className="text-base md:text-[1.05rem] text-foreground/90 leading-[1.8] text-justify lg:text-left hyphens-auto">
                Côté équitation, j&apos;accompagne cavaliers et cavalières de
                tous niveaux dans une approche{" "}
                <strong className="text-primary font-semibold">
                  respectueuse du cheval
                </strong>
                , fondée sur l&apos;écoute, la douceur et le plaisir de
                progresser ensemble,{" "}
                <strong className="text-primary font-semibold">
                  à votre rythme
                </strong>
                .
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

      {/* Scroll indicator — desktop uniquement, ancré en bas de la section */}
      <div
        aria-hidden="true"
        className={`absolute bottom-4 left-1/2 -translate-x-1/2 hidden lg:block animate-bounce transition-opacity duration-500 ${arrowVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <ScrollArrow />
      </div>
    </section>
  );
}
