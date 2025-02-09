import { notFound } from 'next/navigation';
import { Post, Comment } from '@/app/_types';
import { Suspense } from 'react';

async function getPost(id: string) {
  // The `fetch` function is automatically memoized and the result
  // is cached
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post: Post = await res.json();
  if (!post) notFound();
  return post;
}

async function getPostComments(postId: string) {
  // The `fetch` function is automatically memoized and the result
  // is cached
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
  );
  const comments: Comment[] = await res.json();
  return comments;
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
    <div className="flex flex-col gap-2 p-2">
      <h1 className="text-3xl pb-2">{post.title}</h1>
      <p>{post.body}</p>
      <Suspense fallback={'comments loading....'}>
        <Comments postId={post.id.toString()} />
      </Suspense>
    </div>
  );
}

async function Comments({ postId }: { postId: string }) {
  // Use the post ID to fetch comments
  const comments = await getPostComments(postId);

  return (
    <div>
      <h1 className="text-xl pb-2">Latest Comments</h1>
      <div className="flex flex-col gap-2 w-1/2">
        {comments.map((comment) => (
          <div key={comment.id} className="flex flex-col gap-2">
            <span>{comment.body}</span>
            <span>
              by: <strong>{comment.name}</strong>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
