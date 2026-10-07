// src/app/page.tsx
import { Hero } from "@/components/sections/Hero";
import { Statement } from "@/components/sections/Statement";
import { SelectedWorks } from "@/components/sections/SelectedWorks";
import { Capabilities } from "@/components/sections/Capabilities";
import { Experience } from "@/components/sections/Experience";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Statement />
      <SelectedWorks />
      <Capabilities />
      <Experience />
    </>
  );
}
