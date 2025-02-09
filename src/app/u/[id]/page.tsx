import { Album, User } from '@/app/_types';
import { notFound } from 'next/navigation';

async function getUser(id: string) {
  // The `fetch` function is automatically memoized and the result
  // is cached
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user: User = await res.json();
  if (!user) notFound();
  return user;
}

async function getUserAlbums(id: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}/albums`,
  );
  const albums: Album[] = await res.json();
  return albums;
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const userData = getUser(id);
  const albumsData = getUserAlbums(id);
  const [user, albums] = await Promise.all([userData, albumsData]);

  return (
    <div className="flex flex-col gap-2 p-2">
      <h1 className="text-3xl pb-2">{user.name}</h1>
      <p>{user.company.name}</p>
      <Albums albums={albums} />
    </div>
  );
}

async function Albums({ albums }: { albums: Album[] }) {
  // Use the post ID to fetch comments
  return (
    <div>
      <h1 className="text-xl pb-2">Latest Comments</h1>
      <div className="flex flex-col gap-2 w-1/2">
        {albums.map((album) => (
          <div key={album.id} className="flex flex-col gap-2">
            <span>{album.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
