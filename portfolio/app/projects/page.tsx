// src/app/projects/page.tsx
import { Section } from "@/components/ui/Section";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { sanityFetch } from "@/sanity/lib/client";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";
import { object } from "zod";

export default async function ProjectsPage() {
  const projects = await sanityFetch({ query: PROJECTS_QUERY });
  const sortedProjects = projects.sort((a, b) => {
    const orderA = a.order ?? 0;
    const orderB = b.order ?? 0;
    return orderA - orderB;
  });

  console.log("Sorted Projects:", sortedProjects);

  return (
    <Section
      eyebrow="All work"
      title="My Projects"
      description="A closer look at the systems, products, and experiments I have led or collaborated on recently."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {sortedProjects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </Section>
  );
}
