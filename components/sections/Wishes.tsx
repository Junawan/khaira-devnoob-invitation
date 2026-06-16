"use client";

import { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useTheme } from "@/theme/ThemeProvider";

export default function LuxuryBlackWishes({
  slug,
}: {
  slug: string;
}) {

  const theme = useTheme();

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
    <section className="py-12">

      <div className="max-w-3xl mx-auto px-6">

        <h2
className={`
text-center
text-4xl
${theme.font.title}
${theme.text.primary}
`}
>
  {theme.wishes.title}
</h2>

        <img
          src={theme.wishes.divider}
          alt=""
          className="w-56 mx-auto my-6"
        />

        <div className="space-y-4">

          {messages.map((item) => (

            <div
              key={item.id}
              className={theme.wishes.card}
            >

              <h3 className={`
${theme.font.title}
${theme.wishes.name}
`}>
                {item.name}
              </h3>

              <p className={`
mt-2
${theme.font.body}
${theme.wishes.message}
`}>
                {item.message}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}