import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../lib/utils";

const cardVariants = cva(
  "flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-[0_1px_2px_rgba(58,46,38,0.04),0_10px_28px_-18px_rgba(58,46,38,0.18)]",
  {
    variants: {
      interactive: {
        // Clickable cards: quiet hover — border warms, shadow lifts a touch.
        // No translate, no glow (that was the slop we removed).
        true: "transition-[color,box-shadow,border-color] duration-200 hover:border-primary/45 hover:shadow-[0_1px_2px_rgba(58,46,38,0.05),0_14px_32px_-16px_rgba(224,91,138,0.28)]",
        false: "",
      },
    },
    defaultVariants: {
      interactive: false,
    },
  },
);

function Card({
  className,
  interactive,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof cardVariants>) {
  return (
    <div
      data-slot="card"
      className={cn(cardVariants({ interactive, className }))}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn("flex flex-col gap-1.5", className)}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        "font-display text-lg leading-snug text-foreground",
        className,
      )}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-sm leading-relaxed text-muted-foreground", className)}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="card-content" className={cn(className)} {...props} />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center gap-3", className)}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
};
