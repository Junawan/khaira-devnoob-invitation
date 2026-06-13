"use client";

import { useEffect, useState } from "react";

import {
  onAuthStateChanged,
} from "firebase/auth";

import {
  useRouter,
} from "next/navigation";

import {
  auth,
} from "@/lib/firebase";

export default function AdminGuard({
  children,
}: {
  children: React.ReactNode;
}) {

  const router =
    useRouter();

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const unsubscribe =
      onAuthStateChanged(
        auth,
        (user) => {

          if (!user) {
            router.push(
              "/admin/login"
            );
          }

          setLoading(false);
        }
      );

    return () =>
      unsubscribe();

  }, [router]);

  if (loading) {
    return (
      <div className="p-10">
        Loading...
      </div>
    );
  }

  return <>{children}</>;
}