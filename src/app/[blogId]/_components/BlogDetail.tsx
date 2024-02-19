'use client';

import { useParams } from 'next/navigation';

import { LikeIcon } from '~/components/icons/LikeIcon';

import { formatDate } from '~/utils/formatDate';
import { useFetchBlog } from '../hooks/useFetchBlog';
import { BASE_URL } from '~/constant';

export const BlogDetail = () => {
  const { blogId } = useParams<{ [key: string]: string }>();
  const { blog, isLoading } = useFetchBlog(blogId);

  const addLike = () => {
    fetch(`${BASE_URL}/like`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        blogId,
      }),
    });
  };

  if (isLoading) return <div>loading...</div>;

  if (!blog) return <div>blog is not undefined</div>;

  return (
    <div className="flex flex-col gap-4 px-4 py-8 text-lg md:px-52">
      <h1 className="text-3xl font-bold">{blog.title}</h1>
      <p className="text-right">投稿日 {formatDate(blog.createdAt)}</p>
      <p>{blog.content}</p>
      <button onClick={addLike} className="flex items-center gap-2">
        <LikeIcon />
      </button>
    </div>
  );
};
