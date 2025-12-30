import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Nav from "@/components/Nav";
import ReactQueryProvider from "@/components/ReactQuery";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Infinite Scroll | Next.js 14",
  description:
    "A beautifully crafted infinite scroll experience built with Next.js 14 and React Query",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable}`}>
      <body
        className={cn(
          "min-h-screen bg-background antialiased font-sans",
          outfit.className
        )}
      >
        <main className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <ReactQueryProvider>
            <Nav />
            <div className="pb-20">{children}</div>
          </ReactQueryProvider>
        </main>

        {/* Bottom fade */}
        <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-20" />
      </body>
    </html>
  );
}
