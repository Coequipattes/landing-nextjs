import Image from "next/image";
import { SectionHeader } from "./section-header";

export function About() {
  return (
    <section
      id="about"
      className="py-16 md:py-25 px-6 bg-gradient-to-b from-black to-black-soft"
    >
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader
          label="Qui suis-je"
          title="Manon, votre alliée équestre et animalière"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-15 items-center">
          {/* Image placeholder */}
          <div className="relative">
            <div className="absolute -top-5 -left-5 right-5 bottom-5 border-3 border-pink rounded-2xl z-1 hidden md:block" />
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden z-2 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
              <Image
                src="/uploads/manon.jpg"
                alt="Manon avec un cheval"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <h3 className="font-display text-xl md:text-2xl text-pink mb-6">
              Une approche douce, humaine et passionnée
            </h3>
            <p className="text-[1.05rem] text-gray-light mb-5 leading-[1.8]">
              Côté équitation, j'accompagne cavaliers et cavalières de tous
              niveaux dans une approche respectueuse du cheval, basée sur
              l'écoute, la progression en douceur et le plaisir de partager. Mon
              objectif est de vous aider à développer une relation harmonieuse
              avec votre monture, dans la confiance et la compréhension.
            </p>
            <p className="text-[1.05rem] text-gray-light mb-5 leading-[1.8]">
              En parallèle, je prends soin de vos animaux de compagnie lors de
              vos absences. Que ce soit pour des visites à domicile, des
              promenades ou une présence rassurante,{" "}
              <strong className="text-pink">
                n'ayant pas d'animal personnel, je peux consacrer 100% de mon
                attention à vos compagnons
              </strong>{" "}
              afin d'offrir un service sur-mesure et entièrement dédié à leurs
              besoins.
            </p>
            <p className="text-gray-light text-[0.95rem] mt-5 italic">
              Assurée professionnellement et certifiée France Petsitters pour
              votre sérénité.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
