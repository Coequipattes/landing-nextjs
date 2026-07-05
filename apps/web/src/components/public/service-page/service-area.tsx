import { Badge } from "@coequipattes/ui/components/badge";
import { Card } from "@coequipattes/ui/components/card";
import type { ServicePageData } from "@/content/service-pages/types";
import { SectionHeader } from "../section-header";

export function ServiceArea({ data }: { data: ServicePageData }) {
  const { city, neighborhoods, radiusKm } = data.area;

  return (
    <section className="py-16 md:py-20 px-6">
      <div className="max-w-[1000px] mx-auto">
        <SectionHeader
          label="Zone d'intervention"
          title={`J'interviens à ${city} et dans un rayon de ${radiusKm} km`}
        />
        <Card className="p-6 md:p-10">
          <p className="text-muted-foreground leading-[1.7] mb-5">
            Quartiers et communes habituellement desservis :
          </p>
          <ul className="flex flex-wrap gap-3">
            {neighborhoods.map((n) => (
              <li key={n}>
                <Badge tone="rose" className="px-4 py-2 text-[0.9rem]">
                  {n}
                </Badge>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground text-[0.9rem] mt-6 italic">
            Au-delà de {radiusKm} km : frais kilométriques de 0,25€/km.
          </p>
        </Card>
      </div>
    </section>
  );
}
