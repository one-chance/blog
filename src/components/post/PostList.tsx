import { PostPreview } from '@/components';
import { Post } from '@/types';

type PostListProps = {
  list: Post[];
};

export default async function PostList({ list }: PostListProps) {
  return (
    <div className="flex flex-col gap-5 max-w-[800px] w-full">
      {list.map(post => (
        <PostPreview
          key={post.url}
          url={post.url}
          title={post.title}
          abstract={post.abstract}
          createdAt={post.created_at}
          thumbnail={post.thumbnail}
        />
      ))}
    </div>
  );
}
