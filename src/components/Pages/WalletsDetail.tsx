import Navbar from "../Navbar/Navbar";
import { Link, useParams } from "react-router-dom";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "@/services/request";
import Loading from "../Loading/Loading";
import { Wallets } from "../Product/Wallets";
import WalletOrder from "../Order/WalletOrder";
import Faq from "../Home/FAQ";
import {
  red1,
  red2,
  red3,
  slide1,
  slide2,
  slide3,
  wall1,
  wall2,
  wall3,
} from "@/assets";
import Cart from "../Cart/Cart";
import { useCartStore } from "@/store/useCartStore";
import { useTranslation } from "react-i18next";
import WalletCards from "../Wallet/WalletCards";

interface Wal {
  wallet: Wallets;
}

const WalletsDetail = () => {
  const [title] = useState("Wallets");
  useDocumentTitle(title);

  const { t } = useTranslation();

  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();

  const [order, setOrder] = useState<boolean>(false);
  const [wallets, setWallets] = useState<Wallets>();
  const [quantity, setQuantity] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [beforeOrderMsg, setBeforeOrderMsg] = useState<boolean>(false);

  const [productNotFound, setProductNotFound] = useState<boolean>(false);

  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    axios
      .get<Wal>(`${baseUrl}/api/v1/products/wallet/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setWallets(response.data.wallet);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setProductNotFound(true);
      });
  }, [id]);

  const handleMinus = () => {
    if (quantity === 1) return;

    setQuantity(quantity - 1);
  };

  return (
    <>
      <Cart />

      {order && (
        <WalletOrder
          id={id ? id : ""}
          img={wallets ? wallets.image : ""}
          quantity={quantity}
          hideModal={() => setOrder(false)}
        />
      )}

      {beforeOrderMsg && (
        <>
          <div className="overlay top-0 z-[55]"></div>
          <div className="fixed top-0 left-0 flex z-[60] justify-center items-center h-[100dvh] w-full lg:px-0 px-3">
            <div className="lg:w-[35%] w-full hero-bg rounded p-6 secondary-bg shadow shadow-zinc-900">
              <p className="chakra mb-5 text-gray-200 text-xl">{t("notice")}</p>
              <p className="font-poppins text-white text-sm">
                {t("before-order-msg")}
              </p>

              <div className="flex justify-between gap-x-4 mt-6">
                <Link to={"/register"}>
                  <p
                    className={`shadow-xl shadow-zinc-900 bg-white text-center pt-3 text-sm rounded h-11 lg:mb-0 mb-2 w-44 font-poppins font-bold`}
                  >
                    {t("create-account")}
                  </p>
                </Link>
                <button
                  onClick={() => {
                    setBeforeOrderMsg(false);
                    setOrder(true);
                  }}
                  className="btn-bg py-2 lg:text-center rounded shadow-md shadow-zinc-950 hover:shadow-none transition ease-in-out delay-200 text-center w-full font-poppins text-white font-bold"
                >
                  {t("order-without-account")}
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {loading && <Loading />}

      <Navbar />

      <div className="lg:px-0 px-2 lg:mt-32 mt-20 lg:mx-36">
        <div className="lg:container mx-auto lg:mt-10 mt-4 lg:secondary-bg rounded overflow-hidden">
          {productNotFound ? (
            <div className="bg-white rounded-xl p-8 my-10">
              <p className="text-2xl font-bold font-poppins">
                {t("product-not-found")}
              </p>
              <p
                className="mt-2
            mb-4 text-gray-500 font-poppins"
              >
                {t("product-not-found-2")}
              </p>
              <Link
                to={"/all-products"}
                className="font-poppins bg-blue-400 text-xs rounded shadow shadow-zinc-900 py-2 px-3 text-white active:shadow-none"
              >
                {t("back-to-product-page")}
              </Link>
            </div>
          ) : (
            <>
              {/* Product Image */}
              <div className="lg:grid grid-cols-2 justify-between">
                <div className="lg:hidden block rounded-xl lg:py-6 mt-5">
                  <p className="lg:text-4xl text-2xl text-white font-extrabold">
                    {wallets?.name}
                  </p>
                </div>
                <div className="pt-8">
                  {id === "3d90e076f13441b3af07b32e4d1e1e26" && wallets && (
                    <WalletCards
                      images={[wallets.image, wall1, wall2, wall3]}
                    />
                  )}

                  {id === "95aaf8c38c8c41d988989b899536ab99" && wallets && (
                    <WalletCards
                      images={[wallets.image, wall1, wall2, wall3]}
                    />
                  )}

                  {id === "00b446a1d7864ce1a480569577a1770e" && wallets && (
                    <WalletCards
                      images={[wallets.image, slide1, slide2, slide3]}
                    />
                  )}

                  {id === "ffa02f0cbf90456f8707978c7d54fc9b" && wallets && (
                    <WalletCards images={[wallets.image, red1, red2, red3]} />
                  )}

                  {id === "3f638a3343514bca88a9e26cddce3a76" && wallets && (
                    <WalletCards images={[wallets.image, red1, red2, red3]} />
                  )}

                  {id === "c5d147cc775848f79e08ba1d90acb1da" && wallets && (
                    <WalletCards images={[wallets.image]} />
                  )}
                </div>
                {/* Ordering */}
                <div className="px-2 main-bg lg:ps-10">
                  <div className="lg:block hidden rounded-xl lg:py-6">
                    <p className="lg:text-3xl text-2xl text-white font-extrabold">
                      {wallets?.name}
                    </p>
                  </div>
                  <p className="text-white  font-poppins font-bold text-xl mt-5">
                    {t("price")} €{wallets?.price}
                  </p>

                  <p className="text-lg mt-5 mb-4 text-gray-400 font-poppins font-bold">
                    {t("size")}{" "}
                    <span className="text-sm font-light font-poppins text-white">
                      {t("sizeDesc")}
                    </span>
                  </p>

                  {/*Quantity */}
                  <p className="mt5 mb-4 text-gray-400"> {t("quantity")}</p>
                  <div className="grid grid-cols-5 border border-gray-800 rounded-xl overflow-hidden lg:w-auto w-full">
                    <div>
                      <button
                        onClick={() => handleMinus()}
                        className="bi-dash bg-black w-full h-full text-white text-2xl"
                      ></button>
                    </div>
                    <div className="col-span-3">
                      <input
                        type="number"
                        className="h-14 border w-full text-center chakra text-3xl text-black focus:outline-none"
                        value={quantity}
                        readOnly
                        onChange={(e) =>
                          setQuantity(Number(e.currentTarget.value))
                        }
                      />
                    </div>
                    <div className="text-center w-full">
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="bi-plus-lg bg-black w-full h-full text-white text-2xl"
                      ></button>
                    </div>
                  </div>

                  <div>
                    <button
                      onClick={() =>
                        addToCart({
                          id: wallets ? wallets.wallet_id : "",
                          quantity,
                        })
                      }
                      className="bg-white bi-cart-fill w-full mt-8 shadow shadow-zinc-900 text-black font-poppins rounded py-3"
                    >
                      <span className="mx-1"></span>
                      {t("addToCart")}
                    </button>
                  </div>

                  <div className="lg:flex justify-between gap-x-10 w-full mt-5">
                    {/* Design */}
                    <div className="w-full lg:mb-0 mb-5">
                      <button
                        onClick={() => setOrder(true)}
                        className="btn-bg w-full shadow text-white font-bold rounded"
                      >
                        {t("order")}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="px-3">
                <p className="lg:mt-20 mt-10 mb-4 text-white text-xl font-poppins font-bold">
                  {t("description")}
                </p>

                {/* Google review description */}
                {id === "c5d147cc775848f79e08ba1d90acb1da" ? (
                  <p className="mt-5 mb-4 text-gray-300 font-poppins leading-relaxed text-">
                    {t("google-review-description")}
                  </p>
                ) : (
                  <p className="mt-5 mb-4 text-gray-300 font-poppins leading-relaxed text-">
                    {t("descriptionNote")}
                  </p>
                )}
              </div>

              {/* Faq */}
              <div className="px-4 mt-10">
                <p className="text-teal-500 text-2xl">FAQ</p>
                <div className="mt-8 flex justify-center">
                  <div className="w-full">
                    <Faq />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default WalletsDetail;
