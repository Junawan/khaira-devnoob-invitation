"use client";

import { useEffect, useState } from "react";

import {
  collection,
  getDocs,
} from "firebase/firestore";

import { db } from "@/lib/firebase";

export default function AdminHome() {

  const [totalInvitation, setTotalInvitation] =
    useState(0);

  const [totalCustomer, setTotalCustomer] =
    useState(0);

  const [totalPremium, setTotalPremium] =
    useState(0);

  const [pendingApproval, setPendingApproval] =
    useState(0);

  useEffect(() => {

    const load = async () => {

      // invitations
      const invitationSnap =
        await getDocs(
          collection(
            db,
            "invitations"
          )
        );

      setTotalInvitation(
        invitationSnap.size
      );

      // users
      const userSnap =
        await getDocs(
          collection(
            db,
            "users"
          )
        );

      setTotalCustomer(
        userSnap.size
      );

      let premium = 0;
      let pending = 0;

      userSnap.forEach((doc) => {

        const data = doc.data();

        if (data.premium)
          premium++;

        if (
          data.paymentStatus ===
          "pending"
        )
          pending++;

      });

      setTotalPremium(
        premium
      );

      setPendingApproval(
        pending
      );

    };

    load();

  }, []);

  return (

<div>

<h1 className="text-4xl font-bold">

Dashboard

</h1>

<div
className="
grid
grid-cols-4
gap-6
mt-10
"
>

<div className="bg-white rounded-2xl p-6">

<p className="text-zinc-500">
Total Undangan
</p>

<h2 className="text-4xl font-bold mt-3">
{totalInvitation}
</h2>

</div>

<div className="bg-white rounded-2xl p-6">

<p className="text-zinc-500">
Pelanggan
</p>

<h2 className="text-4xl font-bold mt-3">
{totalCustomer}
</h2>

</div>

<div className="bg-white rounded-2xl p-6">

<p className="text-zinc-500">
Premium
</p>

<h2 className="text-4xl font-bold mt-3">
{totalPremium}
</h2>

</div>

<div className="bg-white rounded-2xl p-6">

<p className="text-zinc-500">
Menunggu Approval
</p>

<h2 className="text-4xl font-bold mt-3">
{pendingApproval}
</h2>

</div>

</div>

</div>

  );

}