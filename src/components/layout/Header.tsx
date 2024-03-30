'use client';

import Link from 'next/link';
import { useState } from 'react';
import { light, dark, menu } from '@/components/common';
import { useTheme } from '@/hooks';

export default function Header() {
  const toggleTheme = useTheme();

  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-100 dark:bg-gray-900 z-[1000]">
      <div className="flex flex-row justify-between p-4 max-w-[1080px] mx-auto">
        <Link
          href="/"
          className="font-bold text-indigo-800 dark:text-indigo-400"
        >
          ONE-CHANCE
        </Link>

        <div className="flex flex-row gap-4 sm:gap-8">
          <Link
            href="/posts"
            className="hidden sm:block font-semibold dark:text-white"
          >
            Post
          </Link>

          <Link
            href="/about"
            className="hidden sm:block font-semibold dark:text-white"
          >
            About
          </Link>

          <button
            className="hidden text-white dark:block"
            type="button"
            onClick={toggleTheme}
          >
            {light}
          </button>

          <button
            className="text-black dark:hidden"
            type="button"
            onClick={toggleTheme}
          >
            {dark}
          </button>

          <button
            type="button"
            className="block sm:hidden text-black dark:text-white"
            onClick={() => setShowMenu(!showMenu)}
          >
            {menu}
          </button>
        </div>
      </div>

      {showMenu && (
        <div className="absolute flex flex-col bg-gray-100 w-full pb-4 dark:bg-gray-900">
          <Link href="/posts" onClick={() => setShowMenu(false)}>
            <div className="flex flex-row items-center h-10 px-5">
              <span className="flex-1 font-medium dark:text-white">Post</span>
            </div>
          </Link>
          <Link href="/about" onClick={() => setShowMenu(false)}>
            <div className="flex flex-row items-center h-10 px-5">
              <span className="flex-1 font-medium dark:text-white">About</span>
            </div>
          </Link>
        </div>
      )}
    </header>
  );
}
