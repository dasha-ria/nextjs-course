import Link from "next/link";

interface Props {
  id: string;
  name: string | null;
  image: string | null;
}

export default function UserCard({ id, name, image }: Props) {
  return (
    <Link href={`/users/${id}`}>
      <div className="pl-10">
        <img
          className="w-20 h-auto"
          src={image ?? "/next.svg"}
          alt={`${name}'s profile`}
        ></img>
        <h3>{name}</h3>
      </div>
    </Link>
  );
}
