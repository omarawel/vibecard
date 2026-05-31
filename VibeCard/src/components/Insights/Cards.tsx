import { deezer, trustpilot, userPic, calendly } from "@/assets";
import { baseUrl } from "@/services/request";
import axios from "axios";
import { useEffect, useState } from "react";
import useAuthStore from "@/store/useUserData";
import { useInsightStore } from "@/store/useInsightStore";
import { useTranslation } from "react-i18next";

interface Card {
  card_url: string;
}

interface Styles {
  font_size: string;
  font_style: string;
  font_color: string;
}

export interface SocialMedia {
  link: string;
  color: string;
  icon: string;
}

export interface BusinessCardData {
  bio: string;
  card_layout: string;
  card_type: string;
  card_url: string;
  company_logo: string;
  company_name: string;
  covor_picture: string;
  email: string;
  full_name: string;
  job_title: string;
  location: string;
  main_picture: string;
  owner: string;
  phone: string;
  pronouns: string;
  qr_code: string;
  social_medias: SocialMedia[] | null;
  styles: {
    pronoun: Styles;
    jobTitle: Styles;
    bio: Styles;
    company: Styles;
    location: Styles;
    name: Styles;
    button: {
      text_color: string;
      bg_color: string;
    };
    cardBg: {
      bg_color: string;
    };
    coverBG: {
      bg_color: string;
    };
    contacts: SocialMedia[];
    socialMedia: SocialMedia[];
  };
  website: string | null;
}

const Cards: React.FC = () => {
  const { t } = useTranslation();

  const { updateActiveCard } = useInsightStore();
  const { user } = useAuthStore();
  const [cards, setCards] = useState<BusinessCardData[]>([]);
  const [cardsLength, setCardsLength] = useState<Card[]>([]);

  const [dataIndex, setDataIndex] = useState(0);

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/v1/cards/my-cards`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((response) => {
        const cardsData: BusinessCardData[] = response.data.map(
          (card: BusinessCardData) => {
            try {
              if (typeof card.styles === "string") {
                card.styles = JSON.parse(card.styles);
              }
            } catch (error) {
              console.error("Error parsing styles:", error);
            }
            return card;
          }
        );
        updateActiveCard(cardsData[0].card_url);
        setCards(cardsData);
        const cardUrl = cardsData.map((card: Card) => ({
          card_url: card.card_url,
        }));
        setCardsLength(cardUrl);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      {cardsLength && cardsLength.length > 0 && (
        <div className="secondary-bg mb-4 rounded text-white p-3">
          <p className="text-2xl font-poppins">
            {t("welcome")} {user} {t("insightTrack1")}
          </p>
          <p className="text-sm font-poppins">
            {t("insightTrack2")} {cardsLength.length} {t("insightTrack3")}
          </p>

          <div className="grid grid-cols-3 mt-5 gap-4">
            {[...Array(cardsLength.length)].map((_, index) => (
              <button
                key={index}
                className={`${
                  index === dataIndex
                    ? "border-gradient text-white"
                    : "btn-bg inline shadow-none"
                }  text-sm p-2`}
                onClick={() => {
                  updateActiveCard(cardsLength[index].card_url);
                  setDataIndex(index);
                }}
              >
                {t("card")} {index + 1}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="flex justify-center sticky top-24 pt-10 secondary-bg lg:pb-10 rounded-2xl overflow-hidden">
        {/* Default or Left */}
        {cards.length > 0 && cards[dataIndex].card_layout === "default" && (
          <div className="lg:w-[60%] w-[92%]">
            <div
              className={`rounded-2xl overflow-hidden shadow-lg shadow-zinc-800 z-0 lg:mb-0 mb-14`}
              style={{
                backgroundColor: cards[dataIndex].styles.cardBg.bg_color,
              }}
            >
              <div
                className={`lg:h-24 h-32 relative flex justify-between z-0 ${
                  cards[dataIndex].styles.coverBG.bg_color !== ""
                    ? cards[dataIndex].styles.coverBG.bg_color ===
                        "gradient-cover" &&
                      `${cards[dataIndex].styles.coverBG.bg_color} z-0`
                    : ""
                }`}
                style={{
                  backgroundColor: cards[dataIndex].styles.coverBG.bg_color,
                }}
              >
                {cards[dataIndex].styles.coverBG.bg_color === "" &&
                  cards[dataIndex].covor_picture && (
                    <img
                      src={cards[dataIndex].covor_picture}
                      alt="cover"
                      className="w-full object-cover
        "
                    />
                  )}
                <div className="absolute lg:top-10 top-16 left-2 lg:w-20 lg:h-20 w-24 h-24 border-[4px] rounded-full border-white overflow-hidden z-0">
                  <img
                    src={
                      cards[dataIndex].main_picture
                        ? cards[dataIndex].main_picture
                        : userPic
                    }
                    alt="user"
                  />
                </div>
                {/* Pronoun and Name */}
                <div className="content-center">
                  <p
                    className={`absolute right-0 me-1 w-48 text-center overflow-hidden text-ellipsis text-nowrap ${
                      cards[dataIndex].styles.name.font_style +
                      " " +
                      cards[dataIndex].styles.name.font_size
                    } ${
                      cards[dataIndex].covor_picture &&
                      "glass-effect text-shadow"
                    }`}
                    style={{ color: cards[dataIndex].styles.name.font_color }}
                  >
                    <span
                      className={` ${
                        cards[dataIndex].styles.pronoun.font_style +
                        " " +
                        cards[dataIndex].styles.pronoun.font_size
                      }`}
                      style={{
                        color: cards[dataIndex].styles.pronoun.font_color,
                      }}
                    >
                      {cards[dataIndex].pronouns &&
                        "(" + cards[dataIndex].pronouns + ")"}{" "}
                    </span>

                    {cards[dataIndex].full_name && cards[dataIndex].full_name}
                  </p>
                </div>
              </div>
              <div className="px-5 mt-10 text-white">
                <div className="relative">
                  {cards[dataIndex].company_logo && (
                    <img
                      src={cards[dataIndex].company_logo}
                      alt="Cover"
                      className="absolute right-0 -top-6 w-14 h-14 rounded-full border-2 bg-white"
                    />
                  )}
                  {/* Job Title */}
                  <p
                    className={`${
                      cards[dataIndex].styles.jobTitle.font_style +
                      " " +
                      cards[dataIndex].styles.jobTitle.font_size
                    } mb-1 overflow-hidden text-ellipsis text-nowrap first-letter:uppercase lg:mt-0 mt-4 ${
                      !cards[dataIndex].job_title && "invisible"
                    } `}
                    style={{
                      color: cards[dataIndex].styles.jobTitle.font_color,
                    }}
                  >
                    {cards[dataIndex].job_title && cards[dataIndex].job_title}
                  </p>
                  {/* Company */}
                  <p
                    className={`${
                      !cards[dataIndex].company_name && "invisible"
                    } ${
                      cards[dataIndex].styles.company.font_style +
                      " " +
                      cards[dataIndex].styles.company.font_size
                    }`}
                    style={{
                      color: cards[dataIndex].styles.company.font_color,
                    }}
                  >
                    {cards[dataIndex].company_name &&
                      "At " + cards[dataIndex].company_name}
                  </p>
                  {/* Tag Line */}
                  <p
                    className={`mt-3 overflow-hidden text-ellipsis text-nowrap first-letter:uppercase ${
                      !cards[dataIndex].bio && "invisible"
                    } ${
                      cards[dataIndex].styles.bio.font_style +
                      " " +
                      cards[dataIndex].styles.bio.font_size
                    }`}
                    style={{ color: cards[dataIndex].styles.bio.font_color }}
                  >
                    {cards[dataIndex].bio && cards[dataIndex].bio}
                  </p>
                  {/* Location */}
                  <p
                    className={`${
                      cards[dataIndex].styles.location.font_style +
                      " " +
                      cards[dataIndex].styles.location.font_size
                    } my-2`}
                    style={{
                      color: cards[dataIndex].styles.location.font_color,
                    }}
                  >
                    <span
                      className="bi-geo-alt-fill me-2"
                      style={{
                        color: cards[dataIndex].styles.location.font_color,
                      }}
                    ></span>

                    {cards[dataIndex].location && cards[dataIndex].location}
                  </p>
                </div>

                {/* Contacts */}
                {cards[dataIndex].styles.contacts.length > 0 && (
                  <div
                    className={`lg:my-2 my-5 ${
                      cards[dataIndex].styles.contacts.length > 0
                        ? `grid ${
                            cards[dataIndex].styles.contacts.length + 2 <= 3
                              ? "grid-cols-3"
                              : "grid-cols-5"
                          }  gap-5 my-5`
                        : "invisible"
                    }`}
                  >
                    {cards[dataIndex].styles.contacts.map((c) => (
                      <p
                        key={c.icon}
                        className={`${c.icon} text-3xl text-center rounded-lg py-2 shadow-inner`}
                        style={{
                          color: c.color.replace("bg", "text"),
                        }}
                      ></p>
                    ))}
                  </div>
                )}

                {/* Social Media */}
                {cards[dataIndex].styles.socialMedia.length > 0 && (
                  <div
                    className={`lg:mb-0 mb-5 ${
                      cards[dataIndex].styles.socialMedia.length > 0
                        ? `grid ${
                            cards[dataIndex].styles.socialMedia.length <= 3
                              ? "grid-cols-3"
                              : "grid-cols-4"
                          }  gap-3`
                        : "invisible"
                    }`}
                  >
                    {cards[dataIndex].styles.socialMedia.map((media) =>
                      media.icon === "deezer" ? (
                        <div
                          key={media.icon}
                          className={`flex rounded-md py-2 justify-center shadow-inner`}
                          style={{
                            backgroundColor: media.color,
                          }}
                        >
                          <img
                            src={deezer}
                            alt="Deezer Logo"
                            className="w-8 h-8 me-0 pe-0"
                          />
                        </div>
                      ) : media.icon === "trustpilot" ? (
                        <div
                          className={`flex rounded-md py-2 justify-center shadow-inner`}
                          style={{
                            backgroundColor: media.color,
                          }}
                        >
                          <img
                            src={trustpilot}
                            alt="Deezer Logo"
                            className="w-8 h-8 me-0 pe-0"
                          />
                        </div>
                      ) : media.icon === "calendly" ? (
                        <div
                          key={media.icon}
                          className={`flex rounded-md py-2 justify-center shadow-inner`}
                          style={{
                            backgroundColor: media.color,
                          }}
                        >
                          <img
                            src={calendly}
                            alt="calendly Logo"
                            className="w-8 h-8 me-0 pe-0"
                          />
                        </div>
                      ) : (
                        <p
                          key={media.icon}
                          className={`${media.icon} text-white text-3xl text-center rounded-md py-2 shadow-inner`}
                          style={{ backgroundColor: media.color }}
                        ></p>
                      )
                    )}
                  </div>
                )}

                <button
                  className={`w-full rounded-lg py-4 mb-8 mt-5 shadow-md font-poppins font-extrabold shadow-zinc-950`}
                  style={{
                    backgroundColor: cards[dataIndex].styles.button.bg_color,
                    color: cards[dataIndex].styles.button.text_color,
                  }}
                >
                  {t("saveContact")}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Centered */}
        {cards.length > 0 && cards[dataIndex].card_layout === "center" && (
          <div className="lg:w-[60%] w-[92%]">
            <div
              className={`rounded-2xl w-full overflow-hidden shadow-lg shadow-zinc-800 lg:mb-0 mb-14`}
              style={{
                backgroundColor: cards[dataIndex].styles.cardBg.bg_color,
              }}
            >
              <div
                className={`lg:h-24 h-32 relative flex justify-between ${
                  cards[dataIndex].styles.coverBG.bg_color !== ""
                    ? cards[dataIndex].styles.coverBG.bg_color ===
                        "gradient-cover" &&
                      `${cards[dataIndex].styles.coverBG.bg_color} z-0`
                    : ""
                }`}
                style={{
                  backgroundColor: cards[dataIndex].styles.coverBG.bg_color,
                }}
              >
                {cards[dataIndex].styles.coverBG.bg_color === "" &&
                  cards[dataIndex].covor_picture && (
                    <img
                      src={cards[dataIndex].covor_picture}
                      alt="cover"
                      className="w-full object-cover
    "
                    />
                  )}

                <div className="absolute lg:top-10 top-16 left-1/3 lg:w-20 lg:h-20 w-24 h-24 border-[4px] rounded-full border-white overflow-hidden">
                  <img
                    src={
                      cards[dataIndex].main_picture
                        ? cards[dataIndex].main_picture
                        : userPic
                    }
                    alt="user"
                  />
                </div>
                {cards[dataIndex].company_logo && (
                  <img
                    src={cards[dataIndex].company_logo}
                    alt="Cover"
                    className="absolute top-20 right-28 w-12 h-12 rounded-full border-2 bg-white"
                  />
                )}
              </div>
              <div className="px-5 mt-10 text-white">
                <div className="relative">
                  {/* Name and Pronoun */}
                  <div className="content-center">
                    {/* Pronoun and Name */}
                    <p
                      className={` text-center overflow-hidden text-ellipsis text-nowrap ${
                        cards[dataIndex].styles.name.font_style +
                        " " +
                        cards[dataIndex].styles.name.font_size
                      } `}
                      style={{ color: cards[dataIndex].styles.name.font_color }}
                    >
                      <span
                        className={` ${
                          cards[dataIndex].styles.pronoun.font_style +
                          " " +
                          cards[dataIndex].styles.pronoun.font_size
                        }`}
                        style={{
                          color: cards[dataIndex].styles.pronoun.font_color,
                        }}
                      >
                        {cards[dataIndex].pronouns &&
                          "(" + cards[dataIndex].pronouns + ")"}{" "}
                      </span>

                      {cards[dataIndex].full_name && cards[dataIndex].full_name}
                    </p>
                  </div>

                  {/* Job Title */}
                  <p
                    className={`${
                      cards[dataIndex].styles.jobTitle.font_style +
                      " " +
                      cards[dataIndex].styles.jobTitle.font_size
                    } mb-1 overflow-hidden text-ellipsis text-nowrap first-letter:uppercase text-center ${
                      !cards[dataIndex].job_title && "invisible"
                    } `}
                    style={{
                      color: cards[dataIndex].styles.jobTitle.font_color,
                    }}
                  >
                    {cards[dataIndex].job_title && cards[dataIndex].job_title}
                  </p>
                  {/* Company */}
                  <p
                    className={`${
                      !cards[dataIndex].company_name && "invisible"
                    } ${
                      cards[dataIndex].styles.company.font_style +
                      " " +
                      cards[dataIndex].styles.company.font_size
                    } text-center`}
                    style={{
                      color: cards[dataIndex].styles.company.font_color,
                    }}
                  >
                    {cards[dataIndex].company_name &&
                      "At " + cards[dataIndex].company_name}
                  </p>
                  {/* Tag Line */}
                  <p
                    className={`mt-3 overflow-hidden text-ellipsis text-nowrap first-letter:uppercase text-center ${
                      !cards[dataIndex].bio && "invisible"
                    } ${
                      cards[dataIndex].styles.bio.font_style +
                      " " +
                      cards[dataIndex].styles.bio.font_size
                    }`}
                    style={{ color: cards[dataIndex].styles.bio.font_color }}
                  >
                    {cards[dataIndex].bio && cards[dataIndex].bio}
                  </p>
                  {/* Location */}
                  <p
                    className={`${
                      cards[dataIndex].styles.location.font_style +
                      " " +
                      cards[dataIndex].styles.location.font_size
                    } my-2 text-center ${!location && "invisible"}`}
                    style={{
                      color: cards[dataIndex].styles.location.font_color,
                    }}
                  >
                    <span
                      className="bi-geo-alt-fill me-2"
                      style={{
                        color: cards[dataIndex].styles.location.font_color,
                      }}
                    ></span>
                    {cards[dataIndex].location && cards[dataIndex].location}
                  </p>
                </div>

                {/* Contacts */}
                {cards[dataIndex].styles.contacts.length > 0 && (
                  <div
                    className={`lg:my-2 my-5 ${
                      cards[dataIndex].styles.contacts.length > 0
                        ? `grid ${
                            cards[dataIndex].styles.contacts.length + 2 <= 3
                              ? "grid-cols-3"
                              : "grid-cols-5"
                          }  gap-5 my-5`
                        : "invisible"
                    }`}
                  >
                    {cards[dataIndex].styles.contacts.map((c) => (
                      <p
                        key={c.icon}
                        className={`${c.icon} text-3xl text-center rounded-lg py-2 shadow-inner`}
                        style={{
                          color: c.color.replace("bg", "text"),
                        }}
                      ></p>
                    ))}
                  </div>
                )}

                {/* Social Media */}
                {cards[dataIndex].styles.socialMedia.length > 0 && (
                  <div
                    className={`lg:mb-0 mb-5 ${
                      cards[dataIndex].styles.socialMedia.length > 0
                        ? `grid ${
                            cards[dataIndex].styles.socialMedia.length <= 3
                              ? "grid-cols-3"
                              : "grid-cols-4"
                          }  gap-3`
                        : "invisible"
                    }`}
                  >
                    {cards[dataIndex].styles.socialMedia.map((media) =>
                      media.icon === "deezer" ? (
                        <div
                          className={`flex rounded-md py-2 justify-center shadow-inner`}
                          style={{
                            backgroundColor: media.color,
                          }}
                        >
                          <img
                            src={deezer}
                            alt="Deezer Logo"
                            className="w-8 h-8 me-0 pe-0"
                          />
                        </div>
                      ) : media.icon === "trustpilot" ? (
                        <div
                          className={`flex rounded-md py-2 justify-center shadow-inner`}
                          style={{
                            backgroundColor: media.color,
                          }}
                        >
                          <img
                            src={trustpilot}
                            alt="Deezer Logo"
                            className="w-8 h-8 me-0 pe-0"
                          />
                        </div>
                      ) : media.icon === "calendly" ? (
                        <div
                          className={`flex rounded-md py-2 justify-center shadow-inner`}
                          style={{
                            backgroundColor: media.color,
                          }}
                        >
                          <img
                            src={calendly}
                            alt="calendly Logo"
                            className="w-8 h-8 me-0 pe-0"
                          />
                        </div>
                      ) : (
                        <p
                          key={media.icon}
                          className={`${media.icon} text-white text-3xl text-center rounded-md py-2 shadow-inner`}
                          style={{ backgroundColor: media.color }}
                        ></p>
                      )
                    )}
                  </div>
                )}

                <button
                  className={`w-full rounded-lg py-4 mb-8 mt-5 shadow-md font-poppins font-extrabold shadow-zinc-950`}
                  style={{
                    backgroundColor: cards[dataIndex].styles.button.bg_color,
                    color: cards[dataIndex].styles.button.text_color,
                  }}
                >
                  {t("saveContact")}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Right */}
        {cards.length > 0 && cards[dataIndex].card_layout === "right" && (
          <div className="lg:w-[60%] w-[92%]">
            <div
              className={`rounded-2xl w-full overflow-hidden shadow-lg shadow-zinc-800 lg:mb-0 mb-10`}
              style={{
                backgroundColor: cards[dataIndex].styles.cardBg.bg_color,
              }}
            >
              <div
                className={`lg:h-24 h-32 relative flex justify-between ${
                  cards[dataIndex].styles.coverBG.bg_color !== ""
                    ? cards[dataIndex].styles.coverBG.bg_color ===
                        "gradient-cover" &&
                      cards[dataIndex].styles.coverBG.bg_color
                    : ""
                }`}
                style={{
                  backgroundColor: cards[dataIndex].styles.coverBG.bg_color,
                }}
              >
                {cards[dataIndex].styles.coverBG.bg_color === "" &&
                  cards[dataIndex].covor_picture && (
                    <img
                      src={cards[dataIndex].covor_picture}
                      alt="cover"
                      className="w-full object-cover
       "
                    />
                  )}

                <div className="absolute lg:top-10 top-16 right-2 lg:w-20 lg:h-20 w-24 h-24 border-[4px] rounded-full border-white overflow-hidden">
                  <img
                    src={
                      cards[dataIndex].main_picture
                        ? cards[dataIndex].main_picture
                        : userPic
                    }
                    alt="user"
                    className=""
                  />
                </div>
                {/* Pronoun and Name */}
                <div className="content-center">
                  <p
                    className={`absolute left-0 w-48 text-center overflow-hidden text-ellipsis text-nowrap ${
                      cards[dataIndex].styles.name.font_style +
                      " " +
                      cards[dataIndex].styles.name.font_size
                    } ${
                      cards[dataIndex].covor_picture &&
                      "glass-effect text-shadow"
                    } `}
                    style={{ color: cards[dataIndex].styles.name.font_color }}
                  >
                    <span
                      className={` ${
                        cards[dataIndex].styles.pronoun.font_style +
                        " " +
                        cards[dataIndex].styles.pronoun.font_size
                      }`}
                      style={{
                        color: cards[dataIndex].styles.pronoun.font_color,
                      }}
                    >
                      {cards[dataIndex].pronouns &&
                        "(" + cards[dataIndex].pronouns + ")"}{" "}
                    </span>

                    {cards[dataIndex].full_name && cards[dataIndex].full_name}
                  </p>
                </div>
              </div>
              <div className="px-5 mt-10 text-white">
                <div className="relative">
                  {cards[dataIndex].company_logo && (
                    <img
                      src={cards[dataIndex].company_logo}
                      alt="Cover"
                      className="absolute left-0 -top-6 w-14 h-14 rounded-full border-2 bg-white"
                    />
                  )}
                  {/* Job Title */}
                  <p
                    className={`${
                      cards[dataIndex].styles.jobTitle.font_style +
                      " " +
                      cards[dataIndex].styles.jobTitle.font_size
                    } mb-1 overflow-hidden text-ellipsis text-nowrap first-letter:uppercase text-end lg:mt-0 mt-4 ${
                      !cards[dataIndex].job_title && "invisible"
                    } `}
                    style={{
                      color: cards[dataIndex].styles.jobTitle.font_color,
                    }}
                  >
                    {cards[dataIndex].job_title && cards[dataIndex].job_title}
                  </p>
                  {/* Company */}
                  <p
                    className={`${
                      !cards[dataIndex].company_name && "invisible"
                    } ${
                      cards[dataIndex].styles.company.font_style +
                      " " +
                      cards[dataIndex].styles.company.font_size
                    } text-end`}
                    style={{
                      color: cards[dataIndex].styles.company.font_color,
                    }}
                  >
                    {cards[dataIndex].company_name &&
                      "At " + cards[dataIndex].company_name}
                  </p>
                  {/* Tag Line */}
                  <p
                    className={`mt-3 overflow-hidden text-ellipsis text-nowrap first-letter:uppercase text-end ${
                      !cards[dataIndex].bio && "invisible"
                    } ${
                      cards[dataIndex].styles.bio.font_style +
                      " " +
                      cards[dataIndex].styles.bio.font_size
                    }`}
                    style={{ color: cards[dataIndex].styles.bio.font_color }}
                  >
                    {cards[dataIndex].bio && cards[dataIndex].bio}
                  </p>
                  {/* Location */}
                  <p
                    className={`${
                      cards[dataIndex].styles.location.font_style +
                      " " +
                      cards[dataIndex].styles.location.font_size
                    } my-2 text-end ${!location && "invisible"}`}
                    style={{
                      color: cards[dataIndex].styles.location.font_color,
                    }}
                  >
                    <span
                      className="bi-geo-alt-fill me-2"
                      style={{
                        color: cards[dataIndex].styles.location.font_color,
                      }}
                    ></span>
                    {cards[dataIndex].location && cards[dataIndex].location}
                  </p>
                </div>
              </div>
              <div className="px-4">
                {/* Contacts */}
                {cards[dataIndex].styles.contacts.length > 0 && (
                  <div
                    className={`lg:my-2 my-5 ${
                      cards[dataIndex].styles.contacts.length > 0
                        ? `grid ${
                            cards[dataIndex].styles.contacts.length + 2 <= 3
                              ? "grid-cols-3"
                              : "grid-cols-5"
                          }  gap-5 my-5`
                        : "invisible"
                    }`}
                  >
                    {cards[dataIndex].styles.contacts.map((c) => (
                      <p
                        key={c.icon}
                        className={`${c.icon} text-3xl text-center rounded-lg py-2 shadow-inner`}
                        style={{
                          color: c.color.replace("bg", "text"),
                        }}
                      ></p>
                    ))}
                  </div>
                )}

                {/* Social Media */}
                {cards[dataIndex].styles.socialMedia.length > 0 && (
                  <div
                    className={`lg:mb-0 mb-5 ${
                      cards[dataIndex].styles.socialMedia.length > 0
                        ? `grid ${
                            cards[dataIndex].styles.socialMedia.length <= 3
                              ? "grid-cols-3"
                              : "grid-cols-4"
                          }  gap-3`
                        : "invisible"
                    }`}
                  >
                    {cards[dataIndex].styles.socialMedia.map((media) =>
                      media.icon === "deezer" ? (
                        <div
                          className={`flex rounded-md py-2 justify-center shadow-inner`}
                          style={{
                            backgroundColor: media.color,
                          }}
                        >
                          <img
                            src={deezer}
                            alt="Deezer Logo"
                            className="w-8 h-8 me-0 pe-0"
                          />
                        </div>
                      ) : media.icon === "trustpilot" ? (
                        <div
                          className={`flex rounded-md py-2 justify-center shadow-inner`}
                          style={{
                            backgroundColor: media.color,
                          }}
                        >
                          <img
                            src={trustpilot}
                            alt="Deezer Logo"
                            className="w-8 h-8 me-0 pe-0"
                          />
                        </div>
                      ) : media.icon === "calendly" ? (
                        <div
                          className={`flex rounded-md py-2 justify-center shadow-inner`}
                          style={{
                            backgroundColor: media.color,
                          }}
                        >
                          <img
                            src={calendly}
                            alt="calendly Logo"
                            className="w-8 h-8 me-0 pe-0"
                          />
                        </div>
                      ) : (
                        <p
                          key={media.icon}
                          className={`${media.icon} text-white text-3xl text-center rounded-md py-2 shadow-inner`}
                          style={{ backgroundColor: media.color }}
                        ></p>
                      )
                    )}
                  </div>
                )}

                <button
                  className={`w-full rounded-lg py-4 mb-8 mt-5 shadow-md font-poppins font-extrabold shadow-zinc-950`}
                  style={{
                    backgroundColor: cards[dataIndex].styles.button.bg_color,
                    color: cards[dataIndex].styles.button.text_color,
                  }}
                >
                  {t("saveContact")}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cards;
