import EventCard from "@/components/EventCard";

export const metadata = {
  title: "Events | CSWD Hackathon",
  description: "Discover our upcoming hackathons, coding contests, and workshops organized by CSWD MIET.",
};

export default function EventsPage() {
  return (
    <main>
      <EventCard
        title="CodeVerse 2025"
        description="Join developers for 36 hours of building, learning, and networking. CodeVerse is back with exciting challenges and bigger rewards!"
        buttonLabel="Register Now"
        buttonLink="/register"
        images={["/hack1.png", "/hack2.png", "/hack3.png"]}
        imageOnLeft={false}
      />

      <EventCard
        title="DesignSprint 2.0"
        description="A 12-hour UI/UX sprint to turn design ideas into interactive prototypes. Compete, collaborate, and showcase your creative skills."
        buttonLabel="Apply as Designer"
        buttonLink="/apply-designer"
        images={["/hack1.png", "/hack2.png", "/hack3.png"]}
        imageOnLeft={true}
      />

      <EventCard
        title="Startup Showcase"
        description="A platform for student startups to pitch, validate ideas, and get feedback from real VCs and mentors. Let your vision shine."
        buttonLabel="Pitch Your Startup"
        buttonLink="/pitch"
        images={["/hack1.png", "/hack2.png", "/hack3.png"]}
        imageOnLeft={false}
      />
    </main>
  );
}
