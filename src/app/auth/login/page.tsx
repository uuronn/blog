'use client';

import { Header } from '~/components/Header';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

import { auth } from '~/firebase/app';

export type Blog = {
  id: string;
  title: string;
  content: string;
};

export default function Home() {
  const provider = new GoogleAuthProvider();

  const onClick = async () => {
    const res = await signInWithPopup(auth, provider);

    const userId = res.user.uid;

    await fetch('http://localhost:8000/users', {
      method: 'POST',
      headers: {
        Authorization: process.env.NEXT_PUBLIC_AUTHORIZATION_KEY as string,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId }),
    });
  };

  return (
    <>
      <Header breadcrumbList={[{ title: 'いっせいブログ', path: '' }]} />
      <main className="p-6">
        <button onClick={onClick}>認証</button>
      </main>
    </>
  );
}
