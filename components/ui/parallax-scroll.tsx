"use client";
import { useScroll, useTransform, motion } from "motion/react";
import { useRef } from "react";
import { cn } from "../lib/utils";

export const ParallaxScroll = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    container: containerRef,
    offset: ["start start", "end start"],
  });

  return (
    <div
      ref={containerRef}
      className={cn(
        "h-[40rem] bg-gradient-to-r from-black to-gray-900 overflow-y-auto w-full",
        className
      )}
    >
      <h2 className="text-2xl mt-4 text-center text-white font-bold">Gallery</h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto py-10 px-6">
        {images.map((image, index) => {
          // Create a different parallax speed for each image
          const offsetAmount = (index % 5) * 40 - 80; // varies between -80 to +80
          const translateY = useTransform(scrollYProgress, [0, 1], [0, offsetAmount]);

          return (
            <motion.div key={index} style={{ y: translateY }}>
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="h-64 w-full object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
