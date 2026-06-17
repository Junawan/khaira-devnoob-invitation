"use client";

import { useState } from "react";
import LoginForm from "@/components/auth/LoginForm";
import RegisterForm from "@/components/auth/RegisterForm";

export default function LoginPage() {

  const [register, setRegister] =
    useState(false);

  return (

<main
className="
min-h-screen
bg-stone-100
flex
items-center
justify-center
p-6
"
>

<div
className="
w-full
max-w-md
bg-white
rounded-3xl
shadow-xl
p-10
"
>

<h1
className="
text-4xl
font-serif
text-center
"
>

Khaira Invitation

</h1>

<p
className="
text-center
text-zinc-500
mt-3
mb-10
"
>

{
register

?

"Buat akun baru"

:

"Masuk ke akun Anda"

}

</p>

{
register

?

<RegisterForm/>

:

<LoginForm/>

}

<button

onClick={()=>

setRegister(!register)

}

className="
mt-8
text-amber-700
w-full
text-center
hover:underline
"

>

{

register

?

"Sudah punya akun? Masuk"

:

"Belum punya akun? Daftar"

}

</button>

</div>

</main>

  );

}