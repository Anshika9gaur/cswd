"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function MovingCards() {
  return (
    <section className="bg-gradient-to-r from-black to-gray-900 border-t border-gray-700 px-4 py-10">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center text-white mb-8">
        VOICES OF EXPERIENCE
      </h2>

      {/* First row */}
      <div className="w-full overflow-hidden">
        <div className="h-[11rem] sm:h-[12rem] md:h-[13rem] flex items-center justify-center">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="fast"
          />
        </div>
      </div>

      <div className="my-8" />

      {/* Second row */}
      <div className="w-full overflow-hidden">
        <div className="h-[11rem] sm:h-[12rem] md:h-[13rem] flex items-center justify-center">
          <InfiniteMovingCards
            items={testimonials2}
            direction="left"
            speed="fast"
          />
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    quote:
      "CSWD transformed the way I saw web development. We weren’t just learning from tutorials—we were building for real users.",
    name: "Naitik Kumar",
    title: "CSWD Alumni",
  },
  {
    quote:
      "When I was invited to speak at HAVOC 1.O, I expected a typical college-level discussion. What I experienced was far more impressive.",
    name: "Vishesh Jindal",
    title: "Guest Speaker",
  },
  {
    quote:
      "I’ve collaborated with dozens of student communities, but CSWD left a lasting impression.",
    name: "Harshit Goel",
    title: "Community Partner",
  },
  {
    quote:
      "CSWD played a defining role in my growth — I entered with HTML/CSS, and left leading full-stack sprints and mentoring juniors.",
    name: "Yash Rastogi",
    title: "Full Stack Developer",
  },
];

const testimonials2 = [...testimonials];
