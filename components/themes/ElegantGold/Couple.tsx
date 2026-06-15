export default function ElegantGoldCouple({
  data,
}: {
  data: any;
}) {
  return (
    <section
  className="
  relative
  py-12
  px-5
  overflow-hidden
  "
>

  <img
  src="/images/luxury/5.png"
  alt=""
  className="
  absolute
  left-0
  top-32
  w-20
  md:w-28
  opacity-30
  pointer-events-none
  "
/>

<img
  src="/images/luxury/7.png"
  alt=""
  className="
  absolute
  right-0
  top-32
  w-20
  md:w-28
  opacity-30
  pointer-events-none
  "
/>

      <div className="text-center mb-20">

  <img
    src="/images/luxury/12.png"
    alt=""
    className="
    w-56
    mx-auto
    opacity-90
    mb-6
    "
  />

  <h2
    className="
    text-4xl
    md:text-5xl
    font-[family-name:var(--font-great-vibes)] font-bold
    text-[#9A7B45]
    "
  >
    Mempelai
  </h2>

</div>

      <div
        className="
        max-w-6xl
        mx-auto
        grid
        md:grid-cols-3
        gap-12
        items-center
        "
      >

        {/* GROOM */}
        <div className="text-center">

          <div
  className="
  relative
  w-72
  h-72
  mx-auto
  "
>
  <img
    src={data.groomImage}
    alt=""
    className="
    absolute
    inset-[15%]
w-[70%]
h-[70%]
    rounded-full
    object-cover
    "
  />

  <img
    src="/images/luxury/round_frame.png"
    alt=""
    className="
    absolute
    inset-0
    w-full
    h-full
    object-contain
    pointer-events-none
    "
  />
</div>

          <h3
            className="
            text-4xl
            font-[family-name:var(--font-great-vibes)] font-bold
            text-[#9A7B45]
            mt-8
            "
          >
            {data.groom}
          </h3>

          <p
            className="
            text-[#9A7B45]
            font-[family-name:var(--font-body)]
            font-bold
            uppercase
            tracking-widest
            text-sm
            mt-6
            "
          >
            {data.groomTitle}
          </p>

          <p className="text-black mt-4
          text-2xl
md:text-2xl
          font-[family-name:var(--font-pinyon-script)] font-bold">
            Bapak {data.groomFather}
          </p>

          <p className="text-black my-2
          text-2xl
md:text-2xl
          font-[family-name:var(--font-pinyon-script)] font-bold">
            &
          </p>

          <p className="text-black
          text-2xl
md:text-2xl
          font-[family-name:var(--font-pinyon-script)] font-bold">
            Ibu {data.groomMother}
          </p>

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

        </div>

        {/* HEART */}
        <div
  className="
  hidden md:flex
  items-center
  justify-center
  "
>
  <img
    src="/images/luxury/8.png"
    alt=""
    className="
w-72
opacity-80
"
  />
</div>

        {/* BRIDE */}
        <div className="text-center">

          <div
  className="
  relative
  w-72
  h-72
  mx-auto
  "
>
  <img
    src={data.brideImage}
    alt=""
    className="
    absolute
    inset-[15%]
w-[70%]
h-[70%]
    rounded-full
    object-cover
    "
  />

  <img
    src="/images/luxury/round_frame.png"
    alt=""
    className="
    absolute
    inset-0
    w-full
    h-full
    object-contain
    pointer-events-none
    "
  />
</div>

          <h3
            className="
            text-4xl
            font-[family-name:var(--font-great-vibes)] font-bold
            text-[#9A7B45]
            mt-8
            "
          >
            {data.bride}
          </h3>

          <p
            className="
            text-[#9A7B45]
            font-[family-name:var(--font-body)] font-bold
            uppercase
            tracking-widest
            text-sm
            mt-6
            "
          >
            {data.brideTitle}
          </p>

          <p className="text-black mt-4
          text-2xl
md:text-2xl
          font-[family-name:var(--font-pinyon-script)] font-bold">
            Bapak {data.brideFather}
          </p>

          <p className="text-black my-2
          text-2xl
md:text-2xl
          font-[family-name:var(--font-pinyon-script)] font-bold">
            &
          </p>

          <p className="text-black
          text-2xl
md:text-2xl
          font-[family-name:var(--font-pinyon-script)] font-bold">
            Ibu {data.brideMother}
          </p>

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

        </div>

      </div>

    </section>
  );
}