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
import { petSittingVannes } from "@/content/service-pages/pet-sitting-vannes";
import { env } from "@/lib/env";
import { getReviews } from "@/lib/google-reviews";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: petSittingVannes.metaTitle,
  description: petSittingVannes.metaDescription,
  alternates: {
    canonical: `${env.siteUrl}/${petSittingVannes.slug}`,
  },
  openGraph: {
    title: petSittingVannes.metaTitle,
    description: petSittingVannes.metaDescription,
    url: `${env.siteUrl}/${petSittingVannes.slug}`,
    type: "website",
  },
};

export default async function PetSittingVannesPage() {
  const reviews = await getReviews();

  return (
    <>
      <ServiceJsonLd data={petSittingVannes} />
      <ServiceHero data={petSittingVannes} />
      <ServiceIntro data={petSittingVannes} />
      <ServiceBenefits data={petSittingVannes} />
      <ServicePricing data={petSittingVannes} />
      <ServiceArea data={petSittingVannes} />
      <ServiceFaq data={petSittingVannes} />
      <ServiceTestimonials data={petSittingVannes} reviews={reviews} />
      <ServiceCta data={petSittingVannes} />
      <ServiceRelated data={petSittingVannes} />
      <Contact />
    </>
  );
}
