import { NextResponse } from "next/server";

import { db } from "@/lib/firebase";

import {
  doc,
  getDoc,
} from "firebase/firestore";

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
    await getDoc(
      doc(
        db,
        "invitations",
        slug
      )
    );

  if (!snap.exists()) {
    return NextResponse.json(
      {
        error:
          "not found",
      },
      {
        status: 404,
      }
    );
  }

  return NextResponse.json(
    snap.data()
  );
}