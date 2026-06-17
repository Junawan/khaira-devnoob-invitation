import Link from "next/link";

type ThemeCardProps = {

  name: string;

  description: string;

  image: string;

  price: string;

  badge: string;

  demo: string;

};

export default function ThemeCard({

  name,

  description,

  image,

  price,

  badge,

  demo,

}: ThemeCardProps) {

  return (

    <div
      className="
      bg-white
      rounded-3xl
      overflow-hidden
      border
      shadow-sm
      hover:shadow-xl
      hover:-translate-y-1
      transition-all
      duration-300
      "
    >

      {/* Preview */}

      <div
        className="
        aspect-[9/16]
        overflow-hidden
        bg-stone-100
        "
      >

        <img
          src={image}
          alt={name}
          className="
          w-full
          h-full
          object-cover
          transition-transform
          duration-500
          hover:scale-105
          "
        />

      </div>

      {/* Content */}

      <div className="p-5">

        <span
          className="
          inline-block
          text-xs
          px-3
          py-1
          rounded-full
          bg-amber-100
          text-amber-700
          "
        >
          {badge}
        </span>

        <h3
          className="
          mt-4
          text-2xl
          font-semibold
          "
        >
          {name}
        </h3>

        <p
          className="
          mt-2
          text-sm
          text-zinc-500
          "
        >
          {description}
        </p>

        <p
          className="
          mt-5
          text-2xl
          font-bold
          "
        >
          {price}
        </p>

        <div
          className="
          mt-6
          flex
          gap-3
          "
        >

          <Link
            href={demo}
            className="
            flex-1
            text-center
            py-3
            rounded-xl
            border
            hover:bg-stone-100
            transition
            "
          >
            Lihat Demo
          </Link>

          <button
            className="
            flex-1
            py-3
            rounded-xl
            bg-black
            text-white
            hover:bg-zinc-800
            transition
            "
          >
            Gunakan
          </button>

        </div>

      </div>

    </div>

  );

}