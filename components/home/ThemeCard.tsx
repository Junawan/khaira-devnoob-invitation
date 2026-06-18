"use client";

import Link from "next/link";

import { InvitationTheme } from "@/types/invitationTheme";
import { useRouter } from "next/navigation";
import {
  useAuth,
} from "@/providers/AuthProvider";

type ThemeCardProps = {
  theme: InvitationTheme;
};

export default function ThemeCard({
  theme,
}: ThemeCardProps) {

  const {
  
  user,
  
  loading,
  
  } = useAuth();

  const router = useRouter();

  const handleOrder = () => {

  if (loading) return;

  if (!user) {

    router.push("/login");

    return;

  }

  router.push("/checkout");

};

  return (

    <div
      className="
      bg-white
      rounded-3xl
      overflow-hidden
      border
      shadow-sm
      hover:shadow-xl
      hover:-translate-y-1
      transition-all
      duration-300
      "
    >

      {/* Preview */}

      <div
        className="
        aspect-[9/16]
        overflow-hidden
        bg-stone-100
        "
      >

        <img
          src={theme.image}
          alt={theme.name}
          className="
          w-full
          h-full
          object-cover
          transition-transform
          duration-500
          hover:scale-105
          "
        />

      </div>

      {/* Content */}

      <div className="p-5">

        <span
          className="
          inline-block
          text-xs
          px-3
          py-1
          rounded-full
          bg-amber-100
          text-amber-700
          "
        >
          {theme.badge}
        </span>

        <h3
          className="
          mt-4
          text-2xl
          font-semibold
          "
        >
          {theme.name}
        </h3>

        <p
          className="
          mt-2
          text-sm
          text-zinc-500
          "
        >
          {theme.description}
        </p>

        <div className="mt-5 flex items-center gap-2">

  <span
    className="
    px-3
    py-1
    rounded-full
    bg-emerald-100
    text-emerald-700
    text-sm
    font-medium
    "
  >
    ✔ Semua Fitur
  </span>

</div>

        <div
          className="
          mt-6
          flex
          gap-3
          "
        >

          <Link
            href={theme.demo}
            className="
            flex-1
            text-center
            px-8
            py-4
            rounded-xl
            border
            hover:bg-stone-100
            transition
            "
          >
            Lihat Demo
          </Link>

          <button
            onClick={handleOrder}
  className="
  mt-10
  px-8
  py-4
  rounded-xl
  bg-black
  text-white
  hover:bg-zinc-800
  transition
  "
>

Pesan Sekarang
          </button>

        </div>

      </div>

    </div>

  );

}