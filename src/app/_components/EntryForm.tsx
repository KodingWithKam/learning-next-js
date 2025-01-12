import { createEntry } from '@/app/_actions';

export default async function EntryForm() {
  return (
    <form action={createEntry}>
      <button className="bg-purple-700 p-4 border-2 rounded" type="submit">
        Submit
      </button>
    </form>
  );
}
