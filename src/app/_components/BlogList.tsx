'use client';

import Link from 'next/link';
import { BlogCard } from './BlogCard';
import { useFetchBlogList } from '../[blogId]/hooks/useFetchBlogList';

export const BlogList = () => {
  const { blogList, isLoading } = useFetchBlogList();

  if (isLoading) return <div>loading...</div>;

  if (!blogList) return <div>blogList is not undefined</div>;

  return (
    <ul className="flex flex-wrap justify-center gap-3">
      {blogList.map((blog) => (
        <li key={blog.id}>
          <Link href={`/${blog.id}`}>
            <BlogCard blog={blog} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
