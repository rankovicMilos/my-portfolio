import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const timeline = [
  {
    role: "Full-Stack Engineer",
    company: "Self-employed",
    period: "2025 - Present",
    summary:
      "Creating solutions to help local business owners streamline operations and enhance customer engagement.",
    highlights: [
      "Created a booking system that decreased manual work by 30 hours/month.",
      "Introduced a service catalog and paved-path tooling adopted by 4 squads.",
      "Partnered with design + research to launch a unified onboarding in 10 weeks.",
    ],
  },
  {
    role: "Full-Stack Engineer",
    company: "VegaIT ",
    period: "2020 - 2023",
    summary:
      "Designed the event-driven backbone for a global marketplace while mentoring engineers across API, data, and frontend verticals.",
    highlights: [
      "Shipped a NestJS/GraphQL gateway handling 2.5M req/day.",
      "Launched a component library in Angular + Storybook to align three product lines.",
    ],
  },
  {
    role: "Full-Stack Engineer",
    company: "Indie + agency work",
    period: "2016 - 2020",
    summary:
      "Advised startups on rapid experiments, ran code audits, and built MVPs end-to-end--from infrastructure to UI polish.",
    highlights: [
      "Delivered 15+ client projects across fintech, education, and health.",
      "Helped close seed round by prototyping a metrics dashboard in 3 weeks.",
    ],
  },
];

export function Experience() {
  return (
    <Section
      eyebrow="Experience"
      title="Outcomes with product and people in mind"
      description="Beyond shipping features, I invest in processes, docs, and rituals that let teams move with confidence."
    >
      <div className="space-y-6">
        {timeline.map((item, index) => (
          <Card
            key={item.company}
            className="border-white/10 bg-gradient-to-br from-white/5 via-transparent to-transparent"
          >
            <CardHeader>
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                <div>
                  <Badge className="text-[10px]" variant="outline">
                    {item.period}
                  </Badge>
                  <CardTitle className="mt-3 text-xl">{item.role}</CardTitle>
                  <CardDescription className="text-slate-200">
                    {item.company}
                  </CardDescription>
                </div>
                <div className="hidden text-3xl font-semibold text-white/70 md:block">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-300">{item.summary}</p>
              <Separator className="my-4 opacity-40" />
              <ul className="space-y-2 text-sm text-slate-300">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-400" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
