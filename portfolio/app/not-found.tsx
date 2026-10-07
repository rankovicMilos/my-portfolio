import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="shell flex min-h-svh flex-col justify-end gap-8 py-10">
      <h1 className="t-display max-w-[18ch]">
        This page doesn&apos;t exist.{" "}
        <span className="text-mute">It may have moved or been removed.</span>
      </h1>
      <Button asChild className="w-fit">
        <Link href="/">Back to the work</Link>
      </Button>
    </main>
  );
}
