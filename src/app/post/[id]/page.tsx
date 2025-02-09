import { notFound } from 'next/navigation';
import { Post } from '@/app/_types';

async function getPost(id: string) {
  // The `fetch` function is automatically memoized and the result
  // is cached
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post: Post = await res.json();
  if (!post) notFound();
  return post;
}

/**
 * The generateStaticParams function can be used in combination with dynamic route segments to
 * statically generate routes at build time instead of on-demand at request time.
 */
export async function generateStaticParams() {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'force-cache',
  }).then((res) => res.json());
  // Render the first 10 posts at build time
  return posts.slice(0, 10).map((post: Post) => ({
    id: String(post.id),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  // This function is called twice, but only executed the first time
  const post = await getPost(id); // cache MISS

  return {
    title: post.title,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await getPost(id); // cache HIT

  return (
    <article>
      <h1 className="text-3xl pb-2">{post.title}</h1>
      <p>{post.body}</p>
    </article>
  );
}
