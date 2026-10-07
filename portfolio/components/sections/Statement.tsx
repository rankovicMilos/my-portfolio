import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { RevealText } from "@/components/motion/RevealText";

export function Statement() {
  return (
    <section className="pt-[var(--section)]">
      <Container className="grid-12 gap-y-8">
        <RevealText className="t-display col-span-4 md:col-span-9 md:col-start-4">
          You don&apos;t need to speak tech.{" "}
          <span className="text-mute">
            Tell me what you need, and I&apos;ll plan it, build it and launch
            it.
          </span>
        </RevealText>
        <p className="col-span-4 md:col-span-9 md:col-start-4">
          <Link href="/about" className="link">
            More about me
          </Link>
        </p>
      </Container>
    </section>
  );
}
