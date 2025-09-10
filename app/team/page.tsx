"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";


const teamData = [
  {
    title: "Leadership Team",
    members: [
      {
        name: "Naitik Kumar",
        image: "/naitik.jpg",
        role: "Team Lead",
        github: "https://github.com/naitik-01",
        linkedin: "https://www.linkedin.com/in/naitikkumar/",
      },
      {
        name: "Prateek Malik",
        image: "/prateekMalik.jpg",
        role: "Team Co-Lead",
        github: "https://github.com/prateekmalik",
        linkedin: "https://www.linkedin.com/in/",
      },

    ],
  },
  {
    title: "Technical Team",
    members: [
      {
        name: "Nikhil Pundir",
        image: "/nikhil.jpg",
        role: "Tech Head",
        github: "https://github.com/nikhilpundir108",
        linkedin: "https://linkedin.com/in/nikhilpundir108",
      },
    ],
  },
  {
    title: "Graphic Team",
    members: [
      {
        name: "Harshit Verma",
        image: "/harshitVerma.jpg",
        role: "Graphic Head",
        github: "https://github.com/harsxitvrma",
        linkedin: "https://www.linkedin.com/in/harshit-verma-741863309?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },

    ],
  },
  {
    title: "Event Operations",
    members: [
      {
        name: "Harshit Singh", image: "/harshitSingh.jpg", role: "Event Head", github: "https://github.com/harshu7878",
        linkedin: "https://www.linkedin.com/in/harshit-panchal-n787878-linkdin/"
      },
    ],
  },
  {
    title: "Public Relations & Outreach",
    members: [
      {
        name: "Anushka Singhal", image: "/anushka.jpg", role: "PR Head", github: "https://www.linkedin.com/in/anushka-singhal-7974b7324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        linkedin: "https://linkedin.com/in/"
      },

    ],
  },
  {
    title: "Social & Content Team",
    members: [
      {
        name: "Samarth Gupta", image: "/samarth.jpg", role: "Content Head", github: "https://github.com/Samarthgit03",
        linkedin: "https://www.linkedin.com/in/samarth-gupta-4351a5360"
      },

    ],
  },
];

export default function TeamPage() {
  return (
    <main className="min-h-screen  bg-white text-blue px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-10">
        THE MINDS BEHIND THE MISSION
      </h1>

      {teamData.map((group, idx) => (
        <motion.section key={idx} className="space-y-10 mb-12">
          <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2">
            {group.title}
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {group.members.map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-b from-black to-gray-700 rounded-xl overflow-hidden shadow-lg text-center"
              >
                <Image
                  src={member.image}
                  alt={`Photo of ${member.name}`}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 space-y-2">
                  <h3 className="text-lg text-white font-semibold">{member.name}</h3>
                  {member.role && (
                    <p className="text-sm text-gray-400">{member.role}</p>
                  )}
                  {(member.github || member.linkedin) && (
                    <div className="flex justify-center gap-4 mt-2 text-xl text-gray-300">
                      {member.github && (
                        <a
                          href={member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub"
                        >
                          <FaGithub className="hover:text-white transition" />
                        </a>
                      )}
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="LinkedIn"
                        >
                          <FaLinkedin className="hover:text-white transition" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      ))}
    </main>
  );
}
