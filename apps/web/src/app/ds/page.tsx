import type { Metadata } from "next";
import { Button } from "@coequipattes/ui/components/button";
import { ToggleChip } from "@coequipattes/ui/components/toggle-chip";
import { Input } from "@coequipattes/ui/components/input";
import { Textarea } from "@coequipattes/ui/components/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@coequipattes/ui/components/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@coequipattes/ui/components/card";
import { Badge } from "@coequipattes/ui/components/badge";
import { Accordion } from "@coequipattes/ui/components/accordion";
import { ServiceCard } from "@coequipattes/ui/components/service-card";
import { PriceCard } from "@coequipattes/ui/components/price-card";
import { ReviewCard } from "@coequipattes/ui/components/review-card";
import { InfoCard } from "@coequipattes/ui/components/info-card";

export const metadata: Metadata = {
  title: "Design System",
  robots: { index: false },
};

function Arrow({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const Heart = () => (
  <svg {...iconProps}>
    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
  </svg>
);
const Mail = () => (
  <svg {...iconProps}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);
const Phone = () => (
  <svg {...iconProps}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8.1 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2z" />
  </svg>
);
const Pin = () => (
  <svg {...iconProps}>
    <path d="M12 21s-6-5.7-6-10a6 6 0 0 1 12 0c0 4.3-6 10-6 10z" />
    <circle cx="12" cy="11" r="2" />
  </svg>
);

function Row({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-border py-10">
      <h2 className="mb-6 font-display text-2xl text-foreground">{title}</h2>
      <div className="flex flex-wrap items-center gap-4">{children}</div>
    </section>
  );
}

export default function DesignSystemPage() {
  return (
    <main className="min-h-screen bg-background px-8 py-14 text-foreground">
      <div className="mx-auto max-w-4xl">
        <p className="font-accent text-3xl text-primary">Co'équi'pattes</p>
        <h1 className="mb-2 font-display text-4xl text-foreground">
          Design system
        </h1>
        <p className="text-muted-foreground">
          Vitrine des composants sur le thème « clair chaleureux ».
        </p>

        <Row title="Button — variants">
          <Button variant="primary">Réserver</Button>
          <Button variant="outline">Voir les tarifs</Button>
          <Button variant="secondary">En savoir plus</Button>
          <Button variant="ghost">Annuler</Button>
          <Button variant="link">Détails</Button>
        </Row>

        <Row title="Button — tailles">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button disabled>Désactivé</Button>
        </Row>

        <Row title="Button — avec icône (svg enfant, auto-dimensionné)">
          <Button>
            Découvrir
            <Arrow />
          </Button>
          <Button variant="outline">
            <Arrow className="rotate-180" />
            Retour
          </Button>
        </Row>

        <Row title="ToggleChip">
          <ToggleChip active>Chien</ToggleChip>
          <ToggleChip>Chat</ToggleChip>
          <ToggleChip>Cheval</ToggleChip>
        </Row>

        <Row title="Champs de formulaire">
          <div className="flex w-full max-w-sm flex-col gap-4">
            <Input placeholder="Votre prénom" />
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Choisir un service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="equitation">Cours d'équitation</SelectItem>
                <SelectItem value="petsitting">Pet-sitting</SelectItem>
                <SelectItem value="tarifs">Tarifs et forfaits</SelectItem>
              </SelectContent>
            </Select>
            <Textarea placeholder="Votre message" />
          </div>
        </Row>

        <Row title="Card">
          <Card className="w-64">
            <CardHeader>
              <CardTitle>Visites à domicile</CardTitle>
              <CardDescription>
                Votre animal reste chez lui, dans ses repères.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Repas, jeux, câlins et un suivi photo à chaque passage.
            </CardContent>
            <CardFooter>
              <Button size="sm">Réserver</Button>
            </CardFooter>
          </Card>
          <Card interactive className="w-64">
            <CardTitle>Carte cliquable</CardTitle>
            <CardDescription>
              Survole-moi : la bordure s'éclaire, sans saut ni glow.
            </CardDescription>
          </Card>
        </Row>

        <Row title="Badge — pills statiques">
          <Badge>Vannes centre</Badge>
          <Badge>Conleau</Badge>
          <Badge>Séné</Badge>
          <Badge tone="rose">NAC bienvenus</Badge>
          <Badge tone="solid">Populaire</Badge>
        </Row>

        <Row title="Accordion — FAQ (animé, +→×)">
          <Accordion
            className="w-full max-w-xl"
            items={[
              {
                q: "Combien de visites par jour proposez-vous ?",
                a: "Jusqu'à 5 passages par jour, selon l'âge et les besoins de votre animal.",
              },
              {
                q: "Comment se passe la gestion des clés ?",
                a: "Remise lors de la pré-visite, restitution à votre retour. Un déplacement pour la remise/restitution est facturé 5 €.",
              },
              {
                q: "Acceptez-vous les chiens réactifs ou anxieux ?",
                a: "Les chiens anxieux, sans souci. Pour les réactifs, on en parle lors de la pré-visite.",
              },
            ]}
          />
        </Row>

        <Row title="ServiceCard">
          <div className="grid w-full gap-6 sm:grid-cols-2">
            <ServiceCard
              icon={<Heart />}
              title="Balades"
              teaser="Sorties 30 à 60 min, en laisse, adaptées à l'énergie de votre chien."
              price="dès 12€"
              href="#"
            />
            <ServiceCard
              icon={<Heart />}
              title="Visites à domicile"
              teaser="Repas, jeux, câlins et présence — votre animal reste chez lui."
              price="dès 10,20€"
              href="#"
            />
          </div>
        </Row>

        <Row title="PriceCard (+ ruban Populaire)">
          <div className="grid w-full items-start gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <PriceCard
              title="Promenade"
              price="12-22€"
              subtitle="Balades adaptées au rythme de votre chien"
              features={["30 min : 12€ / 16€*", "45 min : 15€ / 19€*", "1 heure : 18€ / 22€*"]}
              href="#"
            />
            <PriceCard
              title="Visite à domicile"
              price="10-20€"
              subtitle="Pour chats, NAC et tous animaux"
              features={["30 min : 10,20€ / 13,60€*", "45 min : 13€ / 16€*", "1 heure : 16€ / 20€*"]}
              href="#"
            />
            <PriceCard
              popular
              title="Visite + promenade"
              price="15-18€"
              subtitle="Promenade 30 min + 15 min de soins"
              features={["30 min de promenade", "15 min de soins avant/après", "Nourrissage, jeux et câlins"]}
              href="#"
            />
          </div>
        </Row>

        <Row title="ReviewCard">
          <div className="grid w-full gap-6 sm:grid-cols-2">
            <ReviewCard
              quote="Merci Manon pour la patience et la bienveillance dont tu fais preuve avec ma jument et moi."
              author="Aurore Duhamel"
              meta="Visité en janvier"
              initials="AD"
            />
            <ReviewCard
              quote="Service au top, mon chat était parfaitement serein à notre retour."
              author="Julien P."
              meta="Visité en mars"
              initials="JP"
            />
          </div>
        </Row>

        <Row title="InfoCard (contact)">
          <div className="grid w-full gap-4 sm:grid-cols-2">
            <InfoCard
              icon={<Mail />}
              label="Email"
              value="co.equi.pattes@gmail.com"
              href="mailto:co.equi.pattes@gmail.com"
            />
            <InfoCard
              icon={<Phone />}
              label="Téléphone"
              value="07 66 74 43 37"
              href="tel:+33766744337"
            />
            <InfoCard icon={<Pin />} label="Localisation" value="Vannes (56)" />
          </div>
        </Row>
      </div>
    </main>
  );
}
