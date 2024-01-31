'use client';

import { FormEventHandler } from 'react';
import { Button } from '~/app/_components/Button';
import { BASE_URL } from '~/constant';

export const CreateForm = () => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const title = form.get('title') || '';
    const content = form.get('content') || '';

    fetch(`${BASE_URL}/blog`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        content,
      }),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      <label>
        タイトル
        <input name="title" className="w-full rounded border-2" type="text" />
      </label>
      <label>
        内容
        <textarea name="content" rows={8} className="w-full rounded border-2" />
      </label>
      <div className="m-auto flex gap-6">
        <Button>送信</Button>
        <Button>下書き保存</Button>
      </div>
    </form>
  );
};
