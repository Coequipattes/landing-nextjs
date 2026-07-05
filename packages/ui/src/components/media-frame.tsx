import * as React from "react";

import { cn } from "../lib/utils";

/**
 * Framework-agnostic image frame: a styled container (rounded, optional
 * aspect-ratio, warm soft shadow). Put your `<img>` / `next/image fill` inside.
 * The `bg-muted` shows as a placeholder while the image loads.
 */
function MediaFrame({
  ratio,
  framed = false,
  className,
  style,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  ratio?: string | number;
  /** Adds an inset rose "passe-partout" border over the image. */
  framed?: boolean;
}) {
  return (
    <div
      data-slot="media-frame"
      className={cn(
        "relative overflow-hidden rounded-2xl bg-muted shadow-[0_20px_50px_-24px_rgba(58,46,38,0.35)]",
        className,
      )}
      style={ratio ? { aspectRatio: String(ratio), ...style } : style}
      {...props}
    >
      {children}
      {framed && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-2.5 rounded-xl border border-primary/40"
        />
      )}
    </div>
  );
}

export { MediaFrame };
