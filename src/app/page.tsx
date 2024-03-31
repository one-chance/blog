import Link from 'next/link';
import { PostList } from '@/components';
import { getRecentPosts } from '@/utils/supabase';

export default async function HomePage() {
  const posts = await getRecentPosts();

  return (
    <div className="flex flex-col jusitfy-center max-w-[800px] w-full py-5 gap-10 mx-auto">
      <div className="flex flex-col justify-center w-full min-h-40 gap-3 border-b mx-auto pb-10">
        <span className="text-sm sm:text-base font-medium text-center dark:text-white">
          코드를 복붙하는 대신 이해하기 위한 기록들
        </span>

        <h1 className="text-2xl sm:text-3xl font-bold text-center dark:text-white">
          ONE-CHANCE 개발 블로그
        </h1>
      </div>

      <PostList list={posts} />

      <Link
        href="/posts"
        className="w-40 h-12 rounded text-center py-3 border mx-auto dark:text-white dark:border-gray-600"
      >
        글 목록
      </Link>
    </div>
  );
}
