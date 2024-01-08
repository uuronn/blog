"use client";

import { FormEventHandler } from "react";

export default function Create() {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const title = form.get("title") || "";
    const content = form.get("content") || "";
    console.log("title", title);
    console.log("content", content);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        タイトル
        <input name="title" className="rounded border-2" type="text" />
      </label>
      <label>
        内容
        <textarea name="content" className="rounded border-2" />
      </label>
      <button>送信</button>
    </form>
  );
}
