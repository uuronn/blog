'use client';

import { FormEventHandler } from 'react';
import { BASE_URL } from '~/constant';
import { Button } from '../components/Button';

export default function Create() {
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const title = form.get('title') || '';
    const content = form.get('content') || '';

    const res = await fetch(`${BASE_URL}/blogs`, {
      method: 'POST',
      headers: {
        Authorization: process.env.NEXT_PUBLIC_AUTHORIZATION_KEY as string,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        content,
      }),
    });

    if (res.ok) {
      alert('記事作成できました');
    }
  };

  return (
    <main className="mx-auto mt-20 max-w-7xl px-8">
      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        <label>
          タイトル
          <input name="title" className="w-full rounded border-2" type="text" />
        </label>
        <label>
          内容
          <textarea
            name="content"
            rows={8}
            className="w-full rounded border-2"
          />
        </label>
        <div className="m-auto flex gap-6">
          <Button>送信</Button>
          <Button>下書き</Button>
        </div>
      </form>
    </main>
  );
}
