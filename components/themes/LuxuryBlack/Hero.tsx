export default function LuxuryBlackHero({
  groom,
  bride,
  coverImage,
}: {
  groom: string;
  bride: string;
  coverImage: string;
}) {
  return (
    <section
      className="
      relative
      min-h-screen
      flex
      items-center
      justify-center
      overflow-hidden
      px-6
      text-center
      "
    >
      {/* Corner kiri */}
      <img
        src="/images/luxury/corner_left.png"
        alt=""
        className="
        absolute
        top-0
        left-0
        w-24
  md:w-36
        opacity-60
        pointer-events-none
        "
      />

      {/* Corner kanan */}
      <img
        src="/images/luxury/corner_right.png"
        alt=""
        className="
        absolute
        top-0
        right-0
        w-24
  md:w-36
        opacity-60
        pointer-events-none
        "
      />

      <div
        className="
        relative
        z-10
        max-w-xl
        mx-auto
        "
      >

        <img
          src="/images/luxury/8.png"
          alt=""
          className="
          w-40
          mx-auto
          mb-6
          "
        />
        <p
          className="
          uppercase
          tracking-[8px]
          text-yellow-500
          text-xs
          md:text-sm
          mb-8
          "
        >
          The Wedding Of
        </p>

        {/* Foto + Frame */}
        <div
          className="
          relative
          w-[320px]
h-[320px]
md:w-[420px]
md:h-[420px]
          mx-auto
          "
        >
          <img
            src={coverImage}
            alt="cover"
            className="
            w-full
            rounded-[32px]
            shadow-2xl
            border
            border-[#D4AF37]/20
            "
          />

          
        </div>

        {/* Divider */}
        <img
          src="/images/luxury/divider_hero.png"
          alt=""
          className="
w-72
md:w-96
mx-auto
mt-48
relative
left-2
"
        />

        {/* Nama */}
        <h1
          className="
          text-4xl
md:text-7xl
          font-[Cormorant_Garamond]
          text-yellow-400
          leading-tight
          mt-0
          "
        >
          <p
  className="
  uppercase
  tracking-[5px]
  text-zinc-400
  text-xs
  mb-3
  "
>
  Undangan Pernikahan
</p>
          {groom}
          <br />
          <span className="text-yellow-500">&</span>
          <br />
          {bride}
        </h1>
        <img
  src="/images/luxury/3.png"
  alt=""
  className="
  w-56
  mx-auto
  mt-6
  opacity-80
  "
/>
      </div>
    </section>
  );
}