'use client';
import { useState } from 'react';

interface Props {
  children: React.ReactNode;
}
export default function ClientComponent({ children }: Props) {
  const [count, setCount] = useState<number>(0);

  // useEffect(() => {
  //   getData().then((res) => {
  //     console.log(res);
  //   });
  // }, []);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      {children}
    </div>
  );
}
