import { FETCH_POSTS_LIMIT } from "./constants";

export default async function getPosts({
  pageParam = 1,
}: {
  pageParam: unknown;
}) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${pageParam}&_limit=${FETCH_POSTS_LIMIT}`
  );
  return res.json();
}
