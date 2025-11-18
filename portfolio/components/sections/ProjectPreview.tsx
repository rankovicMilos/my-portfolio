import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectsPreview() {
  const featured = projects.slice(0, 3);

  return (
    <Section
      id="projects"
      eyebrow="Selected work"
      title="High-leverage projects"
      description="A sampling of platforms and products I have helped architect, build, and ship across startups and enterprise teams."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {featured.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
      <div className="mt-8 flex justify-end">
        <Button asChild variant="ghost" className="gap-2 text-indigo-200">
          <Link href="/projects">
            View all projects <span aria-hidden>&rarr;</span>
          </Link>
        </Button>
      </div>
    </Section>
  );
}
