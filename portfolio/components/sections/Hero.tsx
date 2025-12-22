import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="space-y-4">
      <div className="flex items-center gap-2 mb-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="text-xs font-medium text-emerald-500/80 tracking-wide uppercase">
          Open to work
        </span>
      </div>

      <h1 className="font-nunito font-semibold text-4xl sm:text-5xl tracking-tight text-white leading-[1.1]">
        Crafting <span className="text-zinc-500">minimal</span>
        <br />
        digital experiences.
      </h1>
      <p className="text-zinc-400 text-sm sm:text-base max-w-md leading-relaxed">
        Software engineer focused on building accessible, pixel-perfect user
        interfaces. Blending technical depth with visual intuition.
      </p>

      <div className="flex gap-4 pt-2">
        <Link
          href="/projects"
          className="inline-flex items-center justify-center gap-2 bg-white text-black px-5 py-2.5 rounded-full text-xs font-medium hover:bg-zinc-200 transition-colors tracking-tight"
        >
          <span>View Projects</span>
          <ArrowRight width={14} strokeWidth={1.5} />
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 bg-zinc-900 border border-white/10 text-zinc-300 px-5 py-2.5 rounded-full text-xs font-medium hover:bg-zinc-800 transition-colors tracking-tight"
        >
          <Mail width={14} strokeWidth={1.5} />
          <span>Contact</span>
        </Link>
      </div>
    </section>
  );
}
