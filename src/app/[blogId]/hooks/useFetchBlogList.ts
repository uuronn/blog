import { useEffect, useState } from 'react';
import { BASE_URL } from '~/constant';
import { Blog } from '~/constant/types';

export const useFetchBlogList = () => {
  const [blogList, setBlogList] = useState<Blog[]>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      const res = await fetch(`${BASE_URL}/blog`);
      const blogList = await res.json();
      setBlogList(blogList);

      setIsLoading(false);
    })();
  }, []);

  return { blogList, isLoading };
};
