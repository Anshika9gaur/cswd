"use client";

import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export function Herosection() {
  return (
    <BackgroundBeamsWithCollision className="h-64 md:h-[22rem] lg:h-[28rem] flex items-center justify-center text-center">
      <h2 className="text-xl md:text-3xl lg:text-6xl text-Blue font-bold font-rubik tracking-tight relative z-20 drop-shadow-md ">
        Computer Society Of
        <p className="h-3"></p>
        Web Development{" "}
        <span className="inline-block bg-clip-text text-transparent bg-[#3ac1d0]">
          (CSWD).
        </span>
      </h2>
    </BackgroundBeamsWithCollision>
  );
}
