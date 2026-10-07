import Image from "next/image";
import Link from "next/link";
import { Parallax } from "@/components/motion/Parallax";
import { formatIndex, isUnderNda, type ProjectSummary } from "@/lib/projects";
import { cn } from "@/lib/utils";

type ProjectTileProps = {
  project: ProjectSummary;
  /** Position in the full list of work, shown as 01, 02, … */
  position: number;
  sizes: string;
  priority?: boolean;
  className?: string;
};

export function ProjectTile({
  project,
  position,
  sizes,
  priority,
  className,
}: ProjectTileProps) {
  const stack = project.technologies?.slice(0, 3).join(" · ");

  if (!project.preview) {
    return (
      <Link
        href={`/projects/${project.slug}`}
        className={cn(
          "group flex h-full flex-col gap-12 bg-raised p-5 transition-colors duration-500 ease-out-expo hover:bg-raised-hover md:gap-20 md:p-7",
          className,
        )}
      >
        <div className="t-meta flex justify-between gap-6 text-mute">
          <span>{formatIndex(position)}</span>
          {isUnderNda(project) && <span>Under NDA</span>}
        </div>
        <div className="mt-auto">
          <h3 className="t-title max-w-[18ch]">{project.title}</h3>
          {project.description && (
            <p className="mt-4 line-clamp-2 max-w-[52ch] text-mute">
              {project.description}
            </p>
          )}
          <p className="t-meta mt-6 flex justify-between gap-6 text-mute">
            <span>{stack}</span>
            <span>{project.year}</span>
          </p>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn("group block", className)}
    >
      {/* Previews are shown from the top down to a 2:1 frame */}
      <Parallax amount={4} fill className="relative aspect-[2/1] bg-raised">
        <Image
          src={project.preview.url}
          alt={`${project.title} live site preview`}
          width={project.preview.width}
          height={project.preview.height}
          sizes={sizes}
          priority={priority}
          className="h-full w-full object-cover object-top transition-transform duration-[1200ms] ease-out-expo group-hover:scale-[1.03]"
        />
      </Parallax>
      <div className="mt-4 flex items-baseline justify-between gap-6">
        <h3 className="flex items-baseline gap-4 text-lg tracking-tight">
          <span className="t-meta text-mute">{formatIndex(position)}</span>
          <span className="transition-colors duration-300 group-hover:text-cobalt-ink">
            {project.title}
          </span>
        </h3>
        <p className="t-meta flex shrink-0 gap-6 text-mute">
          <span className="hidden lg:inline">{stack}</span>
          <span>{project.year}</span>
        </p>
      </div>
    </Link>
  );
}
