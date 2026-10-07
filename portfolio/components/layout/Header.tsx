"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navItems } from "@/lib/site";
import { Button } from "@/components/ui/button";

export function Header({ overHeroVideo = false }: { overHeroVideo?: boolean }) {
  const pathname = usePathname();
  const menuRef = useRef<HTMLDialogElement>(null);

  // Close menu when route changes
  useEffect(() => {
    menuRef.current?.close();
  }, [pathname]);

  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <header
      className={cn(
        "shell z-20 flex h-20 items-center justify-between md:h-24",
        // On the home page the header sits transparently on top of the hero video
        overHeroVideo && pathname === "/"
          ? "absolute inset-x-0 top-0"
          : "relative",
      )}
    >
      <Link href="/" className="text-[0.9375rem] font-medium tracking-tight">
        Milos Rankovic
      </Link>

      <nav aria-label="Main" className="hidden items-center gap-10 sm:flex">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive(item.href) ? "page" : undefined}
            className={cn(
              "text-[0.9375rem] tracking-tight transition-colors duration-300",
              isActive(item.href) ? "text-ink" : "text-mute hover:text-ink",
            )}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <button
        type="button"
        onClick={() => menuRef.current?.showModal()}
        className="t-meta -mr-3 px-3 py-3 sm:hidden"
        aria-haspopup="dialog"
      >
        Menu
      </button>

      <dialog
        ref={menuRef}
        aria-label="Menu"
        data-lenis-prevent
        className="m-0 h-dvh max-h-none border-0 p-0 w-screen max-w-none bg-ground backdrop:bg-ground open:flex open:flex-col"
      >
        <div className="shell flex h-20 shrink-0 items-center justify-between">
          <Link href="/" className="text-[0.9375rem] font-medium tracking-tight">
            Milos Rankovic
          </Link>
          <button
            type="button"
            onClick={() => menuRef.current?.close()}
            className="t-meta -mr-3 px-3 py-3"
          >
            Close
          </button>
        </div>
        <nav aria-label="Main" className="shell flex flex-1 flex-col justify-end pb-10">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              onClick={() => menuRef.current?.close()}
              className={cn(
                "border-t py-5 text-[2.5rem] leading-none tracking-[-0.03em]",
                isActive(item.href) ? "text-ink" : "text-mute",
              )}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild className="mt-8 w-full">
            <Link href="/contact" onClick={() => menuRef.current?.close()}>
              Start a project
            </Link>
          </Button>
        </nav>
      </dialog>
    </header>
  );
}
