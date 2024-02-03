import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from '@material-tailwind/react';
import { LikeIcon } from '~/components/icons/LikeIcon';
import { Blog } from '~/constant/types';
import { formatDate } from '~/utils/formatDate';

type Props = {
  blog: Blog;
};

export const BlogCard = ({ blog }: Props) => {
  return (
    <Card className="mt-6 w-96">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {blog.title}
        </Typography>
        <Typography>{blog.content}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Typography>{formatDate(blog.createdAt)}</Typography>
        <LikeIcon />
      </CardFooter>
    </Card>
  );
};
