"use client";

import { useEffect, useState } from "react";

import {
  collection,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";

import { db } from "@/lib/firebase";

export default function ElegantGoldWishes({
  slug,
}: {
  slug: string;
}) {

  const [messages, setMessages] =
    useState<any[]>([]);

  useEffect(() => {

    const load = async () => {

      const q = query(
        collection(
          db,
          "invitations",
          slug,
          "rsvps"
        ),
        orderBy(
          "createdAt",
          "desc"
        )
      );

      const snap =
        await getDocs(q);

      setMessages(
        snap.docs.map(
          (doc) => ({
            id: doc.id,
            ...doc.data(),
          })
        )
      );
    };

    load();

  }, [slug]);

  return (
    <section className="py-24">

      <div className="max-w-3xl mx-auto px-6">

        <h2 className="text-center text-4xl font-serif text-[#9A7B45]">
          Ucapan & Doa
        </h2>

        <img
          src="/images/luxury/18.png"
          alt=""
          className="w-56 mx-auto my-6"
        />

        <div className="space-y-4">

          {messages.map((item) => (

            <div
              key={item.id}
              className="
              border
              border-yellow-500/20
              bg-zinc-900/50
              rounded-2xl
              p-5
              "
            >

              <h3 className="text-[#9A7B45] font-semibold">
                {item.name}
              </h3>

              <p className="text-zinc-300 mt-2">
                {item.message}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}