import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Capabilities } from "@/components/sections/Capabilities";
import { SanityImage } from "@/components/ui/SanityImage";
import { AboutPageQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/client";
import { PortableText, type PortableTextComponents } from "next-sanity";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Milos Rankovic - a full-stack software engineer with expertise in .NET, NestJS, Next.js, and Angular. My background, education, skills, and experience.",
  alternates: { canonical: "/about" },
};

const bioComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="t-title">{children}</p>,
  },
  marks: {
    link: ({ children, value }) => (
      <a href={value?.href} className="link">
        {children}
      </a>
    ),
  },
};

export default async function AboutPage() {
  const aboutMePage = await sanityFetch({ query: AboutPageQuery });

  return (
    <>
      <PageHeader title={aboutMePage?.title || "About Me"} />

      <Container className="grid-12 gap-y-10">
        {aboutMePage?.profileImage?.asset && (
          <SanityImage
            image={aboutMePage.profileImage}
            alt="Portrait of Milos Rankovic"
            width={1000}
            aspect={4 / 5}
            sizes="(min-width: 48rem) 33vw, 100vw"
            priority
            className="col-span-3 h-auto w-full bg-raised md:col-span-3"
          />
        )}
        <div className="col-span-4 max-w-[52ch] space-y-6 md:col-span-7 md:col-start-6">
          {aboutMePage?.bio && (
            <PortableText value={aboutMePage.bio} components={bioComponents} />
          )}
        </div>
      </Container>

      <Capabilities title="Skills" />

      {aboutMePage?.education && aboutMePage.education.length > 0 && (
        <Section title="Education">
          <ul className="border-b">
            {aboutMePage.education.map((edu) => (
              <li
                key={edu._key}
                className="grid-12 gap-y-1 border-t py-6 first:border-t-0 first:pt-0"
              >
                <p className="t-meta col-span-4 pt-1.5 text-mute md:col-span-3">
                  {edu.year}
                </p>
                <h3 className="col-span-4 text-xl tracking-tight md:col-span-5">
                  {edu.degree}
                </h3>
                <p className="col-span-4 text-mute md:col-span-4">
                  {edu.institution}
                </p>
              </li>
            ))}
          </ul>
        </Section>
      )}

    </>
  );
}
