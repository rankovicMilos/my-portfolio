// src/app/projects/page.tsx
import { Section } from "@/components/ui/Section";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { sanityFetch } from "@/sanity/lib/client";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";

export default async function ProjectsPage() {
  const projects = await sanityFetch({ query: PROJECTS_QUERY });

  return (
    <Section
      eyebrow="All work"
      title="From platforms to polished surfaces"
      description="A closer look at the systems, products, and experiments I have led or collaborated on recently."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </Section>
  );
}
