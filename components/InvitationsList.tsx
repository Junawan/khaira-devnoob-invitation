"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import { db } from "@/lib/firebase";

import {
  collection,
  onSnapshot,
  getDocs,
} from "firebase/firestore";

export default function InvitationsList() {

  const [items, setItems] =
    useState<any[]>([]);

    const [stats, setStats] =
  useState<Record<string, number>>({});

  const copyLink = (
  slug: string
) => {

  const url =
    `${window.location.origin}/invite/${slug}`;

  navigator.clipboard.writeText(
    url
  );

  alert(
    "Link berhasil disalin"
  );
};

const copyGuestLink = (
  slug: string
) => {

  const guestName =
    prompt(
      "Masukkan nama tamu"
    );

  if (!guestName)
    return;

  const url =
`${window.location.origin}/invite/${slug}?to=${encodeURIComponent(
  guestName
)}`;

  navigator.clipboard.writeText(
    url
  );

  alert(
    "Link tamu berhasil disalin"
  );
};

const shareWhatsapp = (
  slug: string
) => {

  console.log("WA CLICK");
  const guestName =
    prompt(
      "Masukkan nama tamu"
    );

  if (!guestName)
    return;

  const invitationUrl =
`${window.location.origin}/invite/${slug}?to=${encodeURIComponent(
  guestName
)}`;

  const message =
`Assalamu'alaikum Wr. Wb.

Kepada Yth.
${guestName}

Dengan memohon rahmat dan ridho Allah SWT, kami mengundang Bapak/Ibu/Saudara/i untuk hadir pada acara pernikahan kami.

Silakan buka undangan melalui link berikut:

${invitationUrl}

Terima kasih.`;

  const whatsappUrl =
`https://wa.me/?text=${encodeURIComponent(
  message
)}`;

window.location.href =
  whatsappUrl;

console.log(
  whatsappUrl
);

  window.open(
    whatsappUrl,
    "_blank"
  );
};

  const loadStats = async (
  invitations: any[]
) => {

  const counts:
    Record<string, number> = {};

  for (const item of invitations) {

    const snapshot =
      await getDocs(
        collection(
          db,
          "invitations",
          item.id,
          "rsvps"
        )
      );

    counts[item.id] =
      snapshot.size;
  }

  setStats(counts);
};

  useEffect(() => {

    const unsubscribe =
      onSnapshot(
        collection(
          db,
          "invitations"
        ),
        (snapshot) => {

          const data =
  snapshot.docs.map(
    (doc) => ({
      id: doc.id,
      ...doc.data(),
    })
  );

setItems(data);

loadStats(data);
        }
      );

      

    return () =>
      unsubscribe();

  }, []);

  return (
    <div>

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-4xl font-bold">
          Semua Undangan
        </h1>

        <Link
          href="/admin/create"
          className="bg-[#9A7B45] text-white px-6 py-3 rounded-xl"
        >
          Buat Undangan
        </Link>

      </div>

      <div className="grid gap-4">

        {items.map((item) => (

          <div
  key={item.id}
  className="
  bg-white
  rounded-3xl
  shadow-lg
  p-6
  border
  border-gray-100
  "
>

  <h2 className="text-2xl font-semibold">
    {item.groom} & {item.bride}
  </h2>

  <p className="text-gray-500 mt-2">
    /invite/{item.id}
  </p>

  <p className="text-sm text-gray-500 mt-1">
  RSVP:
  {stats[item.id] || 0}
</p>

<p className="text-sm text-gray-500">
  Tema:
  {item.theme || "elegant-gold"}
</p>

  <div className="flex gap-3 mt-6 flex-wrap">

    <a
      href={`/invite/${item.id}`}
      target="_blank"
      className="
      px-4 py-2
      rounded-xl
      border
      "
    >
      Lihat
    </a>

    <Link
      href={`/admin/${item.id}/edit`}
      className="
      px-4 py-2
      rounded-xl
      bg-blue-500
      text-white
      "
    >
      Edit
    </Link>

    <Link
      href={`/admin/${item.id}`}
      className="
      px-4 py-2
      rounded-xl
      bg-[#9A7B45]
      text-white
      "
    >
      Dashboard
    </Link>

    <button
  onClick={() =>
    copyLink(item.id)
  }
  className="
  px-4 py-2
  rounded-xl
  border
  "
>
  Copy Link
</button>

<button
  onClick={() =>
    copyGuestLink(item.id)
  }
  className="
  px-4 py-2
  rounded-xl
  bg-green-500
  text-white
  "
>
  Copy Link + Nama
</button>

<button
  onClick={() =>
    shareWhatsapp(
      item.id
    )
  }
  className="
  px-4 py-2
  rounded-xl
  bg-green-600
  text-white
  "
>
  WhatsApp
</button>

  </div>

</div>

        ))}

      </div>

    </div>
  );
}