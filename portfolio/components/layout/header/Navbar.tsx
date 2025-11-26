"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-5xl items-center justify-between gap-6 px-4 py-4 text-sm">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold tracking-tight text-white"
        >
          <span className="text-lg text-indigo-400">&lt;/&gt;</span>
          <span>Milos Rankovic</span>
        </Link>

        <div className="hidden items-center gap-5 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm transition-colors",
                  active
                    ? "text-white"
                    : "text-slate-300 hover:text-white hover:drop-shadow"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <Button
          asChild
          variant="outline"
          className="tracking-[0.3em] uppercase text-[11px] text-slate-800 hover:drop-shadow"
        >
          <Link href="/contact">Let&apos;s build</Link>
        </Button>
      </nav>
    </header>
  );
}
