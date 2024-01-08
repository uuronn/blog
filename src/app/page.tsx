"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export type Blog = {
  id: string;
  title: string;
  content: string;
};

export default function Home() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:3000/blogs");
      const blogs = await res.json();
      setBlogs(blogs);
      console.log("aaa", blogs);
    })();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {blogs.map((blog) => (
        <Link href={blog.id} key={blog.id}>
          {blog.title}
        </Link>
      ))}
    </main>
  );
}
