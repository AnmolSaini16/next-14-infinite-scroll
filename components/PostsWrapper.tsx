"use client";

import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Loader2, TrendingUp, Zap } from "lucide-react";

import { IPost } from "@/types";
import Post from "./Post";
import useGetPosts from "@/hook/useGetPosts";

type Props = {
  posts: IPost[];
};

const PostsWrapper = ({ posts }: Props) => {
  const { ref, inView } = useInView();
  const { data, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useGetPosts(posts);

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  // Calculate total posts loaded
  const totalPosts =
    data?.pages.reduce((acc, page) => acc + (page?.length || 0), 0) || 0;

  return (
    <div className="space-y-12">
      <header className="relative py-12 space-y-6 text-center">
        <div className="space-y-4 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-[family-name:var(--font-display)]">
            Discover <span className="gradient-text">Amazing</span> Posts
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Seamlessly browse through an endless stream of curated content.
            Scroll down and watch the magic happen.
          </p>
        </div>

        <div className="flex items-center justify-center gap-8 pt-4 animate-fade-in-up stagger-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span>
              <strong className="text-foreground">{totalPosts}</strong> posts
              loaded
            </span>
          </div>
          <div className="w-px h-4 bg-border" />
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>
              Powered by{" "}
              <strong className="text-foreground">React Query</strong>
            </span>
          </div>
        </div>
      </header>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data?.pages.map((group, pageIndex) => (
          <React.Fragment key={pageIndex}>
            {group?.map((post, postIndex) => (
              <Post
                post={post}
                key={post.id}
                index={pageIndex * 9 + postIndex}
              />
            ))}
          </React.Fragment>
        ))}
      </div>

      <div className="py-12">
        {isFetchingNextPage && hasNextPage ? (
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Loader2 className="w-6 h-6 text-primary animate-spin" />
              </div>
              <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
            </div>
            <p className="text-sm text-muted-foreground font-medium">
              Loading more amazing content...
            </p>
          </div>
        ) : !hasNextPage ? (
          <div className="flex flex-col items-center gap-3 py-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            <p className="text-sm text-muted-foreground">
              You&apos;ve reached the end —{" "}
              <span className="text-foreground font-medium">
                {totalPosts} posts
              </span>{" "}
              explored
            </p>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>
        ) : null}
      </div>

      <div ref={ref} className="h-4" />
    </div>
  );
};

export default PostsWrapper;
