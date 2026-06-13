"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { db } from "@/lib/firebase";

import {
  doc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";

export default function CreateInvitationForm() {

    const router = useRouter();

  const [groom, setGroom] =
    useState("");

  const [bride, setBride] =
    useState("");

  const [date, setDate] =
    useState("");

    const [loveStory, setLoveStory] =
  useState([
    {
      year: "",
      title: "",
      description: "",
    },
  ]);

    const createInvitation =
  async () => {

    const slug =
      `${groom}-${bride}`
        .toLowerCase()
        .replaceAll(" ", "-");

    await setDoc(
      doc(
        db,
        "invitations",
        slug
      ),
      {
        groom,
        bride,
        date,
        loveStory,

        createdAt:
          serverTimestamp(),
      }
    );

    router.push(
  `/admin/${slug}/edit`
);
};

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-3xl shadow">

      <h1 className="text-4xl font-bold mb-8">
        Buat Undangan
      </h1>

      <div className="space-y-4">

        <input
          type="text"
          placeholder="Nama Pria"
          value={groom}
          onChange={(e) =>
            setGroom(e.target.value)
          }
          className="w-full border p-4 rounded-xl"
        />

        <input
          type="text"
          placeholder="Nama Wanita"
          value={bride}
          onChange={(e) =>
            setBride(e.target.value)
          }
          className="w-full border p-4 rounded-xl"
        />

        <input
          type="datetime-local"
          value={date}
          onChange={(e) =>
            setDate(e.target.value)
          }
          className="w-full border p-4 rounded-xl"
        />

        <div className="mt-8">

  <h3 className="text-xl font-semibold mb-4">
    Love Story
  </h3>

  {loveStory.map(
    (story, index) => (

      <div
        key={index}
        className="
        border
        rounded-xl
        p-4
        mb-4
        "
      >

        <input
          placeholder="Tahun"
          value={story.year}
          onChange={(e) => {

            const updated =
              [...loveStory];

            updated[index].year =
              e.target.value;

            setLoveStory(updated);

          }}
          className="
          w-full
          border
          p-3
          rounded-lg
          mb-3
          "
        />

        <input
          placeholder="Judul"
          value={story.title}
          onChange={(e) => {

            const updated =
              [...loveStory];

            updated[index].title =
              e.target.value;

            setLoveStory(updated);

          }}
          className="
          w-full
          border
          p-3
          rounded-lg
          mb-3
          "
        />

        <textarea
          placeholder="Cerita"
          value={story.description}
          onChange={(e) => {

            const updated =
              [...loveStory];

            updated[index].description =
              e.target.value;

            setLoveStory(updated);

          }}
          className="
          w-full
          border
          p-3
          rounded-lg
          h-28
          "
        />

      </div>

    )
  )}

  <button
    type="button"
    onClick={() =>
      setLoveStory([
        ...loveStory,
        {
          year: "",
          title: "",
          description: "",
        },
      ])
    }
    className="
    bg-blue-500
    text-white
    px-4
    py-2
    rounded-lg
    "
  >
    + Tambah Story
  </button>

</div>

        <button
  onClick={createInvitation}
  className="bg-[#9A7B45] text-white px-6 py-4 rounded-xl"
>
  Buat Undangan
</button>

      </div>

    </div>
  );
}