import { TeamGroup } from "@/components/TeamGroup";

export const metadata = {
  title: "Team | CSWD Hackathon",
  description: "Meet the amazing team behind CSWD who organize and execute impactful tech events.",
};

const teamData = [
  {
    title: "Technical Team",
    members: [
      {
        name: "Nikhil Pundir",
        image: "/nikhil.jpg",
        role: "Tech Head",
      },
      {
        name: "abc",
        image: "/abc.jpg",
      },
      {
        name: "xyz",
        image: "/xyz.jpg",
      },
      {
        name: "abc",
        image: "/abc.jpg",
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
      },
      { name: "abc", image: "/abc.jpg" },
      { name: "abc", image: "/abc.jpg" },
      { name: "abc", image: "/abc.jpg" },
    ],
  },
  {
    title: "Visuals Team",
    members: [
      { name: "Rohit Sharma", image: "/rohit.jpg", role: "Visuals Head" },
      { name: "abc", image: "/abc.jpg" },
      { name: "abc", image: "/imjpg" },
      { name: "abc", image: "/abc.jpg" },
    ],
  },
  {
    title: "Event Operations",
    members: [
      { name: "Harshit Singh", image: "/harshitSingh.jpg", role: "Event Head" },
      { name: "Pratyaksh Mittal", image: "/pratyaksh.jpg" ,role: "Quality Head"},
      { name: "abc", image: "/abc.jpg" },
      { name: "abc", image: "/abc.jpg" },
    ],
  },
 {
    title: " Public Relations & Outreach",
    members: [
      { name: "Anushka Singhal", image: "/anushka.jpg", role: "Team Head" },
      { name: "abc", image: "/abc.jpg" },
      { name: "abc", image: "/abc.jpg" },
      { name: "abc", image: "/abc.jpg" },

    ],
  },
  {
    title: " Social & Content Team",
    members: [
      { name: "Samarth Gupta", image: "/samarth.jpg", role: "Team Head" },
      { name: "abc", image: "/abc.jpg" },
      { name: "abc", image: "/abc.jpg" },
      { name: "abc", image: "/abc.jpg" },
    ],
  },
];

export default function TeamPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12 bg-gradient-to-r from-black to-gray-900 text-white">
      <h1 className="text-3xl font-bold text-center mb-10 text-white">
        THE MINDS BEHIND THE MISSION
      </h1>
      {teamData.map((group, i) => (
        <TeamGroup key={i} title={group.title} members={group.members} />
      ))}
    </main>
  );
}
