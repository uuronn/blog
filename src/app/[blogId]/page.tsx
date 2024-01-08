"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Blog } from "../page";
import { Header } from "~/components/Header";

export default function Blog() {
  const [blog, setBlog] = useState<Blog>();
  const router = useParams();

  useEffect(() => {
    (async () => {
      const res = await fetch(`http://localhost:8000/blogs/${router.blogId}`);
      const blog: Blog = await res.json();
      setBlog(blog);
    })();
  }, [router.blogId]);

  if (!blog) return <div>loading</div>;

  return (
    <div color="text-red">
      <Header
        breadcrumbList={[
          { title: "いっせいブログ", path: "/" },
          { title: blog.title, path: "" },
        ]}
      />
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
    </div>
  );
}
