import { ReactNode } from "react";
import { Container } from "./Container";

export function PageHeader({
  title,
  support,
  children,
}: {
  title: string;
  /** Continues the title in a quieter tone. */
  support?: string;
  children?: ReactNode;
}) {
  return (
    <Container className="pt-16 pb-12 md:pt-28 md:pb-16">
      <h1 className="t-display max-w-[22ch]">
        {title} {support && <span className="text-mute">{support}</span>}
      </h1>
      {children}
    </Container>
  );
}
