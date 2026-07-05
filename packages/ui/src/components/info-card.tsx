import * as React from "react";

import { Card } from "./card";
import { IconMedallion } from "./icon-medallion";

function InfoCard({
  icon,
  label,
  value,
  href,
  className,
}: {
  icon: React.ReactNode;
  label: React.ReactNode;
  value: React.ReactNode;
  href?: string;
  className?: string;
}) {
  const body = (
    <div className="flex items-center gap-4">
      <IconMedallion>{icon}</IconMedallion>
      <div className="min-w-0">
        <p className="text-[0.7rem] font-bold uppercase tracking-wide text-primary">
          {label}
        </p>
        <p className="truncate font-medium text-foreground">{value}</p>
      </div>
    </div>
  );

  return (
    <Card interactive={Boolean(href)} className={className}>
      {href ? (
        <a href={href} className="block">
          {body}
        </a>
      ) : (
        body
      )}
    </Card>
  );
}

export { InfoCard };
