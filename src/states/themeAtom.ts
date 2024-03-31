import { atom } from 'jotai';
import { Theme } from '@/types';

export const themeAtom = atom<Theme>(
  typeof window !== 'undefined' && sessionStorage.getItem('theme') === 'dark'
    ? 'dark'
    : 'light',
);
