import { getGalleryItems } from "@/lib/gallery";
import { getReviews } from "@/lib/google-reviews";

export default async function DashboardPage() {
  const gallery = await getGalleryItems();
  const reviews = await getReviews();
  const visibleReviews = reviews.filter((r) => r.visible);

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="text-3xl font-bold text-pink-500">
            {gallery.length}
          </div>
          <div className="text-sm text-gray-500 mt-1">Photos en galerie</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="text-3xl font-bold text-pink-500">
            {reviews.length}
          </div>
          <div className="text-sm text-gray-500 mt-1">Avis Google total</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="text-3xl font-bold text-pink-500">
            {visibleReviews.length}
          </div>
          <div className="text-sm text-gray-500 mt-1">Avis visibles</div>
        </div>
      </div>
    </div>
  );
}
