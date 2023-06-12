import { prisma } from "@/lib/prisma";
import { Metadata } from "next";

interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const user = await prisma.user.findUnique({ where: { id: params.id } });
  return { title: `User profile of ${user?.name}` };
}

export default async function UserProfile({ params }: Props) {
  const user = await prisma.user.findUnique({ where: { id: params.id } });
  const { name, bio, image } = user ?? {};

  return (
    <div className="pl-10">
      <h1 className="text-lg">{name}</h1>
      <img
        className="mt-4"
        width={300}
        src={image ?? "/next.svg"}
        alt={`${name}'s profile`}
      ></img>
      <p>{bio}</p>
    </div>
  );
}
