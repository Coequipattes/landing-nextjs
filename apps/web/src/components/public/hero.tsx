import Image from "next/image";
import { Button } from "@coequipattes/ui/components/button";

export function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center overflow-hidden pt-[110px] pb-16 md:pt-[128px] md:pb-20 px-6"
    >
      {/* Background ambient gradients — préserve l'identité existante */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(255,165,201,0.10)_0%,transparent_55%),radial-gradient(ellipse_at_85%_15%,rgba(255,165,201,0.08)_0%,transparent_50%),radial-gradient(ellipse_at_50%_50%,rgba(255,165,201,0.03)_0%,transparent_70%),var(--black)]"
      />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Visual — first on mobile (above text), right on desktop */}
          <div className="order-1 lg:order-2 lg:col-span-5 animate-[fadeInUp_0.9s_var(--transition)]">
            <div className="relative mx-auto w-full max-w-[420px] lg:max-w-none">
              {/* Decorative offset frames — cohérence avec About */}
              <div
                aria-hidden="true"
                className="hidden md:block absolute -top-4 -right-4 left-6 bottom-6 border border-pink/25 rounded-3xl"
              />
              <div
                aria-hidden="true"
                className="hidden md:block absolute -top-2 -right-2 left-3 bottom-3 border border-pink/10 rounded-3xl"
              />
              {/* Glow halo */}
              <div
                aria-hidden="true"
                className="absolute -inset-6 bg-[radial-gradient(ellipse_at_center,var(--pink-glow)_0%,transparent_65%)] blur-2xl opacity-60 pointer-events-none"
              />

              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.55)] ring-1 ring-pink/15">
                <Image
                  src="/uploads/manon.jpg"
                  alt="Manon, fondatrice de Co'équi'pattes, monitrice d'équitation et pet sitter à Vannes"
                  fill
                  preload
                  fetchPriority="high"
                  sizes="(max-width: 1024px) 90vw, 460px"
                  className="object-cover object-[center_20%]"
                />
                {/* Subtle bottom vignette to reinforce text legibility on small screens */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
                />
              </div>
            </div>
          </div>

          {/* Text + CTAs */}
          <div className="order-2 lg:order-1 lg:col-span-7 text-center lg:text-left animate-[fadeInUp_1.1s_var(--transition)]">
            <p className="font-accent text-pink text-2xl md:text-3xl mb-2 md:mb-3">
              Bonjour, moi c&apos;est
            </p>

            <h1 className="font-display leading-[1.05] mb-5 md:mb-6">
              <span className="block text-pink text-5xl md:text-7xl lg:text-[5.5rem] drop-shadow-[0_8px_25px_var(--pink-glow)]">
                Manon
              </span>
              <span className="block text-white-soft text-xl md:text-2xl lg:text-[1.75rem] font-normal mt-3 md:mt-4 leading-snug">
                votre pet sitter &amp; monitrice
                <br className="hidden md:block" /> d&apos;équitation à Vannes
              </span>
            </h1>

            <div className="max-w-[600px] mx-auto lg:mx-0 mb-8 md:mb-10">
              <h2 className="font-display text-xl md:text-2xl text-pink mb-4 md:mb-5">
                Une approche douce, humaine et passionnée
              </h2>
              <p className="text-base md:text-[1.05rem] text-gray-light leading-[1.8] mb-4">
                Côté équitation, j&apos;accompagne cavaliers et cavalières de
                tous niveaux dans une approche respectueuse du cheval, basée sur
                l&apos;écoute, la progression en douceur et le plaisir de
                partager. Mon objectif est de vous aider à développer une
                relation harmonieuse avec votre monture, dans la confiance et la
                compréhension.
              </p>
              <p className="text-base md:text-[1.05rem] text-gray-light leading-[1.8]">
                En parallèle, je prends soin de vos animaux de compagnie lors de
                vos absences. Que ce soit pour des visites à domicile, des
                promenades ou une présence rassurante,{" "}
                <strong className="text-pink font-semibold">
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
            <ul className="mt-8 md:mt-10 flex flex-wrap gap-x-5 gap-y-2 justify-center lg:justify-start text-[0.85rem] text-gray-light">
              <li className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="inline-block w-1.5 h-1.5 rounded-full bg-pink"
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
