import { ScrollUp } from "@/components/Common";
import { Features, Hero } from "@/components/LandingPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Andrew Project",
  description: "This is Andrew's Project",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
    </>
  );
}
