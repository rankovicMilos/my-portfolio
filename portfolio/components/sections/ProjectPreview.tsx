import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { PROJECTS_QUERYResult } from "@/sanity.types";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";

export async function ProjectsPreview() {
  const projects = await sanityFetch({ query: PROJECTS_QUERY });

  return (
    <Section
      id="projects"
      eyebrow="Selected work"
      title="High-leverage projects"
      description="A sampling of platforms and products I have helped architect, build, and ship across startups and enterprise teams."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {projects.data.sort((a, b) => (b?.order ?? 0) - (a?.order ?? 0)).map((project) => (
          <ProjectCard key={project._id} project={project} />
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
