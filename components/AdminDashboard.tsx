"use client";

import { useEffect, useState } from "react";

import { db } from "@/lib/firebase";

import {
  collection,
  onSnapshot,
  deleteDoc,
doc,
getDoc,
} from "firebase/firestore";

import {
  signOut,
} from "firebase/auth";

import {
  auth,
} from "@/lib/firebase";

export default function AdminDashboard({
  slug,
}: {
  slug: string;
}) {

    const [filter, setFilter] =
  useState("semua");

  const [rsvps, setRsvps] = useState<any[]>([]);

  const [views, setViews] =
  useState(0);

  const hadir = rsvps.filter(
  (item) =>
    item.attendance === "hadir"
).length;

const totalTamuHadir = rsvps
  .filter(
    (item) =>
      item.attendance === "hadir"
  )
  .reduce(
    (sum, item) =>
      sum + Number(item.guestCount || 0),
    0
  );

const tidakHadir = rsvps.filter(
  (item) =>
    item.attendance === "tidak-hadir"
).length;

const deleteRsvp = async (
  id: string
) => {
  if (
    !confirm(
      "Hapus RSVP ini?"
    )
  )
    return;

  await deleteDoc(
    doc(
      db,
      "invitations",
      slug,
      "rsvps",
      id
    )
  );
};

const handleLogout =
  async () => {

    await signOut(auth);

    window.location.href =
      "/admin/login";
};

  useEffect(() => {

    const unsubscribe = onSnapshot(
      collection(
  db,
  "invitations",
  slug,
  "rsvps"
),
      (snapshot) => {

        const data = snapshot.docs.map(
          (doc) => ({
            id: doc.id,
            ...doc.data(),
          })
        );

        setRsvps(data);
      }
    );

    return () => unsubscribe();

  }, []);

useEffect(() => {

  const loadViews =
    async () => {

      const snap =
        await getDoc(
          doc(
            db,
            "invitations",
            slug
          )
        );

      if (
        snap.exists()
      ) {

        setViews(
          snap.data().views || 0
        );

      }
    };

  loadViews();

}, [slug]);

const filteredRsvp =
  filter === "semua"
    ? rsvps
    : rsvps.filter(
        (item) =>
          item.attendance === filter
      );

      const exportCsv = () => {
  const headers = [
    "Nama",
    "Status",
    "Jumlah Tamu",
  ];

  const rows = rsvps.map(
    (item) => [
      item.name,
      item.attendance,
      item.guestCount,
    ]
  );

  const csvContent = [
    headers,
    ...rows,
  ]
    .map((row) =>
      row.join(",")
    )
    .join("\n");

  const blob = new Blob(
    [csvContent],
    {
      type: "text/csv;charset=utf-8;",
    }
  );

  const url =
    URL.createObjectURL(blob);

  const link =
    document.createElement("a");

  link.href = url;

  link.download =
    `rsvp-${slug}.csv`;

  link.click();

  URL.revokeObjectURL(url);
};

const exportGuestbookCsv = () => {

  const headers = [
    "Nama",
    "Ucapan",
  ];

  const rows = rsvps
    .filter(item => item.message)
    .map(item => [
      item.name,
      item.message,
    ]);

  const csvContent = [
    headers,
    ...rows,
  ]
    .map(row => row.join(","))
    .join("\n");

  const blob = new Blob(
    [csvContent],
    {
      type: "text/csv;charset=utf-8;",
    }
  );

  const url =
    URL.createObjectURL(blob);

  const link =
    document.createElement("a");

  link.href = url;

  link.download =
    `guestbook-${slug}.csv`;

  link.click();

  URL.revokeObjectURL(url);

};

  return (
    <div>

      <h1 className="text-4xl font-bold mb-2">
  Dashboard Admin
</h1>

<button
  onClick={handleLogout}
  className="bg-red-500 text-white px-4 py-2 rounded-xl mb-6"
>
  Logout
</button>

<p className="text-gray-500 mb-10">
  Undangan: {slug}
</p>

<select
  value={filter}
  onChange={(e) =>
    setFilter(e.target.value)
  }
  className="border rounded-lg px-3 py-2 mb-4"
>
  <option value="semua">
    Semua
  </option>

  <option value="hadir">
    Hadir
  </option>

  <option value="tidak-hadir">
    Tidak Hadir
  </option>
</select>

      <div className="bg-white p-6 rounded-2xl shadow">

        <h2 className="text-2xl font-semibold mb-4">
          RSVP
        </h2>

        <div className="space-y-2">

  <p>
    Total RSVP:
    {" "}
    {rsvps.length}
  </p>

  <p>
    Hadir:
    {" "}
    {hadir}
  </p>

  <p>
    Tidak Hadir:
    {" "}
    {tidakHadir}
  </p>
  <p>
  Total Tamu Hadir:
  {" "}
  {totalTamuHadir}
</p>

<p>
  Dilihat:
  {" "}
  {views}
</p>

</div>

      </div>

      <button
  onClick={exportCsv}
  className="mt-6 bg-[#9A7B45] text-white px-6 py-3 rounded-xl"
>
  Download CSV
</button>

      <div className="bg-white p-6 rounded-2xl shadow mt-8">

  <h2 className="text-2xl font-semibold mb-4">
    Daftar RSVP
  </h2>

  <div className="overflow-x-auto">

    <table className="w-full">

      <thead>
        <tr className="border-b">
          <th className="text-left py-3">
            Nama
          </th>

          <th className="text-left py-3">
            Status
          </th>

          <th className="text-left py-3">
            Jumlah
          </th>

          <th>Aksi</th>
        </tr>
      </thead>

      <tbody>

        {filteredRsvp.map((item) => (
          <tr
            key={item.id}
            className="border-b"
          >
            <td className="py-3">
              {item.name}
            </td>

            <td className="py-3">
              {item.attendance}
            </td>

            <td className="py-3">
              {item.guestCount}
            </td>
            <td>
  <button
    onClick={() =>
      deleteRsvp(item.id)
    }
    className="text-red-500"
  >
    Hapus
  </button>
</td>
          </tr>
        ))}

      </tbody>

    </table>

  </div>

</div>

<div className="bg-white p-6 rounded-2xl shadow mt-8">

  <h2 className="text-2xl font-semibold mb-4">
    Ucapan & Doa
  </h2>

  <div className="space-y-4">

    {rsvps
  .filter(item => item.message)
  .map((item) => (

      <div
        key={item.id}
        className="border rounded-xl p-4"
      >
        <h3 className="font-semibold">
          {item.name}
        </h3>

        <p className="mt-2 text-gray-600">
          {item.message}
        </p>
      </div>

    ))}

  </div>

  <button
  onClick={
    exportGuestbookCsv
  }
  className="mb-6 bg-[#9A7B45] text-white px-6 py-3 rounded-xl"
>
  Download Guestbook CSV
</button>

</div>

    </div>
  );
}
