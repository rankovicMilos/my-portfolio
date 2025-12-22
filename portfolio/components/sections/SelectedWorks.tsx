import Link from "next/link";
import { ChevronRight, Layers, Aperture } from "lucide-react";
import { sanityFetch } from "@/sanity/lib/live";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

export async function SelectedWorks() {
  const { data: projects } = await sanityFetch({ query: PROJECTS_QUERY });

  return (
    <section className="space-y-4">
      <h2 className="font-nunito font-semibold text-lg text-white mb-6 tracking-tight flex items-center gap-2">
        <Layers width={16} className="text-zinc-500" strokeWidth={1.5} />
        Selected Work
      </h2>

      <div className="space-y-3">
        {projects.slice(0, 4).map((project) => (
          <Link
            key={project._id}
            href={`/projects/${project.slug?.current}`}
            className="group block p-4 rounded-2xl bg-zinc-900/30 hover:bg-zinc-800/50 border border-white/5 hover:border-white/10 transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-zinc-950 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-white transition-colors group-hover:border-white/20 overflow-hidden relative">
                  {project.mainImage ? (
                    <img
                      src={urlFor(project.mainImage).width(80).height(80).url()}
                      alt={project.title || "Project Image"}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                  ) : (
                    <Aperture width={20} strokeWidth={1.5} />
                  )}
                </div>

                <div>
                  <h3 className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-zinc-500 mt-0.5">
                    {Array.isArray(project.technologies)
                      ? project.technologies.slice(0, 2).join(", ")
                      : "Web App"}
                  </p>
                </div>
              </div>
              <div className="text-zinc-600 group-hover:text-zinc-400 transition-colors transform group-hover:translate-x-1 duration-300">
                <ChevronRight width={16} strokeWidth={1.5} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
