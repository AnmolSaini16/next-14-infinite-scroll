"use client";

import { useInfiniteQuery } from "@tanstack/react-query";

import { IPost } from "@/types";
import getPosts from "@/lib/action";

export default function useGetPosts(initialData: IPost[]) {
  return useInfiniteQuery<IPost[]>({
    queryKey: ["posts"],
    queryFn: getPosts,
    initialData: { pages: [initialData], pageParams: [1] },
    initialPageParam: 1,
    getNextPageParam(lastPage, allPages) {
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
}
