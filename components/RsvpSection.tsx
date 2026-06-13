"use client";

import { useState } from "react";
import { db } from "@/lib/firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

export default function RsvpSection({
  slug,
}: {
  slug: string;
}) {
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState("hadir");
  const [guestCount, setGuestCount] = useState(1);

  const handleSubmit = async () => {
  try {
    await addDoc(
      collection(
        db,
        "invitations",
slug,
"rsvp"
      ),
      {
        name,
        attendance,
        guestCount,
        createdAt: serverTimestamp(),
      }
    );

    alert("RSVP berhasil dikirim");

    setName("");
    setAttendance("hadir");
    setGuestCount(1);

  } catch (error) {
    console.error(error);

    alert("Gagal mengirim RSVP");
  }
};

  return (
    <section className="py-24 px-5 bg-white">
      <div className="max-w-xl mx-auto">

        <h2 className="text-center text-5xl font-serif text-[#9A7B45] mb-4">
          RSVP
        </h2>

        <div className="text-center text-2xl text-[#9A7B45] mb-12">
          ❦
        </div>

        <div className="space-y-4">

          <input
            type="text"
            placeholder="Nama"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            className="w-full border rounded-xl p-4"
          />

          <select
            value={attendance}
            onChange={(e) =>
              setAttendance(e.target.value)
            }
            className="w-full border rounded-xl p-4"
          >
            <option value="hadir">
              Hadir
            </option>

            <option value="tidak-hadir">
              Tidak Hadir
            </option>
          </select>

          <input
            type="number"
            value={guestCount}
            onChange={(e) =>
              setGuestCount(
                Number(e.target.value)
              )
            }
            className="w-full border rounded-xl p-4"
          />

          <button
            onClick={handleSubmit}
            className="gold-button w-full py-4 rounded-xl"
          >
            Kirim RSVP
          </button>

        </div>
      </div>
    </section>
  );
}