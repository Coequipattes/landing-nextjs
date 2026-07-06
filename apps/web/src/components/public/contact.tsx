import { useState } from "react";
import { Button } from "@coequipattes/ui/components/button";
import { InfoCard } from "@coequipattes/ui/components/info-card";
import { Input } from "@coequipattes/ui/components/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@coequipattes/ui/components/select";
import { Textarea } from "@coequipattes/ui/components/textarea";
import { SectionHeader } from "./section-header";
import { env } from "@/lib/env";

const subjectOptions = [
  "Cours d'équitation",
  "Pet-sitting",
  "Tarifs et forfaits",
  "Autre question",
];

// Icônes contact — stroke SVG (héritent text-primary du medallion), pas d'emoji.
const svgProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "stroke-current",
  "aria-hidden": true,
};

const MailIcon = () => (
  <svg {...svgProps}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3.5 7 8.5 6 8.5-6" />
  </svg>
);
const PhoneIcon = () => (
  <svg {...svgProps}>
    <path d="M6 3h3l1.5 5-2 1.2a12 12 0 0 0 5.3 5.3l1.2-2 5 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4 5.2 2 2 0 0 1 6 3Z" />
  </svg>
);
const PinIcon = () => (
  <svg {...svgProps}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="2.6" />
  </svg>
);

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
      className="py-16 md:py-25 px-6 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse,var(--blush)_0%,transparent_70%)] opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(ellipse,var(--blush)_0%,transparent_70%)] opacity-40 pointer-events-none" />
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader
          label="Réservation & Contact"
          title="Prenez rendez-vous ou posez vos questions"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-[1000px] mx-auto">
          {/* Contact info */}
          <div className="space-y-8">
            <InfoCard
              icon={<MailIcon />}
              label="Email"
              value={env.contactEmail}
              href={`mailto:${env.contactEmail}`}
            />
            <InfoCard
              icon={<PhoneIcon />}
              label="Téléphone"
              value="07 66 74 43 37"
              href="tel:0766744337"
            />
            <InfoCard
              icon={<PinIcon />}
              label="Localisation"
              value="Vannes (56)"
            />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {status === "success" && (
              <div className="bg-green-50 border border-green-300 text-green-700 px-4 py-3 rounded-xl text-sm">
                ✓ Message envoyé avec succès ! Je vous répondrai rapidement.
              </div>
            )}
            {status === "error" && (
              <div className="bg-red-50 border border-red-300 text-red-700 px-4 py-3 rounded-xl text-sm">
                ✗ Erreur lors de l'envoi. Veuillez réessayer ou me contacter par
                téléphone.
              </div>
            )}

            <div>
              <label className="block text-foreground text-sm font-medium mb-2">
                Nom complet <span className="text-primary">*</span>
              </label>
              <Input
                type="text"
                name="name"
                required
                placeholder="Votre nom et prénom"
              />
            </div>

            <div>
              <label className="block text-foreground text-sm font-medium mb-2">
                Email <span className="text-primary">*</span>
              </label>
              <Input
                type="email"
                name="email"
                required
                placeholder="vous@exemple.com"
              />
            </div>

            <div>
              <label className="block text-foreground text-sm font-medium mb-2">
                Sujet
              </label>
              <Select name="subject" defaultValue={subjectOptions[0]}>
                <SelectTrigger className="h-11 w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {subjectOptions.map((opt) => (
                    <SelectItem key={opt} value={opt}>
                      {opt}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-foreground text-sm font-medium mb-2">
                Message <span className="text-primary">*</span>
              </label>
              <Textarea
                name="message"
                required
                rows={5}
                placeholder="Parlez-moi de votre animal, de vos dates, de vos besoins…"
              />
            </div>

            <Button
              type="submit"
              disabled={status === "sending"}
              className="w-full"
            >
              {status === "sending"
                ? "Envoi en cours..."
                : "Envoyer le message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
