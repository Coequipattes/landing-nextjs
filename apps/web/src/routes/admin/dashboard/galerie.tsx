import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/dashboard/galerie")({
  component: GaleriePage,
});

type GalleryItem = {
  src: string;
  title: string;
  category: string;
};

const categories = ["equitation", "chiens", "chats"];

function GaleriePage() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [uploading, setUploading] = useState(false);

  async function loadItems() {
    const res = await fetch("/api/admin/galerie");
    if (res.ok) setItems(await res.json());
  }

  useEffect(() => {
    loadItems();
  }, []);

  async function handleUpload(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setUploading(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    const res = await fetch("/api/admin/galerie", {
      method: "POST",
      body: data,
    });

    if (res.ok) {
      form.reset();
      await loadItems();
    }
    setUploading(false);
  }

  async function handleDelete(src: string) {
    if (!confirm("Supprimer cette image ?")) return;
    await fetch("/api/admin/galerie", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ src }),
    });
    await loadItems();
  }

  async function handleUpdate(src: string, title: string, category: string) {
    await fetch("/api/admin/galerie", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ src, title, category }),
    });
    await loadItems();
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Galerie</h1>

      {/* Upload form */}
      <form
        onSubmit={handleUpload}
        className="bg-white rounded-xl border border-gray-200 p-6 mb-8 flex flex-wrap gap-4 items-end"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Image
          </label>
          <input
            type="file"
            name="file"
            accept="image/*"
            required
            className="text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Titre
          </label>
          <input
            type="text"
            name="title"
            required
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Catégorie
          </label>
          <select
            name="category"
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          disabled={uploading}
          className="bg-pink-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-pink-600 disabled:opacity-50"
        >
          {uploading ? "Upload..." : "Ajouter"}
        </button>
      </form>

      {/* Gallery grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <GalleryCard
            key={item.src}
            item={item}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        ))}
      </div>
    </div>
  );
}

function GalleryCard({
  item,
  onDelete,
  onUpdate,
}: {
  item: GalleryItem;
  onDelete: (src: string) => void;
  onUpdate: (src: string, title: string, category: string) => void;
}) {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(item.title);
  const [category, setCategory] = useState(item.category);

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="relative aspect-square">
        <img
          src={item.src}
          alt={item.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
      <div className="p-4">
        {editing ? (
          <div className="space-y-2">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => {
                  onUpdate(item.src, title, category);
                  setEditing(false);
                }}
                className="text-xs bg-green-500 text-white px-3 py-1 rounded"
              >
                Sauver
              </button>
              <button
                type="button"
                onClick={() => setEditing(false)}
                className="text-xs bg-gray-200 px-3 py-1 rounded"
              >
                Annuler
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="font-medium text-sm text-gray-900">
              {item.title}
            </div>
            <div className="text-xs text-gray-500 mb-3">{item.category}</div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setEditing(true)}
                className="text-xs text-blue-500 hover:underline"
              >
                Modifier
              </button>
              <button
                type="button"
                onClick={() => onDelete(item.src)}
                className="text-xs text-red-500 hover:underline"
              >
                Supprimer
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
