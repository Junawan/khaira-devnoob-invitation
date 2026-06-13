export default function ElegantGoldHero({
  groom,
  bride,
  coverImage,
  date,
}: {
  groom: string;
  bride: string;
  coverImage: string;
  date?: string;
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
      bg-[#faf8f3]
      "
    >

      <img
        src="/images/luxury/corner_left.png"
        alt=""
        className="
        absolute
        top-0
        left-0
        w-48
md:w-72
        opacity-60
        pointer-events-none
        "
      />

      <img
        src="/images/luxury/corner_right.png"
        alt=""
        className="
        absolute
        top-0
        right-0
        w-48
md:w-72
        opacity-60
        pointer-events-none
        "
      />

      <div
        className="
        max-w-5xl
        mx-auto
        px-6
        text-center
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
          tracking-[6px]
          text-[#9A7B45]
          text-sm
          "
        >
          The Wedding Of
        </p>

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

        <h1
          className="
          text-5xl
          md:text-7xl
          font-serif
          text-[#9A7B45]
          mt-48
          leading-tight
          "
        >
          {groom}
          <br />
          &
          <br />
          {bride}
        </h1>

        {date && (
          <p
            className="
            mt-6
            text-[#9A7B45]
            tracking-[4px]
            uppercase
            "
          >
            {date}
          </p>
        )}

        <img
          src="/images/luxury/8.png"
          alt=""
          className="
          w-40
          mx-auto
          mt-6
          "
        />

      </div>

    </section>
  );
}