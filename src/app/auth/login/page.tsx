'use client';

import { Header } from '~/components/Header';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

import { auth } from '~/firebase/app';
import { BASE_URL } from '~/constant';
import { User } from '~/constant/types';

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
    const name = res.user.displayName || '';
    const email = res.user.email || '';

    const token = await res.user.getIdToken();

    await fetch(`${BASE_URL}/users`, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
  };

  return (
    <>
      <Header breadcrumbList={[{ title: 'いっせいブログ', path: '/' }]} />
      <main className="p-6">
        <button onClick={onClick}>認証</button>
      </main>
    </>
  );
}
