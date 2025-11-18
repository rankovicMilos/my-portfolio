// src/app/page.tsx
import { ContactCta } from "@/components/sections/ContactCta";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Highlights } from "@/components/sections/Highlights";
import { ProjectsPreview } from "@/components/sections/ProjectPreview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Highlights />
      <ProjectsPreview />
      <Experience />
      <ContactCta />
    </>
  );
}
