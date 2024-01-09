'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Header } from '~/components/Header';
import { BlogCard } from './components/BlogCard';

export type Blog = {
  id: string;
  title: string;
  content: string;
};

export default function Home() {
  const [blogs, setBlogs] = useState<Blog[]>();

  useEffect(() => {
    (async () => {
      const res = await fetch('http://localhost:8000/blogs', {
        headers: {
          Authorization: process.env.NEXT_PUBLIC_AUTHORIZATION_KEY as string,
        },
      });
      const blogs = await res.json();
      setBlogs(blogs);
    })();
  }, []);

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
        <ul className="flex flex-wrap justify-center gap-3">
          {blogs.map((blog) => (
            <li key={blog.id}>
              <Link href={blog.id}>
                <BlogCard blog={blog} />
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
