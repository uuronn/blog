'use client';

import { FormEventHandler, useContext } from 'react';
import { Button } from '~/app/components/Button';
import { AuthContext } from '~/contexts/AuthContext';

export const CreateForm = () => {
  const { authUser, isLoad } = useContext(AuthContext);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const title = form.get('title') || '';
    const content = form.get('content') || '';

    console.log('title', title);
    console.log('content', content);

    // const token = await authUser?.getIdToken();

    // fetch(`${BASE_URL}/blogs`, {
    //   method: 'POST',
    //   headers: {
    //     Authorization: 'Bearer ' + token,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     title,
    //     content,
    //   } as Blog),
    // });
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
