import { PostList, Tag } from '@/components';
import { getPosts, getPostsByTag, getTagList } from '@/utils/supabase';

type ParamProps = {
  searchParams: { tag: string };
};

export default async function PostsPage({ searchParams }: ParamProps) {
  const tags = await getTagList();
  const posts = searchParams.tag
    ? await getPostsByTag(searchParams.tag)
    : await getPosts();

  return (
    <div className="flex flex-col w-full max-w-[800px] py-5 gap-10 mx-auto">
      <div className="flex flex-col gap-2">
        <span className="text-xl font-bold dark:text-white">태그</span>

        <div className="flex flex-row flex-wrap gap-2">
          {tags?.map(tag => <Tag key={tag} text={tag} />)}
        </div>
      </div>

      <hr />

      <PostList list={posts} />
    </div>
  );
}
