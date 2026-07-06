import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin")({
  component: AdminLayout,
});

function AdminLayout() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Outlet />
    </div>
  );
}
