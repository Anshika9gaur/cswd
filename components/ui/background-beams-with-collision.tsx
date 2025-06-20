"use client";

import { cn } from "../lib/utils";
import { motion } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";

interface BeamOptions {
  initialX?: string | number;
  initialY?: string | number;
  rotate?: number;
  duration?: number;
  delay?: number;
  opacity?: number;
  blur?: string;
  scale?: number;
  color?: string;
}

interface Beam {
  id: number;
  x: string | number;
  y: string | number;
  options: BeamOptions;
}

interface BackgroundBeamsProps {
  className?: string;
  children: React.ReactNode;
}

export const BackgroundBeamsWithCollision = ({
  className,
  children,
}: BackgroundBeamsProps) => {
  const [beams, setBeams] = useState<Beam[]>([]);
  const beamIdRef = useRef(0);

  const generateBeam = (): Beam => {
    const randomX = Math.random() * 100 + "%";
    const beamOptions: BeamOptions = {
      initialY: "-200px",
      initialX: randomX,
      rotate: Math.random() * 360,
      duration: Math.random() * 4 + 2,
      delay: Math.random(),
      opacity: Math.random() * 0.5 + 0.2,
      scale: Math.random() * 0.6 + 0.7,
      blur: "2px",
      color: `hsl(${Math.floor(Math.random() * 360)}, 80%, 60%)`,
    };

    return {
      id: beamIdRef.current++,
      x: beamOptions.initialX!,
      y: beamOptions.initialY!,
      options: beamOptions,
    };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setBeams((prev) => {
        const newBeam = generateBeam();
        return [...prev, newBeam].slice(-30); // Keep only the last 30 beams
      });
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={cn("relative w-full h-full overflow-hidden", className)}>
      {children}

      {/* Animated Beams */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {beams.map((beam) => {
          const {
            initialX,
            initialY,
            rotate,
            duration,
            delay,
            opacity,
            scale,
            blur,
            color,
          } = beam.options;

          return (
            <motion.div
              key={beam.id}
              initial={{
                x: initialX,
                y: initialY,
                rotate: rotate || 0,
                scale: scale || 1,
                opacity: 0,
              }}
              animate={{
                y: "120vh",
                opacity: opacity ?? 0.4,
              }}
              transition={{
                duration: duration || 4,
                delay: delay || 0,
                ease: "easeInOut",
              }}
              className="absolute w-1 h-32"
              style={{
                left: typeof beam.x === "string" ? beam.x : `${beam.x}px`,
                backgroundColor: color || "white",
                filter: `blur(${blur || "2px"})`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
