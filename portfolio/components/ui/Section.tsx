import { ReactNode } from "react";
import { Container } from "./Container";

interface SectionProps {
  id?: string;
  title: string;
  /** Sits opposite the title, e.g. a link to the full list. */
  aside?: ReactNode;
  children: ReactNode;
}

export function Section({ id, title, aside, children }: SectionProps) {
  return (
    <section id={id} className="pt-[var(--section)]">
      <Container>
        <header className="mb-8 flex items-baseline justify-between gap-6 border-t pt-4 md:mb-12">
          <h2 className="t-meta text-mute">{title}</h2>
          {aside}
        </header>
        {children}
      </Container>
    </section>
  );
}
