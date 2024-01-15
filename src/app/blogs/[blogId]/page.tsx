'use client';

import { useParams } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import { Blog } from '~/constant/types';
import { Header } from '~/components/Header';
import { BASE_URL } from '~/constant';
import { AuthContext } from '~/contexts/AuthContext';
import { useFetchLikesCount } from '~/hooks/useFetchLikesCount';

export default function Blog() {
  const [blog, setBlog] = useState<Blog>();
  const router = useParams();
  const { authUser, isLoad } = useContext(AuthContext);

  const count = useFetchLikesCount(router.blogId as string);

  const likeHandler = () => {
    console.log('authuser', authUser);

    if (!authUser) return;

    const userId = authUser.uid;
    // setBlog((prev) => console.log('prev', prev));
  };

  useEffect(() => {
    (async () => {
      const res = await fetch(`${BASE_URL}/blogs/${router.blogId}`);
      const blog: Blog = await res.json();
      setBlog(blog);
    })();
  }, [router.blogId]);

  if (!blog) return <div>loading</div>;

  return (
    <div color="text-red">
      <Header
        breadcrumbList={[
          { title: 'いっせいブログ', path: '/' },
          { title: blog.title, path: '' },
        ]}
      />
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
      <p>いいね:{count}</p>

      <button onClick={likeHandler}>ハート</button>
    </div>
  );
}
