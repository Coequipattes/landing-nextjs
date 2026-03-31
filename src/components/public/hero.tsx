"use client";

import { useEffect, useRef } from "react";

export function Hero() {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;
    for (let i = 0; i < 20; i++) {
      const p = document.createElement("div");
      p.className =
        "absolute w-[3px] h-[3px] bg-pink rounded-full opacity-0 animate-[float-particle_8s_infinite]";
      p.style.left = `${Math.random() * 100}%`;
      p.style.animationDelay = `${Math.random() * 8}s`;
      p.style.animationDuration = `${8 + Math.random() * 4}s`;
      container.appendChild(p);
    }
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-[100px] pb-15 px-6">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(255,165,201,0.08)_0%,transparent_50%),radial-gradient(ellipse_at_80%_20%,rgba(255,165,201,0.05)_0%,transparent_50%),var(--black)]" />

      {/* Particles */}
      <div ref={particlesRef} className="absolute inset-0 overflow-hidden" />

      {/* Content */}
      <div className="relative z-2 text-center px-6 animate-[fadeInUp_1.2s_var(--transition)] max-w-[800px]">
        <div className="w-[280px] h-auto mx-auto mb-8 text-pink font-display text-5xl md:text-6xl font-bold drop-shadow-[0_10px_30px_var(--pink-glow)] animate-[float_3s_ease-in-out_infinite]">
          Co'équi'pattes
        </div>

        <h1 className="text-lg md:text-[1.4rem] font-normal text-white-soft mb-6 leading-relaxed">
          Votre partenaire équestre et animalier dans la région Vannetaise
        </h1>

        <p className="text-base md:text-[1.05rem] text-gray-light mb-10 max-w-[600px] mx-auto">
          Parce que chacun mérite attention et respect, je vous accompagne avec
          douceur dans l'apprentissage de l'équitation et prends soin de vos
          compagnons avec patience et bienveillance.
        </p>

        <div className="inline-flex gap-4 flex-wrap justify-center">
          <a
            href="#contact"
            className="px-9 py-3.5 rounded-full font-semibold text-[0.95rem] uppercase tracking-[1px] bg-pink text-black hover:bg-white hover:-translate-y-[2px] hover:shadow-[0_8px_25px_var(--pink-glow)] transition-all duration-300"
          >
            Réserver un cours
          </a>
          <a
            href="#about"
            className="px-9 py-3.5 rounded-full font-semibold text-[0.95rem] uppercase tracking-[1px] bg-transparent text-white border-2 border-pink hover:bg-pink hover:text-black hover:-translate-y-[2px] transition-all duration-300"
          >
            En savoir plus
          </a>
        </div>
      </div>
    </section>
  );
}
