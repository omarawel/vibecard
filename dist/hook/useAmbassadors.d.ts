export interface Ambassadors {
    first_name: string;
    last_name: string;
    email: string;
    tiktoc: string;
    twich: string;
    instagram: string;
    facebook: string;
    twitter: string;
    youtube: string;
    linkedin: string;
    website: string;
    earnings: number;
    uid: string;
    verified: boolean;
    referral_code: string;
}
declare const useAmbassadors: () => {
    activeAmbassadors: Ambassadors[];
    pendingAmbassadors: Ambassadors[];
    loading: boolean;
};
export default useAmbassadors;
