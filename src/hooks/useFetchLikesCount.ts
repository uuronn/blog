import { useEffect, useState } from 'react';
import { BASE_URL } from '~/constant';

export const useFetchLikesCount = (blogId: string) => {
  const [count, setCount] = useState(0);

  const init = async () => {
    try {
      const res = await fetch(`${BASE_URL}/likes/count`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: process.env.NEXT_PUBLIC_AUTHORIZATION_KEY as string,
        },
        body: JSON.stringify({
          blogId,
        }),
      });

      const count = await res.json();

      setCount(count);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    init();
  }, []);

  return count;
};
