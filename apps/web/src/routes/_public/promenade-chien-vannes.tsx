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
import { promenadeChienVannes } from "@/content/service-pages/promenade-chien-vannes";
import { getReviews } from "@/lib/google-reviews";
import { serviceHead } from "@/lib/service-head";

const getServiceReviews = createServerFn({ method: "GET" }).handler(async () =>
  getReviews(),
);

export const Route = createFileRoute("/_public/promenade-chien-vannes")({
  loader: () => getServiceReviews(),
  head: () => serviceHead(promenadeChienVannes),
  component: PromenadeChienVannesPage,
});

function PromenadeChienVannesPage() {
  const reviews = Route.useLoaderData();

  return (
    <>
      <ServiceJsonLd data={promenadeChienVannes} />
      <ServiceHero data={promenadeChienVannes} />
      <ServiceIntro data={promenadeChienVannes} />
      <ServiceBenefits data={promenadeChienVannes} />
      <ServicePricing data={promenadeChienVannes} />
      <ServiceArea data={promenadeChienVannes} />
      <ServiceFaq data={promenadeChienVannes} />
      <ServiceTestimonials data={promenadeChienVannes} reviews={reviews} />
      <ServiceCta data={promenadeChienVannes} />
      <ServiceRelated data={promenadeChienVannes} />
      <Contact />
    </>
  );
}
