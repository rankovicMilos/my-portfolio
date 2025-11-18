import Link from "next/link";
import { Section } from "@/components/ui/Section";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const channels = [
  {
    label: "Email",
    value: "rankovic.milos0804@gmail.com",
    href: "mailto:rankovic.milos0804@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "https://www.linkedin.com/in/milos-rankovic84/",
    href: "https://www.linkedin.com/in/milos-rankovic84/",
  },
  {
    label: "GitHub",
    value: "github.com/rankovicMilos",
    href: "https://github.com/rankovicMilos",
  },
];

export default function ContactPage() {
  return (
    <Section
      eyebrow="Contact"
      title="Let's build something remarkable"
      description="Tell me about your team, product, or the blockers in your way. I typically respond within 48 hours with next steps or a few clarifying questions."
    >
      <div className="grid gap-8 md:grid-cols-[1.4fr_0.6fr]">
        <Card className="border-white/10 bg-white/5">
          <CardContent className="space-y-6 p-6">
            <CardDescription className="text-base text-slate-200">
              Share as much context as you can: goals, timeline, stack, decision
              makers, and any success metrics you care about. I bring questions,
              models, and roadmaps so we can move fast once we align.
            </CardDescription>

            <div className="space-y-4">
              {channels.map((channel) => (
                <div
                  key={channel.label}
                  className="flex flex-col border-b border-white/10 pb-4 last:border-b-0 last:pb-0"
                >
                  <Badge className="w-fit text-[10px]" variant="outline">
                    {channel.label}
                  </Badge>
                  <Link
                    href={channel.href}
                    className="mt-2 text-lg font-semibold text-white hover:text-indigo-200"
                    target={
                      channel.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      channel.href.startsWith("http")
                        ? "noreferrer noopener"
                        : undefined
                    }
                  >
                    {channel.value}
                  </Link>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <Card className="border-white/10 bg-slate-950/60">
            <CardHeader>
              <Badge className="w-fit text-[10px]" variant="glow">
                Availability
              </Badge>
              <CardTitle className="text-lg">Q1 2026 - Remote </CardTitle>
              <CardDescription className="text-slate-200 mb-4">
                Fractional leadership, staff+ engagements, workshops.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="border-white/10 bg-white/5 text-sm text-slate-200">
            <CardHeader>
              <CardTitle className="text-base text-white">
                Discovery call
              </CardTitle>
              <CardDescription className="text-slate-200 mb-4">
                30 minutes to understand your goals, stakeholders, and
                constraints. We leave with next steps and a timeline.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="border-white/10 bg-white/5 text-sm text-slate-200 ">
            <CardHeader>
              <CardTitle className="text-base text-white">
                Response time
              </CardTitle>
              <CardDescription className="text-slate-200 mb-4">
                Typically within 2 business days.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </Section>
  );
}
