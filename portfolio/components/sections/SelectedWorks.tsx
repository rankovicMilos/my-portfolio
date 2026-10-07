import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { formatIndex, getProjects, isUnderNda } from "@/lib/projects";
import { ProjectTile } from "./ProjectTile";

// First project runs full width, the rest pair up; a project left without a
// partner sits to the right at two thirds.
function tileLayout(position: number, total: number) {
  if (position === 0) {
    return { span: "md:col-span-12", sizes: "100vw" };
  }
  const aloneInPair = position === total - 1 && position % 2 === 1;
  if (aloneInPair) {
    return {
      span: "md:col-span-8 md:col-start-5",
      sizes: "(min-width: 48rem) 66vw, 100vw",
    };
  }
  return {
    span: "md:col-span-6",
    sizes: "(min-width: 48rem) 50vw, 100vw",
  };
}

export async function SelectedWorks() {
  const projects = await getProjects();
  // Live sites are shown as previews; everything else is listed below them
  const featured = projects.filter((project) => project.preview).slice(0, 4);
  const rest = projects.filter((project) => !featured.includes(project));

  if (projects.length === 0) return null;

  return (
    <Section
      title="Selected work"
      aside={
        <Link href="/projects" className="link t-meta">
          All work ({projects.length})
        </Link>
      }
    >
      <div className="grid-12 gap-y-14 md:gap-y-24">
        {featured.map((project, position) => {
          const layout = tileLayout(position, featured.length);
          return (
            <ProjectTile
              key={project._id}
              project={project}
              position={projects.indexOf(project)}
              sizes={layout.sizes}
              className={`col-span-4 ${layout.span}`}
            />
          );
        })}
      </div>

      {rest.length > 0 && (
        <ul className="mt-14 border-b md:mt-24">
          {rest.map((project) => (
            <li key={project._id} className="border-t">
              <Link
                href={`/projects/${project.slug}`}
                className="group grid-12 items-baseline gap-y-1 py-5"
              >
                <span className="t-meta col-span-4 text-mute md:col-span-1">
                  {formatIndex(projects.indexOf(project))}
                </span>
                <span className="col-span-4 text-xl tracking-tight transition-colors duration-300 group-hover:text-cobalt-ink md:col-span-5">
                  {project.title}
                </span>
                <span className="t-meta col-span-3 text-mute md:col-span-4">
                  {project.technologies?.slice(0, 3).join(" · ")}
                </span>
                <span className="t-meta col-span-1 flex justify-end gap-6 text-mute md:col-span-2">
                  {isUnderNda(project) && (
                    <span className="hidden md:inline">Under NDA</span>
                  )}
                  <span>{project.year}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
}
