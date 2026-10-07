"use client";

import { useRef, type ReactNode } from "react";
import { gsap, useGSAP, MOTION_OK_DESKTOP } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type ParallaxProps = {
  className?: string;
  /** How far the content drifts, in percent of its own height. */
  amount?: number;
  /** "through" drifts while crossing the viewport, "leave" only while scrolling away from the top. */
  mode?: "through" | "leave";
  /** Stretch the content over a parent that sets its own height. */
  fill?: boolean;
  children: ReactNode;
};

// Clips its content and lets it drift at a slower rate than the page.
export function Parallax({
  className,
  amount = 6,
  mode = "through",
  fill = false,
  children,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      const inner = el?.firstElementChild;
      if (!el || !inner) return;

      const mm = gsap.matchMedia();
      mm.add(MOTION_OK_DESKTOP, () => {
        if (mode === "leave") {
          gsap.fromTo(
            inner,
            { yPercent: 0, scale: 1 },
            {
              yPercent: amount,
              scale: 1 + amount / 100,
              ease: "none",
              scrollTrigger: {
                trigger: el,
                start: "top top",
                end: "bottom top",
                scrub: true,
              },
            },
          );
          return;
        }

        gsap.fromTo(
          inner,
          { yPercent: -amount, scale: 1 + (amount * 2) / 100 },
          {
            yPercent: amount,
            scale: 1 + (amount * 2) / 100,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      });
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <div className={cn("will-change-transform", fill && "absolute inset-0")}>
        {children}
      </div>
    </div>
  );
}
