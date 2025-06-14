"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function MovingCards() {
  return (
    <div className="bg-gradient-to-r from-black to-gray-900 border-t border-gray-700">
        <h2 className="text-4xl text-center font-bold p-4 text-white">
        VOICES OF EXPERIENCE
      </h2>
      {/* First Carousel */}
      <div className="h-[10rem] flex items-center justify-center overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="fast"
        />
      </div>

      {/* Spacer between the two carousels */}
      {/* <div className="my-20" /> */}

      {/* Second Carousel */}
      <div className="h-[10rem] flex items-center justify-center overflow-hidden">
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
      "When I was invited to speak at HAVOC 1.O, I expected a typical college-level discussion. What I experienced was far more impressive. The students didn’t just ask smart questions—they challenged concepts, discussed architecture, and even pitched solutions like seasoned developers. CSWD isn’t just fostering talent; it’s building a culture of creators. This kind of initiative is what the tech industry needs—people who are willing to learn, build, and break limits.",
    name: "Vishesh Jindal",
    title: "",
  },
  {
    quote:
      "I’ve collaborated with dozens of student communities, but CSWD left a lasting impression. Their planning is precise, execution is bold, and community spirit is strong. Every member takes ownership—not just of their task—but of the entire vision. That’s rare, and it’s exactly what transforms CSWD from a student group into a powerhouse of future tech leaders.",
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

const testimonials2 = [
  {
    quote:
      "CSWD transformed the way I saw web development. We weren’t just learning from tutorials—we were building for real users.",
    name: "Naitik Kumar",
    title: "",
  },
  {
    quote:
      "When I was invited to speak at HAVOC 1.O, I expected a typical college-level discussion. What I experienced was far more impressive. The students didn’t just ask smart questions—they challenged concepts, discussed architecture, and even pitched solutions like seasoned developers. CSWD isn’t just fostering talent; it’s building a culture of creators. This kind of initiative is what the tech industry needs—people who are willing to learn, build, and break limits.",
    name: "Vishesh Jindal",
    title: "",
  },
  {
    quote:
      "I’ve collaborated with dozens of student communities, but CSWD left a lasting impression. Their planning is precise, execution is bold, and community spirit is strong. Every member takes ownership—not just of their task—but of the entire vision. That’s rare, and it’s exactly what transforms CSWD from a student group into a powerhouse of future tech leaders.",
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
