"use client";

import React from "react";
import { User, Clock, ArrowUpRight } from "lucide-react";

import { IPost } from "@/types";

type Props = {
  post: IPost;
  index?: number;
};

const Post = ({ post, index = 0 }: Props) => {
  const staggerIndex = (index % 9) + 1;

  return (
    <article
      className={`
        group relative opacity-0 animate-fade-in-up stagger-${staggerIndex}
        rounded-2xl bg-card shadow-sm
        border border-border/60 hover:border-primary/40
        transition-all duration-500 ease-out
        hover:shadow-lg hover:shadow-primary/10
        hover:-translate-y-1
        overflow-hidden
      `}
    >
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20">
                <User className="w-4 h-4 text-primary" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-foreground">
                User {post.userId}
              </span>
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <Clock className="w-3 h-3" />
                Post #{post.id}
              </span>
            </div>
          </div>

          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
            <ArrowUpRight className="w-4 h-4 text-primary" />
          </div>
        </div>

        <h3 className="text-lg font-semibold leading-snug text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2 font-[family-name:var(--font-display)]">
          {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
        </h3>

        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {post.body.charAt(0).toUpperCase() + post.body.slice(1)}
        </p>

        <div className="flex items-center gap-2 pt-2">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
            Article
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-muted-foreground">
            {(post.id % 5) + 2} min read
          </span>
        </div>
      </div>
    </article>
  );
};

export default Post;
