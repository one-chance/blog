import { atom } from 'jotai';

export const darkMode = atom(
  typeof window !== 'undefined'
    ? sessionStorage.getItem('theme') === 'dark'
    : false,
);
