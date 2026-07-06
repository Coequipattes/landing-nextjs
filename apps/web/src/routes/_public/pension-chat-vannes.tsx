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
import { hebergementChatVannes } from "@/content/service-pages/hebergement-chat-vannes";
import { getReviews } from "@/lib/google-reviews";
import { serviceHead } from "@/lib/service-head";

const getServiceReviews = createServerFn({ method: "GET" }).handler(async () =>
  getReviews(),
);

export const Route = createFileRoute("/_public/pension-chat-vannes")({
  loader: () => getServiceReviews(),
  head: () => serviceHead(hebergementChatVannes),
  component: HebergementChatVannesPage,
});

function HebergementChatVannesPage() {
  const reviews = Route.useLoaderData();

  return (
    <>
      <ServiceJsonLd data={hebergementChatVannes} />
      <ServiceHero data={hebergementChatVannes} />
      <ServiceIntro data={hebergementChatVannes} />
      <ServiceBenefits data={hebergementChatVannes} />
      <ServicePricing data={hebergementChatVannes} />
      <ServiceArea data={hebergementChatVannes} />
      <ServiceFaq data={hebergementChatVannes} />
      <ServiceTestimonials data={hebergementChatVannes} reviews={reviews} />
      <ServiceCta data={hebergementChatVannes} />
      <ServiceRelated data={hebergementChatVannes} />
      <Contact />
    </>
  );
}
