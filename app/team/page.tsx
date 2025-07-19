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
      {
        name: "Aryan Singh",
        image: "/hack1.png",
        role: "Frontend Developer",
        github: "https://github.com/aryan",
        linkedin: "https://linkedin.com/in/aryan",
      },
      {
        name: "Priya Deswal",
        image: "/hack1.png",
        role: "Backend Developer",
        github: "https://github.com/nikhilpundir108",
        linkedin: "https://linkedin.com/in/nikhilpundir108",
      },
      {
        name: "Saurabh Yadav",
        image: "/hack1.png",
        role: "DevOps",
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
        github: "https://github.com/harshit",
        linkedin: "https://www.linkedin.com/in/harshit-verma-741863309/",
      },
      {
        name: "Manav Raj", image: "/hack1.png", role: "Poster Designer", github: "https://github.com/nikhilpundir108",
        linkedin: "https://linkedin.com/in/nikhilpundir108",
      },
      {
        name: "Divya Rawat", image: "/hack1.png", role: "Branding", github: "https://github.com/nikhilpundir108",
        linkedin: "https://linkedin.com/in/nikhilpundir108",
      },
      {
        name: "Ritika Sharma", image: "/hack1.png", role: "Illustrator", github: "https://github.com/nikhilpundir108",
        linkedin: "https://linkedin.com/in/nikhilpundir108",
      },
    ],
  },
  {
    title: "Visuals Team",
    members: [
      {
        name: "Rohit Sharma", image: "/rohit.jpg", role: "Visuals Head", github: "https://github.com/nikhilpundir108",
        linkedin: "https://linkedin.com/in/nikhilpundir108"
      },
      {
        name: "Aman Tiwari", image: "/hack1.png", role: "Video Editor", github: "https://github.com/nikhilpundir108",
        linkedin: "https://linkedin.com/in/nikhilpundir108"
      },
      {
        name: "Sneha Gupta", image: "/hack1.png", role: "Motion Graphics", github: "https://github.com/nikhilpundir108",
        linkedin: "https://linkedin.com/in/nikhilpundir108"
      },
      {
        name: "Yash Choudhary", image: "/hack1.png", role: "Production", github: "https://github.com/nikhilpundir108",
        linkedin: "https://linkedin.com/in/nikhilpundir108"
      },
    ],
  },
  {
    title: "Event Operations",
    members: [
      {
        name: "Harshit Singh", image: "/harshitSingh.jpg", role: "Event Head", github: "https://github.com/nikhilpundir108",
        linkedin: "https://linkedin.com/in/nikhilpundir108"
      },
      {
        name: "Pratyaksh Mittal", image: "/pratyaksh.jpg", role: "Quality Head", github: "https://github.com/nikhilpundir108",
        linkedin: "https://linkedin.com/in/nikhilpundir108"
      },
      {
        name: "Kriti Sharma", image: "/hack1.png", role: "Logistics", github: "https://github.com/nikhilpundir108",
        linkedin: "https://linkedin.com/in/nikhilpundir108"
      },
      {
        name: "Ankit Yadav", image: "/hack1.png", role: "Ops Coordinator", github: "https://github.com/nikhilpundir108",
        linkedin: "https://linkedin.com/in/nikhilpundir108"
      },
    ],
  },
  {
    title: "Public Relations & Outreach",
    members: [
      {
        name: "Anushka Singhal", image: "/anushka.jpg", role: "PR Head", github: "https://github.com/nikhilpundir108",
        linkedin: "https://linkedin.com/in/nikhilpundir108"
      },
      {
        name: "Tanya Mehta", image: "/hack1.png", role: "Outreach Manager", github: "https://github.com/nikhilpundir108",
        linkedin: "https://linkedin.com/in/nikhilpundir108"
      },
      {
        name: "Mohit Joshi", image: "/hack1.png", role: "Collab Lead", github: "https://github.com/nikhilpundir108",
        linkedin: "https://linkedin.com/in/nikhilpundir108"
      },
      {
        name: "Ayesha Khan", image: "/hack1.png", role: "Community Mgr", github: "https://github.com/nikhilpundir108",
        linkedin: "https://linkedin.com/in/nikhilpundir108"
      },
    ],
  },
  {
    title: "Social & Content Team",
    members: [
      {
        name: "Samarth Gupta", image: "/samarth.jpg", role: "Content Head", github: "https://github.com/nikhilpundir108",
        linkedin: "https://linkedin.com/in/nikhilpundir108"
      },
      {
        name: "Ishita Jain", image: "/hack1.png", role: "Social Media", github: "https://github.com/nikhilpundir108",
        linkedin: "https://linkedin.com/in/nikhilpundir108"
      },
      {
        name: "Raj Mehta", image: "/hack1.png", role: "Writer", github: "https://github.com/nikhilpundir108",
        linkedin: "https://linkedin.com/in/nikhilpundir108"
      },
      {
        name: "Neha Kumari", image: "/hack1.png", role: "Reels Editor", github: "https://github.com/nikhilpundir108",
        linkedin: "https://linkedin.com/in/nikhilpundir108"
      },
    ],
  },
];

export default function TeamPage() {
  return (
    <main className="min-h-screen  bg-gradient-to-r from-black to-gray-900 text-white px-4 py-12">
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
                className="bg-gray-800 rounded-xl overflow-hidden shadow-lg text-center"
              >
                <Image
                  src={member.image}
                  alt={`Photo of ${member.name}`}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 space-y-2">
                  <h3 className="text-lg font-semibold">{member.name}</h3>
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
