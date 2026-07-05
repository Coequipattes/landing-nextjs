import * as React from "react";
import { Star } from "lucide-react";

import { cn } from "../lib/utils";
import { Card } from "./card";

function StarRating({ value = 5 }: { value?: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${value} sur 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          // biome-ignore lint/suspicious/noArrayIndexKey: fixed 5-star scale
          key={i}
          aria-hidden="true"
          className={cn(
            "size-4",
            i < value ? "fill-primary text-primary" : "fill-none text-border",
          )}
        />
      ))}
    </div>
  );
}

function ReviewCard({
  rating = 5,
  quote,
  author,
  meta,
  initials,
  className,
}: {
  rating?: number;
  quote: React.ReactNode;
  author: React.ReactNode;
  meta?: React.ReactNode;
  initials: React.ReactNode;
  className?: string;
}) {
  return (
    <Card className={cn("h-full", className)}>
      <StarRating value={rating} />
      <p className="flex-1 leading-relaxed text-muted-foreground">
        « {quote} »
      </p>
      <div className="flex items-center gap-3">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/15 text-sm font-bold text-primary">
          {initials}
        </span>
        <div className="min-w-0">
          <p className="font-semibold text-foreground">{author}</p>
          {meta && <p className="text-xs text-muted-foreground">{meta}</p>}
        </div>
      </div>
    </Card>
  );
}

export { ReviewCard, StarRating };
