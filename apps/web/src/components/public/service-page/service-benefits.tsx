import { Card } from "@coequipattes/ui/components/card";
import type { ServicePageData } from "@/content/service-pages/types";
import { SectionHeader } from "../section-header";

export function ServiceBenefits({ data }: { data: ServicePageData }) {
  return (
    <section className="py-16 md:py-25 px-6">
      <div className="max-w-[1200px] mx-auto">
        <SectionHeader
          label="Pourquoi me choisir"
          title="Une approche dédiée à votre tranquillité"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {data.benefits.map((b) => (
            <Card key={b.title} className="p-6 md:p-8">
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {b.title}
              </h3>
              <p className="text-muted-foreground leading-[1.7]">
                {b.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
