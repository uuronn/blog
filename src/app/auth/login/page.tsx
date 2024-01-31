'use client';

import { Header } from '~/components/Header';

export type Blog = {
  id: string;
  title: string;
  content: string;
};

export default function Home() {
  const onClick = async () => {};

  return (
    <>
      <Header breadcrumbList={[{ title: 'いっせいブログ', path: '/' }]} />
      <main className="p-6">
        <button onClick={onClick}>認証</button>
      </main>
    </>
  );
}
