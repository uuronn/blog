'use client';

import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { Header } from '~/components/Header';
import { BlogCard } from './components/BlogCard';
import { AuthContext } from '~/contexts/AuthContext';
import { BASE_URL } from '~/constant';
import { Blog } from '~/constant/types';
import { getIdToken } from 'firebase/auth';

export default function Home() {
  const [blogs, setBlogs] = useState<Blog[]>();
  const { authUser, isLoad } = useContext(AuthContext);

  useEffect(() => {
    if (authUser) {
      (async () => {
        const idToken = await getIdToken(authUser);
      })();

      (async () => {
        const idToken = await getIdToken(authUser);
        const res = await fetch(`${BASE_URL}/blogs`, {
          headers: {
            Authorization: 'Bearer ' + idToken,
          },
        });
        const blogs = await res.json();

        setBlogs(blogs);
      })();
    }
  }, [authUser]);

  if (authUser === null)
    return (
      <>
        <Header breadcrumbList={[{ title: 'いっせいブログ', path: '' }]} />
        <main>
          <div>ログインしてください。</div>
        </main>
      </>
    );

  if (!blogs)
    return (
      <>
        <Header breadcrumbList={[{ title: 'いっせいブログ', path: '' }]} />
        <main>
          <div>...loading</div>
        </main>
      </>
    );

  return (
    <>
      <Header
        breadcrumbList={[{ title: 'いっせいブログ', path: '' }]}
        isOwner={authUser?.email === process.env.NEXT_PUBLIC_OWNER_EMAIL}
      />
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
