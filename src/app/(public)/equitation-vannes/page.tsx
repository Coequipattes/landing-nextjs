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
import { equitationVannes } from "@/content/service-pages/equitation-vannes";
import { env } from "@/lib/env";
import { getReviews } from "@/lib/google-reviews";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: equitationVannes.metaTitle,
  description: equitationVannes.metaDescription,
  alternates: {
    canonical: `${env.siteUrl}/${equitationVannes.slug}`,
  },
  openGraph: {
    title: equitationVannes.metaTitle,
    description: equitationVannes.metaDescription,
    url: `${env.siteUrl}/${equitationVannes.slug}`,
    type: "website",
  },
};

export default async function EquitationVannesPage() {
  const reviews = await getReviews();

  return (
    <>
      <ServiceJsonLd data={equitationVannes} />
      <ServiceHero data={equitationVannes} />
      <ServiceIntro data={equitationVannes} />
      <ServiceBenefits data={equitationVannes} />
      <ServicePricing data={equitationVannes} />
      <ServiceArea data={equitationVannes} />
      <ServiceFaq data={equitationVannes} />
      <ServiceTestimonials data={equitationVannes} reviews={reviews} />
      <ServiceCta data={equitationVannes} />
      <ServiceRelated data={equitationVannes} />
      <Contact />
    </>
  );
}
