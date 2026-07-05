"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { ToggleChip } from "@coequipattes/ui/components/toggle-chip";

type GalleryImage = {
  src: string;
  title: string;
  category: string;
};

const categories = [
  { key: "all", label: "Tout" },
  { key: "equitation", label: "Équitation" },
  { key: "chiens", label: "Chiens" },
  { key: "chats", label: "Chats" },
  { key: "nac", label: "NAC" },
];

const categoryNames: Record<string, string> = {
  equitation: "Équitation",
  chiens: "Chiens",
  chats: "Chats",
  nac: "NAC",
};

const PAGE_SIZE = 12;

export function Gallery({ images }: { images: GalleryImage[] }) {
  const [filter, setFilter] = useState("all");
  const [limit, setLimit] = useState(PAGE_SIZE);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered =
    filter === "all" ? images : images.filter((i) => i.category === filter);

  const visible = filtered.slice(0, limit);
  const remaining = filtered.length - limit;

  const handleFilter = (key: string) => {
    setFilter(key);
    setLimit(PAGE_SIZE);
  };

  const openLightbox = useCallback(
    (index: number) => {
      setLightbox(index);
      document.body.style.overflow = "hidden";
    },
    [],
  );

  const closeLightbox = useCallback(() => {
    setLightbox(null);
    document.body.style.overflow = "";
  }, []);

  const navigate = useCallback(
    (dir: number) => {
      if (lightbox === null) return;
      const next = lightbox + dir;
      if (next < 0) setLightbox(images.length - 1);
      else if (next >= images.length) setLightbox(0);
      else setLightbox(next);
    },
    [lightbox, images.length],
  );

  return (
    <>
      <div className="flex justify-center gap-3 mb-12 flex-wrap">
        {categories.map((c) => (
          <ToggleChip
            key={c.key}
            active={filter === c.key}
            onClick={() => handleFilter(c.key)}
          >
            {c.label}
          </ToggleChip>
        ))}
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
        {visible.map((img) => (
          <button
            key={img.src}
            type="button"
            className="relative w-full mb-4 rounded-2xl overflow-hidden cursor-pointer group break-inside-avoid"
            onClick={() => openLightbox(images.indexOf(img))}
          >
            <Image
              src={img.src}
              alt={img.title}
              width={600}
              height={400}
              className="w-full h-auto transition-transform duration-400 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h4 className="text-white text-[1.1rem] mb-1">{img.title}</h4>
              <p className="text-primary text-[0.85rem]">
                {categoryNames[img.category]}
              </p>
            </div>
          </button>
        ))}
      </div>

      {remaining > 0 && (
        <div className="flex justify-center mt-10">
          <button
            type="button"
            onClick={() => setLimit((l) => l + PAGE_SIZE)}
            className="px-8 py-3 rounded-full border border-primary/30 text-primary font-medium text-[0.9rem] hover:bg-primary/10 transition-colors duration-300 cursor-pointer"
          >
            Voir plus ({remaining} photo{remaining > 1 ? "s" : ""})
          </button>
        </div>
      )}

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-[2000] flex items-center justify-center p-10 backdrop-blur-[10px]"
          onClick={closeLightbox}
          onKeyDown={(e) => {
            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowLeft") navigate(-1);
            if (e.key === "ArrowRight") navigate(1);
          }}
        >
          <div
            className="relative max-w-[90vw] max-h-[90vh] animate-[zoomIn_0.3s_var(--transition)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute -top-12 right-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center cursor-pointer hover:bg-primary/80 transition-colors duration-200 text-primary-foreground font-bold"
              onClick={closeLightbox}
            >
              ✕
            </button>

            <button
              type="button"
              className="absolute top-1/2 -translate-y-1/2 -left-[70px] w-[50px] h-[50px] bg-primary/30 rounded-full flex items-center justify-center cursor-pointer hover:bg-primary transition-colors duration-200 backdrop-blur-[10px] text-primary-foreground"
              onClick={() => navigate(-1)}
            >
              ‹
            </button>

            <Image
              src={images[lightbox].src}
              alt={images[lightbox].title}
              width={1200}
              height={800}
              className="max-w-full max-h-[85vh] rounded-xl shadow-[0_20px_80px_rgba(0,0,0,0.5)] object-contain"
            />

            <button
              type="button"
              className="absolute top-1/2 -translate-y-1/2 -right-[70px] w-[50px] h-[50px] bg-primary/30 rounded-full flex items-center justify-center cursor-pointer hover:bg-primary transition-colors duration-200 backdrop-blur-[10px] text-primary-foreground"
              onClick={() => navigate(1)}
            >
              ›
            </button>

            <div className="absolute -bottom-15 left-0 right-0 text-center">
              <h4 className="text-white text-[1.2rem] mb-1">
                {images[lightbox].title}
              </h4>
              <p className="text-primary text-[0.95rem]">
                {categoryNames[images[lightbox].category]}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
