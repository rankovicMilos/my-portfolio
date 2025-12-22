"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

const navItems = [
  { label: "Overview", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
];

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className="flex items-center justify-between px-8 pt-8 pb-4 relative z-20">
      <div className="flex items-center gap-2">
        <div className="bg-zinc-900 border border-white/10 w-10 h-10 rounded-full flex items-center justify-center shadow-inner">
          <span className="font-nunito font-semibold text-white tracking-tighter text-sm">
            mr.
          </span>
        </div>
      </div>

      <nav className="hidden sm:flex gap-1 bg-zinc-900/50 backdrop-blur-md p-1 rounded-full border border-white/5">
        {navItems.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "px-4 py-1.5 text-xs rounded-full font-medium transition-colors",
                isActive
                  ? "text-zinc-100 bg-white/10 border border-white/5"
                  : "text-zinc-500 hover:text-zinc-300 border border-transparent"
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="sm:hidden text-zinc-400 hover:text-white transition-colors p-2"
        aria-label="Toggle menu"
      >
        <Menu width={20} strokeWidth={1.5} />
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full right-8 mt-2 w-48 bg-zinc-900/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden py-1 flex flex-col sm:hidden z-50">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "px-4 py-3 text-sm font-medium transition-colors hover:bg-white/5",
                  isActive ? "text-white bg-white/5" : "text-zinc-400"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
