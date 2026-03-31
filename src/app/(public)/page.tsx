import { Hero } from "@/components/public/hero";
import { About } from "@/components/public/about";
import { Services } from "@/components/public/services";
import { SectionHeader } from "@/components/public/section-header";
import { Gallery } from "@/components/public/gallery";
import { Pricing } from "@/components/public/pricing";
import { Testimonials } from "@/components/public/testimonials";
import { Contact } from "@/components/public/contact";
import { getGalleryItems } from "@/lib/gallery";
import { getReviews } from "@/lib/google-reviews";

export const dynamic = "force-dynamic";

export default async function Home() {
  const galleryData = await getGalleryItems();
  const reviewsData = await getReviews();

  return (
    <>
      <Hero />
      <About />
      <Services />
      <section id="galerie" className="py-16 md:py-25 px-6 bg-black-soft">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeader label="Galerie" title="" subtitle="" />
          <Gallery images={galleryData} />
        </div>
      </section>
      <Pricing />
      <Testimonials reviews={reviewsData} />
      <Contact />
    </>
  );
}
