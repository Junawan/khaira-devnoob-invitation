"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import {
  signInWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "@/lib/firebase";

export default function LoginForm() {

  const router = useRouter();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleLogin = async () => {

    if (!email || !password) {

      alert("Lengkapi email dan password.");

      return;

    }

    try {

      setLoading(true);

      await signInWithEmailAndPassword(

        auth,

        email,

        password

      );

      router.push("/checkout");

    } catch (error: any) {

      alert(error.message);

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="space-y-5">

      <input

        type="email"

        placeholder="Email"

        value={email}

        onChange={(e)=>

          setEmail(e.target.value)

        }

        className="
        w-full
        border
        rounded-xl
        px-4
        py-3
        "

      />

      <input

        type="password"

        placeholder="Password"

        value={password}

        onChange={(e)=>

          setPassword(e.target.value)

        }

        className="
        w-full
        border
        rounded-xl
        px-4
        py-3
        "

      />

      <button

        onClick={handleLogin}

        disabled={loading}

        className="
        w-full
        py-3
        rounded-xl
        bg-black
        text-white
        hover:bg-zinc-800
        transition
        "

      >

        {

          loading

          ?

          "Masuk..."

          :

          "Masuk"

        }

      </button>

    </div>

  );

}