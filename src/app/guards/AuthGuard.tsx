'use client';

import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { AuthContext } from '~/contexts/AuthContext';

type Props = {
  children: React.ReactNode;
};

export const AuthGuard = ({ children }: Props) => {
  const { authUser } = useContext(AuthContext);
  const router = useRouter();

  // ログインしてないと認証ページへ遷移
  if (authUser === null) router.push('/auth/login');

  return <>{children}</>;
};
