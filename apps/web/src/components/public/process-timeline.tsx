import { FileCheck } from "lucide-react";
import { Card } from "@coequipattes/ui/components/card";
import { IconMedallion } from "@coequipattes/ui/components/icon-medallion";
import { SectionHeader } from "./section-header";

// Le déroulé est identique pour toutes les prestations : on l'affiche une
// fois sur la home pour que le visiteur sache à quoi s'attendre, du premier
// message au paiement.
const steps: { title: string; description: string }[] = [
  {
    title: "Prise de contact",
    description: "On échange sur votre besoin, votre animal et ses habitudes.",
  },
  {
    title: "Devis",
    description: "Je vous propose un tarif clair, adapté à votre situation.",
  },
  {
    title: "Pré-visite de rencontre",
    description:
      "On se rencontre pour faire connaissance avec votre animal et découvrir le lieu de garde.",
  },
  {
    title: "Contrat électronique",
    description:
      "Un contrat détaillé est établi et signé en ligne, avec toutes les informations utiles.",
  },
  {
    title: "Prestation",
    description: "Je m'occupe de votre animal exactement comme convenu.",
  },
  {
    title: "Compte rendu avec photos",
    description:
      "Vous recevez un compte rendu de la prestation, illustré de photos.",
  },
  {
    title: "Facture",
    description: "Une facture claire et détaillée vous est transmise.",
  },
  {
    title: "Paiement",
    description: "Vous réglez simplement, en toute transparence.",
  },
];

export function ProcessTimeline() {
  return (
    <section id="deroule" className="py-16 md:py-25 px-6 bg-secondary">
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader
          label="Comment ça se passe"
          title="Un cadre clair, du premier contact au paiement"
          subtitle="Chaque prestation suit le même déroulé, pour que tout soit transparent et sans mauvaise surprise."
        />

        <Card className="flex-row items-start gap-5 bg-blush/50 border-primary/20 p-6 md:p-8 mb-12 md:mb-16 max-w-[820px] mx-auto">
          <IconMedallion aria-hidden className="hidden md:flex">
            <FileCheck strokeWidth={1.8} aria-hidden="true" />
          </IconMedallion>
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Un contrat détaillé pour chaque prestation
            </h3>
            <p className="text-muted-foreground leading-[1.7]">
              Avant chaque garde, un contrat électronique est établi et signé en
              ligne. Il reprend toutes les informations sur votre animal
              (habitudes, alimentation, soins, contacts vétérinaire et
              d'urgence) et les modalités de la prestation. Vous savez
              précisément ce qui est prévu, et votre animal est pris en charge
              en connaissance de tout ce qui compte pour lui.
            </p>
          </div>
        </Card>

        <ol className="relative max-w-[760px] mx-auto">
          <span
            aria-hidden
            className="absolute left-6 top-6 bottom-6 w-px -translate-x-1/2 bg-primary/20"
          />
          {steps.map((step, index) => (
            <li key={step.title} className="relative flex gap-5 pb-8 last:pb-0">
              <IconMedallion className="relative z-10 bg-blush font-display text-lg font-bold">
                {index + 1}
              </IconMedallion>
              <div className="pt-1.5">
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-[1.7]">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
