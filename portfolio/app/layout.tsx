import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/seo/JsonLd";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://milosrankovic.com";

export const metadata: Metadata = {
  // Basic metadata
  title: {
    default: "Milos Rankovic | Software Engineer",
    template: "%s | Milos Rankovic",
  },
  description:
    "Milos Rankovic builds websites and custom software for businesses, from a simple portfolio to booking systems and AI-powered tools.",
  keywords: [
    "Milos Rankovic",
    "Software Engineer",
    "Full-stack Developer",
    "Web Developer",
    ".NET Developer",
    "NestJS",
    "Next.js",
    "Angular",
    "React",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Milos Rankovic", url: siteUrl }],
  creator: "Milos Rankovic",
  publisher: "Milos Rankovic",

  // Favicon & Icons (handled automatically by icon.svg in /app)
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },

  // Canonical URL
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },

  // Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Milos Rankovic",
    title: "Milos Rankovic | Software Engineer",
    description:
      "Milos Rankovic builds websites and custom software for businesses, from a simple portfolio to booking systems and AI-powered tools.",
    images: [
      {
        url: "/openGraph-image.png",
        width: 1200,
        height: 630,
        alt: "Milos Rankovic - Software Engineer",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Milos Rankovic | Software Engineer",
    description:
      "Full-stack software engineer specializing in .NET, NestJS, Next.js and Angular.",
    images: ["/openGraph-image.png"],
  },

  // Robots & Indexing
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Verification (add your IDs when you have them)
  // verification: {
  //   google: "your-google-verification-code",
  //   yandex: "your-yandex-verification-code",
  // },

  // App-specific
  applicationName: "Milos Rankovic Portfolio",
  category: "technology",
};

// Viewport configuration for mobile optimization
export const viewport: Viewport = {
  themeColor: "#0c0c0c",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Marks that scripts run, so line reveals can start hidden */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body>
        <JsonLd />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
