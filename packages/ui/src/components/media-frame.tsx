import * as React from "react";

import { cn } from "../lib/utils";

/**
 * Framework-agnostic image frame: a styled container (rounded, optional
 * aspect-ratio, warm soft shadow). Put your `<img>` / `next/image fill` inside.
 * The `bg-muted` shows as a placeholder while the image loads.
 *
 * `framed` adds decorative rose borders offset *behind* the image, peeking out
 * on the top-right (the hero's signature frame).
 */
function MediaFrame({
  ratio,
  framed = false,
  focus,
  className,
  style,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  ratio?: string | number;
  framed?: boolean;
  /** Crop focal point for the image, e.g. "top", "center", "50% 30%". */
  focus?: string;
}) {
  const inner = (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl bg-muted shadow-[0_20px_50px_-24px_rgba(58,46,38,0.35)] [&_img]:object-cover",
        focus && "[&_img]:[object-position:var(--mf-focus)]",
        className,
      )}
      style={
        {
          ...(ratio ? { aspectRatio: String(ratio) } : {}),
          ...(focus ? { "--mf-focus": focus } : {}),
          ...style,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );

  if (!framed) {
    return (
      <div data-slot="media-frame" {...props}>
        {inner}
      </div>
    );
  }

  return (
    <div data-slot="media-frame" className="relative" {...props}>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 translate-x-3 -translate-y-3 rounded-2xl border border-primary/35"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 translate-x-1.5 -translate-y-1.5 rounded-2xl border border-primary/15"
      />
      {inner}
    </div>
  );
}

export { MediaFrame };
