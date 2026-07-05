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
      </div>
    </main>
  );
}
