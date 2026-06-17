"use client";

import CustomersTable from "@/components/admin/CustomersTable";

export default function CustomersPage() {

  return (

    <main className="p-8">

      <h1
        className="
        text-3xl
        font-bold
        mb-8
        "
      >
        Pelanggan
      </h1>

      <CustomersTable />

    </main>

  );

}