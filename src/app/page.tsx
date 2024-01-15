'use client';

import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { Header } from '~/components/Header';
import { BlogCard } from './components/BlogCard';
import { AuthContext } from '~/contexts/AuthContext';
import { BASE_URL } from '~/constant';
import { Blog } from '~/constant/types';

export default function Home() {
  const [blogs, setBlogs] = useState<Blog[]>();
  const { authUser, isLoad } = useContext(AuthContext);

  const [user, setUser] = useState();

  useEffect(() => {
    if (authUser) {
      console.log('authUser', authUser.uid);

      const userId = authUser.uid;

      console.log('userId', userId);

      (async () => {
        const res = await fetch(`${BASE_URL}/users?userId=${userId}`, {
          headers: {
            Authorization: process.env.NEXT_PUBLIC_AUTHORIZATION_KEY as string,
          },
        });

        const user = await res.json();

        setUser(user);
      })();
    }

    // token取得できる---
    // if (user) {
    //   (async () => {
    //     const idToken = await getIdToken(user, true);
    //     console.log('istoken', idToken);
    //   })();
    // }
  }, [authUser]);

  useEffect(() => {
    (async () => {
      const res = await fetch(`${BASE_URL}/blogs`, {
        headers: {
          Authorization: process.env.NEXT_PUBLIC_AUTHORIZATION_KEY as string,
        },
      });
      const blogs = await res.json();
      setBlogs(blogs);
    })();
  }, []);

  useEffect(() => {
    if (user) {
      console.log('aaaa', user);
    }
  }, [user]);

  if (!isLoad)
    return (
      <main>
        <Header breadcrumbList={[{ title: 'いっせいブログ', path: '' }]} />
        <div>...loading</div>
      </main>
    );

  if (!blogs)
    return (
      <main>
        <Header breadcrumbList={[{ title: 'いっせいブログ', path: '' }]} />
        <div>...loading</div>
      </main>
    );

  return (
    <>
      <Header breadcrumbList={[{ title: 'いっせいブログ', path: '' }]} />
      <main className="p-6">
        <p>{authUser?.displayName}</p>
        <ul className="flex flex-wrap justify-center gap-3">
          {blogs.map((blog) => (
            <li key={blog.id}>
              <Link href={`/blogs/${blog.id}`}>
                <BlogCard blog={blog} />
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
