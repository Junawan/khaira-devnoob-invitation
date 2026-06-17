"use client";

import DashboardInvitations
from "@/components/dashboard/DashboardInvitations";

import { useAuth }
from "@/providers/AuthProvider";

export default function DashboardHome(){

const{

profile,

}=useAuth();

return(

<>

<h1
className="
text-4xl
font-bold
"
>

Halo,

{profile?.name}

👋

</h1>

<p
className="
mt-3
text-zinc-500
"
>

Selamat datang di Dashboard Khaira Invitation.

</p>

<DashboardInvitations/>

</>

);

}