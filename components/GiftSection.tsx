"use client";

import Image from "next/image";

export default function GiftSection({
  bank,
  accountNumber,
  accountName,
  qris,
}: {
  bank: string;
  accountNumber: string;
  accountName: string;
  qris: string;
}) {
  const copyAccount = async () => {
    await navigator.clipboard.writeText(
      accountNumber
    );

    alert("Nomor rekening berhasil disalin");
  };

  return (
    <section className="py-24 px-5 bg-white">
      <div className="max-w-3xl mx-auto">

        <h2 className="text-center text-5xl font-serif text-[#9A7B45] mb-4">
          Amplop Digital
        </h2>

        <div className="text-center text-2xl text-[#9A7B45] mb-12">
          ❦
        </div>

        <div className="bg-stone-50 rounded-3xl p-10 shadow-lg text-center">

          <h3 className="text-3xl font-serif text-[#9A7B45]">
            {bank}
          </h3>

          <p className="text-2xl mt-4 font-semibold">
            {accountNumber}
          </p>

          <p className="mt-2 text-gray-600">
            a.n. {accountName}
          </p>

          <button
            onClick={copyAccount}
            className="gold-button px-8 py-3 rounded-xl mt-6"
          >
            Salin Nomor Rekening
          </button>

        </div>

        <div className="mt-12 text-center">

          <h3 className="text-3xl font-serif text-[#9A7B45] mb-6">
            QRIS
          </h3>

          <Image
            src={qris}
            alt="QRIS"
            width={300}
            height={300}
            className="mx-auto rounded-2xl shadow-lg"
          />

        </div>

      </div>
    </section>
  );
}