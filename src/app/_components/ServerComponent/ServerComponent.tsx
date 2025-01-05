import getData from '@/app/_utils/getData';

export default async function ServerComponent() {
  const data = await getData();
  return <div>Server Component {data}</div>;
}
