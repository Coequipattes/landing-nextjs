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
import { visitesChienVannes } from "@/content/service-pages/visites-chien-vannes";
import { getReviews } from "@/lib/google-reviews";
import { serviceHead } from "@/lib/service-head";

const getServiceReviews = createServerFn({ method: "GET" }).handler(async () =>
  getReviews(),
);

export const Route = createFileRoute("/_public/visites-chien-vannes")({
  loader: () => getServiceReviews(),
  head: () => serviceHead(visitesChienVannes),
  component: VisitesChienVannesPage,
});

function VisitesChienVannesPage() {
  const reviews = Route.useLoaderData();

  return (
    <>
      <ServiceJsonLd data={visitesChienVannes} />
      <ServiceHero data={visitesChienVannes} />
      <ServiceIntro data={visitesChienVannes} />
      <ServiceBenefits data={visitesChienVannes} />
      <ServicePricing data={visitesChienVannes} />
      <ServiceArea data={visitesChienVannes} />
      <ServiceFaq data={visitesChienVannes} />
      <ServiceTestimonials data={visitesChienVannes} reviews={reviews} />
      <ServiceCta data={visitesChienVannes} />
      <ServiceRelated data={visitesChienVannes} />
      <Contact />
    </>
  );
}
