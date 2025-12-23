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


  return (
    <Section
      eyebrow="All work"
      title="My Projects"
      description="A closer look at the systems, products, and experiments I have led or collaborated on recently."
    >
      <div className="mb-6">
        <p className="text-slate-500">Note: projects without pictures or live links are under NDA</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {sortedProjects.map((project) => (
          <ProjectCard key={project.slug?.current} project={project} />
        ))}
      </div>
    </Section>
  );
}
