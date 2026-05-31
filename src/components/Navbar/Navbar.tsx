import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { nav } from "../../services/navs";
import Menu from "./Menu";
import useAuthStore from "../../store/useUserData";
import axios from "axios";
import { baseUrl } from "../../services/request";
import Loading from "../Loading/Loading";
import Logout from "../Logout/Logout";
import { useTranslation } from "react-i18next";
import { en, de } from "@/assets";

interface Props {
  bulb?: boolean;
}

const Navbar = ({ bulb }: Props) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  // States
  const [isMenu, setIsMenu] = useState(false);
  const { login, user, plan } = useAuthStore();
  const [loading, setLoading] = useState(true);
  const [quota, setQuota] = useState<boolean>(true);

  // Login
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
        setLoading(false);
      });
  }, []);

  // Subscription
  useEffect(() => {
    axios
      .get(`${baseUrl}/api/v1/auth/can-create-card`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then(() => {
        setQuota(true);
      })
      .catch(() => {
        setQuota(false);
      });
  }, []);

  return (
    <>
      {loading && <Loading />}

      <header className={`fixed main-bg lg:py-3 py-2 top-0 z-50 w-full nav-bg`}>
        {!bulb && (
          <div className="right-64 top-10">
            <div className="absolute w-[5%] lg:w-[25%] lg:right-20 -right-40 bulb"></div>
          </div>
        )}

        <div className="lg:container mx-auto flex justify-between">
          <div>
            <div
              className={`flex lg:pe-10 text-white ${user === null && "pe-28"}`}
            >
              {/* Small Device Menu */}
              <div className="lg:hidden">
                <p
                  onClick={() => setIsMenu(true)}
                  className={`lg:hidden font-poppins text-2xl text-teal-950 font-bold pt-2`}
                >
                  <span className="px-3 flex">
                    <span className={`bi-list text-3xl pt-1 text-white`}></span>
                  </span>
                </p>
              </div>

              <div className={`lg:pe-10 text-white py-2`}>
                <Link to={"/"} className={`logo-font lg:text-4xl text-4xl`}>
                  vibecard
                </Link>
              </div>
              <div
                className={`ms-5 lg:inline-block hidden text-white pt-4 space-x-12 px-10`}
              >
                {nav.map((n) => (
                  <Link
                    key={n.id}
                    to={n.path}
                    className={`text-sm text-gray-300 font- `}
                  >
                    {t(n.title)}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:block hidden text-white pt-3">
            <div className="flex">
              {user !== null ? (
                <div className="relative flex gap-x-10">
                  <div className="">
                    <img
                      onClick={() =>
                        changeLanguage(i18n.language === "en" ? "de" : "en")
                      }
                      src={i18n.language === "de" ? en : de}
                      alt="flag"
                      className="w-7 cursor-pointer"
                    />
                  </div>
                  <p
                    onClick={() => setIsMenu(!isMenu)}
                    className="text-center font-bold cursor-pointer text-teal-500 chakra uppercase text-lg"
                  >
                    <span className="bi-person-fill text-xl me-2"></span>
                    {user}
                  </p>

                  {isMenu && (
                    <div className="secondary-bg lg:block shadow shadow-gray-600 hidden absolute z-50 w-44 px-4 py-5 rounded-lg mt-8">
                      <Link
                        to={"/dashboard"}
                        className="block text-md mb-3 hover:text-gray-400 text-sm font-poppins"
                      >
                        {t("nav4")}
                      </Link>

                      <Link
                        to={"/my-orders"}
                        className="block text-md mb-3 hover:text-gray-400 text-sm font-poppins"
                      >
                        {t("dashBtn3")}
                      </Link>

                      {quota ? (
                        <Link
                          to={`/create`}
                          className="block text-md mb-3 hover:text-gray-400 text-sm font-poppins"
                        >
                          {t("nav5")}
                        </Link>
                      ) : (
                        <Link
                          to={`/pricing`}
                          className="block text-md mb-3 hover:text-gray-400 text-sm font-poppins"
                        >
                          {t("nav5")}
                        </Link>
                      )}
                      <Link
                        to={"/setting"}
                        className="block text-md mb-3 hover:text-gray-400 text-sm font-poppins"
                      >
                        {t("nav6")}
                      </Link>
                      {plan !== "free" ? (
                        <Link
                          to={"/insights"}
                          className="block text-md mb-3 hover:text-gray-400 text-sm font-poppins"
                        >
                          {t("nav7")}
                        </Link>
                      ) : (
                        <div className="flex justify-between">
                          <Link
                            to={"/pricing"}
                            className="block text-md mb-3 hover:text-gray-400 text-sm font-poppins"
                          >
                            {t("nav7")}
                          </Link>
                          <p className="font-poppins bg-blue-500 rounded-full w-16 shadow-inner shadow-red-950 h-5 text-center text-sm pt-[1px]">
                            Pro
                          </p>
                        </div>
                      )}
                      <hr className="my-2" />
                      <Logout />
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <div className="me-5">
                    <img
                      onClick={() =>
                        changeLanguage(i18n.language === "en" ? "de" : "en")
                      }
                      src={i18n.language === "de" ? en : de}
                      alt="flag"
                      className="w-7 cursor-pointer"
                    />
                  </div>
                  <Link to={"/login"}>
                    <div className="btn-bg shadow-none p-2 text-sm lowercase first-letter:uppercase rounded px-10">
                      Sign In
                    </div>
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Small device user Icon */}
          <div className="lg:hidden flex mt-1 pt-2">
            <div className="me-3">
              <img
                onClick={() =>
                  changeLanguage(i18n.language === "en" ? "de" : "en")
                }
                src={i18n.language === "de" ? en : de}
                alt="flag"
                className="w-8 cursor-pointer"
              />
            </div>
            {user !== null && (
              <Link to={"/dashboard"}>
                <span className="px-3 flex">
                  <p className={`bi-person-fill text-3xl text-teal-500`}></p>
                </span>
              </Link>
            )}
          </div>
        </div>
      </header>

      {/* Menu */}
      {isMenu && (
        <div className="lg:hidden fixed h-[100dvh] z-50 top-0 w-full secondary-bg animate__animated animate__fadeInLeft">
          <Menu nav={nav} username={user} menu={() => setIsMenu(false)} />
        </div>
      )}
    </>
  );
};

export default Navbar;
