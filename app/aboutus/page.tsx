"use client";

import { motion } from "framer-motion";
import Image from "next/image";


const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};


export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-black to-gray-900 text-white px-4 md:px-12 py-20 space-y-28">
      {/* Hero */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="text-center max-w-3xl mx-auto"
      >
        <h1 className="text-5xl md:text-6xl font-bold">About CSWD </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-300">
          A collaborative space for students to innovate, build, and inspire through code.
        </p>
      </motion.section>

      {/* Mission */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto"
      >
        <motion.div>
          <h2 className="text-3xl font-semibold">Our Mission</h2>
          <p className="mt-4 text-gray-300 text-lg">
            Our goal is to foster creativity and learning through a high-energy hackathon
            where students can push the boundaries of technology and teamwork.
          </p>
        </motion.div>
        <motion.div>
          <Image
            src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34"
            alt="Our Mission"
            width={500}
            height={400}
            unoptimized
            className="rounded-xl shadow-md w-full object-cover"
          />
        </motion.div>
      </motion.section>

      {/* Journey */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center space-y-12"
      >
        <h2 className="text-3xl font-semibold">Our Journey</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {["Idea", "Launch", "Future"].map((step, i) => (
            <motion.div
              key={step}
              className="bg-gray-800 rounded-xl shadow-md p-6 border border-gray-700"
            >
              <h3 className="text-xl font-bold">{step}</h3>
              <p className="text-gray-300 mt-2">
                {i === 0
                  ? "Started with a vision to build a student-driven event."
                  : i === 1
                  ? "Launched our first ever hackathon with 100+ participants."
                  : "We're expanding to make this an annual flagship tech event."}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>


    </main>
  );
}
