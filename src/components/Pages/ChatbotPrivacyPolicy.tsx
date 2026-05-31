import { useEffect, useState } from "react";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useTranslation } from "react-i18next";

const ChatbotPrivacyPolicy = () => {
  const [title] = useState("Chatbot Privacy Policy");
  useDocumentTitle(title);

  const { t } = useTranslation();

  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="lg:container mx-auto lg:px-6 px-3 lg:mt-32 mt-24">
        <div className="mt-8 text-white lg:px-0">
          <h1 className="lg:text-4xl text-2xl font-extrabold mb-5">
            {t("chatbot-privacy-title")}
          </h1>
          <p className="text-lg mb-4">{t("chatbot-privacy-note")}</p>
          <p className="text-lg mb-4">{t("chatbot-privacy-note2")}</p>

          <h1 className="my-5 text-xl font-extrabold">
            {t("chatbot-privacy-title2")}
          </h1>
          <p className="text-lg mb-4">{t("chatbot-privacy-note3")}</p>
          <p className="text-lg mb-4">{t("chatbot-privacy-note4")}</p>
          <p className="text-lg mb-4">{t("chatbot-privacy-note5")}</p>
          <p className="text-lg mb-4">{t("chatbot-privacy-note6")}</p>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ChatbotPrivacyPolicy;
