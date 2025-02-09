// app/posts/page.tsx (Server Component)
import { Post } from '@/app/_types';
import Link from 'next/link';

async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
}

export default async function PostsPage() {
  const posts = (await getPosts()) as Post[];

  return (
    <div className="p-2">
      <h1 className="text-3xl pb-2">Latest Posts</h1>
      <div className="flex flex-wrap grow basis-1/4 gap-2">
        {posts.map((post) => (
          <Link
            href={`/post/${post.id}`}
            key={post.id}
            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {post.title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {post.body}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
