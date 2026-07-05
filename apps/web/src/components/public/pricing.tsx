"use client";

import { useState } from "react";
import {
  type PriceCard,
  equitationCards,
  equitationExtras,
  petsittingCards,
} from "@/content/pricing-data";
import { SectionHeader } from "./section-header";

function Card({ card }: { card: PriceCard }) {
  return (
    <div
      className={`bg-black-card border-2 rounded-3xl p-8 md:p-10 text-center transition-all duration-400 relative overflow-hidden hover:-translate-y-2 hover:border-pink hover:shadow-[0_20px_50px_rgba(255,165,201,0.2)] ${
        card.featured ? "border-pink scale-105" : "border-pink/10"
      }`}
    >
      {card.featured && (
        <div className="absolute top-5 -right-9 bg-pink text-black px-10 py-1 text-[0.75rem] font-bold tracking-[1px] rotate-45">
          POPULAIRE
        </div>
      )}
      <h3 className="text-xl md:text-[1.8rem] text-white mb-4">
        {card.title}
      </h3>
      <div className="font-display text-3xl md:text-[3rem] font-bold text-pink my-5">
        {card.price}
        {card.unit && (
          <small className="text-[1.2rem] text-gray font-normal">
            {card.unit}
          </small>
        )}
      </div>
      <p className="text-gray-light mb-8 leading-relaxed">
        {card.description}
      </p>
      <ul className="text-left mb-8 space-y-0">
        {card.features.map((f) => (
          <li
            key={f}
            className="py-3 text-gray-light flex items-center gap-3 border-b border-pink/5 last:border-b-0"
          >
            <span className="text-pink font-bold text-[1.2rem] shrink-0">
              ✓
            </span>
            {f.includes("Économisez") ? (
              <strong className="text-pink">{f}</strong>
            ) : (
              f
            )}
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className="block w-full py-3.5 rounded-full font-semibold text-[0.95rem] uppercase tracking-[1px] bg-pink text-black hover:bg-white hover:-translate-y-[2px] hover:shadow-[0_8px_25px_var(--pink-glow)] transition-all duration-300 text-center"
      >
        Réserver
      </a>
    </div>
  );
}

export function Pricing() {
  const [tab, setTab] = useState<"equitation" | "petsitting">("equitation");
  const [extrasOpen, setExtrasOpen] = useState(false);
  const cards = tab === "equitation" ? equitationCards : petsittingCards;

  return (
    <section
      id="tarifs"
      className="py-16 md:py-25 px-6 bg-gradient-to-b from-black to-black-soft"
    >
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader
          label="Tarifs"
          title="Des offres transparentes et accessibles"
          subtitle="Choisissez la formule qui vous convient, avec la possibilité de forfaits avantageux."
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-15">
          {cards.map((c) => (
            <Card key={c.title} card={c} />
          ))}
        </div>

        {/* Equitation extras dropdown */}
        {tab === "equitation" && (
          <div className="max-w-[600px] mx-auto mt-12">
            <div className="bg-black-card border border-pink/10 rounded-2xl overflow-hidden">
              <button
                type="button"
                onClick={() => setExtrasOpen((o) => !o)}
                className="w-full px-6 py-5 cursor-pointer font-semibold text-[1.05rem] text-white flex items-center justify-between hover:text-pink transition-colors"
              >
                Autres tarifs équitation
                <span
                  className="text-pink text-2xl transition-transform duration-300"
                  style={{ transform: extrasOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                >
                  +
                </span>
              </button>
              <div
                className="grid transition-[grid-template-rows] duration-300 ease-in-out"
                style={{ gridTemplateRows: extrasOpen ? "1fr" : "0fr" }}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 space-y-4">
                    {equitationExtras.map((e) => (
                      <div
                        key={e.title}
                        className="p-5 bg-black-soft rounded-xl hover:bg-pink/5 hover:translate-x-1 transition-all duration-300"
                      >
                        <h4 className="text-white text-[1.2rem] mb-2">
                          {e.title}
                        </h4>
                        <div className="font-display text-2xl font-bold text-pink mb-2">
                          {e.price}
                          <small className="text-base text-gray font-normal">
                            {e.unit}
                          </small>
                        </div>
                        <p className="text-gray-light text-[0.95rem]">
                          {e.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Pet-sitting note */}
        {tab === "petsitting" && (
          <div className="text-center mt-12 text-gray-light space-y-3">
            <p className="text-[0.9rem] leading-[1.7]">
              *Tarif haute saison : du 15/07 au 31/08 inclus, du 04/04 au 06/04
              inclus et du 24/12 au 02/01 inclus
            </p>
            <p className="text-[0.9rem] leading-[1.7]">
              Une <strong className="text-white">pré-visite découverte</strong> est <strong className="text-white">gratuite et obligatoire</strong> avant toute prestation.
            </p>
            <p className="text-[0.9rem] leading-[1.7]">
              Remise et retour de clés en dehors de la pré-visite : <strong className="text-white">5€ chacun</strong> (soit 5€ à la remise + 5€ au retour)
            </p>
          </div>
        )}

        <div className="text-center mt-15 text-gray-light space-y-4">
          <p className="text-[1.05rem]">
            <strong>Paiement accepté :</strong> Espèces, Chèque, Virement
            bancaire
          </p>
          <p className="text-[0.95rem] leading-[1.7]">
            Les frais kilométriques sont offerts dans un rayon de 10 km autour
            de la chambre des métiers de Vannes (10 bd des Îles, 56000 Vannes)
            puis s'élèvent à 0,25€/km.
          </p>
          <p className="italic">
            Tarif chiot sur devis · Hébergement et garde à domicile sur devis
            selon durée et besoins de l'animal
          </p>
        </div>
      </div>
    </section>
  );
}
