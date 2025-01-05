import ClientComponent from '@/app/_components/ClientComponent/ClientComponent';
import ServerComponent from '@/app/_components/ServerComponent/ServerComponent';

export default function Page() {
  return (
    <div>
      <span>Hello World!</span>
      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
    </div>
  );
}
