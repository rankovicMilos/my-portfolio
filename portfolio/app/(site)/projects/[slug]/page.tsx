import { sanityFetch } from "@/sanity/lib/client";
import { PROJECT_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { notFound } from "next/navigation";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await sanityFetch({
    query: PROJECT_QUERY,
    params: { slug },
  });

  if (!project) {
    notFound();
  }

  return (
    <article className="space-y-8 animate-sequence">
      {/* Back Link */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-xs font-medium group"
      >
        <ArrowLeft
          width={14}
          className="group-hover:-translate-x-1 transition-transform"
        />
        Back to projects
      </Link>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <h1 className="font-nunito font-bold text-3xl sm:text-4xl text-white tracking-tight">
            {project.title}
          </h1>

          <div className="flex gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="View Source"
                className="p-2 bg-zinc-900 border border-white/10 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
              >
                <Github width={18} strokeWidth={1.5} />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="View Live"
                className="p-2 bg-zinc-100 text-black border border-white/10 rounded-full hover:bg-zinc-200 transition-colors"
              >
                <ExternalLink width={18} strokeWidth={1.5} />
              </a>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.technologies?.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-full bg-zinc-900/50 border border-white/5 text-[10px] text-zinc-400 font-medium"
            >
              {tech}
            </span>
          ))}
          {project.year && (
            <span className="px-2.5 py-1 rounded-full bg-zinc-900/50 border border-white/5 text-[10px] text-zinc-500 font-mono">
              {project.year}
            </span>
          )}
        </div>
      </div>

      {/* Main Image */}
      {project.mainImage && (
        <div className="rounded-2xl border border-white/5 overflow-hidden bg-zinc-900/50 aspect-video relative shadow-2xl">
          <Image
            src={urlFor(project.mainImage).width(1200).height(675).url()}
            alt={project.title || "Project Preview"}
            width={1200}
            height={675}
            priority
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Description */}
      <div className="prose prose-invert prose-zinc max-w-none text-sm text-zinc-400 leading-relaxed whitespace-pre-line">
        <p>{project.description}</p>
      </div>
    </article>
  );
}
