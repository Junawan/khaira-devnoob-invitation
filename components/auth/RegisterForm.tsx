"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  createUserWithEmailAndPassword,
} from "firebase/auth";

import {
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";

import {
  auth,
  db,
} from "@/lib/firebase";

export default function RegisterForm() {

  const [name,setName]=useState("");

  const [email,setEmail]=useState("");

  const [phone,setPhone]=useState("");

  const [password,setPassword]=useState("");

  const [confirmPassword,setConfirmPassword]=useState("");

  const router = useRouter();
  const [loading, setLoading] =
useState(false);

const handleRegister = async () => {

  if (
    !name ||
    !email ||
    !phone ||
    !password ||
    !confirmPassword
  ) {

    alert("Lengkapi semua data.");

    return;

  }

  if (password !== confirmPassword) {

    alert("Konfirmasi password tidak sama.");

    return;

  }

  try {

    setLoading(true);

    const credential =
      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

    const uid =
      credential.user.uid;

    await setDoc(doc(db, "users", uid), {
  uid,
  name,
  email,
  phone,

  role: "customer",

  premium: false,

  plan: null,

  paymentStatus: "pending",

  premiumAt: null,

  expiredAt: null,

  selectedTheme: "",

  createdAt: serverTimestamp(),

  updatedAt: serverTimestamp(),
});

    alert("Registrasi berhasil.");

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
placeholder="Nama Lengkap"
value={name}
onChange={(e)=>setName(e.target.value)}
className="w-full border rounded-xl px-4 py-3"
/>

<input
type="email"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
className="w-full border rounded-xl px-4 py-3"
/>

<input
placeholder="Nomor WhatsApp"
value={phone}
onChange={(e)=>setPhone(e.target.value)}
className="w-full border rounded-xl px-4 py-3"
/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
className="w-full border rounded-xl px-4 py-3"
/>

<input
type="password"
placeholder="Konfirmasi Password"
value={confirmPassword}
onChange={(e)=>setConfirmPassword(e.target.value)}
className="w-full border rounded-xl px-4 py-3"
/>

<button
onClick={handleRegister}

disabled={loading}
className="
w-full
py-3
rounded-xl
bg-black
text-white
"
>

Daftar

</button>

</div>

  );

}