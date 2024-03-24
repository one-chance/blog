'use client';

import { Editor } from '@toast-ui/react-editor';
import dynamic from 'next/dynamic';
import { useRef, useState } from 'react';
import { upsertPost } from '@/utils/supabase';
import { signOut } from '@/utils/supabase/auth';

const DynamicEditor = dynamic(
  () => import('@/components/toast-editor/ToastEditor'),
  {
    ssr: false,
    loading: () => <div className="w-full min-h-[600px] border rounded" />,
  },
);

export default function NewPost() {
  const contentRef = useRef<Editor>(null);
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState('');
  const [url, setUrl] = useState('');
  const [abstract, setAbstract] = useState('');

  const onCancel = () => {
    signOut();

    window.location.href = '/';
  };

  const onSave = () => {
    if (title === '') return;

    if (tags === '') return;
    const tagArray = tags.split(' ');

    if (abstract === '') return;

    if (url === '') return;

    const content = contentRef.current?.getInstance().getHTML() || '';
    if (content === '') return;

    const newPost = {
      title,
      tag: tagArray,
      abstract,
      url,
      content: `{${content}}`,
      thumbnail: '',
      created_at: new Date(),
    };

    upsertPost(newPost);
  };

  return (
    <div className="flex flex-col gap-5 py-5">
      <input
        type="text"
        value={title || ''}
        className="min-h-10 border rounded px-2"
        placeholder="제목을 입력해주세요."
        onChange={e => setTitle(e.target.value)}
      />

      <input
        type="text"
        value={abstract || ''}
        className="min-h-10 border rounded px-2"
        placeholder="요약을 입력해주세요."
        onChange={e => setAbstract(e.target.value)}
      />

      <div className="flex flex-row items-center gap-2">
        <input
          type="text"
          value={tags || ''}
          className="flex-1 h-10 border rounded px-2"
          placeholder="썸네일 주소를 입력하세요."
          onChange={e => setTags(e.target.value)}
        />

        <input
          type="text"
          value={tags || ''}
          className="flex-1 h-10 border rounded px-2"
          placeholder="태그를 입력하세요."
          onChange={e => setTags(e.target.value)}
        />

        <input
          type="text"
          value={url || ''}
          className="flex-1 h-10 border rounded px-2"
          placeholder="url을 입력해주세요."
          onChange={e => setUrl(e.target.value)}
        />
      </div>

      <DynamicEditor editorRef={contentRef} />

      <div className="flex flex-row justify-end items-center gap-2">
        <button
          type="button"
          className="w-40 h-10 border rounded dark:text-white"
          onClick={onCancel}
        >
          취소
        </button>
        <button
          type="button"
          className="w-40 h-10 border rounded dark:text-white"
          onClick={onSave}
        >
          업로드
        </button>
      </div>
    </div>
  );
}
