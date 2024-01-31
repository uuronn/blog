'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BASE_URL } from '~/constant';
import { Blog } from '~/constant/types';
import { BlogCard } from './BlogCard';

export const BlogList = () => {
  const [blogs, setBlogs] = useState<Blog[]>();

  useEffect(() => {
    (async () => {
      const res = await fetch(`${BASE_URL}/blog`);

      const blogs = await res.json();

      setBlogs(blogs);
    })();
  }, []);

  return (
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
  );
};
