"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Hackathon Registration System",
    description:
      "A full-stack platform for hackathon participant registration, team management, and email confirmation.",
    tech: ["Next.js", "MongoDB", "Tailwind", "Nodemailer"],
    image: "/hack1.png",
    github: "https://github.com/nikhilpundir108/hack-reg",
    demo: "https://cswd.vercel.app",
  },
  {
    title: "Event Manager SaaS",
    description:
      "A micro-SaaS for organizing tech events with speaker bios, registration, and dashboard analytics.",
    tech: ["Next.js", "Stripe", "MongoDB", "Shadcn UI"],
    image: "/hack2.png",
    github: "#",
    demo: "#",
  },
   {
  title: "Portfolio Generator",
  description:
    "A customizable portfolio builder for developers to showcase their work, skills, and social links in minutes.",
  tech: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
  image: "/hack3.png",
  github: "https://github.com/nikhilpundir108/portfolio-generator",
  demo: "https://portfolio-generator.vercel.app",
},

  // Add more projects here
];

export const ProjectSection = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-black dark:text-white">
          🚧 Our Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition duration-300"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-gray-200 dark:bg-neutral-800 text-gray-800 dark:text-gray-200 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 text-sm">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      <FaGithub /> GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      <FaExternalLinkAlt /> Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
