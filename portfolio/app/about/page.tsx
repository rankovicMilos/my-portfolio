import { Section } from "@/components/ui/Section";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillColumns = [
  {
    heading: "Platforms & backend",
    items: [
      ".NET 8",
      "ASP.NET Core",
      "NestJS",
      "Node.js",
      "PostgreSQL",
      "Azure",
    ],
  },
  {
    heading: "Frontend & product",
    items: ["Next.js", "Angular", "React", "Tailwind CSS", "Figma", "CMS"],
  },
  {
    heading: "Ways of working",
    items: [
      "Technical strategy",
      "DevEx",
      "Mentorship",
      "CI/CD",
      "Observability",
    ],
  },
];

export default function AboutPage() {
  return (
    <Section
      eyebrow="About"
      title="About Me"
      description="I started as backend developer before moving deeper into full-stack engineering. That blend anchors every engagement: I translate fuzzy business goals into architecture, and help teams deliver with empathy."
    >
      <div className="grid gap-10 md:grid-cols-[2fr_1fr]">
        <div className="space-y-6 text-sm text-slate-200 md:text-base">
          <p>
            I&apos;ve spent the past decade working across industries--fintech,
            commerce, health, and housing. I gravitate toward problems where the
            stakes are high and the domain is nuanced, because that&apos;s when
            thoughtful systems and clear communication really matter.
          </p>
          <p>
            Whether parachuting into an existing platform or leading something
            new, I focus on the connective tissue: architecture decisions that
            age well, developer experience that lowers friction, and rituals
            that keep product, design, and engineering in lockstep.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Approach",
                description:
                  "Collaborative workshops, roadmaps tied to business metrics, and transparent communication.",
              },
              {
                title: "Values",
                description:
                  "Candor over ego, documentation as a product, inclusivity, and sustainable delivery pace.",
              },
            ].map((card) => (
              <Card key={card.title} className="border-white/10 bg-white/5">
                <CardHeader className="space-y-2">
                  <CardTitle className="text-lg">{card.title}</CardTitle>
                  <CardDescription className="text-slate-300 mb-4">
                    {card.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <aside className="space-y-5 text-sm text-slate-200">
          {skillColumns.map((column) => (
            <Card
              key={column.heading}
              className="border-white/10 bg-slate-900/60 p-4 text-sm text-slate-200"
            >
              <CardHeader className="space-y-3 p-0">
                <Badge className="w-fit text-[10px]" variant="outline">
                  {column.heading}
                </Badge>
              </CardHeader>
              <CardContent className="p-0 pt-3">
                <ul className="space-y-2 text-slate-100">
                  {column.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </aside>
      </div>
    </Section>
  );
}
