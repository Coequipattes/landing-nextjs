import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold uppercase tracking-wide transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        // Primary CTA: pink pill, darkens to white on hover — colour only, no lift.
        primary: "bg-primary text-primary-foreground hover:bg-white",
        // Outline pill: pink border, fills pink on hover.
        outline:
          "border-2 border-primary text-foreground hover:bg-primary hover:text-primary-foreground",
        // Ghost: pink text, faint pink wash on hover.
        ghost: "text-primary hover:bg-primary/10",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-card",
        // Inline text link — not a pill.
        link: "rounded-none px-0 font-medium normal-case tracking-normal text-primary underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-9 px-5 text-[0.8rem]",
        default: "h-11 px-7 text-[0.9rem]",
        lg: "h-12 px-9 text-[0.95rem]",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
