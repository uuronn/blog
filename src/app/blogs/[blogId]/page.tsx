'use client';

import { useParams } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import { Blog } from '~/constant/types';
import { Header } from '~/components/Header';
import { BASE_URL } from '~/constant';
import { AuthContext } from '~/contexts/AuthContext';
import { getIdToken } from 'firebase/auth';
import { LikeIcon } from '~/components/icons/LikeIcon';

export default function Blog() {
  const [blog, setBlog] = useState<Blog>();
  const router = useParams();
  const { authUser, isLoad } = useContext(AuthContext);
  const [count, setCount] = useState(0);
  const [isLike, setIsLike] = useState(false);

  const likeHandler = async () => {
    const userId = authUser?.uid;

    const idToken = await getIdToken(authUser!);

    const res = await fetch(`${BASE_URL}/blogs/${router.blogId}`, {
      method: 'POST',
      headers: { Authorization: 'Bearer ' + idToken },
    });

    const count = await res.json();

    setCount(count);
    setIsLike(true);
  };

  useEffect(() => {
    if (authUser) {
      (async () => {
        const idToken = await getIdToken(authUser);
        const res = await fetch(`${BASE_URL}/blogs/${router.blogId}`, {
          headers: { Authorization: 'Bearer ' + idToken },
        });
        const blog: Blog = await res.json();
        setBlog(blog);

        const isLike = blog.likes.includes(authUser.uid);
        setIsLike(isLike);
        setCount(blog.likes.length);
      })();
    }
  }, [authUser, router.blogId]);

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

      <button
        onClick={likeHandler}
        disabled={isLike}
        className="flex items-center gap-2"
      >
        <LikeIcon isLike={isLike} />
      </button>
      {count}
    </div>
  );
}
