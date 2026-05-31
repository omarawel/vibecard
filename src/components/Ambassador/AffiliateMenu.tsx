import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useAmbassador from "@/store/useAmbassador";

interface Props {
  username: string | null;
  menu: () => void;
}

const AffiliateMenu = ({ username, menu }: Props) => {
  const { t } = useTranslation();

  const { logout } = useAmbassador();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/ambassador");
  };

  return (
    <div className="fixed z-50 w-full h-full main-bg top-0 left-0 px-2">
      <div className="flex justify-between text-white mt-5 pe-6 ps-3">
        <div>
          <Link to="/" className="logo-font text-3xl">
            vibecard
          </Link>
        </div>
        <div className="lg:hidden">
          <button onClick={() => menu()} className="bi-x-lg text-2xl"></button>
        </div>
      </div>
      {/* Taps */}
      <div className="ms-3">
        <p className="mt-8 mb-5 text-2xl font-bold text-teal-500">
          <span className="bi-person-fill font-bold me-2"></span>
          {username}
        </p>

        <hr className="me-6 mb-5 border border-gray-700" />

        {/* Menu Lists */}
        <div className="relative h-[620px] text-white">
          <Link to={"/affiliate/setting"} className="text-lg">
            <span className="bi-gear-fill me-1"></span>
            {t("Setting")}
          </Link>

          <p
            onClick={() => handleLogout()}
            className="cursor-pointer text-red-500 text-lg mt-5"
          >
            <span className="bi-box-arrow-right me-1"></span>
            Logout
          </p>
        </div>
      </div>
    </div>
  );
};

export default AffiliateMenu;
