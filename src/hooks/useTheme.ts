'use client';

import { useAtom } from 'jotai';
import { useLayoutEffect } from 'react';
import { themeAtom } from '@/states';
import { Theme } from '@/types/Theme';

export const useTheme = () => {
  const [theme, setTheme] = useAtom<Theme>(themeAtom);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';

    document.documentElement.classList.toggle('dark');
    sessionStorage.setItem('theme', newTheme);
    setTheme(newTheme);
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
        setTheme('light');
      } else {
        document.documentElement.classList.add('dark');
        sessionStorage.setItem('theme', 'dark');
        setTheme('dark');
      }
    };

    themeMediaQuery.addEventListener('change', handleThemeChange);

    return () => {
      themeMediaQuery.removeEventListener('change', handleThemeChange);
    };
  }, [setTheme]);

  return toggleTheme;
};
