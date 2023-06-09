import { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "About Us",
  description: "We are a social media company",
};

export default function About() {
  return (
    <div className="pl-10">
      <h1 className="font-bold">About</h1>
      <p>We are a social media company!</p>
    </div>
  );
}
