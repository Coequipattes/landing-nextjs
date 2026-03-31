"use client";

import { useState } from "react";
import { SectionHeader } from "./section-header";

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
      className="py-16 md:py-25 px-6 bg-black-soft"
    >
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
              value="coequipattes@gmail.com"
              href="mailto:coequipattes@gmail.com"
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
                className="w-full bg-black-card border border-pink/10 rounded-xl px-4 py-3 text-white placeholder:text-gray focus:border-pink focus:outline-none transition-colors"
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
                className="w-full bg-black-card border border-pink/10 rounded-xl px-4 py-3 text-white placeholder:text-gray focus:border-pink focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Sujet
              </label>
              <select
                name="subject"
                className="w-full bg-black-card border border-pink/10 rounded-xl px-4 py-3 text-white focus:border-pink focus:outline-none transition-colors"
              >
                <option value="Cours d'équitation">Cours d'équitation</option>
                <option value="Pet-sitting">Pet-sitting</option>
                <option value="Tarifs et forfaits">Tarifs et forfaits</option>
                <option value="Autre">Autre question</option>
              </select>
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Message <span className="text-pink">*</span>
              </label>
              <textarea
                name="message"
                required
                rows={5}
                className="w-full bg-black-card border border-pink/10 rounded-xl px-4 py-3 text-white placeholder:text-gray focus:border-pink focus:outline-none transition-colors resize-y"
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
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 bg-pink/10 rounded-xl flex items-center justify-center text-xl shrink-0">
        {icon}
      </div>
      <div>
        <div className="text-gray text-sm uppercase tracking-wider mb-1">
          {label}
        </div>
        {href ? (
          <a
            href={href}
            className="text-white hover:text-pink transition-colors"
          >
            {value}
          </a>
        ) : (
          <div className="text-white">{value}</div>
        )}
      </div>
    </div>
  );
}
