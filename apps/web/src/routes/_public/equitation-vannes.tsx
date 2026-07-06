import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { Contact } from "@/components/public/contact";
import {
  ServiceArea,
  ServiceBenefits,
  ServiceCta,
  ServiceFaq,
  ServiceHero,
  ServiceIntro,
  ServiceJsonLd,
  ServicePricing,
  ServiceRelated,
  ServiceTestimonials,
} from "@/components/public/service-page";
import { equitationVannes } from "@/content/service-pages/equitation-vannes";
import { getReviews } from "@/lib/google-reviews";
import { serviceHead } from "@/lib/service-head";

const getServiceReviews = createServerFn({ method: "GET" }).handler(async () =>
  getReviews(),
);

export const Route = createFileRoute("/_public/equitation-vannes")({
  loader: () => getServiceReviews(),
  head: () => serviceHead(equitationVannes),
  component: EquitationVannesPage,
});

function EquitationVannesPage() {
  const reviews = Route.useLoaderData();

  return (
    <>
      <ServiceJsonLd data={equitationVannes} />
      <ServiceHero data={equitationVannes} />
      <ServiceIntro data={equitationVannes} />
      <ServiceBenefits data={equitationVannes} />
      <ServicePricing data={equitationVannes} />
      <ServiceArea data={equitationVannes} />
      <ServiceFaq data={equitationVannes} />
      <ServiceTestimonials data={equitationVannes} reviews={reviews} />
      <ServiceCta data={equitationVannes} />
      <ServiceRelated data={equitationVannes} />
      <Contact />
    </>
  );
}
