import { useEffect, useState } from "react";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const [title] = useState("About Us");
  useDocumentTitle(title);

  const { t } = useTranslation();

  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="lg:container mx-auto lg:px-6 px-3">
        <div className="lg:mt-32 mt-28 text-white">
          <h1 className="text-4xl font-extrabold">{t("aboutUs")}</h1>
          <h2 className="my-5 text-xl font-extrabold">{t("innovation")}</h2>
          <p className="text-lg">{t("innovationNote")}</p>
          <h1 className="my-5 text-xl font-extrabold">{t("firstStep")}</h1>
          <p className="text-lg">{t("firstStepNote")}</p>
          <h1 className="my-5 text-xl font-extrabold">{t("ambitious")}</h1>
          <p className="text-lg">{t("ambitiousNote")}</p>
          <h1 className="my-5 text-xl font-extrabold">{t("sustainability")}</h1>
          <p className="text-lg">{t("sustainabilityNote")}</p>
          <h1 className="my-5 text-xl font-extrabold">{t("shape")}</h1>
          <p className="text-lg">{t("shapeNote")}</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
