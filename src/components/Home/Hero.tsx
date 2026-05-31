import { Link } from "react-router-dom";
import Magnetic from "../GsapMagnetic/Magnetic";
import { ceo } from "../../assets";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="lg:grid grid-cols-2 lg:px-0 px-3 gap-10">
      <div className="">
        <h1 className="lg:text-5xl text-3xl font-extrabold text-white">
          {t("intro1") + " "}
          <span className="text-teal-400 rounded-full px-1">
            {" "}
            {t("intro2")}
          </span>{" "}
          {t("intro3")}
          <span className="text-indigo-400 rounded-full px-1">
            {t("intro4")}
          </span>
        </h1>

        <div className="lg:mt-16 mt-14 lg:mb-0 mb-10 lg:w-72 w-52 text-center">
          <Link to="/create">
            <div className="btn-bg py-4 lg:w-72 w-52 lg:text-center rounded-lg shadow-md shadow-zinc-950 hover:shadow-none hover:text-gray-400 transition ease-in-out delay-200 text-white font-extrabold">
              {t("get-started")}
            </div>
          </Link>
        </div>
      </div>

      {/* Hero Card */}
      <div className="flex  justify-center text-white relative">
        {/* <HeroCard /> */}
        <Magnetic>
          <div className="content-center rounded-2xl overflow-hidden">
            <div className="relative bg-zinc-900 px-5 py-6 w-[100%] lg:h-auto h-[95%] text-sm shadow-lg shadow-black border-gradient">
              <p className="lg:text-3xl text-xl logo-font">vibecard</p>
              <div className="grid grid-cols-3">
                <div className="col-span-2 mt-4">
                  <div className="flex mb-3">
                    <img
                      src={ceo}
                      alt="user"
                      className="lg:w-20 lg:h-20 w-14 h-14 rounded-full object-cover"
                    />
                    <span className="ms-6 mt-3 lg:text-3xl text-lg chakra text-white">
                      Mr Omar
                    </span>
                  </div>
                  <p className="text-white le:text-xl text-lg mb-1 chakra">
                    CEO
                  </p>
                  <p className="text-gray-400 my-3">
                    <span className="bi-geo-alt-fill lg:text-md text-sm text-teal-200 font-poppins">
                      {" "}
                      {t("at")} VibeCard
                    </span>
                  </p>
                  <div className="flex gap-x-10 text-white">
                    <p className="bi-envelope lg:text-2xl text-xl"></p>
                    <p className="bi-telephone lg:text-2xl text-xl"></p>
                    <p className="bi-instagram lg:text-2xl text-xl"></p>
                    <p className="bi-facebook lg:text-2xl text-xl"></p>
                  </div>
                </div>
                <div className="p-1 rounded mt-4 bi-qr-code text-white lg:text-[12em] text-[8.5em]"></div>
              </div>
            </div>
          </div>
        </Magnetic>
      </div>
    </div>
  );
};

export default Hero;
