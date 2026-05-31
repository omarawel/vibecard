import { Link } from "react-router-dom";
import { Nav } from "../../services/navs";
import Logout from "../Logout/Logout";
import useAuthStore from "@/store/useUserData";
import { useTranslation } from "react-i18next";

interface Props {
  nav: Nav[];
  menu: () => void;
  username: string | null;
}

const Menu = ({ nav, menu, username }: Props) => {
  const { t } = useTranslation();

  const { plan } = useAuthStore();

  return (
    <>
      <div className="flex justify-between py-3 px-3 z-50">
        <div onClick={() => menu()}>
          <p
            className={`lg:hidden rounded-full border mt-1 border-white font-poppins text-3xl text-teal-950 font-bold`}
          >
            <span className="px-3 flex">
              <span
                className={`bi-x text-xl text-white
              `}
              ></span>
              <span
                className={`text-sm font-light pt-[5px] ps-3 text-white
               `}
              >
                Menu
              </span>
            </span>
          </p>
        </div>

        <div>
          <Link
            to={"/"}
            className={`logo-font lg:me-32 lg:text-2xl text-3xl text-white`}
          >
            vibecard
          </Link>
        </div>

        {username !== null && (
          <div className="lg:hidden md:hidden">
            <Link to={"/dashboard"}>
              <p className={`bi-person-fill text-teal-400 text-3xl`}></p>
            </Link>
          </div>
        )}
      </div>

      {/* Menu Lists */}
      <div className="relative pt-5 px-3 h-[85vh]">
        {nav.map(
          (n) =>
            n.id !== 1 && (
              <Link
                key={n.id}
                to={n.path}
                className="block text-lg text-white pb-2 font-poppins font-extrabold mb-3"
              >
                {t(n.title)}
              </Link>
            )
        )}

        {username !== null && (
          <>
            <Link
              to={"/dashboard"}
              className="block text-white text-lg pb-2 font-poppins font-extrabold mb-3"
            >
              {t("nav4")}
            </Link>

            <Link
              to={"/my-orders"}
              className="block text-white text-lg pb-2 font-poppins font-extrabold mb-3"
            >
              {t("dashBtn3")}
            </Link>

            <Link
              to={"/setting"}
              className="block text-white text-lg pb-2 font-poppins font-extrabold mb-3"
            >
              {t("nav6")}
            </Link>
            {plan !== "free" ? (
              <Link
                to={"/insights"}
                className="block text-white text-lg pb-2 font-poppins font-extrabold mb-3"
              >
                {t("nav7")}
              </Link>
            ) : (
              <div className="flex gap-x-6">
                <Link
                  to={"/pricing"}
                  className="block text-white text-lg pb-2 font-poppins font-extrabold mb-3"
                >
                  {t("nav7")}
                </Link>
                <p className="font-poppins bg-blue-500 rounded-full w-16 shadow-inner shadow-red-950 h-5 text-center text-sm pt-[1px] mt-1 text-white">
                  Pro
                </p>
              </div>
            )}
          </>
        )}

        <div className={`absolute ${username ? "bottom-14" : "top-60"}`}>
          <div className="w-80 main-bg rounded-xl py-8 border border-gray-700 px-10">
            <p className="font-extrabold text-white text-sm">
              <span className="bi-telephone-fill me-5"></span> {t("contact-us")}
            </p>
            <p className="text-xs mt-2 text-gray-200 font-poppins">
              {t("contact-us-note")}
            </p>
            <Link to={"/contact-us"}>
              <p className="bg-sky-900 text-center text-xs mt-5 rounded p-2 shadow shadow-gray-50 text-white">
                {t("contact-us")}
              </p>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 z-50">
          {username === null ? (
            <div className="flex gap-x-3">
              <Link
                to={"/login"}
                className="btn-bg shadow-none py-2 rounded text-white"
              >
                {t("login")}
              </Link>{" "}
              <Link to={"/register"} className="py-2 rounded-full text-white">
                {t("register")}
              </Link>
            </div>
          ) : (
            <Logout />
          )}
        </div>
      </div>
    </>
  );
};

export default Menu;
