import { Accordion } from "@coequipattes/ui/components/accordion";
import type { ServicePageData } from "@/content/service-pages/types";
import { SectionHeader } from "../section-header";

export function ServiceFaq({ data }: { data: ServicePageData }) {
  return (
    <section className="py-16 md:py-25 px-6 bg-secondary">
      <div className="max-w-[800px] mx-auto">
        <SectionHeader label="FAQ" title="Questions fréquentes" />
        <Accordion items={data.faq} />
      </div>
    </section>
  );
}
