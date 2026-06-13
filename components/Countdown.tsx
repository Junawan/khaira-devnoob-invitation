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
      const target = new Date(targetDate).getTime();
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
    <section className="py-20 bg-stone-100">
      <h2 className="text-center text-4xl font-serif mb-10 text-[#9A7B45]">
        Menuju Hari Bahagia
      </h2>

      <div className="text-center text-2xl mb-8 text-[#9A7B45]">
  ❦
</div>

      <div className="flex justify-center gap-4 flex-wrap">
        <Box value={timeLeft.days} label="Hari" />
        <Box value={timeLeft.hours} label="Jam" />
        <Box value={timeLeft.minutes} label="Menit" />
        <Box value={timeLeft.seconds} label="Detik" />
      </div>
    </section>
  );
}

function Box({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  return (
    <div className="bg-white shadow-xl border border-[#E8DFCF] rounded-2xl w-24 h-24 flex flex-col justify-center items-center">
      <div className="text-3xl font-bold text-[#9A7B45]">
        {value}
      </div>

      <div className="text-sm text-gray-500">
        {label}
      </div>
    </div>
  );
}