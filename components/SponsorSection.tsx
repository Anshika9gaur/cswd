"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const sponsors = [
  { name: "Sponsor 1", logo: "/hack1.png" },
  { name: "Sponsor 2", logo: "/hack2.png" },
  { name: "Sponsor 3", logo: "/hack2.png" },
  { name: "Sponsor 4", logo: "/hack4.png" },
  { name: "Sponsor 5", logo: "/hack4.png" },
  { name: "Sponsor 6", logo: "/hack4.png" },
  { name: "Sponsor 7", logo: "/hack4.png" },
  { name: "Sponsor 8", logo: "/hack4.png" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1], // ✅ Valid cubic-bezier easing
    },
  },
};

export const SponsorSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-black to-gray-900 border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-14 text-white drop-shadow-lg">
          🚀 Our Proud Sponsors
        </h2>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.name + index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex items-center justify-center transition-transform"
            >
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                width={160}
                height={100}
                className="object-contain grayscale hover:grayscale-0 transition duration-300 drop-shadow-xl"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
