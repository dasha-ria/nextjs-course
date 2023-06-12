import Link from "next/link";

interface Props {
  id: string;
  name: string | null;
  image: string | null;
}

export default function UserCard({ id, name, image }: Props) {
  return (
    <Link href={`/users/${id}`}>
      <div className="ml-10 w-32 h-44 rounded-md shadow-md flex flex-col gap-2 items-center">
        <img
          className="w-32 h-auto h-auto rounded-t-md"
          src={image ?? "/next.svg"}
          alt={`${name}'s profile`}
        ></img>
        <h3>{name}</h3>
      </div>
    </Link>
  );
}
