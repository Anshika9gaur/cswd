import Image from "next/image";

interface Props {
  name: string;
  image: string;
  role?: string;
}

export const TeamMemberCard = ({ name, image, role }: Props) => {
  return (
    <div className="text-center">
      <div className="overflow-hidden rounded-xl shadow-sm">
        <Image
          src={image}
          alt={name}
          width={280}
          height={280}
          className="rounded-lg object-cover w-[280px] h-[280px] mx-auto"
        />
      </div>
      <p className="mt-2 font-semibold">{name}</p>
      {role && (
        <p className="text-sm text-blue-600 font-medium bg-blue-100 rounded-full px-2 py-0.5 inline-block mt-1">
          {role}
        </p>
      )}
    </div>
  );
};
