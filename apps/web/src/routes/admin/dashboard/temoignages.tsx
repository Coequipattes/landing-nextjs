import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/dashboard/temoignages")({
  component: TemoignagesPage,
});

type Review = {
  text: string;
  authorName: string;
  authorInitials: string;
  context: string;
  visible: boolean;
};

function TemoignagesPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  async function loadReviews() {
    const res = await fetch("/api/admin/reviews");
    if (res.ok) setReviews(await res.json());
  }

  useEffect(() => {
    loadReviews();
  }, []);

  async function handleRefresh() {
    setRefreshing(true);
    await fetch("/api/admin/reviews", { method: "POST" });
    await loadReviews();
    setRefreshing(false);
  }

  async function handleToggle(authorName: string, visible: boolean) {
    await fetch("/api/admin/reviews", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ authorName, visible }),
    });
    await loadReviews();
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Témoignages</h1>
        <button
          type="button"
          onClick={handleRefresh}
          disabled={refreshing}
          className="bg-pink-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-pink-600 disabled:opacity-50"
        >
          {refreshing ? "Rafraîchissement..." : "Rafraîchir depuis Google"}
        </button>
      </div>

      <div className="space-y-4">
        {reviews.map((review) => (
          <div
            key={review.authorName}
            className={`bg-white rounded-xl border border-gray-200 p-6 ${
              !review.visible ? "opacity-50" : ""
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-bold text-sm">
                    {review.authorInitials}
                  </div>
                  <div>
                    <div className="font-medium text-sm text-gray-900">
                      {review.authorName}
                    </div>
                    <div className="text-xs text-gray-500">
                      {review.context}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {review.text}
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleToggle(review.authorName, !review.visible)}
                className={`shrink-0 px-3 py-1 rounded-full text-xs font-medium ${
                  review.visible
                    ? "bg-green-100 text-green-700 hover:bg-red-100 hover:text-red-700"
                    : "bg-gray-100 text-gray-500 hover:bg-green-100 hover:text-green-700"
                }`}
              >
                {review.visible ? "Visible" : "Masqué"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
