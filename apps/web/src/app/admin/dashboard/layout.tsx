"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  { href: "/admin/dashboard", label: "Dashboard" },
  { href: "/admin/dashboard/galerie", label: "Galerie" },
  { href: "/admin/dashboard/temoignages", label: "Témoignages" },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/admin/auth", { method: "DELETE" });
    router.push("/admin/login");
  }

  return (
    <div className="flex min-h-screen">
      <aside className="w-56 bg-white border-r border-gray-200 p-6 flex flex-col">
        <div className="font-bold text-lg text-pink-500 mb-8">
          Co'équi'pattes
        </div>
        <nav className="space-y-1 flex-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === item.href
                  ? "bg-pink-50 text-pink-600"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          onClick={handleLogout}
          className="text-sm text-gray-500 hover:text-red-500 transition-colors cursor-pointer"
        >
          Déconnexion
        </button>
      </aside>

      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
