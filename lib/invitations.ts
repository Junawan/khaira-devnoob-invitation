import { db } from "./firebase";

import {
  doc,
  getDoc,
} from "firebase/firestore";

export async function getInvitation(
  slug: string
) {
  const ref = doc(
    db,
    "invitations",
    slug
  );

  const snap =
    await getDoc(ref);

  if (!snap.exists()) {
    return null;
  }

  return {
    id: snap.id,
    ...snap.data(),
  };
}