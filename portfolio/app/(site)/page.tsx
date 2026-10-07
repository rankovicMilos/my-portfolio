// src/app/page.tsx
import { Hero } from "@/components/sections/Hero";
import { SelectedWorks } from "@/components/sections/SelectedWorks";
import { Stack } from "@/components/sections/Stack";
import { Newsletter } from "@/components/sections/Newsletter";
import { Experience } from "@/components/sections/Experience";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SelectedWorks />
      <Stack />
      <Experience />
      <Newsletter />
    </>
  );
}
