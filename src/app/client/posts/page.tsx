'use client';

import { useState, useEffect } from 'react';
import { Post } from '@/app/_types';

export function Posts() {
  const [posts, setPosts] = useState<Post[] | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = (await res.json()) as Post[];
      setPosts(data);
    }
    fetchPosts();
  }, []);

  if (!posts) return <div>Loading...</div>;

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
