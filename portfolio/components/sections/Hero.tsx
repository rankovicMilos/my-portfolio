import Image from "next/image";
import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/client";
import { SITE_SETTINGS_QUERY } from "@/sanity/lib/queries";
import { Button } from "@/components/ui/button";
import { RevealText } from "@/components/motion/RevealText";
import { getProjects } from "@/lib/projects";
import { cn } from "@/lib/utils";
import { HeroMedia, type HeroSlide } from "./HeroMedia";

export async function Hero() {
  const [settings, projects] = await Promise.all([
    sanityFetch({ query: SITE_SETTINGS_QUERY }),
    getProjects(),
  ]);

  const slides: HeroSlide[] = projects
    .filter((project) => project.preview)
    .slice(0, 4)
    .map((project, position) => ({
      key: project._id,
      title: project.title ?? "Project",
      href: `/projects/${project.slug}`,
      image: (
        <Image
          src={project.preview!.url}
          alt={`${project.title} live site preview`}
          width={project.preview!.width}
          height={project.preview!.height}
          sizes="(min-width: 48rem) 70vw, 90vw"
          priority={position === 0}
          className="h-auto w-full max-w-[68rem]"
        />
      ),
    }));

  const videoUrl = settings?.heroVideoUrl;
  const hasMedia = Boolean(videoUrl) || slides.length > 0;

  return (
    <section
      className={cn(
        "flex flex-col justify-end pb-8 md:pb-10",
        // With a video the header floats over it, so the section owns the full screen
        videoUrl
          ? "min-h-svh"
          : "min-h-[calc(100svh-5rem)] md:min-h-[calc(100svh-6rem)]",
      )}
    >
      {hasMedia && <HeroMedia videoUrl={videoUrl} slides={slides} />}

      <div className="shell grid-12 items-end gap-y-8 pt-6 md:pt-8">
        <RevealText as="h1" className="t-display col-span-4 md:col-span-8">
          I build websites and custom software for your business,{" "}
          <span className="text-mute">and in free time, I go on track.</span>
        </RevealText>

        <div className="col-span-4 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between md:col-span-4 md:flex-col md:items-end lg:flex-row lg:items-end">
          <p className="t-meta max-w-[30ch] text-mute">
            You bring the idea, I handle the technical side. Available for new
            projects.
          </p>
          <Button asChild>
            <Link href="/contact">Start a project</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
