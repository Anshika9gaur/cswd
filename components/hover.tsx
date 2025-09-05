"use client";

import { HoverEffect } from "./ui/card-hover-effect";

export function CardHover() {
  return (
    <div
      className=" mx-auto px-8 bg-white border-t border-gray-700 "

    >
      {/* <h2 className="text-4xl text-center py-4 font-bold text-white">
        About Us
      </h2> */}

      <HoverEffect items={projects} />
      {/* <div className="flex justify-center mt-2">
        <a href="/aboutus"  rel="noopener noreferrer">
          {" "}
          <button className="flex items-center gap-2 px-6 py-2 my-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Know More
            <span className="ml-1 text-lg">&#8594;</span>
          </button>
        </a>
      </div> */}
    </div>
  );
}
export const projects = [
  {
    title: "Our Aim",
    description:
      "To equip students with essential and advanced web development skills through hands-on learning, real-world projects, and community-driven collaboration — nurturing talent that thrives in both academic and professional environments.",
    link: "/",
  },
  {
    title: "Our Mission",
    description:
      "To foster a collaborative and inclusive environment for students at MIET to learn fundamental and modern web development technologies, build practical projects, and connect with the broader tech community.",
    link: "/aboutus",
  },
  {
    title: "Our Vision",
    description:
      "To be recognized as the premier student organization on campus for web development enthusiasts, empowering members with practical skills, fostering innovation through projects, and bridging the gap between academic learning and industry application.",
    link: "/events",
  },
];
