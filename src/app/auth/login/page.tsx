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

  const onClick = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
        const userId = user.uid;

        fetch('http://localhost:8000/users', {
          method: 'POST',
          headers: {
            Authorization: process.env.NEXT_PUBLIC_AUTHORIZATION_KEY as string,
          },
          body: JSON.stringify(userId),
        });
      })
      .catch((e) => {
        console.log('error', e);
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
