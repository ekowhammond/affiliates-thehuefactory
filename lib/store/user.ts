import { User } from '@supabase/supabase-js';
import { create } from 'zustand';
type user = User | null;

type State = {
  user: user;
};

type Action = {
  updateUser: (user: State['user']) => void;
  removeUser: (user: State['user']) => void;
};

// Create your store, which includes both state and (optionally) actions
export const useUserStore = create<State & Action>((set) => ({
  user: null,
  updateUser: (user) => set(() => ({ user: user })),
  removeUser: () => set(() => ({ user: null })),
}));
