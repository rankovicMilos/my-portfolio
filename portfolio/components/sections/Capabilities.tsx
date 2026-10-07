import { Section } from "@/components/ui/Section";
import { sanityFetch } from "@/sanity/lib/client";
import { SKILLS_QUERY } from "@/sanity/lib/queries";

// Shown until skill groups are filled in under About Me in the Studio
const fallbackGroups = [
  {
    _key: "backend",
    title: "Backend",
    items: [".NET", "NestJS", "Prisma", "MySQL", "MSSQL", "Azure"],
  },
  {
    _key: "frontend",
    title: "Frontend",
    items: ["Next.js", "React", "Angular", "Tailwind CSS"],
  },
  {
    _key: "cms",
    title: "CMS",
    items: ["Sanity", "Umbraco", "Optimizely", "Strapi"],
  },
];

export async function Capabilities({ title = "Capabilities" }) {
  const skills = await sanityFetch({ query: SKILLS_QUERY });
  const groups = skills && skills.length > 0 ? skills : fallbackGroups;

  return (
    <Section title={title}>
      <div className="grid-12 gap-y-12">
        {groups.map((group) => (
          <div key={group._key} className="col-span-4">
            <h3 className="t-title">{group.title}</h3>
            <ul className="mt-6 border-b">
              {group.items?.map((item) => (
                <li key={item} className="border-t py-3 text-mute">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
