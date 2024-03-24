import { createClient } from '@/utils/supabase';

export const signIn = async (password: string) => {
  const supabase = createClient();
  const { error } = await supabase.auth.signInWithPassword({
    email: 'admin@one-chance.dev',
    password,
  });

  if (error) {
    return false;
  }

  return true;
};

export const signOut = async () => {
  const supabase = createClient();
  const { error } = await supabase.auth.signOut();

  if (error) {
    return false;
  }

  return true;
};
