import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import { free, pricingInfo, pro, proPlus } from "@/services/pricing";
import axios from "axios";
import { baseUrl } from "@/services/request";
import Loading from "../Loading/Loading";
import useSubscription from "@/hooks/useSubscription";
import useAuthStore from "@/store/useUserData";
import { useTranslation } from "react-i18next";
import Loader from "../Loader/Loader";

interface Plan {
  pro: { price: string; plan: "pro"; price_id: string };
  proPlus: { price: string; plan: "pro+"; price_id: string };
}

const Pricing = () => {
  const [title] = useState("Pricing");
  useDocumentTitle(title);

  const { user } = useAuthStore();

  const { t } = useTranslation();

  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { quota } = useSubscription();

  const { plan, isAuthenticated } = useAuthStore();

  const [subscription, setSubscription] = useState<Plan>();
  const [loading, setLoading] = useState<boolean>(true);
  const [changeFor, setChangeFor] = useState<string>("");
  const [changeSuccess, setChangeSuccess] = useState<boolean>(false);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    axios
      .get<Plan>(`${baseUrl}/api/v1/dashboard/subscription-plan`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setSubscription(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Handle new subscription
  const handleSubscribe = (id: string) => {
    if (!isAuthenticated) {
      window.location.href = "/login";
      return;
    }

    const subscriptionPlan = plan && plan === "free" ? false : true;

    axios
      .post(
        `${baseUrl}/api/v1/payment/subscribe?price_id=${id}&change_plan=${subscriptionPlan}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      )
      .then((response) => {
        window.location.href = response.data.url;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Handle Change Subscription
  const handleChangeSubscription = (id: string) => {
    if (!isAuthenticated) {
      window.location.href = "/login";
      return;
    }

    setLoader(true);

    const subscriptionPlan = plan && plan === "free" ? false : true;

    axios
      .post(
        `${baseUrl}/api/v1/payment/subscribe?price_id=${id}&change_plan=${subscriptionPlan}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      )
      .then(() => {
        setChangeSuccess(true);
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {loading && <Loading />}

      {/* Delete Card */}
      {changeFor !== "" && (
        <>
          <div className="overlay top-0 z-[55]"></div>
          <div className="fixed top-0 left-0 flex z-[60] justify-center items-center h-[100dvh] w-full lg:px-0 px-3">
            <div className="lg:w-[35%] w-full hero-bg rounded px-5 py-6 secondary-bg shadow shadow-zinc-900">
              {!changeSuccess ? (
                <>
                  <div className="flex justify-between">
                    <h1 className="text-gray-300 text-xl">
                      {t("change-plan")}
                    </h1>
                    <button
                      onClick={() => setChangeFor("")}
                      className="text-right bi-x-lg text-red-500"
                    ></button>
                  </div>
                  <p className="text-sm  text-white my-5">{t("change-msg")}</p>
                  <div className="flex justify-between gap-x-10">
                    <button
                      onClick={() => setChangeFor("")}
                      className="w-full bg-sky-600 rounded text-white shadow-none h-12"
                    >
                      {t("cancel")}
                    </button>
                    <button
                      onClick={() =>
                        handleChangeSubscription(
                          changeFor && changeFor === "proPlus"
                            ? subscription
                              ? subscription.pro.price_id
                              : ""
                            : subscription
                            ? subscription.proPlus.price_id
                            : ""
                        )
                      }
                      className="w-full bg-green-500 rounded text-white shadow-none h-12"
                    >
                      {loader ? (
                        <Loader />
                      ) : (
                        <p>
                          {t("change")}
                          <span className="bi-trash-fill ms-3"></span>
                        </p>
                      )}
                    </button>
                  </div>
                </>
              ) : (
                <div className="text-center mt-4">
                  <p className="bi-check-circle-fill text-green-500 text-4xl"></p>
                  <p className="text-white mt-5 chakra">
                    {t("change-success")}
                  </p>
                </div>
              )}
            </div>
          </div>
        </>
      )}

      <Navbar />

      <div className="lg:container mx-auto lg:mt-36 mt-28 px-2">
        <h1 className="lg:text-4xl text-2xl lg:text-center font-extrabold text-white ps-2">
          {t("pricingNote")}
        </h1>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-5 lg:my-29 md:my-20 my-10 lg:px-20 px-2">
          {/* Basic */}
          <div className="border border-gray-600 rounded-xl lg:px-10 px-5 lg:mb-0 mb-4 py-6 text-white">
            <p className="text-2xl font-extrabold mb-5">{t("basic")}</p>
            <p className="text-gray-500">{t("freePlanNote")}</p>
            <div className="py-10 text-center">
              <h1 className="text-2xl font-extrabold my-4">{t("free")}</h1>

              {plan !== "free" ? (
                <Link
                  to={!user ? "/login" : quota ? "/create" : "/dashboard"}
                  className="text-center py-3 btn-bg shadow shadow-zinc-900 text-white rounded chakra"
                >
                  {t("createNow")}
                </Link>
              ) : plan === "free" && quota ? (
                <Link
                  to={!user ? "/login" : "/create"}
                  className="text-center py-3 btn-bg shadow shadow-zinc-900 text-white rounded chakra"
                >
                  {t("createNow")}
                </Link>
              ) : (
                <Link
                  to={!user ? "/login" : "/dashboard"}
                  className="text-center py-3 btn-bg shadow shadow-zinc-900 text-white rounded chakra"
                >
                  {t("createNow")}
                </Link>
              )}
            </div>
            {free.map((f) => (
              <div key={f.id} className="flex gap-x-2">
                <p className="text-center text-lg bi-check-circle-fill text-white rounded-full"></p>{" "}
                <p className="mb-3 lg:text-md text-sm pt-1">{t(f.feature)}</p>
              </div>
            ))}
          </div>

          {/* Pro */}
          <div className="relative">
            <div className="absolute lg:-top-10 h-40 bg-teal-500 rounded-t-xl text-white uppercase">
              <p className="pt-3 px-5 text-sm text-black">{t("popular")}</p>
            </div>
            <div className="relative z-10 border-2 border-teal-500 rounded-xl lg:px-10 px-5 lg:mb-0 lg:mt-0 mt-14 mb-4 py-6 text-white secondary-bg">
              <p className="text-2xl font-extrabold mb-5">{t("pro")}</p>
              <p className="text-gray-500">{t("proPlanNote")}</p>
              <div className="py-10 text-center my-4 w-full">
                <div className="flex justify-center gap-x-10 mb-4">
                  <h1 className="text-2xl font-extrabold ">
                    €{subscription?.pro.price}
                  </h1>
                  <p className="text-sm chakra py-2">{t("perMonth")}</p>
                </div>

                {/* If Plan is Pro */}
                {plan === "pro" && (
                  <button className="text-center w-full bg-gray-500  cursor-not-allowed py-3 px-10 shadow shadow-zinc-900 text-gray-300 rounded chakra">
                    {t("already-in-this-plan")}
                  </button>
                )}

                {/* If Plan is ProPlus */}
                {plan === "proPlus" && (
                  <button
                    onClick={() => setChangeFor("proPlus")}
                    className="text-center w-full py-3 btn-bg shadow shadow-zinc-900 text-white rounded chakra"
                  >
                    {t("change-to-this-plan")}
                  </button>
                )}

                {/* IF PLan is Free */}
                {plan === "free" && (
                  <button
                    onClick={() =>
                      handleSubscribe(
                        subscription ? subscription.pro.price_id : ""
                      )
                    }
                    className="text-center w-full py-3 btn-bg shadow shadow-zinc-900 text-white rounded chakra"
                  >
                    {t("subscribe")}
                  </button>
                )}
              </div>
              <p className="mb-3 text-teal-500">{t("proPlan")}</p>
              {pro.map((p) => (
                <div key={p.id} className="flex gap-x-2">
                  <p className="h-5 w-5 text-center text-lg bi-check-circle-fill text-teal-500 rounded-full"></p>{" "}
                  <p className="mb-3 lg:text-md text-sm pt-1">{t(p.feature)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pro Plus*/}
          <div className="border border-gray-600 rounded-xl lg:px-10 px-5 lg:mb-0 mb-4 py-6 text-white">
            <p className="text-2xl font-extrabold mb-5">{t("proPlus")}</p>
            <p className="chakra text-gray-600">{t("proPlusPlanNote")}</p>
            <div className="py-10 text-center my-4">
              <div className="flex justify-center gap-x-10 mb-4">
                <h1 className="text-2xl font-extrabold ">
                  €{subscription?.proPlus.price}
                </h1>
                <p className="text-sm chakra py-2">{t("perMonth")}</p>
              </div>

              {/* If Plan is ProPlus */}
              {plan === "proPlus" && (
                <button className="text-center w-full bg-gray-500  cursor-not-allowed py-3 px-10 shadow shadow-zinc-900 text-gray-300 rounded chakra">
                  {t("already-in-this-plan")}
                </button>
              )}

              {/* If Plan is Free */}
              {plan === "free" && (
                <button
                  onClick={() =>
                    handleSubscribe(
                      subscription ? subscription.proPlus.price_id : ""
                    )
                  }
                  className="text-center w-full btn-bg py-3 px-10 shadow shadow-zinc-900 text-white rounded chakra"
                >
                  {t("subscribe")}
                </button>
              )}

              {/* If Plan is Pro */}
              {plan === "pro" && (
                <button
                  onClick={() => setChangeFor("pro")}
                  className="text-center w-full btn-bg py-3 px-10 shadow shadow-zinc-900 text-white rounded chakra"
                >
                  {t("change-to-this-plan")}
                </button>
              )}
            </div>
            <p className="mb-3 text-indigo-500">{t("proPlan")}</p>

            {proPlus.map((pp) => (
              <div key={pp.id} className="flex gap-x-2">
                <p className="h-5 w-5 text-center text-lg bi-check-circle-fill text-indigo-500 rounded-full"></p>{" "}
                <p className="mb-3 lg:text-md text-sm pt-1">{t(pp.feature)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Table  */}
        <div className="grid grid-cols-4 border-b border-gray-600 text-white pb-5 mb-10 lg:mx-10 mx-2">
          <div></div>
          <div className="text-center">
            <p className="lg:text-2xl text-sm font-extrabold">{t("free")}</p>
          </div>
          <div className="text-center">
            <p className="lg:text-2xl text-sm font-extrabold text-teal-500">
              {t("pro")}
            </p>
            <p className="lg:text-md text-xs text-gray-400 font-poppins">
              €{subscription?.pro.price}
            </p>
          </div>
          <div className="text-center">
            <p className="lg:text-2xl text-sm font-extrabold text-violet-500">
              {t("proPlus")}
            </p>
            <p className="lg:text-md text-xs text-gray-400 font-poppins">
              €{subscription?.proPlus.price}
            </p>
          </div>
        </div>

        {pricingInfo.map((pi) => (
          <div
            key={pi.id}
            className="grid grid-cols-4 text-white mb-10 lg:px-10 px-2"
          >
            <div>
              <p className="lg:text-lg text-xs">{t(pi.title)}</p>
            </div>
            <div className="grid grid-cols-2 w-16 lg:ms-32 md:ms-20 ms-10 text-white">
              <p className={`${pi.value1.icon} lg:text-2xl text-sm`}> </p>
              <p className="lg:text-lg text-sm font-poppins">
                {pi.value1.value !== 0 && pi.value1.value}{" "}
              </p>
            </div>
            <div className="grid grid-cols-2 text-teal-500 w-16 lg:ms-32 md:ms-20 ms-10 ">
              <p className={`${pi.value2.icon} lg:text-2xl text-sm`}> </p>
              <p className="lg:text-lg text-sm font-poppins">
                {pi.value2.value !== 0 && pi.value2.value}{" "}
              </p>
            </div>
            <div className="grid grid-cols-2 text-violet-500 w-16 lg:ms-32 md:ms-20 ms-10">
              <p className={`${pi.value3.icon} lg:text-2xl text-sm`}> </p>
              <p className="lg:text-lg text-sm font-poppins">
                {pi.value3.value !== 0 && pi.value3.value}{" "}
              </p>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default Pricing;
