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
import { visitesChienVannes } from "@/content/service-pages/visites-chien-vannes";
import { env } from "@/lib/env";
import { getReviews } from "@/lib/google-reviews";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: visitesChienVannes.metaTitle,
  description: visitesChienVannes.metaDescription,
  alternates: {
    canonical: `${env.siteUrl}/${visitesChienVannes.slug}`,
  },
  openGraph: {
    title: visitesChienVannes.metaTitle,
    description: visitesChienVannes.metaDescription,
    url: `${env.siteUrl}/${visitesChienVannes.slug}`,
    type: "website",
  },
};

export default async function VisitesChienVannesPage() {
  const reviews = await getReviews();

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
