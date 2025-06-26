"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function MovingCards() {
  return (
    <div className="bg-gradient-to-r from-black to-gray-900 border-t border-gray-700 px-4 sm:px-6 lg:px-8 py-8">
      <h2
        className="text-2xl sm:text-3xl md:text-4xl text-center font-bold text-white mb-6"
        aria-label="Voices of Experience"
      >
        VOICES OF EXPERIENCE
      </h2>

      {/* First Carousel */}
      <div className="h-[8rem] sm:h-[10rem] flex items-center justify-center overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="fast"
        />
      </div>

      {/* Spacer */}
      <div className="my-6 sm:my-8" />

      {/* Second Carousel */}
      <div className="h-[8rem] sm:h-[10rem] flex items-center justify-center overflow-hidden">
        <InfiniteMovingCards
          items={testimonials2}
          direction="left"
          speed="fast"
        />
      </div>
    </div>
  );
}

const testimonials = [
  {
    quote:
      "CSWD transformed the way I saw web development. We weren’t just learning from tutorials—we were building for real users.",
    name: "Naitik Kumar",
    title: "",
  },
  {
    quote:
      "When I was invited to speak at HAVOC 1.O, I expected a typical college-level discussion. What I experienced was far more impressive...",
    name: "Vishesh Jindal",
    title: "",
  },
  {
    quote:
      "I’ve collaborated with dozens of student communities, but CSWD left a lasting impression...",
    name: "Harshit Goel",
    title: "",
  },
  {
    quote:
      "CSWD played a defining role in my growth — I entered with HTML/CSS, and left leading full-stack sprints and mentoring juniors.",
    name: "Yash Rastogi",
    title: "",
  },
];

const testimonials2 = [...testimonials];
