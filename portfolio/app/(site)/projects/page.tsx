// src/app/projects/page.tsx
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { ProjectTile } from "@/components/sections/ProjectTile";
import { getProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Projects by Milos Rankovic: web platforms, booking systems and CMS-driven sites built with .NET, NestJS, Next.js and Angular.",
  alternates: { canonical: "/projects" },
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  const years = projects
    .map((project) => project.year)
    .filter((year): year is number => typeof year === "number");
  const span =
    years.length > 0
      ? `${projects.length} projects, ${Math.min(...years)} to ${Math.max(...years)}.`
      : undefined;

  return (
    <>
      <PageHeader title="Work." support={span}>
        <p className="t-meta mt-8 text-mute">
          Projects without a live link are under NDA.
        </p>
      </PageHeader>
      <Container>
        {projects.length === 0 ? (
          <p className="t-lead border-t pt-8 text-mute">
            Projects are being added. Check back soon.
          </p>
        ) : (
          <div className="grid-12 gap-y-14 md:gap-y-20">
            {projects.map((project, position) => (
              <ProjectTile
                key={project._id}
                project={project}
                position={position}
                sizes="(min-width: 48rem) 50vw, 100vw"
                priority={position < 2}
                className="col-span-4 md:col-span-6"
              />
            ))}
          </div>
        )}
      </Container>
    </>
  );
}
