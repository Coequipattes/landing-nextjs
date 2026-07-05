import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-[color,background-color,box-shadow,transform] duration-150 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        // Primary CTA: rose pill with a solid deeper-rose bottom edge + soft
        // ambient shadow (tactile "3D" depth, no gradient/glow). Presses down on click.
        primary:
          "bg-primary text-primary-foreground shadow-[0_3px_0_0_var(--rose-strong),0_7px_16px_-6px_rgba(224,91,138,0.5)] hover:bg-primary/95 hover:shadow-[0_3px_0_0_var(--rose-strong),0_9px_22px_-6px_rgba(224,91,138,0.6)] active:translate-y-[2px] active:shadow-[0_1px_0_0_var(--rose-strong),0_3px_10px_-6px_rgba(224,91,138,0.45)]",
        // Outline pill: rose border; on hover it fills and picks up the same
        // tactile edge + press as the primary (coherent, but quieter at rest).
        outline:
          "border-2 border-primary text-foreground hover:bg-primary hover:text-primary-foreground hover:shadow-[0_3px_0_0_var(--rose-strong),0_7px_16px_-6px_rgba(224,91,138,0.5)] active:translate-y-[2px] active:shadow-[0_1px_0_0_var(--rose-strong),0_3px_10px_-6px_rgba(224,91,138,0.45)]",
        // Ghost: rose text, faint rose wash on hover.
        ghost: "text-primary hover:bg-primary/10",
        // Secondary: warm surface with a soft neutral edge + press (subtler depth).
        secondary:
          "bg-secondary text-secondary-foreground shadow-[0_2px_0_0_var(--line),0_4px_12px_-6px_rgba(58,46,38,0.12)] hover:bg-card active:translate-y-px active:shadow-[0_1px_0_0_var(--line),0_2px_8px_-6px_rgba(58,46,38,0.1)]",
        // Inline text link — not a pill.
        link: "rounded-none px-0 font-medium text-primary underline-offset-4 hover:underline",
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
