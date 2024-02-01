'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { LikeIcon } from '~/components/icons/LikeIcon';
import { BASE_URL } from '~/constant';
import { Blog } from '~/constant/types';
import { formatDate } from '~/utils/formatDate';

export const BlogDetail = () => {
  const { blogId } = useParams();

  const [blog, setBlog] = useState<Blog>();

  useEffect(() => {
    (async () => {
      const res = await fetch(`${BASE_URL}/blog/${blogId}`);

      const blog = await res.json();

      setBlog(blog);
    })();
  }, []);

  if (!blog) return <div>loading...</div>;

  return (
    <>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
      <p>投稿日 {formatDate(blog.createdAt)}</p>
      <button className="flex items-center gap-2">
        <LikeIcon />
      </button>
    </>
  );
};
