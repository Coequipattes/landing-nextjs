"use client";

import * as React from "react";

import { cn } from "../lib/utils";

export type AccordionItemData = {
  q: React.ReactNode;
  a: React.ReactNode;
};

function Accordion({
  items,
  className,
}: {
  items: AccordionItemData[];
  className?: string;
}) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);
  const baseId = React.useId();

  return (
    <ul className={cn("flex flex-col gap-3", className)}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const buttonId = `${baseId}-btn-${i}`;
        const panelId = `${baseId}-panel-${i}`;
        return (
          <li
            // biome-ignore lint/suspicious/noArrayIndexKey: FAQ items are stable/ordered
            key={i}
            className="overflow-hidden rounded-2xl border border-border bg-card"
          >
            <h3 className="m-0">
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-5 text-left font-semibold text-foreground transition-colors hover:text-primary md:px-6"
              >
                <span>{item.q}</span>
                <span
                  aria-hidden="true"
                  className={cn(
                    "ml-4 shrink-0 text-2xl leading-none text-primary transition-transform duration-300",
                    isOpen && "rotate-45",
                  )}
                >
                  +
                </span>
              </button>
            </h3>
            {/* grid 0fr -> 1fr animates height to auto without measuring */}
            <div
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  aria-hidden={!isOpen}
                  className="px-5 pb-6 leading-relaxed text-muted-foreground md:px-6"
                >
                  {item.a}
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export { Accordion };
