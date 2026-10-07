import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { sanityFetch } from "@/sanity/lib/client";
import { PROJECT_QUERY, PROJECT_SLUGS_QUERY } from "@/sanity/lib/queries";
import { Container } from "@/components/ui/Container";
import { getSitePreview } from "@/lib/preview";
import { isUnderNda } from "@/lib/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await sanityFetch({ query: PROJECT_QUERY, params: { slug } });

  if (!project) return {};

  return {
    title: project.title,
    description: project.description?.slice(0, 160),
    alternates: { canonical: `/projects/${slug}` },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const [project, slugs] = await Promise.all([
    sanityFetch({ query: PROJECT_QUERY, params: { slug } }),
    sanityFetch({ query: PROJECT_SLUGS_QUERY }),
  ]);

  if (!project) {
    notFound();
  }

  const preview = await getSitePreview(project.liveUrl);

  const position = slugs.findIndex((item) => item.slug === slug);
  const next = slugs.length > 1 ? slugs[(position + 1) % slugs.length] : null;

  const paragraphs = (project.description ?? "")
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.replace(/\s+/g, " ").trim())
    .filter(Boolean);

  const facts = [
    { label: "Year", value: project.year },
    { label: "Stack", value: project.technologies?.join(", ") },
    {
      label: "Status",
      value: isUnderNda(project) ? "Under NDA, visuals withheld" : null,
    },
  ].filter((fact) => fact.value);

  const links = [
    { label: "Visit live site", href: project.liveUrl },
    { label: "View source", href: project.githubUrl },
  ].filter((link) => link.href);

  return (
    <article>
      <Container className="pt-16 md:pt-28">
        <div className="grid-12 items-end gap-y-10 pb-12 md:pb-16">
          <h1 className="t-display col-span-4 md:col-span-7">
            {project.title}
          </h1>

          <dl className="col-span-4 md:col-span-4 md:col-start-9">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="grid grid-cols-[6rem_1fr] gap-4 border-t py-3"
              >
                <dt className="t-meta pt-1 text-mute">{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {preview && (
          <a
            href={project.liveUrl!}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-raised"
          >
            <Image
              src={preview.url}
              alt={`${project.title} live site preview`}
              width={preview.width}
              height={preview.height}
              sizes="100vw"
              priority
              className="h-auto w-full"
            />
          </a>
        )}

        <div className="grid-12 gap-y-8 pt-12 md:pt-20">
          <div className="t-lead col-span-4 max-w-[65ch] space-y-5 md:col-span-7 md:col-start-4">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          {links.length > 0 && (
            <ul className="col-span-4 flex flex-wrap gap-x-8 gap-y-3 md:col-span-7 md:col-start-4">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Container>

      {next && next.slug !== slug && (
        <Container className="pt-[var(--section)]">
          <Link
            href={`/projects/${next.slug}`}
            className="group flex items-baseline justify-between gap-8 border-t pt-6"
          >
            <span className="t-display max-w-[20ch] transition-colors duration-300 group-hover:text-cobalt-ink">
              {next.title}
            </span>
            <span className="t-meta shrink-0 text-mute">Next project</span>
          </Link>
        </Container>
      )}
    </article>
  );
}
