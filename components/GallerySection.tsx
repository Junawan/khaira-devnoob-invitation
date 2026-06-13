import Image from "next/image";

export default function GallerySection({
  images,
}: {
  images: string[];
}) {
  return (
    <section className="py-24 px-5 bg-stone-100">
      <h2 className="text-center text-5xl font-serif text-[#9A7B45] mb-4">
        Galeri
      </h2>

      <div className="text-center text-2xl text-[#9A7B45] mb-12">
        ❦
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">

        {images.map((image, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-3xl shadow-lg"
          >
            <Image
              src={image}
              alt={`Gallery ${index}`}
              width={600}
              height={800}
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>
        ))}

      </div>
    </section>
  );
}