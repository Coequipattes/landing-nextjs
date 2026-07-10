import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { Contact } from "@/components/public/contact";
import { Gallery } from "@/components/public/gallery";
import { Hero } from "@/components/public/hero";
import { ProcessTimeline } from "@/components/public/process-timeline";
import { SectionHeader } from "@/components/public/section-header";
import { ServicesHub } from "@/components/public/services-hub";
import { Testimonials } from "@/components/public/testimonials";
import { env } from "@/lib/env";
import { getGalleryItems } from "@/lib/gallery";
import { getReviews } from "@/lib/google-reviews";

const getHomeData = createServerFn({ method: "GET" }).handler(async () => {
  const [gallery, reviews] = await Promise.all([
    getGalleryItems(),
    getReviews(),
  ]);
  return { gallery, reviews };
});

export const Route = createFileRoute("/_public/")({
  loader: () => getHomeData(),
  head: () => ({
    links: [{ rel: "canonical", href: env.siteUrl }],
  }),
  component: Home,
});

function Home() {
  const { gallery, reviews } = Route.useLoaderData();

  return (
    <>
      <Hero />
      <ServicesHub />
      <Testimonials reviews={reviews} />
      <ProcessTimeline />
      <section id="galerie" className="py-16 md:py-25 px-6">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeader label="Galerie" title="" subtitle="" />
          <Gallery images={gallery} />
        </div>
      </section>
      <Contact />
    </>
  );
}
