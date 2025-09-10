"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const sponsors = [
  { name: "Sponsor 1", logo: "/hack1.png", url: "https://sponsor1.com" },
  { name: "Sponsor 2", logo: "/hack2.png", url: "https://sponsor2.com" },
  { name: "Sponsor 3", logo: "/hack2.png", url: "https://sponsor3.com" },
  { name: "Sponsor 4", logo: "/hack4.png", url: "https://sponsor4.com" },
  { name: "Sponsor 5", logo: "/hack4.png", url: "https://sponsor5.com" },
  { name: "Sponsor 6", logo: "/hack4.png", url: "https://sponsor6.com" },
  { name: "Sponsor 7", logo: "/hack4.png", url: "https://sponsor7.com" },
  { name: "Sponsor 8", logo: "/hack4.png", url: "https://sponsor8.com" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, rotate: -10, scale: 0.85 },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.42, 0, 0.58, 1] as const, // easeInOut
    },
  },
};

export const SponsorSection = () => {
  return (
    <section className="py-20 bg-gray-100 border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-14 text-blue drop-shadow-md">
          🚀 Our Proud Sponsors
        </h2>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {sponsors.map((sponsor, index) => (
            <motion.a
              key={sponsor.name + index}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ rotate: 2, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center transition-transform"
            >
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                width={160}
                height={100}
                className="object-contain transition duration-300 drop-shadow-xl"
              />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
