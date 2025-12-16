import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const socials = [
  { label: "GitHub", href: "https://github.com/rankovicMilos" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/milos-rankovic84/" },
  { label: "Email", href: "mailto:rankovic.milos0804@gmail.com" },
];

export function Footer() {
  return (
    <footer className="bg-slate-950/70">
      <Separator className="bg-white/10" />
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <div>&copy; {new Date().getFullYear()} Milos Rankovic</div>
        <div className="flex gap-4 text-xs uppercase tracking-widest">
          {socials.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              className="text-slate-300 transition hover:text-white"
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={
                social.href.startsWith("http")
                  ? "noreferrer noopener"
                  : undefined
              }
            >
              {social.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
