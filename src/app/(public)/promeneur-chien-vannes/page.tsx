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
import { promeneurChienVannes } from "@/content/service-pages/promeneur-chien-vannes";
import { env } from "@/lib/env";
import { getReviews } from "@/lib/google-reviews";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: promeneurChienVannes.metaTitle,
  description: promeneurChienVannes.metaDescription,
  alternates: {
    canonical: `${env.siteUrl}/${promeneurChienVannes.slug}`,
  },
  openGraph: {
    title: promeneurChienVannes.metaTitle,
    description: promeneurChienVannes.metaDescription,
    url: `${env.siteUrl}/${promeneurChienVannes.slug}`,
    type: "website",
  },
};

export default async function PromeneurChienVannesPage() {
  const reviews = await getReviews();

  return (
    <>
      <ServiceJsonLd data={promeneurChienVannes} />
      <ServiceHero data={promeneurChienVannes} />
      <ServiceIntro data={promeneurChienVannes} />
      <ServiceBenefits data={promeneurChienVannes} />
      <ServicePricing data={promeneurChienVannes} />
      <ServiceArea data={promeneurChienVannes} />
      <ServiceFaq data={promeneurChienVannes} />
      <ServiceTestimonials data={promeneurChienVannes} reviews={reviews} />
      <ServiceCta data={promeneurChienVannes} />
      <ServiceRelated data={promeneurChienVannes} />
      <Contact />
    </>
  );
}
