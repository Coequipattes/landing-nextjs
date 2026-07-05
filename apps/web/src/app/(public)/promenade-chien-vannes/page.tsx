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
import { promenadeChienVannes } from "@/content/service-pages/promenade-chien-vannes";
import { env } from "@/lib/env";
import { getReviews } from "@/lib/google-reviews";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: promenadeChienVannes.metaTitle,
  description: promenadeChienVannes.metaDescription,
  alternates: {
    canonical: `${env.siteUrl}/${promenadeChienVannes.slug}`,
  },
  openGraph: {
    title: promenadeChienVannes.metaTitle,
    description: promenadeChienVannes.metaDescription,
    url: `${env.siteUrl}/${promenadeChienVannes.slug}`,
    type: "website",
  },
};

export default async function PromenadeChienVannesPage() {
  const reviews = await getReviews();

  return (
    <>
      <ServiceJsonLd data={promenadeChienVannes} />
      <ServiceHero data={promenadeChienVannes} />
      <ServiceIntro data={promenadeChienVannes} />
      <ServiceBenefits data={promenadeChienVannes} />
      <ServicePricing data={promenadeChienVannes} />
      <ServiceArea data={promenadeChienVannes} />
      <ServiceFaq data={promenadeChienVannes} />
      <ServiceTestimonials data={promenadeChienVannes} reviews={reviews} />
      <ServiceCta data={promenadeChienVannes} />
      <ServiceRelated data={promenadeChienVannes} />
      <Contact />
    </>
  );
}
