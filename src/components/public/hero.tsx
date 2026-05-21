import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-[90px] pb-12 md:pt-[110px] md:pb-20 px-6">
      {/* Background ambient gradients — préserve l'identité existante */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(255,165,201,0.10)_0%,transparent_55%),radial-gradient(ellipse_at_85%_15%,rgba(255,165,201,0.08)_0%,transparent_50%),radial-gradient(ellipse_at_50%_50%,rgba(255,165,201,0.03)_0%,transparent_70%),var(--black)]"
      />

      <div className="relative z-10 max-w-[1200px] mx-auto">
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

            <p className="text-base md:text-lg text-gray-light leading-relaxed max-w-[560px] mx-auto lg:mx-0 mb-8 md:mb-10">
              Diplômée, passionnée et installée dans le Morbihan, je prends soin
              de vos compagnons avec la même attention que s&apos;ils étaient
              les miens.{" "}
              <span className="text-white-soft">
                N&apos;ayant pas d&apos;animal personnel, je leur consacre 100%
                de mon temps.
              </span>
            </p>

            <div className="flex flex-wrap gap-3 md:gap-4 justify-center lg:justify-start">
              <a
                href="#services"
                className="px-8 md:px-9 py-3.5 rounded-full font-semibold text-[0.95rem] uppercase tracking-[1px] bg-pink text-black hover:bg-white hover:-translate-y-[2px] hover:shadow-[0_8px_25px_var(--pink-glow)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-all duration-300"
              >
                Voir mes services
              </a>
              <a
                href="#contact"
                className="px-8 md:px-9 py-3.5 rounded-full font-semibold text-[0.95rem] uppercase tracking-[1px] bg-transparent text-white border-2 border-pink hover:bg-pink hover:text-black hover:-translate-y-[2px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-all duration-300"
              >
                Prendre contact
              </a>
            </div>

            {/* Trust signals — subtle line under CTAs */}
            <ul className="mt-8 md:mt-10 flex flex-wrap gap-x-5 gap-y-2 justify-center lg:justify-start text-[0.85rem] text-gray-light">
              <li className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="inline-block w-1.5 h-1.5 rounded-full bg-pink"
                />
                Certifiée France Petsitters
              </li>
              <li className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="inline-block w-1.5 h-1.5 rounded-full bg-pink"
                />
                Vannes &amp; 10 km alentours
              </li>
              <li className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="inline-block w-1.5 h-1.5 rounded-full bg-pink"
                />
                Assurée pro
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
