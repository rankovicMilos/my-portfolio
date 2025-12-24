import { Section } from "@/components/ui/Section";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AboutPageQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/client";
import { PortableText } from "next-sanity";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Milos Rankovic - a full-stack software engineer with expertise in .NET, NestJS, Next.js, and Angular. My background, education, skills, and experience.",
};

export default async function AboutPage() {
  const aboutMePage = await sanityFetch({ query: AboutPageQuery });

  // Convert bio blocks to plain text for fallback
  const bioText = aboutMePage?.bio
    ?.map((block) => block.children?.map((child) => child.text).join(""))
    .join("\n\n");

  return (
    <Section
      eyebrow={aboutMePage?.eyebrow || "About Me"}
      title={aboutMePage?.title || "About Me"}
      description={bioText?.split("\n\n")[0]}
      profileImage={aboutMePage?.profileImage as any}
    >
      <div className="grid gap-10 md:grid-cols-[2fr_1fr]">
        <div className="space-y-6">
          {/* Bio Content */}

          {/* Education Section */}
          {aboutMePage?.education && aboutMePage.education.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-100">
                Education
              </h3>
              <div className="space-y-3">
                {aboutMePage.education.map((edu) => (
                  <Card
                    key={edu._key}
                    className="border-white/10 bg-white/5 p-4"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-medium text-slate-100">
                          {edu.degree}
                        </h4>
                        <p className="text-sm text-slate-300">
                          {edu.institution}
                        </p>
                      </div>
                      {edu.year && (
                        <Badge variant="outline" className="text-[10px]">
                          {edu.year}
                        </Badge>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {aboutMePage?.skills && aboutMePage.skills.length > 0 && (
            <Card className="border-white/10 bg-slate-900/60 p-4 text-sm text-slate-200">
              <CardHeader className="space-y-3 p-0">
                <Badge className="w-fit text-[10px]" variant="outline">
                  Skills
                </Badge>
              </CardHeader>
              <CardContent className="p-0 pt-3">
                <div className="grid grid-cols-2 gap-4">
                  <ul className="space-y-3">
                    {aboutMePage.skills
                      .slice(0, Math.ceil(aboutMePage.skills.length / 2))
                      .map((skill) => (
                        <li
                          key={skill}
                          className="flex items-center text-slate-100"
                        >
                          <div className="mr-2 h-1.5 w-1.5 rounded-full bg-indigo-400"></div>
                          <span className="text-sm">{skill}</span>
                        </li>
                      ))}
                  </ul>
                  <ul className="space-y-3">
                    {aboutMePage.skills
                      .slice(Math.ceil(aboutMePage.skills.length / 2))
                      .map((skill) => (
                        <li
                          key={skill}
                          className="flex items-center text-slate-100"
                        >
                          <div className="mr-2 h-1.5 w-1.5 rounded-full bg-indigo-400"></div>
                          <span className="text-sm">{skill}</span>
                        </li>
                      ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <aside className="space-y-5 md:pt-11">
          {/* Contact Information */}
          {aboutMePage?.contactInfo && (
            <Card className="border-white/10 bg-slate-900/60 p-4">
              <CardHeader className="space-y-3 p-0">
                <Badge className="w-fit text-[10px]" variant="outline">
                  Contact
                </Badge>
              </CardHeader>
              <CardContent className="p-0 pt-3 space-y-3 text-sm">
                {aboutMePage.contactInfo.email && (
                  <div>
                    <p className="text-xs text-slate-400">Email</p>
                    <a
                      href={`mailto:${aboutMePage.contactInfo.email}`}
                      className="text-slate-100 hover:text-indigo-400 transition-colors"
                    >
                      {aboutMePage.contactInfo.email}
                    </a>
                  </div>
                )}
                {aboutMePage.contactInfo.phone && (
                  <div>
                    <p className="text-xs text-slate-400">Phone</p>
                    <a
                      href={`tel:${aboutMePage.contactInfo.phone}`}
                      className="text-slate-100 hover:text-indigo-400 transition-colors"
                    >
                      {aboutMePage.contactInfo.phone}
                    </a>
                  </div>
                )}
                {aboutMePage.contactInfo.linkedin && (
                  <div>
                    <p className="text-xs text-slate-400">LinkedIn</p>
                    <a
                      href={aboutMePage.contactInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-100 hover:text-indigo-400 transition-colors"
                    >
                      View Profile
                    </a>
                  </div>
                )}
                {aboutMePage.contactInfo.github && (
                  <div>
                    <p className="text-xs text-slate-400">GitHub</p>
                    <a
                      href={aboutMePage.contactInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-100 hover:text-indigo-400 transition-colors"
                    >
                      View Profile
                    </a>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </aside>
      </div>
    </Section>
  );
}
