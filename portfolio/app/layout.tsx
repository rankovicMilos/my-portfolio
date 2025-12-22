import type { Metadata } from "next";
import { Geist, Geist_Mono, Nunito } from "next/font/google"; // Import Nunito
import { Header } from "@/components/layout/Header"; // New Header
import { Footer } from "@/components/layout/Footer"; // New Footer
import "./globals.css";
import { StarsBackground } from "@/components/animate-ui/components/backgrounds/stars";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Milos Rankovic | Portfolio",
  description:
    "Full-stack developer specializing in .NET, NestJS, Next.js and Angular.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${nunito.variable} antialiased text-zinc-400 font-geist min-h-screen selection:bg-zinc-800 selection:text-white`}
      >
        <div className="fixed inset-0 z-0">
          <StarsBackground />
        </div>

        <div className="relative z-10 flex min-h-screen items-center justify-center p-4 sm:p-8 pointer-events-none">
          {/* Card Container */}
          <main className="w-full max-w-4xl bg-[#0a0a0a] border border-white/5 rounded-[2rem] shadow-2xl relative overflow-hidden animate-sequence pointer-events-auto">
            
            {/* Decorative Ambient Glow */}
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-zinc-800/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-60 h-60 bg-zinc-800/10 rounded-full blur-3xl pointer-events-none"></div>

            <Header />
              
            {/* Content Body */}
            <div className="px-8 py-6 space-y-12 relative z-10">
              
                {children}
            </div>

            <Footer />
          </main>
        </div>
      </body>
    </html>
  );
}
