import * as React from "react";

import { cn } from "../lib/utils";

function IconMedallion({
  className,
  children,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="icon-medallion"
      className={cn(
        "inline-flex size-12 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-blush/60 text-primary [&_svg]:size-5",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}

export { IconMedallion };
