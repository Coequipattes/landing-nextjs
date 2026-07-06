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
import { visitesChatVannes } from "@/content/service-pages/visites-chat-vannes";
import { getReviews } from "@/lib/google-reviews";
import { serviceHead } from "@/lib/service-head";

const getServiceReviews = createServerFn({ method: "GET" }).handler(async () =>
  getReviews(),
);

export const Route = createFileRoute("/_public/visites-chat-vannes")({
  loader: () => getServiceReviews(),
  head: () => serviceHead(visitesChatVannes),
  component: VisitesChatVannesPage,
});

function VisitesChatVannesPage() {
  const reviews = Route.useLoaderData();

  return (
    <>
      <ServiceJsonLd data={visitesChatVannes} />
      <ServiceHero data={visitesChatVannes} />
      <ServiceIntro data={visitesChatVannes} />
      <ServiceBenefits data={visitesChatVannes} />
      <ServicePricing data={visitesChatVannes} />
      <ServiceArea data={visitesChatVannes} />
      <ServiceFaq data={visitesChatVannes} />
      <ServiceTestimonials data={visitesChatVannes} reviews={reviews} />
      <ServiceCta data={visitesChatVannes} />
      <ServiceRelated data={visitesChatVannes} />
      <Contact />
    </>
  );
}
