import {
  Link,
  Outlet,
  createFileRoute,
  useLocation,
  useNavigate,
} from "@tanstack/react-router";

const navItems = [
  { to: "/admin/dashboard", label: "Dashboard" },
  { to: "/admin/dashboard/galerie", label: "Galerie" },
  { to: "/admin/dashboard/temoignages", label: "Témoignages" },
] as const;

export const Route = createFileRoute("/admin/dashboard")({
  component: DashboardLayout,
});

function DashboardLayout() {
  const pathname = useLocation({ select: (l) => l.pathname });
  const navigate = useNavigate();

  async function handleLogout() {
    await fetch("/api/admin/auth", { method: "DELETE" });
    navigate({ to: "/admin/login" });
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
              key={item.to}
              to={item.to}
              className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === item.to
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

      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
}
