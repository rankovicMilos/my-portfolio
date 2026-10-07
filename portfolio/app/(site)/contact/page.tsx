import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { ContactForm } from "@/components/sections/ContactForm";
import { sanityFetch } from "@/sanity/lib/client";
import { CONTACT_INFO_QUERY } from "@/sanity/lib/queries";
import { contactFallback } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with Milos Rankovic. Open to freelance and contract work, remote friendly.",
  alternates: { canonical: "/contact" },
};

const notes = [
  { label: "Response time", value: "I typically respond within 24-48 hours" },
  { label: "Availability", value: "Open to freelance and contract work" },
  { label: "Remote work", value: "Remote friendly" },
];

export default async function ContactPage() {
  const contact = await sanityFetch({ query: CONTACT_INFO_QUERY });

  const email = contact?.email || contactFallback.email;
  const profiles = [
    { label: "LinkedIn", href: contact?.linkedin || contactFallback.linkedin },
    { label: "GitHub", href: contact?.github || contactFallback.github },
  ];

  return (
    <>
      <PageHeader title="Tell me about your project." />

      <Container className="grid-12 gap-y-16">
        <div className="col-span-4 md:col-span-7">
          <ContactForm email={email} />
        </div>

        <aside className="col-span-4 md:col-span-4 md:col-start-9">
          <dl>
            <div className="border-t py-4">
              <dt className="t-meta text-mute">Email</dt>
              <dd className="mt-2">
                <a href={`mailto:${email}`} className="link break-all">
                  {email}
                </a>
              </dd>
            </div>
            <div className="border-t py-4">
              <dt className="t-meta text-mute">Profiles</dt>
              <dd className="mt-2 flex gap-8">
                {profiles.map((profile) => (
                  <a
                    key={profile.label}
                    href={profile.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    {profile.label}
                  </a>
                ))}
              </dd>
            </div>
            {notes.map((note) => (
              <div key={note.label} className="border-t py-4">
                <dt className="t-meta text-mute">{note.label}</dt>
                <dd className="mt-2">{note.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </Container>
    </>
  );
}
