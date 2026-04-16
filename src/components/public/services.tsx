"use client";

import { useEffect, useRef, useState } from "react";
import { SectionHeader } from "./section-header";

type Service = {
  icon: string;
  title: string;
  description: string;
  features: string[];
};

const equitation: Service[] = [
  {
    icon: "📖",
    title: "Cours particuliers",
    description:
      "Un accompagnement bienveillant et personnalisé pour progresser en toute confiance, dans le respect du cheval et de votre rythme.",
    features: [
      "Travail à pied ou monté",
      "1 à 2 cavaliers maximum",
      "Tous niveaux acceptés",
      "Temps adapté au cheval et cavalier",
      "Suivi pédagogique individuel",
    ],
  },
  {
    icon: "👥",
    title: "Cours collectifs",
    description:
      "Progressez ensemble dans une ambiance chaleureuse et bienveillante, où chacun trouve sa place et s'épanouit.",
    features: [
      "Groupes de 3 à 6 cavaliers",
      "Travail à pied ou monté",
      "Niveaux homogènes",
    ],
  },
  {
    icon: "⚡",
    title: "Travail de cheval",
    description:
      "Je travaille votre cheval avec attention et douceur, en respectant son rythme et ses besoins.",
    features: [
      "Travail à pied ou monté",
      "Séances adaptées au rythme de chaque cheval",
    ],
  },
];

const petsitting: Service[] = [
  {
    icon: "🏠",
    title: "Visites à domicile",
    description:
      "Je viens chez vous m'occuper de vos animaux avec tendresse et attention, comme s'ils étaient les miens.",
    features: [
      "Distribution de nourriture et d'eau",
      "Sortie hygiénique ou balade courte",
      "Jeux, câlins et stimulations adaptées",
      "Nouvelles et photos à chaque visite",
      "Durée : 30 min / 45 min / 1h ou plus",
    ],
  },
  {
    icon: "🐕",
    title: "Promenades chiens",
    description:
      "Des balades sécurisées, toujours en laisse (sauf autorisation écrite), adaptées au rythme de votre chien.",
    features: [
      "Rythme adapté au chien",
      "Respect des habitudes et consignes",
      "Prise en compte des zones à éviter",
      "Gestion fréquentation autres chiens",
      "Durée : 30 min / 45 min / 1h ou plus",
    ],
  },
];

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="bg-black-card border border-pink/10 rounded-2xl p-8 md:p-10 transition-all duration-400 relative overflow-hidden group hover:-translate-y-2 hover:border-pink hover:shadow-[0_20px_50px_rgba(255,165,201,0.15)] before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-pink before:scale-x-0 before:origin-left before:transition-transform before:duration-400 hover:before:scale-x-100">
      <div className="w-15 h-15 bg-pink/10 rounded-2xl flex items-center justify-center mb-6 text-2xl">
        {service.icon}
      </div>
      <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
        {service.title}
      </h3>
      <p className="text-gray-light leading-[1.7] mb-5">
        {service.description}
      </p>
      <ul className="mt-6 space-y-0">
        {service.features.map((f) => (
          <li
            key={f}
            className="py-2.5 text-gray-light flex items-start gap-3"
          >
            <span className="text-pink font-bold text-[1.2rem] shrink-0">
              ✓
            </span>
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Services() {
  const [tab, setTab] = useState<"equitation" | "petsitting">("equitation");
  const services = tab === "equitation" ? equitation : petsitting;
  const intro =
    tab === "equitation"
      ? "Parce que la progression passe aussi par le bien-être, j'accorde autant d'importance à l'état émotionnel du cavalier et du cheval qu'à la technique."
      : "Chaque prestation est adaptable en durée : 30 min, 45 min, 1h ou plus sur demande. Je prends le temps nécessaire pour que votre compagnon se sente en sécurité et apaisé.";
  const contentRef = useRef<HTMLDivElement>(null);
  const maxHeightRef = useRef(0);
  const [minHeight, setMinHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (!contentRef.current) return;
    const h = contentRef.current.offsetHeight;
    if (h > maxHeightRef.current) {
      maxHeightRef.current = h;
      setMinHeight(h);
    }
  }, [tab]);

  return (
    <section id="services" className="py-16 md:py-25 px-6">
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader
          label="Mes Services"
          title="Des prestations adaptées à vos besoins"
        />

        <div className="flex justify-center gap-4 mb-15 flex-wrap">
          {(["equitation", "petsitting"] as const).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              className={`px-8 py-3 rounded-full font-semibold text-[0.95rem] uppercase tracking-[1px] border-2 transition-all duration-300 cursor-pointer ${
                tab === t
                  ? "bg-pink text-black border-pink"
                  : "bg-black-card text-white border-pink/20 hover:border-pink hover:text-pink"
              }`}
            >
              {t === "equitation" ? "Équitation" : "Pet-sitting"}
            </button>
          ))}
        </div>

        <div ref={contentRef} style={{ minHeight }}>
          <p className="max-w-[800px] mx-auto text-center text-gray-light leading-[1.8] mb-12 italic text-pink">
            {intro}
          </p>

          <div className={`grid grid-cols-1 gap-8 ${services.length === 2 ? "md:grid-cols-2 max-w-[800px] mx-auto" : "md:grid-cols-2 lg:grid-cols-3"}`}>
            {services.map((s) => (
              <ServiceCard key={s.title} service={s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
