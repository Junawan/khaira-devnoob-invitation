import { NextResponse } from "next/server";
import { adminDb } from "@/lib/firebase-admin";

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: Promise<{
      slug: string;
    }>;
  }
) {

  const { slug } =
    await params;

  const snap =
    await adminDb
      .collection("invitations")
      .doc(slug)
      .get();

  if (!snap.exists) {

    return NextResponse.json(
      {
        error: "Not Found",
      },
      {
        status: 404,
      }
    );

  }

  return NextResponse.json({
    id: snap.id,
    ...snap.data(),
  });

}