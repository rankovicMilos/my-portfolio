import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function ContactCta() {
  return (
    <Section
      eyebrow="Next engagement"
      title="Ready when you are"
      description="I partner with product and engineering leaders to unblock roadmaps, define architecture, and mentor teams. Tell me about your initiative and we can shape a roadmap in days, not weeks."
    >
      <Card className="bg-gradient-to-r from-indigo-600/20 via-transparent to-cyan-500/20">
        <CardContent className="flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <Badge className="text-[10px]" variant="glow">
              Currently booking
            </Badge>
            <p className="mt-2 text-lg font-semibold text-white">
              Q1 2026 - Fractional leadership, staff+ engineering, workshops
            </p>
            <p className="mt-2 text-sm text-slate-200">
              Tell me about your roadmap and we will align on scope within days.
            </p>
          </div>
          <div className="flex flex-col gap-3 md:flex-row">
            <Button asChild size="lg">
              <Link href="/contact">Share project details</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="mailto:rankovic.milos0804@gmail.com">
                rankovic.milos0804@gmail.com
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </Section>
  );
}
