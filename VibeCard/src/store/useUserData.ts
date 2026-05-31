import { create } from "zustand";

interface AuthState {
  user: string | null;
  email: string | null;
  isAuthenticated: boolean;
  plan: string | null;
  login: (user: string, email: string, plan: string) => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  user: null,
  email: null,
  isAuthenticated: false,
  plan: null,

  login: (user, email, plan) =>
    set({ user, email, plan, isAuthenticated: true }),
  logout: () =>
    set({ user: null, email: null, plan: null, isAuthenticated: false }),
}));

export default useAuthStore;
