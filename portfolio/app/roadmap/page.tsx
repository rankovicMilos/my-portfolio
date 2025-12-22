import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const roadmap = [
  {
    id: "languages",
    timeline: "Spring 2026",
    tag: "New languages",
    title: "Polyglot systems thinking",
    color: "blue",
    description:
      "Extend my 4 years of full-stack delivery with mobile development to provide more versatile solutions.",
    missions: [
      "Build mobile versions for my .NET + Next.js projects.",
      "Explore cross-platform frameworks like Flutter and React Native.",
      "Understand performance trade-offs and UX patterns in mobile contexts.",
    ],
    resources: [
      { label: "Flutter", href: "https://flutter.dev/" },
      {
        label: "React Native",
        href: "https://reactnative.dev/",
      },
    ],
  },
  {
    id: "ai",
    timeline: "Summer 2026",
    tag: "Applied AI",
    title: "Deep dive into AI and LLMs",
    color: "green",
    description:
      "Design copilots that accelerate specs, QA, and docs while respecting enterprise governance across .NET + Next.js estates.",
    missions: [
      "Model delivery rituals as prompt chains with evaluation harnesses for safety.",
      "Integrate LLMs into full-stack apps using LangGraph and Semantic Kernel.",
      "Learn to fine-tune and deploy custom models that respect data privacy.",
      "Learn how to create autonomous agents using frameworks like LangGraph and N8n AI.",
    ],
    resources: [
      { label: "LangGraph", href: "https://langchain.com/langgraph" },
      {
        label: "Semantic Kernel",
        href: "https://github.com/microsoft/semantic-kernel",
      },
      {
        label: "OpenAI Best Practices",
        href: "https://platform.openai.com/docs/guides/gpt-best-practices",
      },
      {
        label: "ClaudeCode Docs",
        href: "https://docs.anthropic.com/claude-code/",
      },
      {
        label: "N8n AI Docs",
        href: "https://docs.n8n.io/integrations/builtin/app-nodes/n8n-ai/",
      },
    ],
  },
  {
    id: "design",
    timeline: "Winter 2026",
    tag: "Design fluency",
    title: "Learn best practices in UX/UI to enhance frontend delivery",
    color: "purple",
    description:
      "Reconnect with my product-design roots to ship Figma/Framer systems that turn complex data into confident decisions.",
    missions: [
      "Study design systems and accessibility best practices.",
      "Learn Figma and Framer to prototype interactive UIs.",
      "Collaborate closely with designers to understand user-centric design.",
    ],
    resources: [
      { label: "Figma Resources", href: "https://www.figma.com/resources/" },
      { label: "Framer Motion Docs", href: "https://www.framer.com/motion/" },
    ],
  },
  {
    id: "design2",
    timeline: "Winter 2026",
    tag: "Design fluency",
    title: "Learn best practices in UX/UI to enhance frontend delivery",
    color: "orange",
    description:
      "Reconnect with my product-design roots to ship Figma/Framer systems that turn complex data into confident decisions.",
    missions: [
      "Study design systems and accessibility best practices.",
      "Learn Figma and Framer to prototype interactive UIs.",
      "Collaborate closely with designers to understand user-centric design.",
    ],
    resources: [
      { label: "Figma Resources", href: "https://www.figma.com/resources/" },
      { label: "Framer Motion Docs", href: "https://www.framer.com/motion/" },
    ],
  },
];

const getBackgroundClass = (colorClass: string) => {
  switch (colorClass) {
    case "blue":
      return "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-500/30 border-blue-200 dark:border-blue-800";
    case "green":
      return "bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/30 dark:to-emerald-500/30 border-green-200 dark:border-green-700";
    case "purple":
      return "bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-500/30 border-purple-200 dark:border-purple-800";
    case "orange":
      return "bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-orange-500/30 border-orange-200 dark:border-orange-800";
    case "red":
      return "bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/30 dark:to-red-500/30 border-red-200 dark:border-red-800";
    case "yellow":
      return "bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/30 dark:to-yellow-500/30 border-yellow-200 dark:border-yellow-800";
    case "emerald":
      return "bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/30 dark:to-emerald-500/30 border-emerald-200 dark:border-emerald-800";
    default:
      return "bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900/30 dark:to-slate-500/30 border-slate-200 dark:border-slate-800";
  }
};

export default function RoadmapPage() {
  return (
    <Section
      eyebrow="Roadmap"
      title="Learning compass"
      description="A single thread of future bets—what I’m learning next to compound my 4 years of full-stack experience across .NET, NestJS, and Next.js into even more leverage."
    >
      <div className="relative pl-8 sm:pl-12">
        <div className="absolute left-3 top-0 bottom-0 w-px bg-white/15 sm:left-4" />
        <div className="space-y-8">
          {roadmap.map((stop, index) => (
            <div key={stop.id} className="relative pl-4 sm:pl-8">
              <span className="absolute left-0 top-10 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-indigo-400 bg-slate-950" />
              <Card className={ getBackgroundClass(stop.color)}>
                <div className="absolute -left-8 top-7 flex min-w-[2rem] items-center justify-center rounded-full border border-white/10 bg-slate-900/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-200 sm:hidden">
                  {index + 1}
                </div>
                <CardHeader className="space-y-3">
                  <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] text-indigo-200">
                    <Badge className="text-[10px]" variant="outline">
                      {stop.timeline}
                    </Badge>
                    <Badge className="text-[10px]" variant="glow">
                      {stop.tag}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{stop.title}</CardTitle>
                  <CardDescription>{stop.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div>
                    <p className="text-xs uppercase tracking-[0.4em] text-indigo-200">
                      Missions
                    </p>
                    <ul className="mt-3 space-y-2 text-sm text-slate-200">
                      {stop.missions.map((mission) => (
                        <li key={mission} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-400" />
                          {mission}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.4em] text-indigo-200">
                      Resources
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {stop.resources.map((resource) => (
                        <Button
                          key={resource.label}
                          asChild
                          variant="ghost"
                          size="sm"
                          className="text-[11px] tracking-[0.3em]"
                        >
                          <a
                            href={resource.href}
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            {resource.label}
                          </a>
                        </Button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
