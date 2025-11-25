import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const highlights = [
  {
    title: "Platform architecture",
    description:
      "Event-driven APIs, background workers, and observability layers for regulated environments.",
    bullets: [".NET 8", "NestJS", "Azure", "Umbraco CMS", "Sanity", "Webflow"],
  },
  {
    title: "Product experience",
    description:
      "Collaborative UX and delivery with design, data, and go-to-market partners.",
    bullets: ["Next.js", "React", "Angular", "Tailwind"],
  },
];

export function Highlights() {
  return (
    <Section
      eyebrow="Focus areas"
      title="Engineering leadership that scales with you"
      description="I specialize in bridging strategy and execution--tight feedback loops with stakeholders, thoughtful architecture, and a delivery cadence teams can rely on."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {highlights.map((highlight) => (
          <Card
            key={highlight.title}
            className="relative overflow-hidden border-white/10 bg-white/5"
          >
            <div className="pointer-events-none absolute -top-4 right-4 h-12 w-12 rounded-full bg-indigo-500/30 blur-2xl" />
            <CardHeader className="relative space-y-2">
              <CardTitle className="text-lg">{highlight.title}</CardTitle>
              <CardDescription>{highlight.description}</CardDescription>
            </CardHeader>
            <CardContent className="relative flex flex-wrap gap-2 text-xs uppercase tracking-[0.3em] text-slate-400">
              {highlight.bullets.map((bullet) => (
                <Badge key={bullet} variant="outline">
                  {bullet}
                </Badge>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
