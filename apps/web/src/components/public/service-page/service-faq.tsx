"use client";

import { useId, useState } from "react";
import type { ServicePageData } from "@/content/service-pages/types";
import { SectionHeader } from "../section-header";

export function ServiceFaq({ data }: { data: ServicePageData }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const baseId = useId();

  return (
    <section className="py-16 md:py-25 px-6 bg-black-soft">
      <div className="max-w-[800px] mx-auto">
        <SectionHeader label="FAQ" title="Questions fréquentes" />
        <ul className="space-y-3">
          {data.faq.map((item, i) => {
            const isOpen = openIndex === i;
            const buttonId = `${baseId}-faq-btn-${i}`;
            const panelId = `${baseId}-faq-panel-${i}`;
            return (
              <li
                key={item.q}
                className="bg-black-card border border-pink/10 rounded-2xl overflow-hidden"
              >
                <h3 className="m-0">
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full px-5 md:px-6 py-5 cursor-pointer font-semibold text-[1.02rem] text-white flex items-center justify-between text-left hover:text-pink transition-colors"
                  >
                    <span>{item.q}</span>
                    <span
                      aria-hidden="true"
                      className="text-pink text-2xl ml-4 transition-transform duration-300"
                      style={{
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      }}
                    >
                      +
                    </span>
                  </button>
                </h3>
                <section
                  id={panelId}
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="px-5 md:px-6 pb-6 text-gray-light leading-[1.7]"
                >
                  {item.a}
                </section>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
