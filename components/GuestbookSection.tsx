"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";

import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";

export default function GuestbookSection({
  slug,
}: {
  slug: string;
}) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<any[]>([]);

  const handleSubmit = async () => {
  try {
    await addDoc(
      collection(
        db,
        "invitations",
slug,
"guestbook"
      ),
      {
        name,
        message,
        createdAt: serverTimestamp(),
      }
    );

    setName("");
    setMessage("");

  } catch (error) {
    console.error(error);
  }
};

useEffect(() => {
  const q = query(
    collection(
      db,
      "invitations",
      "budi-siti",
      "guestbook"
    ),
    orderBy("createdAt", "desc")
  );

  const unsubscribe = onSnapshot(
    q,
    (snapshot) => {
      const data = snapshot.docs.map(
        (doc) => ({
          id: doc.id,
          ...doc.data(),
        })
      );

      setMessages(data);
    }
  );

  return () => unsubscribe();
}, []);

  return (
    <section className="py-24 px-5 bg-stone-100">
      <div className="max-w-xl mx-auto">

        <h2 className="text-center text-5xl font-serif text-[#9A7B45] mb-4">
          Ucapan & Doa
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

          <textarea
            rows={4}
            placeholder="Tulis ucapan..."
            value={message}
            onChange={(e) =>
              setMessage(e.target.value)
            }
            className="w-full border rounded-xl p-4"
          />

          <button
            onClick={handleSubmit}
            className="gold-button w-full py-4 rounded-xl"
          >
            Kirim Ucapan
          </button>

        </div>

        <div className="mt-12 space-y-4">
  {messages.map((item) => (
    <div
      key={item.id}
      className="bg-white rounded-2xl p-5 shadow"
    >
      <h4 className="font-semibold">
        {item.name}
      </h4>

      <p className="mt-2 text-gray-600">
        {item.message}
      </p>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}