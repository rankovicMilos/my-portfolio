import { sanityFetch } from "@/sanity/lib/client";
import { CONTACT_INFO_QUERY } from "@/sanity/lib/queries";
import { contactFallback } from "@/lib/site";
import { ClosingBand } from "./ClosingBand";

export async function Footer() {
  const contact = await sanityFetch({ query: CONTACT_INFO_QUERY });

  const email = contact?.email || contactFallback.email;
  const links = [
    { label: "GitHub", href: contact?.github || contactFallback.github },
    { label: "LinkedIn", href: contact?.linkedin || contactFallback.linkedin },
  ];

  return (
    <footer className="mt-[var(--section)]">
      <ClosingBand email={email} />
      <div className="shell flex flex-col justify-between gap-4 py-6 text-sm text-mute sm:flex-row sm:items-center">
        <p>© {new Date().getFullYear()} Milos Rankovic</p>
        <ul className="flex gap-8">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
