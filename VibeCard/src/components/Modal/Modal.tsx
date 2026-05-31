import { Link } from "react-router-dom";
import "./modals.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface Props {
  link: string;
  // onModal: (val: boolean) => void;
}

const Modal = ({ link }: Props) => {
  const [copy, setCopy] = useState("copy-link");
  const { t } = useTranslation();

  const handleCopy = (card_url: string) => {
    navigator.clipboard
      .writeText(`vibe-card.vercel.app/card/${card_url}`)
      .then(() => {
        setCopy("copied");
      });
  };

  return (
    <div>
      <div className="overlay top-0 z-50"></div>
      <div className="fixed top-0 left-0 flex z-50 justify-center items-center h-[100dvh] w-full lg:px-0 px-3">
        <div className="lg:w-[35%] w-full main-bg rounded px-5 py-10 shadow shadow-zinc-900">
          <div className="flex justify-between mb-5">
            <h1 className="text-white lg:text-xl">{t("card-created")}</h1>
            <Link
              to={"/dashboard"}
              className="bi-x-lg text-xl text-red-500"
            ></Link>
          </div>
          <div className="lg:flex justify-between gap-x-10">
            <p
              onClick={() => handleCopy(link)}
              className="bg-black rounded w-full text-center text-white text-sm shadow shadow-teal-500 py-3 cursor-pointer"
            >
              <span className="bi-clipboard text-lg me-4"></span>
              {t(copy)}
            </p>
            <Link
              to={`/card/${link}`}
              className="w-full btn-bg rounded text-white cursor-pointer shadow lg:mt-0 mt-2"
            >
              {t("preview-card")}
              <span className="bi-arrow-up-right ms-3"></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
