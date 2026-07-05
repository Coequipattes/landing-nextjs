import type { Metadata } from "next";
import { Button } from "@coequipattes/ui/components/button";
import { ToggleChip } from "@coequipattes/ui/components/toggle-chip";

export const metadata: Metadata = {
  title: "Design System",
  robots: { index: false },
};

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

        <Row title="ToggleChip">
          <ToggleChip active>Chien</ToggleChip>
          <ToggleChip>Chat</ToggleChip>
          <ToggleChip>Cheval</ToggleChip>
        </Row>
      </div>
    </main>
  );
}
