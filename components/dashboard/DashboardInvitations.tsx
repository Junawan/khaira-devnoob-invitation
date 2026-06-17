"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

import { db } from "@/lib/firebase";
import { useAuth } from "@/providers/AuthProvider";

type Invitation = {
  slug: string;
  groom: string;
  bride: string;
  theme: string;
  date: string;
};

export default function DashboardInvitations() {

  const { user } = useAuth();

  const [items, setItems] =
    useState<Invitation[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    if (!user) return;

    const load = async () => {

      const q = query(
        collection(db, "invitations"),
        where("uid", "==", user.uid)
      );

      const snapshot =
        await getDocs(q);

      const data =
        snapshot.docs.map((doc) => ({

          slug: doc.id,

          ...(doc.data() as Omit<
            Invitation,
            "slug"
          >),

        }));

      setItems(data);

      setLoading(false);

    };

    load();

  }, [user]);

  return (

    <div className="mt-10">

      <div
        className="
        flex
        justify-between
        items-center
        mb-8
        "
      >

        <h2
          className="
          text-3xl
          font-semibold
          "
        >
          Undangan Saya
        </h2>

        <Link
          href="/dashboard/create"
          className="
          px-5
          py-3
          rounded-xl
          bg-black
          text-white
          "
        >
          + Buat Undangan
        </Link>

      </div>

      {loading ? (

        <div
          className="
          bg-white
          rounded-3xl
          p-10
          text-center
          "
        >
          Loading...
        </div>

      ) : items.length === 0 ? (

        <div
          className="
          bg-white
          rounded-3xl
          p-10
          text-center
          "
        >
          Belum ada undangan.
        </div>

      ) : (

        <div className="space-y-5">

          {items.map((item) => (

            <div
              key={item.slug}
              className="
              bg-white
              rounded-3xl
              p-6
              shadow
              "
            >

              <h3
                className="
                text-2xl
                font-bold
                "
              >
                {item.groom} & {item.bride}
              </h3>

              <p className="text-zinc-500 mt-2">
                Tema : {item.theme}
              </p>

              <p className="text-zinc-500">
                {item.date}
              </p>

              <div
                className="
                flex
                gap-3
                mt-6
                "
              >

                <Link
                  href={`/invite/${item.slug}`}
                  className="
                  px-4
                  py-2
                  rounded-lg
                  border
                  "
                >
                  Preview
                </Link>

                <Link
                  href={`/dashboard/invitation/${item.slug}/edit`}
                  className="
                  px-4
                  py-2
                  rounded-lg
                  bg-black
                  text-white
                  "
                >
                  Edit
                </Link>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>

  );

}