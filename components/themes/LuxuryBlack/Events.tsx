export default function LuxuryBlackEvents({
  data,
}: {
  data: any;
}) {
  return (
    <section
      className="
      relative
      py-18
      px-5
      overflow-hidden
      "
    >

      {/* Judul */}
      <div className="text-center mb-20">

        <img
  src="/images/luxury/18.png"
  alt=""
  className="
  w-72
  mx-auto
  mb-4
  opacity-90
  "
/>

        <h2
          className="
          text-4xl
          md:text-5xl
          font-[family-name:var(--font-great-vibes)]
          font-bold
          text-yellow-400
          "
        >
          Detail Acara
        </h2>

      </div>

      <div
        className="
        max-w-6xl
        mx-auto
        grid
        md:grid-cols-2
        gap-12
        "
      >

        {/* AKAD */}
        <div className="relative">

          <img
            src="/images/luxury/17.png"
            alt=""
            className="
            w-full
            h-full
            object-contain
            "
          />

          <div
            className="
            absolute
            inset-0
            flex
            flex-col
            justify-center
            items-center
            text-center
            px-10
            "
          >

            <h3
              className="
              text-2xl
              md:text-4xl
              font-[family-name:var(--font-great-vibes)]
              text-yellow-400
              mb-1
              "
            >
              Akad Nikah
            </h3>

            <div className="space-y-0 text-white
            text-2xl
md:text-2xl
            font-[family-name:var(--font-pinyon-script)]">

              <p>{data.akadDate}</p>

              <p>{data.akadTime}</p>

              <p>{data.akadPlace}</p>

            </div>

          </div>

        </div>

        {/* RESEPSI */}
        <div className="relative">

          <img
            src="/images/luxury/17.png"
            alt=""
            className="
            w-full
            h-full
            object-contain
            "
          />

          <div
            className="
            absolute
            inset-0
            flex
            flex-col
            justify-center
            items-center
            text-center
            px-10
            "
          >

            <h3
              className="
              text-3xl
              md:text-4xl
              font-[family-name:var(--font-great-vibes)]
              text-yellow-400
              mb-1
              "
            >
              Resepsi
            </h3>

            <div className="space-y-0 text-white
            text-2xl
md:text-2xl
            font-[family-name:var(--font-pinyon-script)]">

              <p>{data.resepsiDate}</p>

              <p>{data.resepsiTime}</p>

              <p>{data.resepsiPlace}</p>

            </div>

          </div>

        </div>

      </div>

      <div className="mt-20 text-center">
  <img
    src="/images/luxury/3.png"
    alt=""
    className="
    w-72
    mx-auto
    opacity-80
    "
  />
</div>

    </section>
  );
}