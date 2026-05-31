import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AffiliateMenu from "./AffiliateMenu";
import useAmbassador from "@/store/useAmbassador";
import { useTranslation } from "react-i18next";

const AffiliateNavbar = () => {
  const { t } = useTranslation();

  const { logout } = useAmbassador();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/ambassador");
  };

  const [menu, setMenu] = useState<boolean>(false);

  return (
    <div className="mb-14">
      <nav className="flex justify-between text-white mt-5">
        <div>
          <Link to="/affiliate" className="logo-font text-4xl">
            vibecard
          </Link>
        </div>
        <div className="lg:hidden">
          <button
            onClick={() => setMenu(!menu)}
            className="bi-list text-2xl"
          ></button>
        </div>
        <div className="lg:flex hidden gap-x-10">
          <Link to={"/affiliate/setting"} className="mx-5 text-xl">
            <span className="bi-gear-fill me-1"></span>
            {t("Setting")}
          </Link>
          <p
            onClick={() => handleLogout()}
            className="cursor-pointer text-red-500 text-xl"
          >
            <span className="bi-box-arrow-right me-1"></span>
            Logout
          </p>
        </div>
      </nav>
      {menu && <AffiliateMenu username={"Lorem"} menu={() => setMenu(false)} />}
    </div>
  );
};

export default AffiliateNavbar;
