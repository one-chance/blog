import dynamic from 'next/dynamic';
import Image from 'next/image';
import { PostComment, PostTitle } from '@/components';
import { getPostByUrl } from '@/utils/supabase';

const DynamicViewer = dynamic(
  () => import('@/components/toast-editor/ToastViewer'),
  {
    ssr: false,
    loading: () => <div className="w-full min-h-[600px]" />,
  },
);

const DynamicPostIndex = dynamic(() => import('@/components/post/PostIndex'), {
  ssr: false,
});

type ParamProps = {
  params: { title?: string };
};

export default async function PostPage({ params }: ParamProps) {
  const title = decodeURIComponent(params.title!);
  const post = await getPostByUrl(title);

  return (
    <div className="flex flex-col max-w-[1080px] mx-auto py-5 gap-10">
      <div className="flex flex-row items-start">
        <div className="flex flex-col flex-1 min-h-screen">
          {!post.thumbnail ? (
            <div className="flex h-80 border justify-center items-center max-w-[760px]">
              <span className="text-3xl">썸네일</span>
            </div>
          ) : (
            <div className="max-w-[760px]">
              <Image src={post.thumbnail} alt="thumbnail" height={320} />
            </div>
          )}

          <PostTitle
            title={post.title}
            abstract={post.abstract}
            createdAt={post.created_at}
          />
          <DynamicViewer initialValue={post.content?.toString() ?? ''} />

          <PostComment />
        </div>

        <DynamicPostIndex />
      </div>
    </div>
  );
}
