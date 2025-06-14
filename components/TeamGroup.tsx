import { TeamMemberCard } from "./TeamMemberCard";

interface Member {
  name: string;
  image: string;
  role?: string;
}

interface Props {
  title: string;
  members: Member[];
}

export const TeamGroup = ({ title, members }: Props) => {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-semibold text-slate-50 mb-4">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {members.map((member, i) => (
          <TeamMemberCard
            key={i}
            name={member.name}
            image={member.image}
            role={member.role}
          />
        ))}
      </div>
    </section>
  );
};
