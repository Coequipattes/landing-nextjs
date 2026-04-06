"use client";

import { useEffect, useRef } from "react";
import { SectionHeader } from "./section-header";

type Review = {
  text: string;
  authorName: string;
  authorInitials: string;
  context: string;
  rating: number;
  visible?: boolean;
};

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="bg-black-card border border-pink/10 rounded-2xl p-5 w-72 shrink-0 mr-4 hover:border-pink/30 transition-colors duration-300">
      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: review.rating }).map((_, i) => (
          <span key={i} className="text-pink text-sm">★</span>
        ))}
      </div>
      <p className="text-gray-light text-[0.875rem] leading-[1.7] mb-4 line-clamp-3">
        {review.text}
      </p>
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-pink/20 flex items-center justify-center text-pink font-bold text-xs shrink-0">
          {review.authorInitials}
        </div>
        <div>
          <p className="text-white text-sm font-semibold leading-tight">{review.authorName}</p>
          <p className="text-gray text-xs">{review.context}</p>
        </div>
      </div>
    </div>
  );
}

function GoogleBadge({ rating, count }: { rating: string; count: number }) {
  return (
    <div className="flex items-center justify-center gap-2 mb-10">
      <svg width="20" height="20" viewBox="0 0 24 24" aria-label="Google">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
      </svg>
      <span className="text-pink font-semibold text-sm">★ {rating}</span>
      <span className="text-gray text-sm">· {count} avis Google</span>
    </div>
  );
}

// velocity > 0 → moves left, velocity < 0 → moves right
function MarqueeRow({ reviews, velocity }: { reviews: Review[]; velocity: number }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const xRef = useRef(0);
  const pausedRef = useRef(false);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // For rightward rows, start at -halfWidth so we loop at 0
    if (velocity < 0) {
      xRef.current = -(track.scrollWidth / 2);
      track.style.transform = `translateX(${xRef.current}px)`;
    }

    const step = () => {
      if (!pausedRef.current && trackRef.current) {
        const halfWidth = trackRef.current.scrollWidth / 2;
        xRef.current -= velocity;
        if (velocity > 0 && xRef.current <= -halfWidth) xRef.current += halfWidth;
        if (velocity < 0 && xRef.current >= 0) xRef.current -= halfWidth;
        trackRef.current.style.transform = `translateX(${xRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [velocity]);

  return (
    <div
      onMouseEnter={() => { pausedRef.current = true; }}
      onMouseLeave={() => { pausedRef.current = false; }}
    >
      <div ref={trackRef} className="flex">
        {[...reviews, ...reviews].map((review, i) => (
          <ReviewCard key={i} review={review} />
        ))}
      </div>
    </div>
  );
}

export function Testimonials({ reviews }: { reviews: Review[] }) {
  const visible = reviews.filter((r) => r.visible !== false);

  const avgRating = visible.length > 0
    ? (visible.reduce((sum, r) => sum + r.rating, 0) / visible.length).toFixed(1)
    : "5.0";

  const half = Math.ceil(visible.length / 2);
  const row1 = visible.slice(0, half);
  const row2 = visible.slice(half);

  return (
    <section id="temoignages" className="py-16 md:py-25 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader
          label="Témoignages"
          title="Ce que disent mes clients"
        />
      </div>

      <GoogleBadge rating={avgRating} count={visible.length} />

      <div
        className="flex flex-col gap-4"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <MarqueeRow reviews={row1} velocity={0.6} />
        <MarqueeRow reviews={row2} velocity={-0.4} />
      </div>
    </section>
  );
}
