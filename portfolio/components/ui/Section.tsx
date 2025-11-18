// src/components/ui/Section.tsx
import { ReactNode } from "react";
import { Container } from "./Container";
import { Badge } from "./badge";
import { Separator } from "./separator";

interface SectionProps {
  id?: string;
  title?: string;
  description?: string;
  eyebrow?: string;
  children: ReactNode;
}

export function Section({
  id,
  title,
  description,
  eyebrow,
  children,
}: SectionProps) {
  return (
    <section id={id} className="py-12 md:py-16">
      <Container>
        {(title || eyebrow) && (
          <header className="mb-8 space-y-3">
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
            <Separator className="w-14 bg-indigo-500/30" />
          </header>
        )}
        {children}
      </Container>
    </section>
  );
}
