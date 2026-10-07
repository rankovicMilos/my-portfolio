"use client";

import Link from "next/link";
import {
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { Parallax } from "@/components/motion/Parallax";
import { MOTION_OK } from "@/lib/gsap";
import { formatIndex } from "@/lib/projects";
import { cn } from "@/lib/utils";

export type HeroSlide = {
  key: string;
  title: string;
  href: string;
  image: ReactNode;
};

type HeroMediaProps = {
  videoUrl?: string | null;
  slides: HeroSlide[];
};

const SLIDE_MS = 5000;

function subscribeToMotionPreference(onChange: () => void) {
  const query = window.matchMedia(MOTION_OK);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

export function HeroMedia({ videoUrl, slides }: HeroMediaProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(0);
  // The outgoing slide stays underneath while the next one wipes over it
  const [previous, setPrevious] = useState<number | null>(null);
  // Motion starts only for visitors who have not asked for less of it,
  // until they press the control themselves
  const motionOk = useSyncExternalStore(
    subscribeToMotionPreference,
    () => window.matchMedia(MOTION_OK).matches,
    () => false,
  );
  const [choice, setChoice] = useState<boolean | null>(null);
  const playing = choice ?? motionOk;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (playing) video.play().catch(() => setChoice(false));
    else video.pause();
  }, [playing]);

  useEffect(() => {
    if (videoUrl || !playing || slides.length < 2) return;
    const id = setInterval(() => {
      setPrevious(active);
      setActive((active + 1) % slides.length);
    }, SLIDE_MS);
    return () => clearInterval(id);
  }, [videoUrl, playing, slides.length, active]);

  const current = slides[active];
  const canToggle = Boolean(videoUrl) || slides.length > 1;

  return (
    // A video runs edge to edge under the header; project previews keep the page margins
    <div className={cn("flex min-h-0 flex-1 flex-col", !videoUrl && "shell")}>
      <Parallax
        mode="leave"
        amount={8}
        fill
        className="relative min-h-[45svh] flex-1 bg-raised md:min-h-[18rem]"
      >
        {videoUrl ? (
          <>
            <video
              ref={videoRef}
              src={videoUrl}
              muted
              loop
              playsInline
              preload="metadata"
              className="absolute inset-0 h-full w-full object-cover"
            />
            {/* Tint keeps the header legible over any footage */}
            <div className="absolute inset-0 bg-ground/55" />
          </>
        ) : (
          slides.map((slide, position) => (
            <div
              key={slide.key}
              aria-hidden={position !== active}
              className={cn(
                "absolute inset-0 flex items-center justify-center bg-raised px-5 md:items-start md:px-[9%] md:pt-[4.5%]",
                position === active && "z-[2]",
                position === active && previous !== null && "slide-wipe",
                position === previous && "z-[1]",
                position !== active && position !== previous && "invisible",
              )}
            >
              {slide.image}
            </div>
          ))
        )}
      </Parallax>

      <div
        className={cn(
          "t-meta flex min-h-11 items-center justify-between gap-6 text-mute",
          videoUrl && "shell",
        )}
      >
        {videoUrl || !current ? (
          <span />
        ) : (
          <Link
            href={current.href}
            className="truncate py-3 text-ink transition-colors duration-300 hover:text-cobalt-ink"
          >
            {current.title}
          </Link>
        )}

        <div className="flex shrink-0 items-center gap-5">
          {!videoUrl && slides.length > 1 && (
            <span aria-live="off">
              {formatIndex(active)} / {formatIndex(slides.length - 1)}
            </span>
          )}
          {canToggle && (
            <button
              type="button"
              onClick={() => setChoice(!playing)}
              className="t-meta -mr-2 px-2 py-3 transition-colors duration-300 hover:text-ink"
            >
              {playing ? "Pause" : "Play"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
