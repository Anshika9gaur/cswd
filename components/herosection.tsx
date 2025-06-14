"use client";

import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export function Herosection() {
  return (
    <BackgroundBeamsWithCollision className="h-64 md:h-[22rem] lg:h-[28rem] flex items-center justify-center text-center">
      <h2 className="text-xl md:text-3xl lg:text-6xl font-bold text-white font-sans tracking-tight relative z-20 drop-shadow-md">
        Computer Society Of Web Development{" "}
        <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">
          (CSWD).
        </span>
      </h2>
    </BackgroundBeamsWithCollision>
  );
}
