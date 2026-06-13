export default function ElegantGoldGift({
  data,
}: {
  data: any;
}) {

  const copyAccount = () => {

  navigator.clipboard.writeText(
    data.accountNumber
  );

  alert(
    "Nomor rekening berhasil disalin"
  );

};
  return (
  <section className="py-24">

    <div className="max-w-3xl mx-auto px-6 text-center">

      <div className="relative w-40 h-40 mx-auto mb-6">

        <img
          src="/images/luxury/round_frame.png"
          alt=""
          className="absolute inset-0 w-full h-full object-contain"
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-yellow-400 text-4xl">
            🎁
          </span>
        </div>

      </div>

      <h2 className="text-4xl font-[Cormorant_Garamond] text-[#9A7B45]">
        Amplop Digital
      </h2>

      <img
        src="/images/luxury/18.png"
        alt=""
        className="w-56 mx-auto my-6"
      />

      <div
        className="
        bg-zinc-900/50
        border
        border-yellow-500/20
        rounded-3xl
        p-8
        max-w-lg
        mx-auto
        "
      >

        <p className="text-white">
          Transfer Bank
        </p>

        <h3 className="text-black text-2xl mt-2">
          {data.bankName}
        </h3>

        <p className="text-white text-2xl font-semibold mt-4">
          {data.accountNumber}
        </p>

        <p className="text-white mt-2">
          a.n. {data.accountName}
        </p>

        <button
          onClick={copyAccount}
          className="
          mt-6
          px-8
          py-3
          rounded-full
          bg-[#9A7B45]
          hover:bg-yellow-500
          text-white
          transition
          "
        >
          Salin Nomor Rekening
        </button>

      </div>

      {data.qrisImage && (

          <div
  className="
  max-w-md
  mx-auto
  bg-zinc-900/50
  border
  border-yellow-500/20
  rounded-3xl
  p-6
  mt-10
  "
>

          <h3 className="text-black text-2xl mb-5">
  QRIS
</h3>

          <div
            className="
            inline-block
            p-3
            rounded-3xl
            border
            border-yellow-500/20
            bg-zinc-900/50
            "
          >

            <img
  src={data.qrisImage}
  alt="QRIS"
  className="
  w-full
  max-w-[280px]
  mx-auto
  rounded-2xl
  "
/>

          </div>

        </div>

      )}

    </div>

  </section>
);
}