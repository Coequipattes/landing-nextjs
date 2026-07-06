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
import { hebergementChienVannes } from "@/content/service-pages/hebergement-chien-vannes";
import { env } from "@/lib/env";
import { getReviews } from "@/lib/google-reviews";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: hebergementChienVannes.metaTitle,
  description: hebergementChienVannes.metaDescription,
  alternates: {
    canonical: `${env.siteUrl}/${hebergementChienVannes.slug}`,
  },
  openGraph: {
    title: hebergementChienVannes.metaTitle,
    description: hebergementChienVannes.metaDescription,
    url: `${env.siteUrl}/${hebergementChienVannes.slug}`,
    type: "website",
  },
};

export default async function HebergementChienVannesPage() {
  const reviews = await getReviews();

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
