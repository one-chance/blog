/* eslint-disable react/no-danger */
import type { Metadata } from 'next';
import { Footer, Header } from '@/components/layout';
import './globals.css';

export const metadata: Metadata = {
  title: 'ONE-CHANCE 개발 블로그',
  description: '코드를 복붙하는 대신 이해하기 위한 기록들',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          id="theme-script"
          dangerouslySetInnerHTML={{
            __html: `
            const theme = sessionStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

            if(theme === 'dark') {
              document.documentElement.classList.add('dark');
              sessionStorage.setItem('theme', 'dark');
            } else {
              document.documentElement.classList.remove('dark');
              sessionStorage.setItem('theme', 'light');
            }
        `,
          }}
        />
      </head>
      <body className="dark:bg-gray-800">
        <Header />
        <main className="w-full min-h-[calc(100vh-56px)] mt-[56px] p-5">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
