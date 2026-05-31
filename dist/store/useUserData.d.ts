interface AuthState {
    user: string | null;
    email: string | null;
    isAuthenticated: boolean;
    plan: string | null;
    login: (user: string, email: string, plan: string) => void;
    logout: () => void;
}
declare const useAuthStore: import("zustand").UseBoundStore<import("zustand").StoreApi<AuthState>>;
export default useAuthStore;
