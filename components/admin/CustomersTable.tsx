"use client";

import {
  collection,
  getDocs,
   doc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";

import {
  db,
} from "@/lib/firebase";

import {
  useEffect,
  useState,
} from "react";

export default function CustomersTable() {

  const [customers,setCustomers] =
    useState<any[]>([]);

  useEffect(()=>{

    loadCustomers();

  },[]);

  async function activateCustomer(id:string){

  await updateDoc(

    doc(db,"users",id),

    {

      premium:true,

      plan:"premium",

      paymentStatus:"paid",

      premiumAt:serverTimestamp(),

      updatedAt:serverTimestamp(),

    }

  );

  loadCustomers();

}

  async function loadCustomers(){

    const snapshot =
      await getDocs(
        collection(db,"users")
      );

    setCustomers(

      snapshot.docs.map(doc=>({

        id:doc.id,

        ...doc.data(),

      }))

    );

  }

  return (

<table className="w-full">

<thead>

<tr>

<th>Nama</th>

<th>Email</th>

<th>WA</th>

<th>Premium</th>

<th>Status</th>

<th></th>

</tr>

</thead>

<tbody>

{

customers.map(customer=>(

<tr key={customer.id}>

<td>{customer.name}</td>

<td>{customer.email}</td>

<td>{customer.phone}</td>

<td>

{

customer.premium

?

"✅"

:

"❌"

}

</td>

<td>

{

customer.paymentStatus

}

</td>

<td>

<button
onClick={()=>activateCustomer(customer.id)}
className="
px-4
py-2
rounded-lg
bg-green-600
text-white
"
>

Aktifkan

</button>

</td>

</tr>

))

}

</tbody>

</table>

  );

}