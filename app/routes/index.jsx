import BlogPostCardList from "~/components/BlogPostCardList";
import { getPosts } from "~/api/get-posts.server.js" 
import { useLoaderData } from '@remix-run/react';
import { json } from "@remix-run/node";

export async function loader() {
  const data = await getPosts(); 
  return json(data);
}

function flattenData(data) {
  return data.reduce((acc, curr) => {
    const transformed = {
      id: curr.id,
      title: curr.attributes.title,
      date: curr.attributes.publishedAt,
      slug: curr.attributes.slug,
      image: 'http://localhost:1337' + curr.attributes.image.data.attributes.url,
    }
    return [...acc, transformed]
  }, [])
}

export default function Index() {
  const { data } = useLoaderData(); 
  return <BlogPostCardList data={flattenData(data)} />;
}
