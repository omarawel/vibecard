import { useTranslation } from "react-i18next";
import { userPic } from "../../../assets";
import { useLayoutStore } from "../../../store/useLayoutStore";

interface Props {
  onClose?: () => void;
}

const Layout = ({ onClose }: Props) => {
  const { t } = useTranslation();
  const { updateLayout } = useLayoutStore();
  return (
    <div>
      <div className="flex justify-between">
        <p className="chakra text-white mb-4">{t("cardLayout")}</p>
        <button
          onClick={onClose}
          className="lg:hidden block bi-x-lg mb-5"
        ></button>
      </div>

      <div className="bg-white rounded p-2 lg:overflow-hidden lg:h-auto h-[75dvh] overflow-y-scroll lg:pb-0">
        <div>
          <p className="chakra text-black">{t("default")}</p>
          <div
            onClick={() => updateLayout("default")}
            className="relative shadow bg-gray-100 shadow-zinc-800 rounded-lg mt-3 cursor-pointer"
          >
            <div className="w-full lg:h-20 h-32 bg-gray-600 rounded ">
              <div className={`h-24 relative flex justify-between p-2 z-0`}>
                <div className="absolute lg:top-10 top-16 lg:h-16 lg:w-16 w-24 h-24 border-[4px] rounded-full border-white overflow-hidden z-0">
                  <img src={userPic} alt="user" />
                </div>
                {/* Pronoun and Name */}
                <div className="content-center lg:mb-2">
                  <p
                    className={`absolute lg:top-10 top-20 right-0 lg:w-36 lg:h-8 w-44 h-10 bg-gray-400 text-center rounded me-2`}
                  ></p>
                </div>
              </div>
            </div>
            <div className="px-5 mt-10 ">
              <div className="relative">
                <img
                  src={userPic}
                  alt="Cover"
                  className="absolute right-0 -top-7 lg:w-14 lg:h-14 w-16 h-16 rounded-full border-2 border-white"
                />
                {/* Job Title */}
                <p
                  className={`mb-1 bg-gray-400 lg:w-44 lg:h-6 w-52 h-10 rounded`}
                ></p>
                {/* Company */}
                <p
                  className={`mb-1 bg-gray-400 lg:w-44 lg:h-6 w-6/2 h-10 rounded`}
                ></p>
                {/* Tag Line */}
                <p
                  className={`mt-3 mb-1 bg-gray-400 lg:w-44 lg:h-6 w-6/2 h-10 rounded`}
                ></p>
                {/* Location */}
                <p
                  className={`my-2 mb-1 bg-gray-400 lg:w-44 lg:h-6 w-6/2 h-10 rounded`}
                ></p>
              </div>
            </div>
            <div className="grid grid-cols-5 lg:ps-3 ps-6 mt-6 pb-5">
              <p className="bi-envelope-fill lg:text-3xl text-4xl lg:text-gray-400 text-gray-500"></p>
              <p className="bi-telegram lg:text-3xl text-4xl lg:text-gray-400 text-gray-500"></p>
              <p className="bi-whatsapp lg:text-3xl text-4xl lg:text-gray-400 text-gray-500"></p>
              <p className="bi-globe lg:text-3xl text-4xl lg:text-gray-400 text-gray-500"></p>
              <p className="bi-telephone-fill lg:text-3xl text-4xl lg:text-gray-400 text-gray-500"></p>
            </div>
          </div>

          {/* Right */}
          <p className="mt-5 chakra text-black">{t("right")}</p>
          <div
            onClick={() => updateLayout("right")}
            className="relative bg-gray-100 shadow shadow-zinc-800 rounded-lg mt-3 cursor-pointer"
          >
            <div className="w-full lg:h-20 h-32 bg-gray-600 rounded ">
              <div className={`h-24 relative flex justify-between p-2 z-0`}>
                <div className="absolute right-2 lg:top-10 top-16 lg:h-16 lg:w-16 w-24 h-24 border-[4px] rounded-full border-white overflow-hidden z-0">
                  <img src={userPic} alt="user" />
                </div>
                {/* Pronoun and Name */}
                <div className="content-center mb-2">
                  <p
                    className={`absolute left-2 lg:top-10 top-20 lg:w-36 lg:h-8 w-44 h-10 bg-gray-400 text-center rounded`}
                  ></p>
                </div>
              </div>
            </div>
            <div className="px-5 mt-10 text-white">
              <div className="relative">
                <img
                  src={userPic}
                  alt="Cover"
                  className="absolute left-0 -top-7 lg:w-14 lg:h-14 w-16 h-16 rounded-full border-2 border-white"
                />
                {/* Job Title */}
                <p
                  className={`mb-1 bg-gray-400 lg:w-44 lg:h-6 w-52 h-10 lg:ms-0 ms-[4.2em] rounded`}
                ></p>
                {/* Company */}
                <p
                  className={`mb-1 bg-gray-400 lg:w-44 lg:h-6 w-6/2 h-10  rounded`}
                ></p>
                {/* Tag Line */}
                <p
                  className={`mt-3 mb-1 bg-gray-400 lg:w-44 lg:h-6 w-6/2 h-10  rounded`}
                ></p>
                {/* Location */}
                <p
                  className={`my-2 mb-1 bg-gray-400 lg:w-44 lg:h-6 w-6/2 h-10  rounded`}
                ></p>
              </div>
            </div>
            <div className="grid grid-cols-5 lg:ps-3 ps-6 mt-6 pb-5">
              <p className="bi-envelope-fill lg:text-3xl text-4xl lg:text-gray-400 text-gray-500"></p>
              <p className="bi-telegram lg:text-3xl text-4xl lg:text-gray-400 text-gray-500"></p>
              <p className="bi-whatsapp lg:text-3xl text-4xl lg:text-gray-400 text-gray-500"></p>
              <p className="bi-globe lg:text-3xl text-4xl lg:text-gray-400 text-gray-500"></p>
              <p className="bi-telephone-fill lg:text-3xl text-4xl lg:text-gray-400 text-gray-500"></p>
            </div>
          </div>

          {/* Center */}
          <p className="mt-5 chakra text-black">{t("center")}</p>
          <div
            onClick={() => updateLayout("center")}
            className="relative bg-gray-100 shadow shadow-zinc-800 rounded-lg mt-3 cursor-pointer mb-5"
          >
            <div className="w-full lg:h-20 h-32 bg-gray-600 rounded">
              <div className={`h-24 relative flex justify-between p-2 z-0`}>
                <div className="absolute lg:top-10 lg:left-20 lg:w-16 lg:h-16 top-10 w-24 h-24 left-28 border-[4px] rounded-full border-white overflow-hidden z-0">
                  <img src={userPic} alt="userPic" />
                </div>
                <img
                  src={userPic}
                  alt="Cover"
                  className="absolute lg:right-20 lg:top-20 lg:w-10 lg:h-10 w-14 h-14 right-24 top-28 rounded-full border-2 border-white"
                />
              </div>
            </div>
            <div className="px-5 mt-5 text-white">
              <div className="relative">
                {/* Pronoun and Name */}
                <p
                  className={`bg-gray-400 lg:w-44 lg:h-6 w-6/2 h-10 text-center rounded mt-12 mb-2`}
                ></p>
                {/* Job Title */}
                <p
                  className={`mb-1 bg-gray-400 lg:w-44 lg:h-6 w-6/2 h-10 rounded`}
                ></p>
                {/* Company */}
                <p
                  className={`mb-1 bg-gray-400 lg:w-44 lg:h-6 w-6/2 h-10 rounded`}
                ></p>
                {/* Tag Line */}
                <p
                  className={`mb-1 bg-gray-400 lg:w-44 lg:h-6 w-6/2 h-10 rounded`}
                ></p>
                {/* Location */}
                <p
                  className={`my-2 mb-1 bg-gray-400 lg:w-44 lg:h-6 w-6/2 h-10 rounded`}
                ></p>
              </div>
            </div>
            <div className="grid grid-cols-5 lg:ps-3 ps-6 mt-6 pb-5">
              <p className="bi-envelope-fill lg:text-3xl text-4xl lg:text-gray-400 text-gray-500"></p>
              <p className="bi-telegram lg:text-3xl text-4xl lg:text-gray-400 text-gray-500"></p>
              <p className="bi-whatsapp lg:text-3xl text-4xl lg:text-gray-400 text-gray-500"></p>
              <p className="bi-globe lg:text-3xl text-4xl lg:text-gray-400 text-gray-500"></p>
              <p className="bi-telephone-fill lg:text-3xl text-4xl lg:text-gray-400 text-gray-500"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
