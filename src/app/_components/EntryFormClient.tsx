'use client';

export default function EntryFormClient({
  createEntryAction,
}: {
  createEntryAction: (formData: FormData) => void;
}) {
  // const handleSubmit = async (e: FormEvent) => {
  //   e.preventDefault();
  //   await createEntry();
  // };

  return (
    <form action={createEntryAction}>
      <button className="bg-blue-700 p-4 border-2 rounded" type="submit">
        Submit
      </button>
    </form>
  );
}
