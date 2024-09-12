'use client';
import { timeLeft } from '@/helpers/formatters';
import { useEffect, useState } from 'react';
import { CardDescription } from './ui/card';

interface ITimeLeftProps {
  targetDate: string;
}

export default function TimeLeft({ targetDate }: ITimeLeftProps) {
  const [time, setTime] = useState<string>(targetDate);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(timeLeft(targetDate)());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <CardDescription className="flex items-center justify-center gap-2 text-foreground">
      {timeLeft(targetDate)()}
    </CardDescription>
  );
}
