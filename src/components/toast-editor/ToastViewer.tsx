'use client';

import { Viewer, ViewerProps } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
import { useAtomValue } from 'jotai';
import { darkMode } from '@/states';

export default function ToastViewer({ ...rest }: ViewerProps) {
  const isDark = useAtomValue(darkMode);

  const themeProps = isDark ? { theme: 'dark' } : {};

  return (
    <div className="my-10">
      <Viewer {...rest} {...themeProps} />
    </div>
  );
}
