"use client";

import { useEffect, useRef, useState } from "react";
import { SectionHeader } from "./section-header";
import { env } from "@/lib/env";

const subjectOptions = [
  "Cours d'équitation",
  "Pet-sitting",
  "Tarifs et forfaits",
  "Autre question",
];

function CustomSelect({
  name,
  options,
  defaultValue,
}: {
  name: string;
  options: string[];
  defaultValue: string;
}) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(defaultValue);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <input type="hidden" name={name} value={selected} />
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full bg-black-card border border-pink/10 rounded-xl px-4 py-3 text-white flex items-center justify-between focus:border-pink focus:outline-none transition-colors hover:border-pink/30"
      >
        <span>{selected}</span>
        <svg
          className={`w-4 h-4 text-gray transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <ul
        className={`absolute z-50 w-full mt-2 bg-black-card border border-pink/20 rounded-xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-200 origin-top ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        {options.map((opt) => (
          <li key={opt}>
            <button
              type="button"
              onClick={() => {
                setSelected(opt);
                setOpen(false);
              }}
              className={`w-full text-left px-4 py-3 text-sm transition-colors hover:bg-pink/10 hover:text-pink ${
                selected === opt ? "text-pink bg-pink/5" : "text-white"
              }`}
            >
              {opt}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Contact() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          subject: data.get("subject"),
          message: data.get("message"),
        }),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        throw new Error("Erreur");
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  }

  return (
    <section
      id="contact"
      className="py-16 md:py-25 px-6 bg-black-soft relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse,rgba(255,165,201,0.05)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(ellipse,rgba(255,165,201,0.04)_0%,transparent_70%)] pointer-events-none" />
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader
          label="Réservation & Contact"
          title="Prenez rendez-vous ou posez vos questions"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-[1000px] mx-auto">
          {/* Contact info */}
          <div className="space-y-8">
            <ContactItem
              icon="✉️"
              label="Email"
              value={env.contactEmail}
              href={`mailto:${env.contactEmail}`}
            />
            <ContactItem
              icon="📞"
              label="Téléphone"
              value="07 66 74 43 37"
              href="tel:0766744337"
            />
            <ContactItem icon="📍" label="Localisation" value="Vannes (56)" />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {status === "success" && (
              <div className="bg-green-900/30 border border-green-500/30 text-green-400 px-4 py-3 rounded-xl text-sm">
                ✓ Message envoyé avec succès ! Je vous répondrai rapidement.
              </div>
            )}
            {status === "error" && (
              <div className="bg-red-900/30 border border-red-500/30 text-red-400 px-4 py-3 rounded-xl text-sm">
                ✗ Erreur lors de l'envoi. Veuillez réessayer ou me contacter par
                téléphone.
              </div>
            )}

            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Nom complet <span className="text-pink">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full bg-black-card border border-pink/10 rounded-xl px-4 py-3 text-white placeholder:text-gray focus:border-pink focus:outline-none focus:shadow-[0_0_0_3px_rgba(255,165,201,0.1)] transition-all"
              />
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Email <span className="text-pink">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full bg-black-card border border-pink/10 rounded-xl px-4 py-3 text-white placeholder:text-gray focus:border-pink focus:outline-none focus:shadow-[0_0_0_3px_rgba(255,165,201,0.1)] transition-all"
              />
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Sujet
              </label>
              <CustomSelect
                name="subject"
                options={subjectOptions}
                defaultValue={subjectOptions[0]}
              />
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Message <span className="text-pink">*</span>
              </label>
              <textarea
                name="message"
                required
                rows={5}
                className="w-full bg-black-card border border-pink/10 rounded-xl px-4 py-3 text-white placeholder:text-gray focus:border-pink focus:outline-none focus:shadow-[0_0_0_3px_rgba(255,165,201,0.1)] transition-all resize-y"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full py-3.5 rounded-full font-semibold text-[0.95rem] uppercase tracking-[1px] bg-pink text-black hover:bg-white hover:-translate-y-[2px] hover:shadow-[0_8px_25px_var(--pink-glow)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Envoi en cours..." : "Envoyer le message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: string;
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex items-start gap-5 p-5 rounded-2xl border border-pink/8 bg-black-card/60 hover:border-pink/25 hover:bg-black-card transition-all duration-300 group">
      <div className="w-13 h-13 bg-pink/10 border border-pink/15 rounded-xl flex items-center justify-center text-xl shrink-0 group-hover:bg-pink/20 group-hover:scale-110 transition-all duration-300">
        {icon}
      </div>
      <div>
        <div className="text-pink/60 text-[0.72rem] uppercase tracking-[3px] mb-1 font-semibold">
          {label}
        </div>
        {href ? (
          <a href={href} className="text-white hover:text-pink transition-colors font-medium">
            {value}
          </a>
        ) : (
          <div className="text-white font-medium">{value}</div>
        )}
      </div>
    </div>
  );
}
