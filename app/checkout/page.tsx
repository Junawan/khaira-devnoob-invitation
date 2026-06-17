"use client";

import { useAuth } from "@/providers/AuthProvider";
import { useState } from "react";

export default function CheckoutPage() {

  const [copied, setCopied] =
    useState(false);

  const accountNumber =
    "5735269469"; // Ganti rekening BCA

    const {
  profile,
} = useAuth();

  const copyAccount = async () => {

    await navigator.clipboard.writeText(
      accountNumber
    );

    setCopied(true);

    setTimeout(() => {

      setCopied(false);

    }, 2000);

  };

  const whatsappMessage = encodeURIComponent(`Halo Admin Khaira Invitation,

Saya telah melakukan pembayaran Khaira Invitation Premium.

Nama : ${profile?.name ?? "-"}
Email : ${profile?.email ?? "-"}
No HP : ${profile?.phone ?? "-"}

Mohon dilakukan verifikasi.

Terima kasih.`);

  return (

<main
className="
min-h-screen
bg-stone-100
py-20
px-5
"
>

<div
className="
max-w-4xl
mx-auto
"
>

{/* Header */}

<div className="text-center">

<h1
className="
text-5xl
font-serif
"
>

Checkout Premium

</h1>

<p
className="
mt-4
text-zinc-600
"
>

Aktifkan semua template Khaira Invitation

</p>

</div>

{/* Paket */}

<div
className="
mt-10
bg-white
rounded-3xl
shadow
p-8
"
>

<h2
className="
text-3xl
font-bold
"
>

Khaira Invitation Premium

</h2>

<p
className="
mt-2
text-zinc-500
"
>

Bayar sekali dan bebas menggunakan seluruh tema.

</p>

<div
className="
mt-8
text-5xl
font-bold
text-amber-600
"
>

Rp59.000

</div>

<ul
className="
mt-8
space-y-3
text-zinc-700
"
>

<li>✔ Semua Template Premium</li>

<li>✔ Unlimited Ganti Tema</li>

<li>✔ Unlimited Edit</li>

<li>✔ RSVP Otomatis</li>

<li>✔ Buku Tamu Digital</li>

<li>✔ Countdown</li>

<li>✔ Gallery</li>

<li>✔ Google Maps</li>

<li>✔ Gift / QRIS</li>

<li>✔ Musik</li>

<li>✔ Lifetime</li>

</ul>

</div>

{/* QRIS */}

<div
className="
mt-8
bg-white
rounded-3xl
shadow
p-8
text-center
"
>

<h2
className="
text-2xl
font-semibold
"
>

Pembayaran QRIS

</h2>

<p
className="
mt-2
text-zinc-500
"
>

Scan menggunakan aplikasi pembayaran apa saja.

</p>

<img
src="/images/payment/qris.png"
alt="QRIS"
className="
w-72
mx-auto
mt-8
rounded-2xl
border
"
/>

<p
className="
mt-6
text-zinc-500
"
>

DANA • OVO • GoPay • ShopeePay • Mobile Banking

</p>

</div>

{/* Transfer */}

<div
className="
mt-8
bg-white
rounded-3xl
shadow
p-8
"
>

<h2
className="
text-2xl
font-semibold
"
>

Transfer Bank

</h2>

<div
className="
mt-8
rounded-2xl
border
p-6
bg-stone-50
"
>

<p className="text-zinc-500">

Bank

</p>

<h3
className="
text-2xl
font-bold
mt-1
"
>

BCA

</h3>

<p
className="
mt-6
text-zinc-500
"
>

Nomor Rekening

</p>

<div
className="
flex
justify-between
items-center
mt-2
"
>

<h2
className="
text-3xl
font-bold
"
>

{accountNumber}

</h2>

<button
onClick={copyAccount}
className="
px-5
py-3
rounded-xl
bg-black
text-white
"
>

{

copied

?

"Tersalin"

:

"Copy"

}

</button>

</div>

<p
className="
mt-6
text-zinc-500
"
>

Atas Nama

</p>

<h3
className="
text-2xl
font-semibold
"
>

Jujun Junawan

</h3>

</div>

</div>

{/* Konfirmasi */}

<div
className="
mt-8
bg-amber-50
border
border-amber-200
rounded-3xl
p-8
"
>

<h2
className="
text-2xl
font-semibold
"
>

Setelah Melakukan Pembayaran

</h2>

<p
className="
mt-4
leading-8
text-zinc-700
"
>

Silakan kirim konfirmasi pembayaran melalui WhatsApp.

Admin akan melakukan verifikasi maksimal 30 menit pada jam operasional.

</p>

<a
href={`https://wa.me/6285710255464?text=${whatsappMessage}`}
target="_blank"
className="
mt-8
block
text-center
bg-green-600
hover:bg-green-700
text-white
py-4
rounded-2xl
font-semibold
transition
"
>

Konfirmasi via WhatsApp

</a>

</div>

</div>

</main>

  );

}