import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import useDocumentTitle from "@/hooks/useDocumentTitle";
import CardOrders from "../MyOrders/CardOrders";
import WalletOrders from "../MyOrders/WalletOrders";
import { useTranslation } from "react-i18next";

const MyOrders = () => {
  const [title] = useState("Vibecard - My Orders");
  useDocumentTitle(title);

  const { t } = useTranslation();

  const [activeTap, setActiveTap] = useState<string>("cards");

  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />

      <div className="lg:container mx-auto lg:mt-36 mt-24 lg:px-0 px-3">
        {/* Business Cards */}
        <div className="lg:mx-9">
          <p className="text-white lg:text-2xl font-poppins mb-5">
            {t("my-orders-title")}
          </p>

          {/* Taps */}
          <div className="flex gap-x-5 lg:mt-6">
            <button
              onClick={() => setActiveTap("cards")}
              className={`px-10 py-2 rounded lg:text-md text-sm font-poppins shadow-none ${
                activeTap === "cards" ? "btn-bg text-white" : "bg-white"
              }`}
            >
              {t("card")}
            </button>
            <button
              onClick={() => setActiveTap("wallets")}
              className={`px-10 py-2 rounded lg:text-md text-sm font-poppins shadow-none ${
                activeTap === "wallets" ? "btn-bg text-white" : "bg-white"
              }`}
            >
              {t("wallet")}
            </button>
          </div>

          {activeTap === "cards" && <CardOrders />}
          {activeTap === "wallets" && <WalletOrders />}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default MyOrders;
