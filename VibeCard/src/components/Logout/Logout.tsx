import axios from "axios";
import { baseUrl } from "../../services/request";
import useUserData from "../../store/useUserData";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Logout = () => {
  const { t } = useTranslation();

  const { logout } = useUserData();

  const navigate = useNavigate();

  const handleLogout = () => {
    axios
      .post(
        `${baseUrl}/api/v1/auth/logout`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      )
      .then(() => {
        logout();
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <button
      onClick={handleLogout}
      className="font-poppins text-red-500 rounded"
    >
      <span className="bi-box-arrow-right font-poppins"></span> {t("nav8")}
    </button>
  );
};

export default Logout;
