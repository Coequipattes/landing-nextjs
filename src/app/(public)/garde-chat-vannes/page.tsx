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
import { gardeChatVannes } from "@/content/service-pages/garde-chat-vannes";
import { env } from "@/lib/env";
import { getReviews } from "@/lib/google-reviews";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: gardeChatVannes.metaTitle,
  description: gardeChatVannes.metaDescription,
  alternates: {
    canonical: `${env.siteUrl}/${gardeChatVannes.slug}`,
  },
  openGraph: {
    title: gardeChatVannes.metaTitle,
    description: gardeChatVannes.metaDescription,
    url: `${env.siteUrl}/${gardeChatVannes.slug}`,
    type: "website",
  },
};

export default async function GardeChatVannesPage() {
  const reviews = await getReviews();

  return (
    <>
      <ServiceJsonLd data={gardeChatVannes} />
      <ServiceHero data={gardeChatVannes} />
      <ServiceIntro data={gardeChatVannes} />
      <ServiceBenefits data={gardeChatVannes} />
      <ServicePricing data={gardeChatVannes} />
      <ServiceArea data={gardeChatVannes} />
      <ServiceFaq data={gardeChatVannes} />
      <ServiceTestimonials data={gardeChatVannes} reviews={reviews} />
      <ServiceCta data={gardeChatVannes} />
      <ServiceRelated data={gardeChatVannes} />
      <Contact />
    </>
  );
}
