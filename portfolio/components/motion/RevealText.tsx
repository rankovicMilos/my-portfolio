"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { gsap, SplitText, useGSAP, MOTION_OK } from "@/lib/gsap";

type RevealTextProps = {
  as?: ElementType;
  className?: string;
  delay?: number;
  children: ReactNode;
};

// Splits its text into lines and slides each one up from behind a mask,
// once, when it scrolls into view.
export function RevealText({
  as: Tag = "p",
  className,
  delay = 0,
  children,
}: RevealTextProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        let played = false;

        const split = SplitText.create(el, {
          type: "lines",
          mask: "lines",
          autoSplit: true,
          onSplit(self) {
            el.setAttribute("data-revealed", "");
            // A re-split after resize or font load must not replay the entrance
            if (played) return;

            return gsap.from(self.lines, {
              yPercent: 105,
              duration: 1,
              ease: "expo.out",
              stagger: 0.09,
              delay,
              scrollTrigger: { trigger: el, start: "top 88%", once: true },
              onComplete: () => {
                played = true;
              },
            });
          },
        });

        return () => split.revert();
      });
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} data-reveal className={className}>
      {children}
    </Tag>
  );
}
