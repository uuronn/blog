'use client';

import type { User as AuthUser } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';
import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { createContext, useState } from 'react';
import { auth } from '~/firebase/app';

class AuthContextProps {
  authUser: AuthUser | null | undefined = undefined;
  isLoad = false;
}

export const AuthContext = createContext<AuthContextProps>(
  new AuthContextProps(),
);

type Props = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
  const [authUser, setAuthUserState] = useState<AuthUser | null | undefined>(
    undefined,
  );

  const isLoad = authUser !== undefined;

  const initState = () => {
    setAuthUserState(null);
  };

  const setState = async (_authUser: AuthUser) => {
    try {
      setAuthUserState(_authUser);
    } catch (err) {
      console.error(err);
      initState();
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user === null) {
        initState();

        return;
      }

      setState(user);
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        authUser,
        isLoad,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
