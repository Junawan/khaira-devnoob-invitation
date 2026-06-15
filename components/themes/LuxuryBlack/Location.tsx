export default function LuxuryBlackLocation({
  mapsUrl,
  akadPlace,
  resepsiPlace,
}: {
  mapsUrl: string;
  akadPlace?: string;
  resepsiPlace?: string;
}) {
  return (
    <section className="relative bg-black py-24 overflow-hidden">

      <img
        src="/images/luxury/corner_left.png"
        alt=""
        className="absolute top-0 left-0 w-40 opacity-80"
      />

      <img
        src="/images/luxury/corner_right.png"
        alt=""
        className="absolute top-0 right-0 w-40 opacity-80"
      />

      <div className="max-w-4xl mx-auto px-6 text-center">

        <div className="relative w-40 h-40 mx-auto mb-6">

          <img
            src="/images/luxury/round_frame.png"
            alt=""
            className="absolute inset-0 w-full h-full object-contain"
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-yellow-400 text-4xl">
              📍
            </span>
          </div>

        </div>

        <h2 className="text-4xl font-[family-name:var(--font-great-vibes)] font-bold text-yellow-400">
          Lokasi Acara
        </h2>

        <img
          src="/images/luxury/18.png"
          alt=""
          className="w-56 mx-auto my-6"
        />

        <div
          className="
          border
          border-yellow-500/20
          rounded-3xl
          bg-zinc-900/50
          p-8
          "
        >

          {resepsiPlace && (
            <p className="text-zinc-300
            text-2xl
md:text-2xl
            font-[family-name:var(--font-pinyon-script)]">
              {resepsiPlace}
            </p>
          )}

        </div>

        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="
          inline-block
          mt-8
          px-8
          py-4
          rounded-full
          bg-yellow-600
          hover:bg-yellow-500
          text-white
          transition
          "
        >
          Buka Google Maps
        </a>

        <img
          src="/images/luxury/18.png"
          alt=""
          className="w-56 mx-auto mt-10"
        />

      </div>

    </section>
  );
}