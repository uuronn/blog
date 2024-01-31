'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Header } from '~/components/Header';
import { BASE_URL } from '~/constant';
import { Blog } from '~/constant/types';
import { BlogCard } from './_components/BlogCard';

export default function IndexPage() {
  const [blogs, setBlogs] = useState<Blog[]>();

  useEffect(() => {
    (async () => {
      const res = await fetch(`${BASE_URL}/blog`);

      const blogs = await res.json();

      setBlogs(blogs);
    })();
  }, []);

  return (
    <>
      <Header breadcrumbList={[{ title: 'いっせいブログ' }]} />

      <main className="p-6">
        <ul className="flex flex-wrap justify-center gap-3">
          {blogs ? (
            blogs.map((blog) => (
              <li key={blog.id}>
                <Link href={`/${blog.id}`}>
                  <BlogCard blog={blog} />
                </Link>
              </li>
            ))
          ) : (
            <div>loading...</div>
          )}
        </ul>
      </main>
    </>
  );
}
