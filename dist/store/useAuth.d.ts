interface AuthState {
    email: string | null;
    type: string | null;
    isAuthenticated: boolean;
    login: (email: string, type: string) => void;
    logout: () => void;
}
declare const useAuth: import("zustand").UseBoundStore<import("zustand").StoreApi<AuthState>>;
export default useAuth;
