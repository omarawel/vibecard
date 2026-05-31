import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "../../services/request";
import useAuthStore from "../../store/useUserData";
import Navbar from "../Navbar/Navbar";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import Loader from "../Loader/Loader";
import ShareComponent from "../Share/ShareComponent";
import useSubscription from "@/hooks/useSubscription";
import { useTranslation } from "react-i18next";
import { deGW, enGW } from "@/assets";

interface Card {
  card_url: string;
  job_title: string;
  company_name: string;
  full_name: string;
  main_picture: string;
  pronouns: string;
}

const Dashboard = () => {
  const [title] = useState("Dashboard");
  useDocumentTitle(title);

  const { t, i18n } = useTranslation();

  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { quota } = useSubscription();

  const [deleteCard, setDeleteCard] = useState(false);
  const [deletedCardUrl, setDeletedCardUrl] = useState("");
  const [loader, setLoader] = useState(false);
  const [deleteConfirmed, setDeleteConfirmed] = useState(false);

  const { user } = useAuthStore();
  const [links, setLinks] = useState<Card[]>([]);
  const [copiedUrls, setCopiedUrls] = useState<string[]>([]);
  const [cardUrl, setCardUrl] = useState("");
  const [viewShare, setViewShare] = useState(false);

  // Get Cards
  useEffect(() => {
    axios
      .get(`${baseUrl}/api/v1/cards/my-cards`, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      })
      .then((response) => {
        const cards = response.data.map((card: Card) => ({
          card_url: card.card_url,
          job_title: card.job_title,
          full_name: card.full_name,
          main_picture: card.main_picture,
          pronouns: card.pronouns,
          company_name: card.company_name,
        }));
        setLinks(cards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Handle Copy
  const handleCopy = (card_url: string) => {
    navigator.clipboard
      .writeText(`http://vibecard.de/card/${card_url}`)
      .then(() => {
        setCopiedUrls((prev) => [...prev, card_url]);
        setTimeout(() => {
          setCopiedUrls((prev) => prev.filter((url) => url !== card_url));
        }, 10000);
      });
  };

  // Handle Delete
  const handleDelete = () => {
    setLoader(true);
    axios
      .get(`${baseUrl}/api/v1/cards/delete/${deletedCardUrl}`, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      })
      .then(() => {
        setDeleteConfirmed(true);
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch((err) => {
        setLoader(false);
        console.log(err);
      });
  };

  // Handle Subscription
  const handleManageSubscription = () => {
    axios
      .get(`${baseUrl}/api/v1/payment/manage-subscription`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((response) => {
        window.location.href = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Add to Google Wallet
  const handleGoogleWallet = (cardLink: string) => {
    axios
      .post(
        `${baseUrl}/api/v1/cards/add-to-g-wallet?card_id=${cardLink}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      )
      .then((response) => {
        window.location.href = response.data.link;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Share infos
  const shareTitle = "Vibecard Digital Business Card";
  const description =
    "Check out my new digital business card created with Vibecard!";

  return (
    <>
      {/* Delete Card */}
      {deleteCard && (
        <>
          <div className="overlay top-0 z-[55]"></div>
          <div className="fixed top-0 left-0 flex z-[60] justify-center items-center h-[100dvh] w-full lg:px-0 px-3">
            <div className="lg:w-[35%] w-full hero-bg rounded px-5 py-6 secondary-bg shadow shadow-zinc-900">
              {!deleteConfirmed ? (
                <>
                  <div className="flex justify-between">
                    <h1 className="text-red-500 text-xl">{t("delete-card")}</h1>
                    <button
                      onClick={() => setDeleteCard(false)}
                      className="text-right bi-x-lg text-red-500"
                    ></button>
                  </div>
                  <p className="text-sm  text-white my-5">{t("are-u-sure")}</p>
                  <div className="flex justify-between gap-x-10">
                    <button
                      onClick={() => setDeleteCard(false)}
                      className="w-full bg-sky-600 rounded text-white shadow-none h-12"
                    >
                      {t("cancel")}
                    </button>
                    <button
                      onClick={() => handleDelete()}
                      className="w-full bg-red-500 rounded text-white shadow-none h-12"
                    >
                      {loader ? (
                        <Loader />
                      ) : (
                        <p>
                          {t("delete")}
                          <span className="bi-trash-fill ms-3"></span>
                        </p>
                      )}
                    </button>
                  </div>
                </>
              ) : (
                <div className="text-center mt-4">
                  <p className="bi-check-circle-fill text-green-500 text-4xl"></p>
                  <p className="text-white mt-5 text-xl chakra">
                    {t("delete-success")}
                  </p>
                </div>
              )}
            </div>
          </div>
        </>
      )}

      <Navbar />
      <div className="h-[100vh]">
        <div className="lg:container mx-auto px-3 lg:mt-24 mt-20">
          <div className="flex justify-center lg:mt-20 mt-10 lg:shadow lg:pb-20 lg:rounded">
            <div className="lg:grid grid-cols-10 gap-">
              <div className="lg:col-span-6 lg:px-1 md:p-9 py-5 px-2 ">
                <div className="content-center text-white">
                  <h1 className="lg:text-4xl text-2xl">
                    {t("welcome")} <span className="text-teal-400">{user}</span>
                  </h1>
                  <p className="lg:mb-0 lg:text-3xl text-lg mt-10 mb-5 font-poppins">
                    {t("dashboardDesc")}
                  </p>
                  <div className="lg:flex gap-x-6">
                    <button
                      onClick={() => handleManageSubscription()}
                      className="font-poppins btn-bg shadow rounded lg:w-72 w-full mt-3 lg:mb-0 mb-5"
                    >
                      {t("dashBtn2")}
                    </button>
                    <Link
                      to={"/my-orders"}
                      className="font-poppins btn-bg shadow rounded lg:w-72 w-full mt-3 lg:mb-0 mb-5"
                    >
                      {t("dashBtn3")}
                    </Link>
                  </div>

                  {/* Previous Card */}
                  {links.length > 0 && (
                    <div className="mt-10 shadow">
                      <p className="text-2xl mb-4 py-5 font-poppins">
                        {t("previousCard")}
                      </p>

                      {links.map((link) => (
                        <div
                          key={link.card_url}
                          className="flex justify-between bg-white mb-5 rounded-xl shadow border-gradient-2 border shadow-zinc-900 pt-3"
                        >
                          <div className="relative grid lg:grid-cols-12 grid-cols-2 lg:gap-2 gap-y-7 justify-between w-full text-white lg:p-5 py-3 ps-5 mb-4 shadow-zinc-900">
                            {/* Share Social Medias */}
                            {viewShare && cardUrl === link.card_url && (
                              <div className="absolute lg:right-32 right-0 lg:px-0 px-5 z-50 top-10 lg:-top-20 secondary-bg border-gradient py-1 space-x-2">
                                <div className="flex justify-between px-5 mt-2 mb-4">
                                  <p className="text-sm">Share your card</p>
                                  <button
                                    onClick={() => setViewShare(false)}
                                    className="bi-x text-xl text-red-400"
                                  ></button>
                                </div>

                                <div className="space-x-3 flex mb-3">
                                  <ShareComponent
                                    url={`http://vibecard.de/card/${link.card_url}`}
                                    title={shareTitle}
                                    description={description}
                                  />
                                </div>
                              </div>
                            )}
                            {/* Card Preview */}
                            <div className="w-full lg:col-span-4 col-span-2">
                              <div className="lg:flex lg:border-r border-gray-700 lg:mb-0 mb-4">
                                <img
                                  src={link.main_picture}
                                  alt="Card Image"
                                  className="rounded-full lg:w-14 w-14 h-14 object-cover border-gradient"
                                />
                                <div className="content-center lg:ms-3 text-black">
                                  <p className="font-poppins font-extrabold">
                                    {link.pronouns} {link.full_name}
                                  </p>
                                  <p className="text-xs font-poppins">
                                    {t("job")}:{link.job_title}
                                  </p>
                                  <p className="font-poppins text-xs">
                                    {t("worksAt")} : {link.company_name}
                                  </p>
                                </div>
                              </div>
                            </div>

                            {/* View */}
                            <div className="w-full lg:col-span-2 lg:text-center text-black">
                              <Link
                                to={`/card/${link.card_url}`}
                                className="block hover:text-gray-400 font-poppins"
                              >
                                {t("view") + " "}
                                <span className="bi-arrow-up-right text-sky-900 ms-1"></span>
                              </Link>
                            </div>

                            {/* Copy */}
                            <div className="w-full lg:col-span-2 lg:text-center text-black">
                              <button
                                onClick={() => handleCopy(link.card_url)}
                                className={`font-poppins`}
                              >
                                <span className="bi-clipboard me-2"></span>
                                {copiedUrls.includes(link.card_url)
                                  ? t("copied")
                                  : t("copy")}
                              </button>
                            </div>

                            {/* Share */}
                            <div className="w-full lg:col-span-2 lg:text-center text-black">
                              <button
                                onClick={() => {
                                  setViewShare(true);
                                  setCardUrl(link.card_url);
                                }}
                                className={`font-poppins`}
                              >
                                <span className="bi-share-fill me-2"></span>
                                {t("share")}
                              </button>
                            </div>

                            {/* Edit */}
                            <div className="w-full lg:col-span-2 lg:text-center text-black">
                              <Link
                                to={`/create?edit=${link.card_url}`}
                                className="block font-poppins mb-2 hover:text-gray-400"
                              >
                                <span className="bi-pen-fill text-green-600"></span>{" "}
                                {t("edit")}
                              </Link>
                            </div>

                            <div className="lg:col-span-4 lg:block hidden"></div>

                            {/* Delete */}
                            <div className="w-full lg:col-span-2 lg:text-center">
                              <button
                                onClick={() => {
                                  setDeletedCardUrl(link.card_url);
                                  setDeleteCard(true);
                                }}
                                className="rounded-lg font-poppins hover:text-gray-400 text-black"
                              >
                                <span className="bi-trash-fill text-red-600"></span>{" "}
                                {t("delete")}
                              </button>
                            </div>

                            {/* Google Wallet */}
                            <div className="lg:col-span-4 text-center col-span-2">
                              <button
                                onClick={() =>
                                  handleGoogleWallet(link.card_url)
                                }
                                className="flex justify-center gap-x-2 lg:ps-4"
                              >
                                {i18n.language !== "de" && (
                                  <img
                                    src={enGW}
                                    alt="Google Wallet"
                                    className="w-52"
                                  />
                                )}
                                {i18n.language === "de" && (
                                  <img
                                    src={deGW}
                                    alt="Google Wallet"
                                    className="lg:w-auto w-72"
                                  />
                                )}
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="lg:col-span-4 mb-5">
                <Link to={quota ? "/create" : "/pricing"}>
                  <div className="flex justify-center mx-2 gap-x-10 btn-bg px-0 lg:mx-10 py-20 lg:mt-14 shadow-none">
                    <p className="text-center bi-plus-lg mb-8  bg-white w-10 h-10 rounded-full pt-2 text-black shadow-lg"></p>

                    <p className="text-white font-poppins mt-2">
                      {t("dashBtn")}
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
