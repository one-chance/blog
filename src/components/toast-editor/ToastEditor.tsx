'use client';

import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import { Editor, EditorProps as Props } from '@toast-ui/react-editor';
import { useAtomValue } from 'jotai';
import Prism from 'prismjs';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
import '@toast-ui/editor/dist/i18n/ko-kr';
import 'prismjs/themes/prism.css';
import { RefObject, useEffect } from 'react';
import { themeAtom } from '@/states';

type EditorProps = Props & {
  editorRef?: RefObject<Editor>;
};

export default function ToastEditor({ editorRef, ...rest }: EditorProps) {
  const theme = useAtomValue(themeAtom);

  useEffect(() => {
    const editor = document.querySelector('.toastui-editor-defaultUI')!;

    if (theme === 'dark') {
      editor.classList.add('toastui-editor-dark');
    } else {
      editor.classList.remove('toastui-editor-dark');
    }
  }, [theme]);

  return (
    <Editor
      ref={editorRef}
      //   hideModeSwitch
      initialEditType="wysiwyg"
      initialValue=" "
      placeholder="내용을 입력해주세요."
      height="500px"
      language="ko-KR"
      plugins={[colorSyntax, [codeSyntaxHighlight, { highlighter: Prism }]]}
      previewStyle="tab"
      theme={theme}
      {...rest}
    />
  );
}
