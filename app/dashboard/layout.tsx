"use client";

import Navbar from "@/components/home/Navbar";

import { useAuth } from "@/providers/AuthProvider";

import { useRouter } from "next/navigation";

import { useEffect } from "react";

export default function DashboardLayout({

children,

}:{

children:React.ReactNode;

}){

const {

user,

profile,

loading,

}=useAuth();

const router=useRouter();

useEffect(()=>{

if(loading)return;

if(!user){

router.replace("/login");

return;

}

if(!profile?.premium){

router.replace("/checkout");

return;

}

},[loading,user,profile,router]);

if(loading){

return null;

}

return(

<main
className="
flex-1
bg-stone-100
min-h-screen
p-8
"
>

    <Navbar/>

{children}

</main>

);

}