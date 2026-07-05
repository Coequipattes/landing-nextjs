import Link from "next/link";
import type { ServicePageData } from "@/content/service-pages/types";

export function ServiceRelated({ data }: { data: ServicePageData }) {
  if (data.related.length === 0) return null;

  return (
    <section className="py-12 md:py-16 px-6 border-t border-pink/10">
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-[0.8rem] uppercase tracking-[4px] text-pink font-semibold text-center mb-8">
          Voir aussi
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {data.related.map((r) => (
            <li key={r.slug}>
              <Link
                href={`/${r.slug}`}
                className="block bg-black-card border border-pink/10 rounded-2xl px-5 py-5 text-center text-gray-light hover:text-pink hover:border-pink hover:-translate-y-[2px] transition-all duration-300"
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
