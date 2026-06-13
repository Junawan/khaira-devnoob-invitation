export default function MapSection({
  url,
}: {
  url: string;
}) {
  return (
    <section className="py-20 px-5 bg-white">
      <div className="max-w-xl mx-auto text-center">

        <h2 className="text-4xl font-serif mb-6">
          Lokasi Acara
        </h2>

        <p className="text-gray-600 mb-8">
          Klik tombol di bawah untuk membuka
          petunjuk arah menuju lokasi acara.
        </p>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-black text-white px-8 py-4 rounded-xl"
        >
          Buka Google Maps
        </a>

      </div>
    </section>
  );
}