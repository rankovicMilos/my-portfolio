// src/components/sections/ProjectCard.tsx
import Link from "next/link";
import type { Project } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ProjectCard({ project }: { project: Project }) {
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
            <CardTitle className="mt-3 text-xl">{project.name}</CardTitle>
            {project.role && (
              <CardDescription className="text-slate-200">
                {project.role}
              </CardDescription>
            )}
          </div>
          <Badge variant="glow">{project.tech[0]}</Badge>
        </div>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-4">
        <p className="text-sm text-slate-300">
          {project.description.length > 150
            ? `${project.description.substring(0, 150)}...`
            : project.description}
        </p>
        {project.impact && (
          <ol className="text-sm font-medium text-indigo-200">
            {project.impact.map((impact, index) => (
              <li key={index}>{impact}</li>
            ))}
          </ol>
        )}

        <div className="flex flex-wrap gap-2 text-[11px] uppercase tracking-widest text-slate-400">
          {project.tech.map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="mt-auto flex gap-3">
          {project.repoUrl && (
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="tracking-[0.4em] uppercase"
            >
              <Link
                href={project.repoUrl}
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
