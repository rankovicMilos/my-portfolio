import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { sanityFetch } from "@/sanity/lib/client";
import { SITE_SETTINGS_QUERY } from "@/sanity/lib/queries";

export default async function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await sanityFetch({ query: SITE_SETTINGS_QUERY });

  return (
    <>
      <SmoothScroll />
      <a
        href="#content"
        className="t-meta sr-only z-50 rounded-control bg-ink px-5 py-3 text-ground focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        Skip to content
      </a>
      <Header overHeroVideo={Boolean(settings?.heroVideoUrl)} />
      <main id="content">{children}</main>
      <Footer />
    </>
  );
}
