"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 68,
    hours: 11,
    minutes: 23,
    seconds: 19,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        const newSeconds = prevTime.seconds - 1;

        if (newSeconds >= 0) {
          return { ...prevTime, seconds: newSeconds };
        }

        const newMinutes = prevTime.minutes - 1;
        if (newMinutes >= 0) {
          return { ...prevTime, minutes: newMinutes, seconds: 59 };
        }

        const newHours = prevTime.hours - 1;
        if (newHours >= 0) {
          return { ...prevTime, hours: newHours, minutes: 59, seconds: 59 };
        }

        const newDays = prevTime.days - 1;
        if (newDays >= 0) {
          return {
            days: newDays,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }

        clearInterval(timer);
        return prevTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-wrap items-center gap-4">
      <TimeUnit value={timeLeft.days} label="DAYS" />
      <TimeUnit value={timeLeft.hours} label="HRS" />
      <TimeUnit value={timeLeft.minutes} label="MINS" />
      <TimeUnit value={timeLeft.seconds} label="SECS" />
    </div>
  );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex min-h-[100px] min-w-[100px] flex-col items-center justify-center rounded-2xl border-2 border-white p-4 text-white">
      <span className="text-4xl font-bold">
        {value.toString().padStart(2, "0")}
      </span>
      <span className="text-sm">{label}</span>
    </div>
  );
}
