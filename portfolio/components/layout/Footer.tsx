import Link from "next/link";
import { Twitter, Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-zinc-950/50 border-t border-white/5 px-8 py-6 relative z-10">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-zinc-600 font-medium">
          © {new Date().getFullYear()} Portfolio. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="text-zinc-500 hover:text-white transition-colors"
          >
            <Twitter width={16} strokeWidth={1.5} />
          </Link>
          <Link
            href="https://github.com/rankovicMilos"
            className="text-zinc-500 hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github width={16} strokeWidth={1.5} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/milos-rankovic84/"
            className="text-zinc-500 hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin width={16} strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
