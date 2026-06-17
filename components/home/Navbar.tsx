"use client";

import Link from "next/link";
import { useAuth } from "@/providers/AuthProvider";

export default function Navbar() {

  const {
    user,
    profile,
    logout,
  } = useAuth();

  return (

    <header
      className="
      sticky
      top-0
      z-50
      bg-white/90
      backdrop-blur
      border-b
      "
    >

      <div
        className="
        max-w-7xl
        mx-auto
        h-16
        px-6
        flex
        items-center
        justify-between
        "
      >

        <Link
          href="/"
          className="
          text-2xl
          font-bold
          font-serif
          "
        >
          Khaira Devnoob Invitation
        </Link>

        <nav
          className="
          hidden
          md:flex
          items-center
          gap-8
          "
        >

          <a href="#template">
            Template
          </a>

          <a href="#pricing">
            Harga
          </a>

          <a href="#faq">
            FAQ
          </a>

        </nav>

        <div
          className="
          flex
          items-center
          gap-3
          "
        >

          {/* Belum Login */}

          {!user && (

            <>

              <Link
                href="/login"
                className="
                px-4
                py-2
                rounded-lg
                border
                "
              >
                Login
              </Link>

              <Link
                href="/login"
                className="
                px-4
                py-2
                rounded-lg
                bg-black
                text-white
                "
              >
                Daftar
              </Link>

            </>

          )}

          {/* Customer */}

          {user &&
            profile?.role === "customer" && (

            <>

              <Link
                href={
                  profile.premium
                    ? "/dashboard"
                    : "/checkout"
                }
                className="
                px-4
                py-2
                rounded-lg
                bg-black
                text-white
                "
              >
                {profile.premium
                  ? "Undangan Saya"
                  : "Checkout"}
              </Link>

              <button
                onClick={logout}
                className="
                px-4
                py-2
                rounded-lg
                border
                "
              >
                Logout
              </button>

            </>

          )}

          {/* Admin */}

          {user &&
            profile?.role === "admin" && (

            <>

              <Link
                href="/admin"
                className="
                px-4
                py-2
                rounded-lg
                bg-black
                text-white
                "
              >
                Admin Dashboard
              </Link>

              <button
                onClick={logout}
                className="
                px-4
                py-2
                rounded-lg
                border
                "
              >
                Logout
              </button>

            </>

          )}

        </div>

      </div>

    </header>

  );

}