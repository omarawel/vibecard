import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import Chart from "../Insights/Chart";
import Cards from "../Insights/Cards";
import { useInsightStore } from "@/store/useInsightStore";
import axios from "axios";
import { baseUrl } from "@/services/request";
import History from "../Insights/History";
import DatePicker from "../Insights/DatePicker";
import LinkTaps from "../Insights/LinkTaps";

import * as React from "react";
import { addDays } from "date-fns";
import { DateRange } from "react-day-picker";
import filter from "@/services/filter";
import useAuthStore from "@/store/useUserData";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export interface Insights {
  social_media_name: string;
  clicked_value: number;
}

const Insights = () => {
  const [title] = useState("Insight");
  useDocumentTitle(title);

  const { t } = useTranslation();

  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { plan } = useAuthStore();

  const navigate = useNavigate();

  useEffect(() => {
    if (plan && plan === "free") {
      navigate("/pricing");
    }
  }, []);

  const [fileType, setFileType] = useState<string>("csv");
  const [fileTypeClicked, setFileTypeClicked] = useState<boolean>(false);

  // Zustand
  const { activeCard } = useInsightStore();

  // Insight
  const [cardInsight, setCardInsight] = useState<Insights[]>([]);
  const [totalContact, setTotalContact] = useState(0);
  const [totalCardView, setTotalCardView] = useState(0);
  const [totalSocialMedia, setTotalSocialMedia] = useState(0);
  const [downloadLink, setDownloadLink] = useState<string>("");
  const [viewCardData, setViewCardData] = useState("today");
  const [dropdown, setDropdown] = useState(false);

  // Custom Date
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 20),
  });

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-CA");
  };

  useEffect(() => {
    const fetchData = async () => {
      if (viewCardData === "custom") {
        // alert("custom");
        try {
          const response = await axios.get<Insights[]>(
            `${baseUrl}/api/v1/cards/insights?card_url=${activeCard}&filter=custom&is_card_view=false&cstart_date=${
              date?.from ? formatDate(date.from) : ""
            }&cend_date=${date?.to ? formatDate(date.to) : ""}`,
            {
              headers: {
                "Content-Type": "application/json",
              },
              withCredentials: true,
            }
          );
          // Card View
          const totalCardViewSum = response.data
            .filter((card) => card.social_media_name === "card_view")
            .reduce((sum, card) => sum + card.clicked_value, 0);
          setTotalCardView(totalCardViewSum);

          // // Contacts
          const totalContactSum = response.data
            .filter((card) => card.social_media_name === "contacts")
            .reduce((sum, card) => sum + card.clicked_value, 0);
          setTotalContact(totalContactSum);
          // Social Media
          const totalSocialMediaSum = response.data
            .filter(
              (card) =>
                card.social_media_name !== "contacts" &&
                card.social_media_name !== "card_view"
            )
            .reduce((sum, card) => sum + card.clicked_value, 0);
          setTotalSocialMedia(totalSocialMediaSum);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      } else {
        try {
          const response = await axios.get<Insights[]>(
            `${baseUrl}/api/v1/cards/insights?card_url=${activeCard}&filter=${viewCardData}&view_card=false`,
            {
              headers: {
                "Content-Type": "application/json",
              },
              withCredentials: true,
            }
          );

          // Card Views
          setCardInsight(response.data);
          const totalCardViewSum = response.data
            .filter((card) => card.social_media_name === "card_view")
            .reduce((sum, card) => sum + card.clicked_value, 0);
          setTotalCardView(totalCardViewSum);
          // Contacts
          const totalContactSum = response.data
            .filter((card) => card.social_media_name === "contacts")
            .reduce((sum, card) => sum + card.clicked_value, 0);
          setTotalContact(totalContactSum);
          // Total Social Media
          const totalSocialMediaSum = response.data
            .filter(
              (card) =>
                card.social_media_name !== "contacts" &&
                card.social_media_name !== "card_view"
            )
            .reduce((sum, card) => sum + card.clicked_value, 0);
          setTotalSocialMedia(totalSocialMediaSum);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    if (activeCard) {
      fetchData();
    }
  }, [activeCard, viewCardData]);

  const handleCustom = () => {
    setViewCardData("custom");
  };

  // Export
  useEffect(() => {
    if (activeCard) {
      axios
        .get(
          `${baseUrl}/api/v1/cards/export-insights/${activeCard}?file_format=${fileType}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          setDownloadLink(response.data.url);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [activeCard, fileType]);

  return (
    <>
      <Navbar />

      <div className="lg:container mx-auto lg:px-0 px-3 lg:mt-32 mt-24">
        <div className="lg:grid grid-cols-5 gap-x-14 rounded">
          {/* Cards */}
          <div className="col-span-2 lg:mb-0 mb-10">
            <Cards />
          </div>
          <div className="col-span-3">
            <div className="lg:flex justify-between mb-5">
              <div>
                <div className="flex gap-x-4">
                  <p className="text-white text-sm mb-2 font-poppins">
                    {t("fetchByCalendar")}
                  </p>
                  {plan !== "proPlus" && (
                    <p className="font-poppins bg-blue-500 text-white rounded-full w-20 text-center h-5 text-sm shadow-inner shadow-red-950">
                      Pro+
                    </p>
                  )}
                </div>
                {/* Fetch by date */}
                <div className="lg:flex">
                  <DatePicker date={date} setDate={setDate} />
                  {plan === "proPlus" ? (
                    <button
                      onClick={() => handleCustom()}
                      className="lg:ms-2 lg:mt-0 mt-3 btn-bg shadow-none py-2 rounded text-white text-sm"
                    >
                      {t("fetch")}s
                    </button>
                  ) : (
                    <button
                      disabled
                      className="lg:ms-2 lg:mt-0 mt-3 btn-bg shadow-none py-2 rounded text-white text-sm cursor-not-allowed"
                    >
                      {t("fetch")}
                    </button>
                  )}
                </div>
              </div>

              {/* Filter */}
              <div className="relative lg:mt-0 mt-5">
                <div className="flex gap-x-3">
                  <p className="text-white text-sm mb-2">{t("filter")}</p>
                  {plan !== "proPlus" && (
                    <p className="font-poppins bg-blue-500 text-white rounded-full w-20 text-center h-5 text-sm shadow-inner shadow-red-950">
                      Pro+
                    </p>
                  )}
                </div>
                {plan === "proPlus" ? (
                  <div
                    onClick={() => setDropdown(!dropdown)}
                    className="flex justify-between bg-white border rounded-md w-36 text-center pt-2 pb-1 cursor-pointer px-2"
                  >
                    <p className="first-letter:uppercase text-sm text-gray-700">
                      {filter.map((f) => f.filterBy === viewCardData && f.name)}
                    </p>
                    <p
                      className={`${
                        dropdown ? "bi-caret-up-fill" : "bi-caret-down-fill"
                      } text-gray-700`}
                    ></p>
                  </div>
                ) : (
                  <div className="flex justify-between bg-white border rounded-md w-36 text-center pt-2 pb-1 px-2 cursor-not-allowed">
                    <p className="first-letter:uppercase text-sm text-gray-700">
                      Today
                    </p>
                    <p
                      className={`${
                        dropdown ? "bi-caret-up-fill" : "bi-caret-down-fill"
                      } text-gray-700`}
                    ></p>
                  </div>
                )}
                {dropdown && (
                  <div className="absolute z-50 space-y-1 bg-gray-100 border border-gray-400 rounded w-36 py-3 text-sm ps-2 mt-2 text-gray-900">
                    {filter.map((f) => (
                      <p
                        key={f.id}
                        onClick={() => {
                          setViewCardData(f.filterBy);
                          setDropdown(false);
                        }}
                        className="cursor-pointer hover:text-teal-600"
                      >
                        {t(f.name)}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>
            {/* Export */}
            <div className="mb-5">
              <div className="flex">
                <p className="text-white mb-2 text-sm">Export insights</p>
                {plan !== "proPlus" && (
                  <p className="ms-5 font-poppins bg-blue-500 text-white rounded-full w-20 text-center h-5 text-sm shadow-inner shadow-red-950">
                    Pro+
                  </p>
                )}
              </div>
              <div className="">
                {plan === "proPlus" ? (
                  <div className="flex gap-x-3">
                    <p className="btn-bg p-0 mb-3 shadow-none rounded text-white w-40 py-2">
                      <a
                        href={`https://api.vibecard.de/api/${downloadLink}`}
                        download={`Insights.${fileType}`}
                      >
                        Export <span className="bi-download ms-3"></span>
                      </a>
                    </p>
                    <div className="relative bg-white rounded py-2 h-10 px-4">
                      <p
                        onClick={() => setFileTypeClicked(!fileTypeClicked)}
                        className="cursor-pointer uppercase"
                      >
                        {fileType}{" "}
                        <span className="bi-caret-down-fill text-xs ms-2"></span>
                      </p>
                      {fileTypeClicked && (
                        <div className="bg-white absolute w-full mt-1 left-0 p-1 border rounded shadow">
                          <p
                            onClick={() => {
                              setFileType("csv");
                              setFileTypeClicked(false);
                            }}
                            className="cursor-pointer uppercase"
                          >
                            csv
                          </p>
                          <p
                            onClick={() => {
                              setFileType("pdf");
                              setFileTypeClicked(false);
                            }}
                            className="cursor-pointer uppercase"
                          >
                            pdf
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <p className="btn-bg p-0 mb-3 shadow-none rounded text-white w-40 py-2 cursor-not-allowed">
                    <a className="cursor-not-allowed">
                      Export <span className="bi-download ms-3"></span>
                    </a>
                  </p>
                )}
              </div>
            </div>

            {/* History */}
            <History
              contact={totalContact}
              social={totalSocialMedia}
              view={totalCardView}
            />

            <div className="border-gradient rounded-lg my-2">
              <Chart
                cardChartData={viewCardData}
                contact={totalContact}
                social={totalSocialMedia}
                view={totalCardView}
              />
            </div>

            {/* Link Taps */}
            {activeCard && (
              <LinkTaps cardUrl={activeCard} socialMedia={cardInsight} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Insights;
