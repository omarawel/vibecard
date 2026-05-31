import {create} from "zustand";

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
  // isAuthenticated: boolean;
  verified: boolean | null;
  conversions: number | null;
  orders: number | null;
  referrals: number | null;
  sales: number | null;
  login: (
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    facebook: string | null,
    verified: boolean | null,
    twich: string | null,
    instagram: string | null,
    referral_code: string | null,
    youtube: string | null,
    earning: number | null,
    linkedin: string | null,
    tiktok: string | null,
    twitter: string | null,
    website: string | null,
    conversions: number | null,
    orders: number | null,
    referrals: number | null,
    sales: number | null
  ) => void;
  logout: () => void;
}

const useAmbassador = create<AuthState>((set) => ({
  id: null,
  firstName: null,
  lastName: null,
  email: null,
  facebook: null,
  verified: null,
  twich: null,
  instagram: null,
  referral_code: null,
  youtube: null,
  earning: null,
  linkedin: null,
  tiktok: null,
  twitter: null,
  website: null,
  // isAuthenticated: false,
  conversions: null,
  orders: null,
  referrals: null,
  sales: null,
  login: (
    id,
    firstName,
    lastName,
    email,
    facebook,
    verified,
    twich,
    instagram,
    referral_code,
    youtube,
    earning,
    linkedin,
    tiktok,
    twitter,
    website,
    conversions,
    orders,
    sales,
    referrals
  ) =>
    set({
      id,
      firstName,
      lastName,
      email,
      facebook,
      verified,
      twich,
      instagram,
      referral_code,
      youtube,
      earning,
      linkedin,
      tiktok,
      twitter,
      website,
      // isAuthenticated: true,
      conversions,
      orders,
      sales,
      referrals,
    }),

  logout: () =>
    set({
      id: null,
      firstName: null,
      lastName: null,
      email: null,
      facebook: null,
      verified: null,
      twich: null,
      instagram: null,
      referral_code: null,
      youtube: null,
      earning: null,
      linkedin: null,
      tiktok: null,
      twitter: null,
      website: null,
      // isAuthenticated: false,
      conversions: null,
      orders: null,
      sales: null,
      referrals: null,
    }),
}));

export default useAmbassador;
