'use client';

import { useEffect, useState } from 'react';
import { Header } from '~/components/Header';
import { LikeIcon } from '~/components/icons/LikeIcon';
import { BASE_URL } from '~/constant';
import { Blog } from '~/constant/types';

export default function BlogPage({ params }: { params: { blogId: string } }) {
  const { blogId } = params;

  const [blog, setBlog] = useState<Blog>();

  useEffect(() => {
    (async () => {
      const res = await fetch(`${BASE_URL}/blog/${blogId}`);

      const blog = await res.json();

      setBlog(blog);
    })();
  }, []);

  if (!blog) return <div>loading...</div>;

  const date = new Date(blog.createdAt);

  const dateText = `${date.getFullYear()}年${
    date.getMonth() + 1
  }月${date.getDate()}日`;

  return (
    <div color="text-red">
      <Header breadcrumbList={[{ title: 'いっせいブログ', path: '/' }]} />
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
      <p>投稿日 {dateText}</p>
      <button className="flex items-center gap-2">
        <LikeIcon />
      </button>
    </div>
  );
}
