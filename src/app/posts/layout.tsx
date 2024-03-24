import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Posts | ONE-CHANCE 블로그',
  description: '코드를 복붙하는 대신 이해하기 위한 기록들',
};

export default function PostsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
