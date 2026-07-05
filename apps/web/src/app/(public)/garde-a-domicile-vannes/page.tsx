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
import { gardeADomicileVannes } from "@/content/service-pages/garde-a-domicile-vannes";
import { env } from "@/lib/env";
import { getReviews } from "@/lib/google-reviews";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: gardeADomicileVannes.metaTitle,
  description: gardeADomicileVannes.metaDescription,
  alternates: {
    canonical: `${env.siteUrl}/${gardeADomicileVannes.slug}`,
  },
  openGraph: {
    title: gardeADomicileVannes.metaTitle,
    description: gardeADomicileVannes.metaDescription,
    url: `${env.siteUrl}/${gardeADomicileVannes.slug}`,
    type: "website",
  },
};

export default async function GardeADomicileVannesPage() {
  const reviews = await getReviews();

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
