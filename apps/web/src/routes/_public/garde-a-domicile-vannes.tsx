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
import { gardeADomicileVannes } from "@/content/service-pages/garde-a-domicile-vannes";
import { getReviews } from "@/lib/google-reviews";
import { serviceHead } from "@/lib/service-head";

const getServiceReviews = createServerFn({ method: "GET" }).handler(async () =>
  getReviews(),
);

export const Route = createFileRoute("/_public/garde-a-domicile-vannes")({
  loader: () => getServiceReviews(),
  head: () => serviceHead(gardeADomicileVannes),
  component: GardeADomicileVannesPage,
});

function GardeADomicileVannesPage() {
  const reviews = Route.useLoaderData();

  return (
    <>
      <ServiceJsonLd data={gardeADomicileVannes} />
      <ServiceHero data={gardeADomicileVannes} />
      <ServiceIntro data={gardeADomicileVannes} />
      <ServiceBenefits data={gardeADomicileVannes} />
      <ServicePricing data={gardeADomicileVannes} />
      <ServiceArea data={gardeADomicileVannes} />
      <ServiceFaq data={gardeADomicileVannes} />
      <ServiceTestimonials data={gardeADomicileVannes} reviews={reviews} />
      <ServiceCta data={gardeADomicileVannes} />
      <ServiceRelated data={gardeADomicileVannes} />
      <Contact />
    </>
  );
}
