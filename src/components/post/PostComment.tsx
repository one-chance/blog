'use client';

import Giscus from '@giscus/react';
import { useAtomValue } from 'jotai';
import { darkMode } from '@/states';

export default function PostComment() {
  const isDark = useAtomValue(darkMode);

  return (
    <div className="w-full min-h-[400px] mt-10">
      <Giscus
        id="comments"
        repo="one-chance/blog"
        repoId="R_kgDOLlEkPQ"
        category="Comments"
        categoryId="DIC_kwDOLlEkPc4CeNT_"
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme={isDark ? 'dark' : 'light'}
        lang="ko"
        loading="lazy"
      />
    </div>
  );
}
