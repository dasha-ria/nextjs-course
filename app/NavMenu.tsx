import Image from "next/image";
import Link from "next/link";

export default function NavMenu() {
  return (
    <nav className="flex justify-between p-10">
      <Link href="/">
        <Image
          src="Nextspace.svg"
          alt=""
          width={50}
          height={50}
          className="w-56"
        ></Image>
      </Link>
      <ul className="flex gap-4">
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="">Blog</Link>
        </li>
        <li>
          <Link href="">Users</Link>
        </li>
      </ul>
    </nav>
  );
}
