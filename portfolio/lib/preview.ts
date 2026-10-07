export type SitePreview = {
  url: string;
  width: number;
  height: number;
};

const PREVIEW_API = "https://api.microlink.io/";
// How long a screenshot is reused before the live site is captured again
const PREVIEW_TTL_SECONDS = 60 * 60 * 12;

// Captures a screenshot of a live site through Microlink. Returns null when
// the capture fails, so callers fall back to a text-only presentation.
export async function getSitePreview(
  liveUrl: string | null | undefined,
): Promise<SitePreview | null> {
  if (!liveUrl) return null;

  const request = new URL(PREVIEW_API);
  request.searchParams.set("url", liveUrl);
  request.searchParams.set("screenshot", "true");
  request.searchParams.set("meta", "false");
  request.searchParams.set("viewport.width", "1440");
  request.searchParams.set("viewport.height", "810");

  try {
    const response = await fetch(request, {
      next: { revalidate: PREVIEW_TTL_SECONDS },
    });
    if (!response.ok) return null;

    const screenshot = (await response.json())?.data?.screenshot;
    if (!screenshot?.url) return null;

    return {
      url: screenshot.url,
      width: screenshot.width ?? 2880,
      height: screenshot.height ?? 1620,
    };
  } catch {
    return null;
  }
}
