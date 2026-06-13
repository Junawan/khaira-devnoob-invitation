import EditInvitationForm
from "@/components/EditInvitationForm";

export default async function EditPage({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {

  const { slug } =
    await params;

  return (
    <main className="min-h-screen p-10 bg-stone-50">
      <EditInvitationForm
        slug={slug}
      />
    </main>
  );
}