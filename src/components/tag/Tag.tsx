'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';

type TagProps = {
  text: string;
  readonly?: boolean;
};

export default function Tag({ text, readonly }: TagProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const tag = searchParams.get('tag');

  const handleClick = () => {
    if (tag !== text) {
      router.push(`${pathname}?tag=${text}`);
    } else {
      router.push(pathname);
    }
  };

  return readonly ? (
    <span className="text-sm px-2 py-1">#{text}</span>
  ) : (
    <button
      type="button"
      className={`border-gray-600 rounded-xl px-2 py-1 text-sm ${tag === text ? 'bg-blue-600 text-white' : ''} text-gray-600 dark:text-gray-200`}
      onClick={handleClick}
    >
      #{text}
    </button>
  );
}
