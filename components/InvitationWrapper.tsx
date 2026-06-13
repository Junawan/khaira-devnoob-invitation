"use client";

import { useState } from "react";

import AudioPlayer
from "./AudioPlayer";

import MusicButton
from "./MusicButton";

export default function InvitationWrapper({
  groom,
  bride,
  guestName,
  coverImage,
  theme,
  children,
  musicUrl,
}: {
  groom: string;
  bride: string;
  guestName: string;
  coverImage: string;
  theme: string;
  children: React.ReactNode;
  musicUrl: string;
}) {

  const [opened, setOpened] =
    useState(false);

  const [isPlaying, setIsPlaying] =
    useState(false);

    const isLuxury =
  theme === "luxury-black";

  if (!opened) {

    return (

      <div
        className={`
fixed inset-0
flex items-center
justify-center
overflow-auto
z-50
px-5
${isLuxury
  ? "bg-black"
  : "bg-[#faf8f3]"
}
`}
      >

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
  "
/>

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
  "
/>

        <div
          className="
          relative
          z-10
          max-w-lg
          w-full
          text-center
          "
        >

          <p
            className={`
            uppercase
            tracking-[8px]
            text-xs${
    isLuxury
      ? "text-yellow-400"
      : "text-[#9A7B45]"
  }
`}
            
          >
            The Wedding Of
          </p>

          <div
            className="
            relative
            w-72
            h-72
            mx-auto
            mt-8
            "
          >

            <img
              src={coverImage}
              alt=""
              className="
              absolute
              top-[14%]
              left-[14%]
              w-[72%]
              h-[72%]
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

          <img
  src="/images/luxury/divider_hero.png"
  alt=""
  className="
  w-72
  mx-auto
  -mt-8
  "
/>

<p
  className="
  uppercase
  tracking-[5px]
  text-zinc-400
  text-xs
  mb-4
  "
>
  Undangan Pernikahan
</p>

          <h1
            className={`
            text-4xl
            md:text-6xl
            font-serif
            mt-6
            ${
    isLuxury
      ? "text-yellow-400"
      : "text-[#9A7B45]"
  }
`}
          >
            {groom}
          </h1>

          <div
            className={`
            text-3xl
            my-2
            ${
  isLuxury
    ? "text-yellow-400"
    : "text-[#9A7B45]"
}
            `}
          >
            &
          </div>

          <h1
            className={`
            text-4xl
            md:text-6xl
            font-serif
            ${
    isLuxury
      ? "text-yellow-400"
      : "text-[#9A7B45]"
  }
`}
          >
            {bride}
          </h1>

          <img
  src="/images/luxury/3.png"
  alt=""
  className="
w-72
mx-auto
mt-6
opacity-80
"
/>

          <div
            className={`
mt-4
border
rounded-3xl
p-6
${
  isLuxury
    ? `
      bg-zinc-900/50
      border-yellow-500/50
      `
    : `
      bg-white
      border-[#D4AF37]/60
      shadow-lg
      `
}
`}
          >

            <p className={`
            ${
    isLuxury
      ? "text-yellow-400"
      : "text-black"
  }
`}>
              Kepada Yth.
            </p>

            <h2
              className={`
              text-2xl
              font-semibold
              mt-8
              ${
    isLuxury
      ? "text-yellow-400"
      : "text-black"
  }
`}
            >
              {guestName || "Tamu Undangan"}
            </h2>

            <p
              className={`
              text-xs
              mt-3
              ${
    isLuxury
      ? "text-yellow-400"
      : "text-black"
  }
`}
            >
              Mohon maaf apabila terdapat
              kesalahan penulisan nama.
            </p>

          </div>

          <button
            onClick={() => {

              setOpened(true);

              setIsPlaying(true);

            }}
            className={`
mt-10
w-full
py-4
rounded-full
text-white
font-semibold
transition
${
  isLuxury
    ? "bg-yellow-600 hover:bg-yellow-500"
    : "bg-[#9A7B45] hover:bg-[#b38d4c]"
}
`}
          >
            Buka Undangan
          </button>

        </div>

      </div>

    );
  }

  return (
    <>
      <AudioPlayer
        isPlaying={isPlaying}
        musicUrl={musicUrl}
      />

      <MusicButton
        isPlaying={isPlaying}
        onToggle={() =>
          setIsPlaying(
            !isPlaying
          )
        }
      />

      <div className="fade-scale">
        {children}
      </div>
    </>
  );
}