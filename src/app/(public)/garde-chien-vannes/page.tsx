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
import { gardeChienVannes } from "@/content/service-pages/garde-chien-vannes";
import { env } from "@/lib/env";
import { getReviews } from "@/lib/google-reviews";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: gardeChienVannes.metaTitle,
  description: gardeChienVannes.metaDescription,
  alternates: {
    canonical: `${env.siteUrl}/${gardeChienVannes.slug}`,
  },
  openGraph: {
    title: gardeChienVannes.metaTitle,
    description: gardeChienVannes.metaDescription,
    url: `${env.siteUrl}/${gardeChienVannes.slug}`,
    type: "website",
  },
};

export default async function GardeChienVannesPage() {
  const reviews = await getReviews();

  return (
    <>
      <ServiceJsonLd data={gardeChienVannes} />
      <ServiceHero data={gardeChienVannes} />
      <ServiceIntro data={gardeChienVannes} />
      <ServiceBenefits data={gardeChienVannes} />
      <ServicePricing data={gardeChienVannes} />
      <ServiceArea data={gardeChienVannes} />
      <ServiceFaq data={gardeChienVannes} />
      <ServiceTestimonials data={gardeChienVannes} reviews={reviews} />
      <ServiceCta data={gardeChienVannes} />
      <ServiceRelated data={gardeChienVannes} />
      <Contact />
    </>
  );
}
