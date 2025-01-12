import EntryFormClient from '@/app/_components/EntryFormClient';
import { createEntry } from '@/app/_actions';

export default function Page() {
  return (
    <div>
      <EntryFormClient createEntryAction={createEntry} />
    </div>
  );
}
