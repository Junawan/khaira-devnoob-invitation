import Image from "next/image";

export default function CoupleSection({
  male,
  female,
}: {
  male: {
    name: string;
    father: string;
    mother: string;
  };

  female: {
    name: string;
    father: string;
    mother: string;
  };
}) {
  return (
    <section className="py-24 px-5 bg-white">
      <h2
  className="
  text-5xl
  font-title
  gold-glow
  text-yellow-400
  "
>
        <div className="
text-yellow-500
text-7xl
animate-pulse
">
  ❦
</div>
        Mempelai
      </h2>

      <div className="max-w-xl mx-auto text-center space-y-12">

        <div>
          <Image
  src="/images/groom.jpg"
  alt="Groom"
  width={220}
  height={220}
  className="mx-auto rounded-full border-4 border-[#D4B06A] shadow-xl object-cover"
/>

          <h3
  className="
  text-5xl
  font-title
  text-yellow-400
  tracking-wide
  "
>
            {male.name}
          </h3>

          <p className="mt-4 text-yellow-400 font-semibold">
            Putra dari
          </p>

          <p>
            {male.father}
          </p>

          <p>
            {male.mother}
          </p>
        </div>

        <div className="
text-yellow-500
text-7xl
animate-pulse
">
  ❦
</div>

        <div>
          <Image
  src="/images/bride.jpg"
  alt="Bride"
  width={220}
  height={220}
  className="mx-auto rounded-full border-4 border-[#D4B06A] shadow-xl object-cover"
/>

          <h3 className="text-3xl font-serif">
            {female.name}
          </h3>

          <p className="mt-4 text-yellow-400 font-semibold">
            Putri dari
          </p>

          <p>
            {female.father}
          </p>

          <p>
            {female.mother}
          </p>
        </div>

      </div>
    </section>
  );
}