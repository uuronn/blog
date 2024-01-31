import { ComponentPropsWithoutRef, ReactNode } from 'react';

type Props = { children: ReactNode } & ComponentPropsWithoutRef<'button'>;

export const Button = ({ children, ...props }: Props) => {
  return (
    <button
      className="rounded-lg bg-green-300 px-5 py-3 text-2xl font-bold text-gray-700 duration-300 hover:opacity-70"
      {...props}
    >
      {children}
    </button>
  );
};
