export default function LuxuryBlackGallery({
  gallery,
}: {
  gallery: string[];
}) {

  if (!gallery?.length)
    return null;

  return (

    <section
      className="
      py-18
      px-5
      relative
      overflow-hidden
      "
    >

      {/* Divider Atas */}
      <img
        src="/images/luxury/18.png"
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
        font-[family-name:var(--font-great-vibes)]
        font-bold
        text-center
        text-yellow-400
        mb-16
        "
      >
        Gallery
      </h2>

      <div
        className="
        max-w-6xl
        mx-auto
        grid
        md:grid-cols-3
        gap-8
        "
      >

        {gallery.map((image) => (

          <div
            key={image}
            className="
            overflow-hidden
            rounded-3xl
            border
            border-yellow-500/40
            bg-zinc-900
            shadow-[0_0_20px_rgba(234,179,8,0.08)]
            "
          >

            <img
              src={image}
              alt=""
              className="
              w-full
              h-full
              object-cover
              transition
              duration-700
              hover:scale-110
              "
            />

          </div>

        ))}

      </div>

      {/* Divider Bawah */}
      <img
        src="/images/luxury/18.png"
        alt=""
        className="
        w-56
        mx-auto
        opacity-90
        mt-16
        "
      />

    </section>

  );
}