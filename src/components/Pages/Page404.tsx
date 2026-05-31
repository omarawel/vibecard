import { Link } from "react-router-dom";
import { notFound } from "../../assets";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { useTranslation } from "react-i18next";

const Page404 = () => {
  const [title] = useState("404:Page not Found");
  useDocumentTitle(title);

  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <div className="flex justify-center h-[100dvh]">
        <div className="mt-44 lg:px-0 px-4">
          <img
            src={notFound}
            alt="not found"
            className="grayscale rounded-md"
          />

          <p className="font-poppins text-3xl font-bold text-white mb-5">
            {t("404")}
          </p>
          <p className="font-poppins text-gray-400">{t("404-2")}</p>
          <Link to="/">
            <div className="mt-5 w-full btn-bg py-3 rounded text-center font-semibold text-sm text-gray-200 shadow shadow-gray-500">
              {t("back-home")}
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Page404;
