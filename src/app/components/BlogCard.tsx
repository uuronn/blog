import classNames from 'classnames';
import { ComponentPropsWithoutRef } from 'react';
import { Blog } from '~/app/page';

type Props = {
  blog: Blog;
} & ComponentPropsWithoutRef<'div'>;

export const BlogCard = ({ blog, className }: Props) => {
  return (
    <div
      className={classNames(
        'h-32 w-96 rounded-2xl border-2 border-black p-4',
        className,
      )}
    >
      <p>{blog.title}</p>
      <p>{blog.content}</p>
    </div>
  );
};
