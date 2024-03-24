import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | ONE-CHANCE 개발 블로그',
  description:
    '어떤 문제를 어떻게 해결하여 어떤 타겟에게 어떤 이득을 줄지 고민하는 프로덕트 엔지니어 이원찬입니다.',
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
