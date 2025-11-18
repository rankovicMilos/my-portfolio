// src/app/projects/page.tsx
import { Section } from "@/components/ui/Section";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/sections/ProjectCard";

export default function ProjectsPage() {
  return (
    <Section
      eyebrow="All work"
      title="From platforms to polished surfaces"
      description="A closer look at the systems, products, and experiments I have led or collaborated on recently."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}
