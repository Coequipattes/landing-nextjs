import type { ReactNode } from "react";

export function SectionHeader({
  label,
  title,
  subtitle,
}: {
  label: string;
  title: ReactNode;
  subtitle?: string;
}) {
  return (
    <div className="text-center mb-16 md:mb-20">
      <div className="inline-flex items-center gap-3 mb-5">
        <span className="block w-8 h-px bg-pink/40" />
        <div className="text-[0.8rem] uppercase tracking-[4px] text-pink font-semibold">
          {label}
        </div>
        <span className="block w-8 h-px bg-pink/40" />
      </div>
      <h2 className="font-display text-2xl md:text-[3rem] font-bold text-white mb-5 leading-[1.2]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[1.15rem] text-gray-light max-w-[700px] mx-auto leading-[1.7]">
          {subtitle}
        </p>
      )}
    </div>
  );
}
