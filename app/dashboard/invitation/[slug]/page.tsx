import DashboardInvitationDetail
from "@/components/dashboard/DashboardInvitationDetail";

export default async function Page({
  params,
}:{
  params:Promise<{
    slug:string;
  }>;
}){

  const { slug } =
    await params;

  return (

    <DashboardInvitationDetail
      slug={slug}
    />

  );

}