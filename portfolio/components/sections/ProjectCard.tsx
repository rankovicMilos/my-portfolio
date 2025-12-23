// src/components/sections/ProjectCard.tsx
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { PROJECTS_QUERYResult } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";

type ProjectCardProps = {
  project: PROJECTS_QUERYResult[0];
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group relative flex h-full flex-col bg-gradient-to-b from-white/5 to-transparent hover:scale-105 transition-transform">
      <Link
        href={`/projects/${project.slug?.current}`}
        className="absolute inset-0 z-10"
      >
        <span className="sr-only">View Project</span>
      </Link>
      <CardHeader className="space-y-2">
        <div className="flex items-center justify-between gap-4">
          {project.year && (
            <Badge className="text-[10px]" variant="outline">
              {project.year}
            </Badge>
          )}
          {project.technologies?.[0] && (
            <Badge variant="glow">{project.technologies[0]}</Badge>
          )}
        </div>
        <CardTitle className="text-xl">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-4">
        {project.mainImage != null ? (
          <div className="relative h-50 w-full overflow-hidden rounded-md border border-white/10 bg-white/5 hover:scale-105 transition-transform">
            {project.mainImage != null ? (
              <Image
                src={urlFor(project.mainImage).url()}
                alt={"Project Image for " + project.title}
                className="object-cover"
                height={500}
                width={500}
              />
            ) : (
              <div className="flex h-50 w-full items-center justify-center bg-white/5 text-slate-400">
                <span className="text-sm">No image available</span>
              </div>
            )}
          </div>
        ) : (
          <div className="flex h-50 w-full items-center justify-center bg-white/5 text-slate-400">
            <span className="text-sm">No image available</span>
          </div>
        )}
        {project.description && (
          <p className="text-sm text-slate-300">
            {project.description.length > 150
              ? `${project.description.substring(0, 150)}...`
              : project.description}
          </p>
        )}

        {project.technologies && project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 text-[11px] uppercase tracking-widest text-slate-400">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>
        )}

        <div className="mt-auto flex gap-3 relative z-20">
          {project.githubUrl && (
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="tracking-[0.4em] uppercase"
            >
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer noopener"
              >
                Code
              </Link>
            </Button>
          )}
          {project.liveUrl && (
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="tracking-[0.4em] uppercase"
            >
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer noopener"
              >
                Live
              </Link>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
