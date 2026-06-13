"use client";

import { useState } from "react";

import {
  signInWithEmailAndPassword,
} from "firebase/auth";

import {
  useRouter,
} from "next/navigation";

import {
  auth,
} from "@/lib/firebase";

export default function LoginForm() {

  const router =
    useRouter();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleLogin =
    async () => {

      try {

        setLoading(true);

        await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

        router.push(
          "/admin/budi-siti"
        );

      } catch {

        alert(
          "Email atau password salah"
        );

      } finally {

        setLoading(false);

      }
    };

  return (
    <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md">

      <h1 className="text-3xl font-bold mb-6">
        Admin Login
      </h1>

      <div className="space-y-4">

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(
              e.target.value
            )
          }
          className="w-full border p-4 rounded-xl"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }
          className="w-full border p-4 rounded-xl"
        />

        <button
          onClick={
            handleLogin
          }
          disabled={loading}
          className="w-full bg-[#9A7B45] text-white py-4 rounded-xl"
        >
          {loading
            ? "Loading..."
            : "Login"}
        </button>

      </div>

    </div>
  );
}