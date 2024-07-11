import AdminNav from "~/app/_components/nav-bars/admin-nav";

export function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full w-full flex-col">
      <h1 className="text-4xl font-bold">Admin</h1>
      <hr className="border-t-2 border-purple-700" />
      <AdminNav />
      <div className="flex flex-row flex-wrap gap-4 p-2 text-2xl font-bold">
        {children}
      </div>
    </div>
  );
}

export default AdminLayout;
