import { SectionHeader } from "./section-header";

export function About() {
  return (
    <section
      id="about"
      className="py-16 md:py-25 px-6 bg-gradient-to-b from-black to-black-soft relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse,rgba(255,165,201,0.04)_0%,transparent_65%)] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative">
        <SectionHeader
          label="Qui suis-je"
          title="Manon, votre alliée équestre et animalière"
        />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-12 items-stretch">
          {/* Carte "lettre manuscrite" — remplace la photo dominante pour
              éviter la duplication visuelle avec le Hero. Accent visuel via
              citation Caveat + signature + paw-pattern. */}
          <aside
            aria-label="Mot de Manon"
            className="md:col-span-2 relative rounded-2xl border border-pink/20 bg-gradient-to-br from-pink/[0.06] to-transparent p-8 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.4)] overflow-hidden"
          >
            {/* Subtle paw watermark (SVG, no emoji) */}
            <svg
              aria-hidden="true"
              viewBox="0 0 64 64"
              className="absolute -top-4 -right-4 w-32 h-32 text-pink/10"
              fill="currentColor"
            >
              <circle cx="20" cy="18" r="6" />
              <circle cx="44" cy="18" r="6" />
              <circle cx="10" cy="34" r="6" />
              <circle cx="54" cy="34" r="6" />
              <path d="M32 26c-9 0-16 7-16 14 0 6 5 10 16 10s16-4 16-10c0-7-7-14-16-14Z" />
            </svg>

            <p className="font-accent text-pink text-3xl md:text-4xl leading-[1.15] mb-6">
              « Je n&apos;ai pas d&apos;animal personnel — c&apos;est un choix.
              Comme ça, mon attention va entièrement à ceux dont on me confie la
              garde. »
            </p>

            <div className="flex items-center gap-3">
              <div
                aria-hidden="true"
                className="h-px flex-1 bg-gradient-to-r from-pink/40 to-transparent"
              />
              <span className="font-accent text-pink text-2xl">Manon</span>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "Assurée pro",
                "Certifiée France Petsitters",
                "Vannes & 10 km",
              ].map((text) => (
                <span
                  key={text}
                  className="px-3 py-1.5 rounded-full border border-pink/20 bg-pink/5 text-[0.8rem] text-gray-light"
                >
                  {text}
                </span>
              ))}
            </div>
          </aside>

          <div className="md:col-span-3">
            <h3 className="font-display text-xl md:text-2xl text-pink mb-6">
              Une approche douce, humaine et passionnée
            </h3>
            <p className="text-[1.05rem] text-gray-light mb-5 leading-[1.8]">
              Côté équitation, j&apos;accompagne cavaliers et cavalières de tous
              niveaux dans une approche respectueuse du cheval, basée sur
              l&apos;écoute, la progression en douceur et le plaisir de
              partager. Mon objectif est de vous aider à développer une relation
              harmonieuse avec votre monture, dans la confiance et la
              compréhension.
            </p>
            <p className="text-[1.05rem] text-gray-light leading-[1.8]">
              En parallèle, je prends soin de vos animaux de compagnie lors de
              vos absences. Que ce soit pour des visites à domicile, des
              promenades ou une présence rassurante,{" "}
              <strong className="text-pink">
                n&apos;ayant pas d&apos;animal personnel, je peux consacrer 100%
                de mon attention à vos compagnons
              </strong>{" "}
              afin d&apos;offrir un service sur-mesure et entièrement dédié à
              leurs besoins.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
