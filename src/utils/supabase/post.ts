import { createBrowserClient } from '@supabase/ssr';
import { Post } from '@/types';

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
}

export const getPostByUrl = async (title: string): Promise<Post> => {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('post')
    .select('*')
    .eq('url', title)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const upsertPost = async (post: Post) => {
  const supabase = createClient();
  const { data, error } = await supabase.from('post').upsert(post);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const getRecentPosts = async (): Promise<Post[]> => {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('post')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(5);

  if (error) {
    throw new Error(error.message);
  }

  return data ?? [];
};

export const getPosts = async (): Promise<Post[]> => {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('post')
    .select()
    .order('created_at', { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data ?? [];
};

export const getPostsByTag = async (tag: string): Promise<Post[]> => {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('post')
    .select()
    .contains('tag', `{${tag}}`)
    .order('created_at', { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data ?? [];
};

export const getTagList = async (): Promise<string[]> => {
  const supabase = createClient();
  const { data, error } = await supabase.from('tags').select('tag');

  if (error) {
    throw new Error(error.message);
  }

  return data?.map(tags => tags.tag) ?? [];
};
