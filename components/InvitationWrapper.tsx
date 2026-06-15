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
fixed
inset-0
overflow-y-auto
px-5
pt-12
pb-10
flex
justify-center
items-start
${isLuxury ? "bg-black" : "bg-[#faf8f3]"}
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
w-full
max-w-lg
mx-auto
pb-10
text-center
"
>

          <p
  className={`uppercase tracking-[8px] text-xs ${
    isLuxury
      ? "text-yellow-400"
      : "text-[#9A7B45]"
  }`}
>
  The Wedding Of
</p>

          <div
className="
relative
mx-auto
mt-8
w-[260px]
h-[260px]
sm:w-[300px]
sm:h-[300px]
md:w-[340px]
md:h-[340px]
"
>

            <img
src={coverImage}
className="
absolute
left-1/2
top-1/2
-translate-x-1/2
-translate-y-1/2
w-[180px]
h-[180px]
sm:w-[205px]
sm:h-[205px]
md:w-[235px]
md:h-[235px]
rounded-full
object-cover
"
/>

            <img
src="/images/luxury/round_frame.png"
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
w-56
sm:w-64
md:w-72
mx-auto
mt-6
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

          <div className="mt-6 flex justify-center">

  <div
  className="
  relative
  w-[300px]
  h-[220px]
  sm:w-[340px]
  sm:h-[250px]
  "
>

    <img
      src="/images/luxury/17.png"
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

    <div
      className="
      absolute
      inset-0
      flex
      flex-col
      items-center
      justify-center
      px-12
      text-center
      "
    >

      <p
        className={`
        text-sm
        tracking-[3px]
        ${
          isLuxury
            ? "text-yellow-300"
            : "text-[#9A7B45]"
        }
        `}
      >
        Kepada Yth.
      </p>

      <h2
        className={`
        mt-5
        text-3xl
        font-serif
        ${
          isLuxury
            ? "text-yellow-400"
            : "text-[#9A7B45]"
        }
        `}
      >
        {guestName || "Tamu Undangan"}
      </h2>

      <p
        className={`
        mt-5
        text-xs
        leading-relaxed
        ${
          isLuxury
            ? "text-zinc-300"
            : "text-gray-600"
        }
        `}
      >
        Mohon maaf apabila terdapat
        <br />
        kesalahan penulisan nama.
      </p>

    </div>

  </div>

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