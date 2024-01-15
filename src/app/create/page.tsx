'use client';

import { FormEventHandler } from 'react';
import { BASE_URL } from '~/constant';

export default function Create() {
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const title = form.get('title') || '';
    const content = form.get('content') || '';

    const res = await fetch(`${BASE_URL}/blogs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        content,
      }),
    });
    if (res.ok) {
      console.log('create successfully');
    }
  };

  return (
    <main>
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
    </main>
  );
}
