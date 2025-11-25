// src/components/sections/ProjectCard.tsx
import Link from "next/link";
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

type ProjectCardProps = {
  project: PROJECTS_QUERYResult[0];
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group flex h-full flex-col bg-gradient-to-b from-white/5 to-transparent">
      <CardHeader className="space-y-2">
        <div className="flex items-start justify-between gap-4">
          <div>
            {project.year && (
              <Badge className="text-[10px]" variant="outline">
                {project.year}
              </Badge>
            )}
            <CardTitle className="mt-3 text-xl">{project.title}</CardTitle>
          </div>
          {project.technologies?.[0] && (
            <Badge variant="glow">{project.technologies[0]}</Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-4">
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

        <div className="mt-auto flex gap-3">
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
