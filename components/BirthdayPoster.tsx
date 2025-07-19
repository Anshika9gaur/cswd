'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface BirthdayPosterProps {
  name: string;
  photo: string;
}

export default function BirthdayPoster({ name, photo }: BirthdayPosterProps) {
  const [balloons, setBalloons] = useState<
    { left: string; bgColor: string; delay: number; duration: number }[]
  >([]);

  useEffect(() => {
    const colors = ['#f472b6', '#facc15', '#60a5fa', '#34d399'];
    const newBalloons = Array.from({ length: 20 }, (_, i) => ({
      left: `${Math.random() * 100}%`,
      bgColor: colors[i % colors.length],
      delay: Math.random() * 3,
      duration: 7 + Math.random() * 4,
    }));
    setBalloons(newBalloons);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-black via-gray-900 to-gray-800 text-center p-6 border-t border-gray-700">
      
      {/* 🎈 Animated Balloons */}
      {balloons.map((balloon, i) => (
        <motion.div
          key={i}
          className="absolute w-8 h-10 md:w-10 md:h-14 rounded-full opacity-30 blur-md"
          initial={{ y: '100vh' }}
          animate={{ y: '-20vh' }}
          transition={{
            repeat: Infinity,
            duration: balloon.duration,
            ease: 'linear',
            delay: balloon.delay,
          }}
          style={{
            left: balloon.left,
            backgroundColor: balloon.bgColor,
          }}
        />
      ))}

      {/* 🎉 Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 text-4xl md:text-5xl font-extrabold text-yellow-400 drop-shadow-lg"
      >
        🎉 Happy Birthday, {name}! 🎂
      </motion.h1>

      {/* 🖼️ Image Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="z-10 mt-8 shadow-2xl rounded-full border-4 border-yellow-500 p-2 bg-gradient-to-b from-gray-900 to-black"
      >
        <Image
          src={photo}
          alt={name}
          width={260}
          height={260}
          className="rounded-full object-cover aspect-square md:w-[260px] md:h-[260px] w-[200px] h-[200px]"
        />
      </motion.div>

      {/* 💬 Birthday Quote */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="z-10 mt-6 max-w-xl text-gray-300 text-lg md:text-xl italic px-4"
      >
        “May your day be filled with sunshine, smiles, laughter, and love.”
      </motion.p>
    </div>
  );
}
