import { Outlet, createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { Nav } from "@/components/public/nav";
import { Footer } from "@/components/public/footer";
import { JsonLd } from "@/components/public/json-ld";
import { getReviews } from "@/lib/google-reviews";

const getLayoutReviews = createServerFn({ method: "GET" }).handler(async () =>
  getReviews(),
);

export const Route = createFileRoute("/_public")({
  loader: () => getLayoutReviews(),
  component: PublicLayout,
});

function PublicLayout() {
  const reviews = Route.useLoaderData();

  return (
    <>
      <JsonLd reviews={reviews} />
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
