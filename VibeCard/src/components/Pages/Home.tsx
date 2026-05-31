import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Home/Hero";
import Footer from "../Footer/Footer";
import { intro, intro2, introPic3, introPic4 } from "../../assets";
import Loading from "../Loading/Loading";
import homeCard from "../../services/homeCard";
import Faq from "../Home/FAQ";
import HeroCard from "../Home/HeroCard";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import Chat from "../ChatBot/Chat";
import Testimonials from "../Home/Testimonials";
import Product from "../Home/Product";
import Cart from "../Cart/Cart";
import { useTranslation } from "react-i18next";
import Companies from "../Home/Companies";
import Steps from "../Home/Steps";

const Home = () => {
  const [title] = useState("Vibecard - Digital Business Cards");
  useDocumentTitle(title);

  const { t } = useTranslation();

  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [loading, setLoading] = useState(true);

  // Loading
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading && <Loading />}
      <Cart home />

      <Chat></Chat>

      <div>
        <Navbar />
        <div className="lg:container mx-auto lg:mt-56 mt-32 lg:pb-32">
          <Hero />
        </div>
      </div>

      {/* Video */}
      <div className="lg:container mx-auto lg:px-0 px-3 lg:mt-0 mt-10">
        <div className="flex justify-center">
          <p className="w-44 bg-teal-500 overflow-hidden text-center p-1 shadow-none rounded-lg text-white font-bold font-poppins text-[15px]">
            {t("video")}
          </p>
        </div>
        <div className="flex justify-center">
          <video
            src={intro}
            className="lg:w-[70%] w-full aspect-video border-gradient lg:h-[70dvh] h-full object-cover lg:rounded-3xl"
            autoPlay
            loop
            playsInline
            muted
          ></video>
        </div>
      </div>

      {/* Create steps */}
      <div className="lg:container mx-auto lg:my-20">
        <p className="text-center text-teal-500 mt-14 text-2xl font-bold font-poppins lg:px-0 px-5">
          {t("how-to-create")}
        </p>
        <div className="grid lg:grid-cols-3 gap-x-5 my-10 lg:px-0 px-3">
          <Steps step="1" title="create-title-1" desc="create-step-1" />
          <Steps step="2" title="create-title-2" desc="create-step-2" />
          <Steps step="3" title="create-title-3" desc="create-step-3" />
        </div>
      </div>

      {/* hero */}
      <div className="relative container mx-auto my-14">
        <HeroCard />
      </div>

      {/* Cards */}
      <div className="border-t border-gray-800 overflow-hidden">
        <div className="lg:container mx-auto">
          <div className="py-1 px-3 lg:px-0">
            <div className="relative right-20 lg:-top-28 -top-40">
              <div className="absolute lg:right-[35em]  right-36 top-40 bulb"></div>
            </div>
            <p className="text-center lg:mt-16 mt-6 mb-8 text-gray-500 font-poppins">
              {t("feature")}
            </p>
            <div className="flex justify-center w-full text-center">
              <p className="text-teal-500 font-poppins font-extrabold lg:text-4xl text-2xl text-center lg:mb-16 mb-10 lg:w-96 w-80">
                {t("featureTitle")}
              </p>
            </div>
            <div className="lg:grid grid-cols-9 gap-x-5">
              {homeCard.map((card) => (
                <div
                  key={card.id}
                  className="col-span-3 border-gradient-2 hover:border hover:border-gray-500 rounded-2xl p-7 text-white lg:mb-5 mb-8 secondary-bg"
                >
                  <img src={card.image} alt="Image" className="w-12 mb-5" />
                  <h1 className="text-xl font-extrabold">{t(card.title)}</h1>
                  <p className="text-md mt-4 text-gray-300 font-poppins">
                    {t(card.note)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="lg:container mx-auto lg:my-20 lg:px-10 px-3">
        {/* Intro 1 */}
        <div className="lg:grid grid-cols-2 overflow-hidden">
          <div className="flex justify-center">
            <img
              src={introPic4}
              alt="Hero"
              className="rounded-lg lg:w-[80%] w-full"
            />
          </div>
          <div className="flex items-center lg:mt-0 my-8">
            <p className="text-white lg:text-2xl font-poppins">
              {t("intro-3-image-note")}
            </p>
          </div>
        </div>

        {/* Intro 2 */}
        <div className="lg:grid grid-cols-2 overflow-hidden">
          {/* Large Device */}
          <div className="lg:flex hidden items-center h-full">
            <p className="text-white lg:text-2xl font-poppins">
              {t("intro-4-image-note")}
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={introPic3}
              alt="Hero"
              className="rounded-lg lg:w-[80%] w-full"
            />
          </div>
          {/* Small Device */}
          <div className="lg:hidden flex items-center h-full my-8">
            <p className="text-white lg:text-2xl font-poppins">
              {t("intro-4-image-note")}
            </p>
          </div>
        </div>
      </div>

      {/* Design steps */}
      <div className="lg:container mx-auto lg:my-20">
        <p className="text-center text-teal-500 lg:mt-14 mt-5 text-2xl font-bold font-poppins lg:px-0 px-5">
          {t("how-to-design")}
        </p>
        <div className="grid lg:grid-cols-2 gap-x-5 my-10 lg:px-0 px-3">
          <Steps step="1" title="design-title-1" desc="design-step-1" />
          <Steps
            step="2"
            title="design-title-2"
            desc="design-step-2"
            desc2="design-step-2-2"
          />
          <Steps step="3" title="design-title-3" desc="design-step-3" />
          <Steps step="4" title="design-title-4" desc="design-step-4" />
        </div>
      </div>

      {/* Products */}
      <div className="border-t border-gray-800 pt-10 overflow-hidden">
        <div className="lg:container mx-auto">
          <div className="relative right-20 lg:-top-28 -top-40">
            <div className="absolute lg:right-[35em] right-36 top-40 bulb"></div>
          </div>
          <div className="flex justify-center w-full text-center">
            <p className="text-teal-500 font-poppins font-extrabold lg:text-4xl text-2xl text-center lg:mb-16 mb-10 lg:w-96 w-80">
              {t("digital")}
            </p>
          </div>
          {/* <Products /> */}
          <Product />
        </div>
      </div>

      {/* Companies */}
      <div className="flex justify-center w-full text-center">
        <p className="font-poppins text-teal-500 font-extrabold text-2xl text-center lg:mb-16 mb-10 w-80">
          {t("trusted-companies")}
        </p>
      </div>
      <div className="bg-white mb-10 py-2">
        <Companies />
      </div>

      <div className="flex justify-center">
        <p className="w-60 bg-teal-500 overflow-hidden text-center p-1 shadow-none rounded-lg text-white font-bold font-poppins text-[14px]">
          {t("sharing-now")}
        </p>
      </div>

      <div className="lg:container mx-auto flex justify-center lg:h-[80vh] w-[100%] object-cover lg:px-0 px-3">
        <div className="rounded overflow-hidden">
          <video
            src={intro2}
            className="w-full aspect-video border-gradient lg:h-[70dvh] h-full object-cover lg:rounded-3xl"
            autoPlay
            loop
            playsInline
            muted
          ></video>
        </div>
      </div>

      {/* Testimonials */}
      <div className="border-t border-gray-800 pt-10 overflow-hidden">
        <div className="lg:container mx-auto">
          <div className="relative right-20 lg:-top-28 -top-40">
            <div className="absolute lg:right-[35em]  right-36 top-40 bulb"></div>
          </div>
          <div className="flex justify-center w-full text-center">
            <p className="font-poppins text-teal-500 font-extrabold lg:text-4xl text-2xl text-center lg:mb-16 mb-10 lg:w-96 w-80">
              {t("testimonials")}
            </p>
          </div>
          {/* <Testimonies /> */}
          <div className=" gap-x-5 lg:px-2 px-3">
            <Testimonials />
          </div>
        </div>
      </div>

      {/* Faq */}
      <div className="mt-16">
        <h1 className="text-center text-2xl text-teal-500 font-poppins font-bold">
          FAQ
        </h1>
        <div className="mt-10 flex justify-center lg:px-0 px-3">
          <div className="lg:w-[60%] w-full">
            <Faq />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
