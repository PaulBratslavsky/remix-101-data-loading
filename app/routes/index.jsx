import BlogPostCardList from "~/components/BlogPostCardList";
import { getPosts } from "~/api/get-posts.server.js" 
import { useLoaderData } from '@remix-run/react';
import { json } from "@remix-run/node";

export function loader() {
  const data = getPosts();
  return json(data);
}

export default function Index() {
  const data = useLoaderData();

  return <BlogPostCardList data={data} />;
}
