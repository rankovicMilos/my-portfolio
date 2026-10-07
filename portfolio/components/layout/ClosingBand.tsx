"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { RevealText } from "@/components/motion/RevealText";

export function ClosingBand({ email }: { email: string }) {
  const pathname = usePathname();

  // The contact page is already the destination
  if (pathname.startsWith("/contact")) {
    return <div className="shell"><div className="border-t" /></div>;
  }

  return (
    <section className="bg-cobalt text-on-cobalt selection:bg-on-cobalt selection:text-cobalt">
      <div className="shell flex min-h-[24rem] flex-col md:min-h-[60svh] justify-between gap-16 py-10 md:py-14">
        <RevealText
          as="h2"
          className="max-w-[14ch] text-[clamp(2.75rem,1.4rem+6vw,6rem)] leading-[0.96] tracking-[-0.035em]"
        >
          Have a project in mind?
        </RevealText>

        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <a
            href={`mailto:${email}`}
            className="link t-lead w-fit break-all text-on-cobalt hover:text-on-cobalt-mute"
          >
            {email}
          </a>
          <Button asChild variant="inverse">
            <Link href="/contact">Start a project</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
