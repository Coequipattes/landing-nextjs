import { Contact } from "@/components/public/contact";
import { Gallery } from "@/components/public/gallery";
import { Hero } from "@/components/public/hero";
import { ProcessTimeline } from "@/components/public/process-timeline";
import { SectionHeader } from "@/components/public/section-header";
import { ServicesHub } from "@/components/public/services-hub";
import { Testimonials } from "@/components/public/testimonials";
import { getGalleryItems } from "@/lib/gallery";
import { getReviews } from "@/lib/google-reviews";

export const dynamic = "force-dynamic";

export default async function Home() {
  const galleryData = await getGalleryItems();
  const reviewsData = await getReviews();

  return (
    <>
      <Hero />
      <ServicesHub />
      <ProcessTimeline />
      <section id="galerie" className="py-16 md:py-25 px-6">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeader label="Galerie" title="" subtitle="" />
          <Gallery images={galleryData} />
        </div>
      </section>
      <Testimonials reviews={reviewsData} />
      <Contact />
    </>
  );
}
