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
import { sanityFetch } from "@/sanity/lib/client";
import { EXPERIENCE_QUERY } from "@/sanity/lib/queries";

// Helper function to format date range
function formatPeriod(
  startDate: string | null,
  endDate: string | null,
  isCurrent: boolean | null
): string {
  const formatYear = (date: string | null) =>
    date ? new Date(date).getFullYear().toString() : "";

  const start = formatYear(startDate);
  const end = isCurrent ? "Present" : formatYear(endDate);

  return `${start} - ${end}`;
}

export async function Experience() {
  const experienceData = await sanityFetch({ query: EXPERIENCE_QUERY });

  return (
    <Section eyebrow="Experience" title="" description="">
      <div className="space-y-6">
        {experienceData
          .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
          .map((item, index) => (
            <Card
              key={item._id}
              className="border-white/10 bg-zinc-900/50 from-white/15 via-transparent to-transparent"
            >
              <CardHeader>
                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                  <div>
                    <Badge className="text-[10px]" variant="outline">
                      {formatPeriod(
                        item.startDate,
                        item.endDate,
                        item.isCurrent
                      )}
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
                {/* Summary is a block array, render first block's text */}
                {item.summary && item.summary.length > 0 && (
                  <p className="text-sm text-slate-300">
                    {item.summary
                      .map((block: any) =>
                        block.children?.map((child: any) => child.text).join("")
                      )
                      .join(" ")}
                  </p>
                )}
                {item.highlights && item.highlights.length > 0 && (
                  <>
                    <Separator className="my-4 opacity-40" />
                    <ul className="space-y-2 text-sm text-slate-300">
                      {item.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-400" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </CardContent>
            </Card>
          ))}
      </div>
    </Section>
  );
}
