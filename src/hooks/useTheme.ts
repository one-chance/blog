'use client';

import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { darkMode } from '@/states';

export const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useAtom(darkMode);

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    sessionStorage.setItem('theme', isDarkMode ? 'light' : 'dark');
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
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

      setIsDarkMode(!!e.matches);
    };

    themeMediaQuery.addEventListener('change', handleThemeChange);

    return () => {
      themeMediaQuery.removeEventListener('change', handleThemeChange);
    };
  }, [setIsDarkMode]);

  return toggleTheme;
};
