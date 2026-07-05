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
import { visitesChatVannes } from "@/content/service-pages/visites-chat-vannes";
import { env } from "@/lib/env";
import { getReviews } from "@/lib/google-reviews";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: visitesChatVannes.metaTitle,
  description: visitesChatVannes.metaDescription,
  alternates: {
    canonical: `${env.siteUrl}/${visitesChatVannes.slug}`,
  },
  openGraph: {
    title: visitesChatVannes.metaTitle,
    description: visitesChatVannes.metaDescription,
    url: `${env.siteUrl}/${visitesChatVannes.slug}`,
    type: "website",
  },
};

export default async function VisitesChatVannesPage() {
  const reviews = await getReviews();

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
