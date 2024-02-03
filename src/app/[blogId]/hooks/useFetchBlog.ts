import { useEffect, useState } from 'react';
import { BASE_URL } from '~/constant';
import { Blog } from '~/constant/types';

export const useFetchBlog = (blogId: string) => {
  const [blog, setBlog] = useState<Blog>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      const res = await fetch(`${BASE_URL}/blog/${blogId}`);
      const blog = await res.json();
      setBlog(blog);

      setIsLoading(false);
    })();
  }, [blogId]);

  return { blog, isLoading };
};
