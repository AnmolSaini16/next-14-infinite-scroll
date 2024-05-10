"use client";

import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

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
  }, [inView]);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl">Personalised Post for you</h1>
      <div className="grid gap-x-4 gap-y-8 grid-cols-1 md:grid-cols-3">
        {data?.pages.map((group, i) => (
          <React.Fragment key={i}>
            {group?.map((post) => (
              <Post post={post} key={post.id} />
            ))}
          </React.Fragment>
        ))}
      </div>
      {isFetchingNextPage && hasNextPage ? (
        <p className="text-center">Loading more posts...</p>
      ) : (
        <p className="text-center">No more posts found</p>
      )}

      <div ref={ref} />
    </div>
  );
};

export default PostsWrapper;
