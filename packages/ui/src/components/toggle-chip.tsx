import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../lib/utils";

const toggleChipVariants = cva(
  "inline-flex cursor-pointer items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      active: {
        // Selected: solid pink pill, black text — no glow, no lift.
        true: "border-transparent bg-primary text-primary-foreground",
        // Unselected: quiet border, brightens on hover — no fill, no lift.
        false:
          "border-border bg-transparent text-muted-foreground hover:border-primary hover:text-foreground",
      },
    },
    defaultVariants: {
      active: false,
    },
  },
);

function ToggleChip({
  className,
  active,
  ...props
}: React.ComponentProps<"button"> & VariantProps<typeof toggleChipVariants>) {
  return (
    <button
      type="button"
      data-slot="toggle-chip"
      data-active={active ? "" : undefined}
      className={cn(toggleChipVariants({ active, className }))}
      {...props}
    />
  );
}

export { ToggleChip, toggleChipVariants };
