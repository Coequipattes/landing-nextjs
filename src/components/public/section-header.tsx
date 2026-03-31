export function SectionHeader({
  label,
  title,
  subtitle,
}: {
  label: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center mb-16 md:mb-20">
      <div className="text-[0.85rem] uppercase tracking-[3px] text-pink font-semibold mb-3">
        {label}
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
