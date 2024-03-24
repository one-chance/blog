'use client';

import { useAtomValue } from 'jotai';
import Link from 'next/link';
import { useState } from 'react';
import { light, dark, menu } from '@/assets/icons';
import { useTheme, useWindowSize } from '@/hooks';
import { darkMode } from '@/states';

export default function Header() {
  const { width } = useWindowSize();
  const toggleTheme = useTheme();

  const isDarkMode = useAtomValue(darkMode);
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

        <div className="flex flex-row gap-8">
          {width > 600 && (
            <>
              <Link href="/posts" className="font-semibold dark:text-white">
                Post
              </Link>

              <Link href="/about" className="font-semibold dark:text-white">
                About
              </Link>
            </>
          )}

          <div className="flex flex-row gap-2">
            <button type="button" onClick={toggleTheme}>
              {isDarkMode ? light : dark}
            </button>

            {width <= 600 && (
              <button type="button" onClick={() => setShowMenu(!showMenu)}>
                {menu}
              </button>
            )}
          </div>
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
