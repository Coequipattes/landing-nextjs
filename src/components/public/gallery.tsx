"use client";

import { useState, useCallback } from "react";
import Image from "next/image";

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

export function Gallery({ images }: { images: GalleryImage[] }) {
  const [filter, setFilter] = useState("all");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered =
    filter === "all" ? images : images.filter((i) => i.category === filter);

  const openLightbox = useCallback((index: number) => {
    setLightbox(index);
    document.body.style.overflow = "hidden";
  }, []);

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
          <button
            key={c.key}
            type="button"
            onClick={() => setFilter(c.key)}
            className={`px-6 py-2.5 rounded-full font-medium text-[0.9rem] border-2 transition-all duration-300 cursor-pointer ${
              filter === c.key
                ? "bg-pink text-black border-pink"
                : "bg-black-card text-white border-pink/20 hover:bg-pink hover:text-black hover:border-pink"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((img) => (
          <button
            key={img.src}
            type="button"
            className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group"
            onClick={() => openLightbox(images.indexOf(img))}
          >
            <Image
              src={img.src}
              alt={img.title}
              fill
              className="object-cover transition-transform duration-400 group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h4 className="text-white text-[1.1rem] mb-1">{img.title}</h4>
              <p className="text-pink text-[0.85rem]">
                {categoryNames[img.category]}
              </p>
            </div>
          </button>
        ))}
      </div>

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
              className="absolute -top-12 right-0 w-10 h-10 bg-pink rounded-full flex items-center justify-center cursor-pointer hover:bg-white hover:rotate-90 transition-all duration-300 text-black font-bold"
              onClick={closeLightbox}
            >
              ✕
            </button>

            <button
              type="button"
              className="absolute top-1/2 -translate-y-1/2 -left-[70px] w-[50px] h-[50px] bg-pink/30 rounded-full flex items-center justify-center cursor-pointer hover:bg-pink transition-all duration-300 backdrop-blur-[10px] text-white"
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
              className="absolute top-1/2 -translate-y-1/2 -right-[70px] w-[50px] h-[50px] bg-pink/30 rounded-full flex items-center justify-center cursor-pointer hover:bg-pink transition-all duration-300 backdrop-blur-[10px] text-white"
              onClick={() => navigate(1)}
            >
              ›
            </button>

            <div className="absolute -bottom-15 left-0 right-0 text-center">
              <h4 className="text-white text-[1.2rem] mb-1">
                {images[lightbox].title}
              </h4>
              <p className="text-pink text-[0.95rem]">
                {categoryNames[images[lightbox].category]}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
