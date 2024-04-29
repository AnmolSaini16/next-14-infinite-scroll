import PostsWrapper from "@/components/PostsWrapper";
import getPosts from "@/lib/action";

export default async function Home() {
  const posts = await getPosts({ pageParam: 1 });

  return <PostsWrapper posts={posts} />;
}
