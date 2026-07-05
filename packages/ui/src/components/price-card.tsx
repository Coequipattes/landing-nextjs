import * as React from "react";

import { cn } from "../lib/utils";
import { Button } from "./button";
import { Card } from "./card";

function PriceCard({
  title,
  price,
  subtitle,
  features,
  href,
  ctaLabel = "Réserver",
  popular = false,
  className,
}: {
  title: React.ReactNode;
  price: React.ReactNode;
  subtitle?: React.ReactNode;
  features: React.ReactNode[];
  href: string;
  ctaLabel?: string;
  popular?: boolean;
  className?: string;
}) {
  return (
    <Card
      className={cn(
        "relative items-center gap-5 overflow-hidden p-8 text-center md:p-10",
        popular &&
          "border-primary shadow-[0_1px_2px_rgba(58,46,38,0.05),0_20px_44px_-22px_rgba(224,91,138,0.4)]",
        className,
      )}
    >
      {popular && (
        <span className="absolute -right-10 top-6 rotate-45 bg-primary px-12 py-1 text-[0.7rem] font-bold uppercase tracking-wide text-primary-foreground">
          Populaire
        </span>
      )}
      <h3 className="font-display text-xl text-foreground">{title}</h3>
      <p className="font-display text-5xl font-semibold text-primary">{price}</p>
      {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
      <ul className="my-2 w-full">
        {features.map((f, i) => (
          <li
            // biome-ignore lint/suspicious/noArrayIndexKey: feature order is stable
            key={i}
            className="flex items-center gap-3 border-b border-border py-3 text-left text-sm text-muted-foreground last:border-b-0"
          >
            <span aria-hidden="true" className="font-bold text-primary">
              ✓
            </span>
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <Button asChild className="w-full">
        <a href={href}>{ctaLabel}</a>
      </Button>
    </Card>
  );
}

export { PriceCard };
