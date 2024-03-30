'use client';

import { useAtom } from 'jotai';
import { useLayoutEffect } from 'react';
import { darkMode } from '@/states';

export const useTheme = () => {
  const [theme, setTheme] = useAtom(darkMode); // true: dark, false: light

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    sessionStorage.setItem('theme', theme ? 'light' : 'dark');
    setTheme(!theme);
  };

  useLayoutEffect(() => {
    // website's default theme is dark
    const themeMediaQuery: MediaQueryList = window.matchMedia(
      '(prefers-color-scheme: light)',
    );

    const handleThemeChange = (e: MediaQueryList | MediaQueryListEvent) => {
      if (e.matches) {
        document.documentElement.classList.remove('dark');
        sessionStorage.setItem('theme', 'light');
      } else {
        document.documentElement.classList.add('dark');
        sessionStorage.setItem('theme', 'dark');
      }

      setTheme(!!e.matches);
    };

    setTheme(sessionStorage.getItem('theme') === 'dark');
    themeMediaQuery.addEventListener('change', handleThemeChange);

    return () => {
      themeMediaQuery.removeEventListener('change', handleThemeChange);
    };
  }, [setTheme, theme]);

  return toggleTheme;
};
