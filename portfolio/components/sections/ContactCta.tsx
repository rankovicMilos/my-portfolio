import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function ContactCta() {
  return (
    <Section
      eyebrow="Partner with me"
      title="Ready when you are"
      description="I partner with designers and digital marketing agencies to bring your ideas to life. Let's discuss your project and see how we can collaborate."
    >
      <Card className="bg-gradient-to-r from-indigo-600/20 via-transparent to-cyan-500/20">
        <CardContent className="flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <Badge className="text-[10px]" variant="glow">
              Next engagementg
            </Badge>
            <p className="mt-2 text-lg font-semibold text-white">
              Contact me to get started
            </p>
            <p className="mt-2 text-sm text-slate-200">
              Tell me about your idea and we will make it happen.
            </p>
          </div>
          <div className="flex flex-col gap-3 md:flex-row">
            <Button asChild size="lg">
              <Link href="/contact">Share project details</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-black">
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
