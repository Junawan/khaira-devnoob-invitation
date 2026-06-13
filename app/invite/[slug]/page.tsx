import InvitationClient
from "@/components/InvitationClient";

export default async function InvitePage({
  params,
  searchParams,
}: {
  params: Promise<{
    slug: string;
  }>;

  searchParams: Promise<{
    to?: string;
  }>;
}) {

  const { slug } =
    await params;

  const { to } =
    await searchParams;

  return (
    <InvitationClient
      slug={slug}
      guestName={to || ""}
    />
  );
}