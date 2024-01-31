import classNames from 'classnames';
import { ComponentPropsWithoutRef } from 'react';
import { LikeIcon } from '~/components/icons/LikeIcon';
import { Blog } from '~/constant/types';

type Props = {
  blog: Blog;
} & ComponentPropsWithoutRef<'div'>;

export const BlogCard = ({ blog, className }: Props) => {
  return (
    <div
      className={classNames(
        'relative h-32 w-96 rounded-2xl border-2 border-black p-4',
        className,
      )}
    >
      <p className="mb-2 text-lg font-bold">{blog.title}</p>
      <p>{blog.content}</p>
      <p className="absolute bottom-[16px] right-[16px] flex items-center gap-2">
        {/* {blog.likes.length} */}
        <LikeIcon />
      </p>
    </div>
  );
};
