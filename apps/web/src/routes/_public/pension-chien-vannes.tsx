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
import { hebergementChienVannes } from "@/content/service-pages/hebergement-chien-vannes";
import { getReviews } from "@/lib/google-reviews";
import { serviceHead } from "@/lib/service-head";

const getServiceReviews = createServerFn({ method: "GET" }).handler(async () =>
  getReviews(),
);

export const Route = createFileRoute("/_public/pension-chien-vannes")({
  loader: () => getServiceReviews(),
  head: () => serviceHead(hebergementChienVannes),
  component: HebergementChienVannesPage,
});

function HebergementChienVannesPage() {
  const reviews = Route.useLoaderData();

  return (
    <>
      <ServiceJsonLd data={hebergementChienVannes} />
      <ServiceHero data={hebergementChienVannes} />
      <ServiceIntro data={hebergementChienVannes} />
      <ServiceBenefits data={hebergementChienVannes} />
      <ServicePricing data={hebergementChienVannes} />
      <ServiceArea data={hebergementChienVannes} />
      <ServiceFaq data={hebergementChienVannes} />
      <ServiceTestimonials data={hebergementChienVannes} reviews={reviews} />
      <ServiceCta data={hebergementChienVannes} />
      <ServiceRelated data={hebergementChienVannes} />
      <Contact />
    </>
  );
}
