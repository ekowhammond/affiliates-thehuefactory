import { useEffect } from 'react';
import { supabaseClient } from './client';
import { useUserStore } from '@/lib/store/user';
const supabase = supabaseClient();

export function useGetUser() {
  const { updateUser, user, removeUser } = useUserStore((state) => state);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      updateUser(session?.user!);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        removeUser(null);
      }
      updateUser(session?.user!);
    });
  }, []);

  return { user };
}
