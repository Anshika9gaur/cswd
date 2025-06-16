import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function HeadSection() {
  const testimonials = [
    {
      quote:
        "As Lead of CSWD, I fuel innovation through tech. A serial hackathon winner, I drive creative solutions and build practical projects. With expertise in AI, UI/UX, and full-stack development, I inspire others to learn, build, and innovate – bringing energy, vision, and excellence to the community.",
      name: "Naitik Kumar",
      designation: "Lead",
      src: "/naitik.jpg",
    },
    {
      quote:
        "Prateek Malik is a dependable and strategic leader known for his collaborative mindset. As Vice President, he supports core operations, bridges communication across domains, and drives the team towards shared success.",
      name: "Prateek Malik",
      designation: "Co-Lead",
      src: "/prateekMalik.jpg",
    },
    {
      quote:
        "A full-stack developer leading with a passion for technology. With deep expertise in the MERN stack and Next.js, committed to building efficient, scalable web solutions and driving technical innovation across projects.",
      name: "Nikhil Pundir",
      designation: "Tech Head",
      src: "/nikhil.jpg",
    },
    {
      quote:
        "Harshit Singh is an organized and proactive leader known for his ability to execute high-impact events. As Event Head, he ensures every detail is meticulously planned and brings structure and energy to all team activities.",
      name: "Harshit Singh",
      designation: "Event Head",
      src: "/harshitSingh.jpg",
    },
    {
      quote:
        "Harshit Verma is a creative and detail-oriented individual with a strong sense of design and communication. As Graphic Head, he brings visual consistency to the team's identity and effectively translates ideas into impactful experiences.",
      name: "Harshit Verma",
      designation: "Graphic Head",
      src: "/harshitVerma.jpg",
    },
    {
      quote:
        "Rohit Sharma is a visionary creator with a deep understanding of visual storytelling. As Visual Head, he manages media production with clarity and creativity, delivering content that aligns with the team's vision and engages its audience meaningfully.",
      name: "Rohit Sharma",
      designation: "Visual Head",
      src: "/rohit.jpg",
    },
    {
      quote:
        "Pratyaksh Mittal is a thorough and quality-driven professional who upholds high standards across all outputs. As Quality Manager, he plays a key role in maintaining consistency, accuracy, and excellence in execution.",
      name: "Pratyaksh Mittal",
      designation: "Quality Manager",
      src: "/pratyaksh.jpg",
    },
    {
      quote:
        "Anushka Singhal is a confident and articulate communicator with a flair for building lasting relationships. As PR & Outreach Head, she leads initiatives to enhance the team's external presence and foster meaningful connections.",
      name: "Anushka Singhal",
      designation: "PR & Outreach",
      src: "/anushka.jpg",
    },
    {
      quote:
        "Samarth Gupta is a strategic thinker and skilled communicator, recognized for his compelling content creation. As Social & Content Head, he crafts narratives that resonate with audiences and strengthen the team's digital identity.",
      name: "Samarth Gupta",
      designation: "Social & Content Head",
      src: "/samarth.jpg",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-black to-gray-900 py-10 border-t border-gray-700">
      <h2 className="text-4xl text-center font-bold text-white mb-6">
        Meet our Leaders
      </h2>
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
}
