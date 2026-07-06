import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { getGalleryItems } from "@/lib/gallery";
import { getReviews } from "@/lib/google-reviews";

const getDashboardData = createServerFn({ method: "GET" }).handler(async () => {
  const gallery = await getGalleryItems();
  const reviews = await getReviews();
  return {
    galleryCount: gallery.length,
    reviewsCount: reviews.length,
    visibleReviewsCount: reviews.filter((r) => r.visible).length,
  };
});

export const Route = createFileRoute("/admin/dashboard/")({
  loader: () => getDashboardData(),
  component: Dashboard,
});

function Dashboard() {
  const { galleryCount, reviewsCount, visibleReviewsCount } =
    Route.useLoaderData();

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="text-3xl font-bold text-pink-500">{galleryCount}</div>
          <div className="text-sm text-gray-500 mt-1">Photos en galerie</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="text-3xl font-bold text-pink-500">{reviewsCount}</div>
          <div className="text-sm text-gray-500 mt-1">Avis Google total</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="text-3xl font-bold text-pink-500">
            {visibleReviewsCount}
          </div>
          <div className="text-sm text-gray-500 mt-1">Avis visibles</div>
        </div>
      </div>
    </div>
  );
}
