import { Section } from "@/components/ui/Section";
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

  return `${start} – ${end}`;
}

export async function Experience() {
  const experienceData = await sanityFetch({ query: EXPERIENCE_QUERY });

  if (experienceData.length === 0) return null;

  return (
    <Section title="Experience">
      <ol className="border-b">
        {experienceData.map((item) => (
          <li
            key={item._id}
            className="grid-12 gap-y-4 border-t py-8 first:border-t-0 first:pt-0 md:py-10"
          >
            <p className="t-meta col-span-4 pt-1.5 text-mute md:col-span-3">
              {formatPeriod(item.startDate, item.endDate, item.isCurrent)}
            </p>
            <div className="col-span-4 md:col-span-3">
              <h3 className="text-xl tracking-tight">{item.role}</h3>
              <p className="text-mute">{item.company}</p>
            </div>
            <div className="col-span-4 max-w-[68ch] space-y-4 text-mute md:col-span-6">
              {item.summary && <p className="text-ink">{item.summary}</p>}
              {item.highlights && item.highlights.length > 0 && (
                <ul className="list-disc space-y-1.5 pl-5 marker:text-mute">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
