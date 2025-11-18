// src/components/sections/Hero.tsx
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const stats = [
  { label: "Projects", value: "10+" },
  { label: "Clients", value: "13" },
  { label: "Lines of API contract", value: "2.1M" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.15),_transparent_55%)]" />
      <Container>
        <div className="relative isolate grid gap-10 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="space-y-6">
            <Badge className="text-[11px]" variant="glow">
              Full-stack engineer
            </Badge>
            <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
              I design solutions and human experiences for clients across
              Europe.
            </h1>
            <p className="text-base text-slate-300 md:text-lg">
              I build software using .NET or NestJS and Next.js for frontend.
              From complex solutions to presentational sites, I help clients
              turn ideas into solid, practical products. I enjoy starting new
              projects, scaling products as they grow, and helping teams improve
              along the way.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <Button asChild size="lg">
                <Link href="/projects">View recent work</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/contact">Book a call</Link>
              </Button>
            </div>
            <div className="flex flex-wrap gap-3">
              {[".NET", "NestJS", "Next.js", "Azure"].map((skill) => (
                <Badge key={skill} variant="outline">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <Card className="border-white/10 bg-gradient-to-b from-white/10 to-transparent">
            <CardHeader className="space-y-3">
              <Badge className="w-fit text-[10px]" variant="glow">
                Currently working in
              </Badge>
              <CardTitle>VEGA IT</CardTitle>
              <CardDescription>
                I work as a full-stack developer modernizing legacy systems,
                improving developer workflows, and helping deliver clear,
                measurable results
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-2">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="text-2xl font-semibold text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs uppercase tracking-wide text-slate-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}
