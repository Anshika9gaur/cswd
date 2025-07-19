'use client';

import { useMemo } from 'react';
import BirthdayPoster from './BirthdayPoster';
import birthdayData from '@/data/birthdays.json';

interface Birthday {
  name: string;
  dob: string;
  photo: string;
}

function isTodayBirthday(dob: string): boolean {
  const today = new Date();
  const birthDate = new Date(dob);
  return (
    today.getDate() === birthDate.getDate() &&
    today.getMonth() === birthDate.getMonth()
  );
}

export default function BirthdayBanner({ children }: { children: React.ReactNode }) {
  const todayBirthday = useMemo(() => {
    return (birthdayData as Birthday[]).find((b: Birthday) => isTodayBirthday(b.dob));
  }, []);

  if (todayBirthday) {
    return (
      <BirthdayPoster
        name={todayBirthday.name}
        photo={todayBirthday.photo}
      />
    );
  }

  return <>{children}</>;
}
