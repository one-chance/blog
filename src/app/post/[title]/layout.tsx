import { Metadata } from 'next';
import { ScrollProgressBar } from '@/components';
import { getPostByUrl } from '@/utils/supabase';

export type ParamProps = {
  params: { title: string };
};

export async function generateMetadata({
  params,
}: ParamProps): Promise<Metadata> {
  const title = decodeURIComponent(params.title);
  const post = await getPostByUrl(title);

  return {
    metadataBase: new URL(`http://localhost:3000`),
    title: post?.title || 'ONE-CHANCE 개발 블로그',
    description: post?.abstract || '코드를 복붙하는 대신 이해하기 위한 기록들',
    openGraph: {
      title: post?.title || 'ONE-CHANCE 개발 블로그',
      description:
        post?.abstract || '코드를 복붙하는 대신 이해하기 위한 기록들',
      images: post?.thumbnail || 'one-chance.svg',
    },
    twitter: {
      title: post?.title || 'ONE-CHANCE 개발 블로그',
      description:
        post?.abstract || '코드를 복붙하는 대신 이해하기 위한 기록들',
      images: post?.thumbnail || 'one-chance.svg',
    },
  };
}

export default function PostLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ScrollProgressBar />
      {children}
    </>
  );
}
