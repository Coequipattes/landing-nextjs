import type { Metadata } from "next";
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
import { env } from "@/lib/env";
import { getReviews } from "@/lib/google-reviews";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: hebergementChatVannes.metaTitle,
  description: hebergementChatVannes.metaDescription,
  alternates: {
    canonical: `${env.siteUrl}/${hebergementChatVannes.slug}`,
  },
  openGraph: {
    title: hebergementChatVannes.metaTitle,
    description: hebergementChatVannes.metaDescription,
    url: `${env.siteUrl}/${hebergementChatVannes.slug}`,
    type: "website",
  },
};

export default async function HebergementChatVannesPage() {
  const reviews = await getReviews();

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
