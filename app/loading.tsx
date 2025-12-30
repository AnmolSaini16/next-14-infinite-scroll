import { Zap } from "lucide-react";

export default function Loading() {
  return (
    <div className="space-y-12">
      {/* Hero Section Skeleton */}
      <header className="relative pt-8 pb-12 space-y-6 text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-primary/50 to-primary/20" />

        <div className="space-y-4 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            <Zap className="w-4 h-4" />
            <span>Infinite Scroll Experience</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-[family-name:var(--font-display)]">
            Discover <span className="gradient-text">Amazing</span> Posts
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Seamlessly browse through an endless stream of curated content.
            Scroll down and watch the magic happen.
          </p>
        </div>

        <div className="flex items-center justify-center gap-8 pt-4">
          <div className="h-5 w-32 animate-shimmer rounded-full" />
          <div className="w-px h-4 bg-border" />
          <div className="h-5 w-40 animate-shimmer rounded-full" />
        </div>
      </header>

      {/* Posts Grid Skeleton */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 9 }).map((_, index) => (
          <SkeletonCard key={index} index={index} />
        ))}
      </div>
    </div>
  );
}

function SkeletonCard({ index }: { index: number }) {
  const staggerClass = `stagger-${(index % 9) + 1}`;

  return (
    <div
      className={`
        relative rounded-2xl bg-card/50 backdrop-blur-sm
        border border-border/50 overflow-hidden
        opacity-0 animate-fade-in-up ${staggerClass}
      `}
    >
      <div className="p-6 space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full animate-shimmer" />
            <div className="flex flex-col gap-2">
              <div className="h-4 w-16 animate-shimmer rounded" />
              <div className="h-3 w-12 animate-shimmer rounded" />
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="space-y-2">
          <div className="h-6 w-full animate-shimmer rounded" />
          <div className="h-6 w-3/4 animate-shimmer rounded" />
        </div>

        {/* Body */}
        <div className="space-y-2">
          <div className="h-4 w-full animate-shimmer rounded" />
          <div className="h-4 w-full animate-shimmer rounded" />
          <div className="h-4 w-2/3 animate-shimmer rounded" />
        </div>

        {/* Tags */}
        <div className="flex items-center gap-2 pt-2">
          <div className="h-6 w-16 animate-shimmer rounded-full" />
          <div className="h-6 w-20 animate-shimmer rounded-full" />
        </div>
      </div>
    </div>
  );
}
