// src/components/ui/Section.tsx
import { ReactNode } from "react";
import { Container } from "./Container";
import { Badge } from "./badge";
import { Separator } from "./separator";
import type { Image as SanityImage } from "sanity";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
interface SectionProps {
  id?: string;
  title?: string;
  description?: string;
  eyebrow?: string;
  children: ReactNode;
  profileImage?: SanityImage | undefined;
}

export function Section({
  id,
  title,
  description,
  eyebrow,
  children,
  profileImage,
}: SectionProps) {
  return (
    <section id={id} className="py-12 md:py-16">
      <Container>
        {(title || eyebrow) && (
          <header className="mb-8 space-y-3 relative">
            {eyebrow && (
              <Badge className="text-[11px]" variant="glow">
                {eyebrow}
              </Badge>
            )}
            {title && (
              <h2 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="max-w-2xl text-sm text-slate-300 md:text-base">
                {description}
              </p>
            )}
            {profileImage && (
              <div className="hidden md:block absolute -top-4 right-0 w-48 h-48 overflow-hidden rounded-full border-4 border-white/10">
                <Image
                  src={urlFor(profileImage).url()}
                  alt={title || "Profile"}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <Separator className="w-14 bg-indigo-500/30" />
          </header>
        )}
        {children}
      </Container>
    </section>
  );
}
