import { Accordion } from "@coequipattes/ui/components/accordion";
import { homeFaq } from "@/content/home-faq";
import { SectionHeader } from "./section-header";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export function HomeFaq() {
  return (
    <section id="faq" className="py-16 md:py-25 px-6 bg-secondary">
      <div className="max-w-[800px] mx-auto">
        <SectionHeader
          label="FAQ"
          title="Questions fréquentes"
          subtitle="Tout ce qu'il faut savoir avant de confier votre animal ou de monter à cheval."
        />
        <Accordion items={homeFaq} />
      </div>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD payload escaped with < — matches src/components/public/json-ld.tsx pattern.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />
    </section>
  );
}
