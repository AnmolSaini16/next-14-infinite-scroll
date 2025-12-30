import Link from "next/link";
import { Github } from "lucide-react";

import { Button } from "./ui/button";

export default function Nav() {
  return (
    <nav className="py-6 flex justify-between items-center animate-slide-down">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="flex flex-col">
          <h1 className="text-xl font-semibold tracking-tight">
            Infinite<span className="gradient-text">Scroll</span>
          </h1>
          <span className="text-xs text-muted-foreground font-light tracking-wide">
            Next.js 14 + React Query
          </span>
        </div>
      </div>

      <Button
        variant="outline"
        size="sm"
        className="group relative overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300"
        asChild
      >
        <Link
          href="https://github.com/AnmolSaini16/next-14-infinite-scroll"
          target="_blank"
          className="flex items-center gap-2"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <Github className="w-4 h-4 transition-transform group-hover:rotate-12" />
          <span className="relative">Source</span>
        </Link>
      </Button>
    </nav>
  );
}
