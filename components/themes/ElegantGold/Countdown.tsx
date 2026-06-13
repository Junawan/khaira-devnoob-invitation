"use client";

import { useEffect, useState } from "react";

export default function Countdown({
  targetDate,
}: {
  targetDate: string;
}) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("TARGET DATE:", targetDate);
      const target = Date.parse(targetDate);
      const now = new Date().getTime();

      const diff = target - now;

      if (diff <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (diff / (1000 * 60 * 60)) % 24
        ),
        minutes: Math.floor(
          (diff / (1000 * 60)) % 60
        ),
        seconds: Math.floor(
          (diff / 1000) % 60
        ),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section className="relative py-24 overflow-hidden">

      {/* Corner Ornament */}
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

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        {/* Round Frame */}
        <div className="relative w-40 h-40 mx-auto mb-6">

          <img
            src="/images/luxury/round_frame.png"
            alt=""
            className="absolute inset-0 w-full h-full object-contain"
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[#9A7B45] text-4xl">
              ♡
            </span>
          </div>

        </div>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-serif text-[#9A7B45]">
          Menuju Hari Bahagia
        </h2>

        {/* Divider */}
        <img
          src="/images/luxury/18.png"
          alt=""
          className="w-56 mx-auto mt-5 mb-12 opacity-90"
        />

        {/* Countdown */}
        <div className="flex justify-center gap-4 md:gap-6 flex-wrap">

          <CountdownBox
            value={timeLeft.days}
            label="Hari"
          />

          <CountdownBox
            value={timeLeft.hours}
            label="Jam"
          />

          <CountdownBox
            value={timeLeft.minutes}
            label="Menit"
          />

          <CountdownBox
            value={timeLeft.seconds}
            label="Detik"
          />

        </div>

        {/* Divider Bottom */}
        <img
          src="/images/luxury/18.png"
          alt=""
          className="w-56 mx-auto mt-12 opacity-90"
        />

      </div>
    </section>
  );
}

function CountdownBox({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  return (
    <div
      className="
      w-24
      h-24
      md:w-28
      md:h-28
      rounded-xl
      border
      border-yellow-500/40
      bg-white/[0.03]
      backdrop-blur-sm
      flex
      flex-col
      items-center
      justify-center
      shadow-[0_0_25px_rgba(234,179,8,0.08)]
      "
    >
      <div className="text-3xl md:text-4xl font-bold text-[#9A7B45]">
        {String(value).padStart(2, "0")}
      </div>

      <div className="text-xs uppercase tracking-[3px] text-zinc-400 mt-2">
        {label}
      </div>
    </div>
  );
}