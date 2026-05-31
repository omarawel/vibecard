import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../store/useUserData";
import axios from "axios";
import { baseUrl } from "../../services/request";
import Loading from "../Loading/Loading";

interface ProtectedProps {
  children: React.ReactNode;
}

const Protected = ({ children }: ProtectedProps) => {
  const navigate = useNavigate();
  const { login } = useAuthStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/v1/auth/me`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((response) => {
        login(response.data.username, response.data.email, response.data.plan);
        setLoading(false);
      })
      .catch(() => {
        navigate("/login");
      });
  }, []);

  return <>{loading ? <Loading /> : children}</>;
};

export default Protected;
