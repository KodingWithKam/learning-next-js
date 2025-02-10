'use client';

import { use } from 'react';
import { Post } from '@/app/_types';

export default function Posts({ posts }: { posts: Promise<Post[]> }) {
  const allPosts = use(posts);

  return (
    <ul>
      {allPosts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
