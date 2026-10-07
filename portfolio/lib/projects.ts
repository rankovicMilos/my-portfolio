import type { PROJECTS_QUERYResult } from "@/sanity.types";
import { sanityFetch } from "@/sanity/lib/client";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";
import { getSitePreview, type SitePreview } from "./preview";

export type ProjectSummary = PROJECTS_QUERYResult[number] & {
  preview: SitePreview | null;
};

// All projects in display order, each with a preview of its live site
export async function getProjects(): Promise<ProjectSummary[]> {
  const projects = await sanityFetch({ query: PROJECTS_QUERY });
  return Promise.all(
    projects.map(async (project) => ({
      ...project,
      preview: await getSitePreview(project.liveUrl),
    })),
  );
}

// Work without a live link cannot be shown
export const isUnderNda = (project: { liveUrl: string | null }) =>
  !project.liveUrl;

export const formatIndex = (position: number) =>
  String(position + 1).padStart(2, "0");
