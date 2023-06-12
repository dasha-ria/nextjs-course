import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Image from "next/image";

export default async function Home() {
  const session = await getServerSession();

  // if (!session) {
  //   redirect("/api/auth/signin");
  // }

  return (
    <div className="pl-10">
      <p>Welcome to NEXTspace! This is the best social media since Facebook.</p>
    </div>
  );
}
