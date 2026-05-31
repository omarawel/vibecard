import { Link } from "react-router-dom";
import { shop, explore, legal } from "../../services/footer";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "@/services/request";

const Footer = () => {
  const { t } = useTranslation();

  // Subscription
  const [quota, setQuota] = useState<boolean>(true);

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
    <div className="mt-10 border-t border-gray-800 overflow-hidden">
      <div className="relative right-20 lg:-top-40 -top-40">
        <div className="absolute lg:right-[43em]  right-36 top-40 bulb"></div>
      </div>
      <div className="lg:container mx-auto py-10">
        <div className="grid lg:grid-cols-6 md:grid-cols-6 grid-cols-6 gap-x-5 lg:px-0 md:px-3 px-3">
          <div className="relative lg:col-span-3 md:col-span-2 col-span-6">
            <h1 className="text-white text-4xl logo-font">vibecard</h1>
            <p className="text-gray-400 text-sm pe-10 mt-4">
              {t("footer-intro")}
            </p>
            <p className="text-gray-400 text-sm pe-10 mt-2">
              {t("intro3") + " " + t("intro4")}
            </p>
            <div className="flex gap-x-10 my-14">
              <Link
                to="https://www.linkedin.com/company/vibecard/"
                className="text-white text-3xl bi-linkedin"
              ></Link>
              <Link
                to="https://www.instagram.com/vibe_card_r"
                className="text-white text-3xl bi-instagram"
              ></Link>
              <Link
                to="https://www.tiktok.com/@vibecard"
                className="text-white text-3xl bi-tiktok"
              ></Link>
            </div>
            <div className="lg:block hidden absolute bottom-0">
              <p className="text-gray-300 text-xs">
                All right reserved. &copy; vibecard 2024
              </p>
            </div>
          </div>
          {/* Explore */}
          <div className="lg:col-span-1 md:col-span-2 col-span-2 lg:my-0 md:my-0 my-6">
            <h1 className="text-gray-400 text-lg mb-5">{t("explore")}</h1>
            {explore.map((e) =>
              e.path === "/create" ? (
                quota ? (
                  <Link
                    key={e.id}
                    to={e.path}
                    className="block text-gray-200 mb-4 hover:text-gray-500 text-sm"
                  >
                    {t(e.name)}
                  </Link>
                ) : (
                  <Link
                    key={e.id}
                    to={"/pricing"}
                    className="block text-gray-200 mb-4 hover:text-gray-500 text-sm"
                  >
                    {t(e.name)}
                  </Link>
                )
              ) : (
                <Link
                  key={e.id}
                  to={e.path}
                  className="block text-gray-200 mb-4 hover:text-gray-500 text-sm"
                >
                  {t(e.name)}
                </Link>
              )
            )}
          </div>

          {/* Legal */}
          <div className="lg:col-span-1 md:col-span-2 col-span-3 lg:my-0 md:my-0 my-6">
            <h1 className="text-gray-400 text-lg mb-5">{t("legal")}</h1>
            {legal.map((l) => (
              <Link
                key={l.id}
                to={l.path}
                className="block text-gray-200 mb-4 hover:text-gray-500 text-sm"
              >
                {t(l.name)}
              </Link>
            ))}
          </div>
          {/* Shop */}
          <div className="lg:col-span-1 md:col-span-2 col-span-2 lg:my-0 md:my-0 my-6 lg:ms-10">
            <h1 className="text-gray-400 text-lg mb-5">{t("shop")}</h1>
            {shop.map((c) => (
              <Link
                key={c.id}
                to={c.path}
                className="block text-gray-200 mb-4 hover:text-gray-500 text-sm"
              >
                {t(c.name)}
              </Link>
            ))}
          </div>

          <p className="text-gray-300 text-sm mt-8 lg:hidden md:hidden col-span-3">
            All right reserved. &copy; vibecard 2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
