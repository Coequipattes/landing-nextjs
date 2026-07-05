import * as React from "react";

import { cn } from "../lib/utils";
import { Card, CardDescription, CardTitle } from "./card";
import { IconMedallion } from "./icon-medallion";

function ServiceCard({
  icon,
  title,
  teaser,
  price,
  href,
  cta = "Découvrir",
  className,
}: {
  icon: React.ReactNode;
  title: React.ReactNode;
  teaser: React.ReactNode;
  price?: React.ReactNode;
  href: string;
  cta?: string;
  className?: string;
}) {
  return (
    <Card interactive className={cn("group h-full", className)}>
      <div className="flex items-center gap-4">
        <IconMedallion>{icon}</IconMedallion>
        <CardTitle>{title}</CardTitle>
      </div>
      <CardDescription className="flex-1">{teaser}</CardDescription>
      <div className="mt-2 flex items-center justify-between gap-4">
        {price ? (
          <span className="font-display text-lg font-semibold text-primary">
            {price}
          </span>
        ) : (
          <span />
        )}
        <a
          href={href}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
        >
          {cta}
          <span
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:translate-x-1"
          >
            →
          </span>
        </a>
      </div>
    </Card>
  );
}

export { ServiceCard };
