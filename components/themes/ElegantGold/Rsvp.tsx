"use client";

import { useState } from "react";
import {
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

import { db }
from "@/lib/firebase";

export default function LuxuryBlackRsvp({
  slug,
}: {
  slug: string;
}) {

  const [name, setName] =
    useState("");

  const [guestCount, setGuestCount] =
    useState(1);

  const [attendance, setAttendance] =
    useState("hadir");

    const [message, setMessage] =
  useState("");

  const handleSubmit = async () => {

  try {

    await addDoc(
      collection(
        db,
        "invitations",
        slug,
        "rsvps"
      ),
      {
        name,
        attendance,
        guestCount,
        message,
        createdAt:
          serverTimestamp(),
      }
    );

    alert(
      "Konfirmasi berhasil dikirim"
    );

    setName("");
    setMessage("");
    setGuestCount(1);

  } catch (error) {

    console.error(error);

    alert(
      "Gagal mengirim RSVP"
    );

  }
};

  return (
    <section className="relative py-24 overflow-hidden">

      <img
        src="/images/luxury/corner_left.png"
        alt=""
        className="absolute top-0 left-0 w-40 opacity-80"
      />

      <img
        src="/images/luxury/corner_right.png"
        alt=""
        className="absolute top-0 right-0 w-40 opacity-80"
      />

      <div className="max-w-xl mx-auto px-6 text-center">

        <div className="relative w-40 h-40 mx-auto mb-6">

          <img
            src="/images/luxury/round_frame.png"
            alt=""
            className="absolute inset-0 w-full h-full object-contain"
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[#9A7B45] text-4xl">
              ✦
            </span>
          </div>

        </div>

        <h2 className="text-4xl font-[Cormorant_Garamond] text-[#9A7B45]">
          Konfirmasi Kehadiran
        </h2>

        <img
          src="/images/luxury/18.png"
          alt=""
          className="w-56 mx-auto my-6"
        />

        <div className="space-y-4">

          <input
            type="text"
            placeholder="Nama"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            className="
              w-full
              bg-zinc-900/50
              border
              border-yellow-500/30
              rounded-xl
              px-4
              py-3
              text-white
            "
          />

          <input
            type="number"
            min={1}
            value={guestCount}
            onChange={(e) =>
              setGuestCount(
                Number(e.target.value)
              )
            }
            className="
              w-full
              bg-zinc-900/50
              border
              border-yellow-500/30
              rounded-xl
              px-4
              py-3
              text-white
            "
          />

          <select
            value={attendance}
            onChange={(e) =>
              setAttendance(
                e.target.value
              )
            }
            className="
              w-full
              bg-zinc-900/50
              border
              border-yellow-500/30
              rounded-xl
              px-4
              py-3
              text-white
            "
          >
            <option value="hadir">
              Hadir
            </option>

            <option value="tidak-hadir">
              Tidak Hadir
            </option>
          </select>

          <textarea
  placeholder="Ucapan & Doa"
  value={message}
  onChange={(e) =>
    setMessage(e.target.value)
  }
  className="
    w-full
    bg-zinc-900/50
    border
    border-yellow-500/30
    rounded-xl
    px-4
    py-3
    text-white
    min-h-[120px]
  "
/>

          <button
            onClick={handleSubmit}
            className="
              w-full
              py-4
              rounded-xl
              bg-[#9A7B45]
              hover:bg-yellow-500
              text-white
              font-semibold
              transition
            "
          >
            Kirim RSVP
          </button>

        </div>

        <img
          src="/images/luxury/18.png"
          alt=""
          className="w-56 mx-auto mt-8"
        />

      </div>

    </section>
  );
}