import AdminDashboard from "@/components/AdminDashboard";
import AdminGuard from "@/components/AdminGuard";

export default async function AdminPage({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {

  const { slug } =
    await params;

  return (
  <AdminGuard>
    <main
      className="min-h-screen p-10 bg-stone-50"
    >
      <AdminDashboard
        slug={slug}
      />
    </main>
  </AdminGuard>
);
}