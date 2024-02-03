'use client';

import { useParams } from 'next/navigation';

import { LikeIcon } from '~/components/icons/LikeIcon';

import { formatDate } from '~/utils/formatDate';
import { useFetchBlog } from '../hooks/useFetchBlog';

export const BlogDetail = () => {
  const { blogId } = useParams<{ [key: string]: string }>();
  const { blog, isLoading } = useFetchBlog(blogId);

  if (isLoading) return <div>loading...</div>;

  if (!blog) return <div>blog is not undefined</div>;

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
