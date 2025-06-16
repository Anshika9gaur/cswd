"use client";
import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { motion } from "motion/react";
import Image from "next/image"; // ✅ New import
import { cn } from "../lib/utils";

export const ParallaxScroll = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  const gridRef = useRef<HTMLDivElement | null>(null); // ✅ Fixed type
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(images.length / 3);
  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <div
      className={cn(
        "h-[40rem] items-start overflow-y-auto w-full bg-gradient-to-r from-black to-gray-900",
        className
      )}
      ref={gridRef}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-40 px-10">
        {[firstPart, secondPart, thirdPart].map((part, i) => (
          <div className="grid gap-10" key={i}>
            {part.map((el, idx) => (
              <motion.div
                style={{ y: [translateFirst, translateSecond, translateThird][i] }}
                key={`grid-${i}-${idx}`}
              >
                <Image
                  src={el}
                  alt="thumbnail"
                  width={400}
                  height={400}
                  className="h-80 w-full object-cover object-left-top rounded-lg"
                />
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
