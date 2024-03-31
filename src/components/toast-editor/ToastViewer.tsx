'use client';

import { Viewer, ViewerProps } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
import { useAtomValue } from 'jotai';
import { useEffect } from 'react';
import { themeAtom } from '@/states';

export default function ToastViewer({ ...rest }: ViewerProps) {
  const theme = useAtomValue(themeAtom);

  useEffect(() => {
    const viewer = document.getElementById('viewer')!;

    if (theme === 'dark') {
      viewer.firstElementChild?.classList.add('toastui-editor-dark');
    } else {
      viewer.firstElementChild?.classList.remove('toastui-editor-dark');
    }
  }, [theme]);

  return (
    <div id="viewer" className="my-10 min-h-[400px]">
      <Viewer {...rest} theme={theme} />
    </div>
  );
}
