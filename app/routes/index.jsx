import { useLoaderData } from '@remix-run/react';
import { json } from "@remix-run/node";
import { getPosts } from "~/api/get-posts.server.js";

import BlogPostCardList from "~/components/BlogPostCardList";

export async function loader() {
  const data = getPosts();
  return json({
    data: data,
  })
}

export default function Index() {
  const { data }  = useLoaderData();

  console.log(data)
  return <BlogPostCardList data={data} />;
}
