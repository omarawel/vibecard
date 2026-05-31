// ProtectedComponent.tsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../services/request";
import Loading from "../Loading/Loading";
import useAmbassador from "@/store/useAmbassador";

interface ProtectedProps {
  children: React.ReactNode;
}

interface Ambassador {
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
  conversions: number;
  orders: number;
  referrals: number;
  sales: number;
}

const AmbassadorProtected = ({ children }: ProtectedProps) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const { login } = useAmbassador();

  useEffect(() => {
    axios
      .get<Ambassador>(`${baseUrl}/api/v1/ambassador/me`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.verified !== false) {
          login(
            response.data.uid,
            response.data.first_name,
            response.data.last_name,
            response.data.email,
            response.data.facebook,
            response.data.verified,
            response.data.twich,
            response.data.instagram,
            response.data.referral_code,
            response.data.youtube,
            response.data.earnings,
            response.data.linkedin,
            response.data.tiktoc,
            response.data.twitter,
            response.data.website,
            response.data.conversions,
            response.data.orders,
            response.data.sales,
            response.data.referrals
          );
          setLoading(false);
        } else {
          navigate("/ambassador");
        }
      })
      .catch(() => {
        navigate("/ambassador");
      });
  }, []);

  return <>{loading ? <Loading /> : children}</>;
};

export default AmbassadorProtected;
