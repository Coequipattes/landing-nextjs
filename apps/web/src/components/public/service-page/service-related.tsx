import Link from "next/link";
import type { ServicePageData } from "@/content/service-pages/types";

export function ServiceRelated({ data }: { data: ServicePageData }) {
  if (data.related.length === 0) return null;

  return (
    <section className="py-12 md:py-16 px-6 border-t border-border">
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-[0.8rem] uppercase tracking-[4px] text-primary font-semibold text-center mb-8">
          Voir aussi
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {data.related.map((r) => (
            <li key={r.slug}>
              <Link
                href={`/${r.slug}`}
                className="block rounded-2xl border border-border bg-card px-5 py-5 text-center text-muted-foreground transition-colors duration-200 hover:border-primary/45 hover:text-primary"
              >
                {r.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
