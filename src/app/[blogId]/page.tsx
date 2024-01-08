"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Blog } from "../page";

export default function Blog() {
  const [blog, setBlog] = useState<Blog>();
  const router = useParams();

  useEffect(() => {
    console.log(`http://localhost:3000/blogs/${router.blogId}`);

    (async () => {
      const res = await fetch(`http://localhost:3000/blogs/${router.blogId}`);
      const blog: Blog = await res.json();
      setBlog(blog);
      console.log("blog", blog);
    })();
  }, []);

  useEffect(() => {
    if (blog) {
      console.log("blog", blog);
    }
  }, [blog]);

  if (!blog) return <div>loading</div>;

  return <div color="text-red">{blog.title}</div>;
}
