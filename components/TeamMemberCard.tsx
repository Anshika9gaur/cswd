import Image from "next/image";

interface Props {
  name: string;
  image: string;
  role?: string;
}

export const TeamMemberCard = ({ name, image, role }: Props) => {
  return (
    <div className="text-center max-w-xs w-full mx-auto">
      <div className="relative aspect-square overflow-hidden rounded-xl shadow-sm w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 100vw, 280px"
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
