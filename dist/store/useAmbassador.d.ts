interface AuthState {
    id: string | null;
    firstName: string | null;
    lastName: string | null;
    earning: number | null;
    email: string | null;
    youtube: string | null;
    website: string | null;
    twitter: string | null;
    twich: string | null;
    tiktok: string | null;
    referral_code: string | null;
    linkedin: string | null;
    instagram: string | null;
    facebook: string | null;
    verified: boolean | null;
    conversions: number | null;
    orders: number | null;
    referrals: number | null;
    sales: number | null;
    login: (id: string, firstName: string, lastName: string, email: string, facebook: string | null, verified: boolean | null, twich: string | null, instagram: string | null, referral_code: string | null, youtube: string | null, earning: number | null, linkedin: string | null, tiktok: string | null, twitter: string | null, website: string | null, conversions: number | null, orders: number | null, referrals: number | null, sales: number | null) => void;
    logout: () => void;
}
declare const useAmbassador: import("zustand").UseBoundStore<import("zustand").StoreApi<AuthState>>;
export default useAmbassador;
