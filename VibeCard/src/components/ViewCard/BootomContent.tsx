import { deezer, trustpilot, calendly } from "@/assets";
import { baseUrl } from "@/services/request";
import { Data, StyleData } from "@/services/viewCard";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import vCardsJS from "vcards-js";

interface Props {
  styles: StyleData;
  data: Data;
  capture: () => void;
}

const BottomContent = ({ styles, data, capture }: Props) => {
  const { t } = useTranslation();

  const generateVCard = () => {
    const vCard = vCardsJS();

    vCard.firstName = data.full_name;
    vCard.organization = data.company_name;
    vCard.title = data.job_title;
    vCard.email = data.email;
    vCard.namePrefix = data.pronouns;
    vCard.cellPhone = data.phone;
    vCard.note = data.bio;
    vCard.workAddress.countryRegion = data.location;
    // Generate vCard as a string
    const vCardString = vCard.getFormattedString();

    // Create a blob from the vCard string
    const blob = new Blob([vCardString], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);

    // Create a link to download the vCard
    const a = document.createElement("a");
    a.href = url;
    a.download = `${data.full_name}.vcf`;
    a.click();

    // Clean up
    URL.revokeObjectURL(url);
  };

  //  Social Media
  const handleSocialMedia = (clickedIcon: string) => {
    axios
      .post(
        `${baseUrl}/api/v1/cards/click-count?card_url=${
          data.card_url
        }&account_type=${clickedIcon.toLowerCase()}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      )
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  //  Contact
  const handleContact = (phone?: string) => {
    if (phone) {
      navigator.clipboard.writeText(`${phone}`);
    }

    axios
      .post(
        `${baseUrl}/api/v1/cards/click-count?card_url=${data.card_url}&account_type=contacts`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      )
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div>
        {/* Contacts */}
        {styles.contacts.length > 0 && (
          <div
            className={`lg:my-2 my-5 ${
              styles.contacts.length > 0
                ? `grid ${
                    styles.contacts.length + 2 <= 3
                      ? "grid-cols-3"
                      : "grid-cols-5"
                  }  gap-5 my-5`
                : "invisible"
            }`}
          >
            {styles.contacts.map((c) => (
              <div key={c.link} className="my-2">
                {c.icon === "bi-envelope-fill" ? (
                  <a
                    onClick={() => handleContact()}
                    href={`mailto:${c.link}`}
                    className="text-3xl text-center rounded-lg shadow-inner bi-envelope-fill text-white"
                  ></a>
                ) : c.icon === "bi-telephone-fill" ? (
                  <p
                    onClick={() => handleContact(c.link)}
                    className="text-3xl text-center rounded-lg shadow-inner bi-telephone-fill text-green-600 cursor-pointer"
                  ></p>
                ) : (
                  <Link
                    onClick={() => handleContact()}
                    to={`${c.link}`}
                    className={`${c.icon} text-3xl text-center rounded-lg shadow-inner`}
                    style={{
                      color: c.color.replace("bg", "text"),
                    }}
                  ></Link>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Social Media */}
        {styles.socialMedia.length > 0 && (
          <div
            className={`lg:mb-0 mb-5 ${
              styles.socialMedia.length > 0
                ? `grid ${
                    styles.socialMedia.length <= 3
                      ? "grid-cols-3"
                      : "grid-cols-4"
                  }  gap-3`
                : "invisible"
            }`}
          >
            {styles.socialMedia.map((media) => (
              <>
                {media.icon === "trustpilot" ? (
                  <a
                    onClick={() => handleSocialMedia(media.label)}
                    href={
                      media.link.startsWith("http")
                        ? media.link
                        : `https://${media.link}`
                    }
                    target="_blank"
                    className={`flex rounded-md items-center justify-center shadow shadow-zinc-900 h-[52px]`}
                    style={{
                      backgroundColor: media.color,
                    }}
                  >
                    <img
                      src={trustpilot}
                      alt="Trust Pilot"
                      className="w-8 h-8 me-0 pe-0"
                    />
                  </a>
                ) : media.icon === "deezer" ? (
                  <a
                    key={media.icon}
                    onClick={() => handleSocialMedia(media.label)}
                    href={
                      media.link.startsWith("http")
                        ? media.link
                        : `https://${media.link}`
                    }
                    target="_blank"
                    className={`flex rounded-md items-center justify-center shadow shadow-zinc-900 h-[52px]`}
                    style={{
                      backgroundColor: media.color,
                    }}
                  >
                    <img
                      src={deezer}
                      alt="Deezer"
                      className="w-8 h-8 me-0 pe-0"
                    />
                  </a>
                ) : media.icon === "calendly" ? (
                  <a
                    key={media.icon}
                    onClick={() => handleSocialMedia(media.label)}
                    href={
                      media.link.startsWith("http")
                        ? media.link
                        : `https://${media.link}`
                    }
                    target="_blank"
                    className="flex rounded-md items-center justify-center shadow shadow-zinc-900 h-[52px]"
                    style={{
                      backgroundColor: media.color,
                    }}
                  >
                    <img
                      src={calendly}
                      alt="Cacalendly"
                      className="w-8 h-8 me-0 pe-0"
                    />
                  </a>
                ) : (
                  <a
                    key={media.icon}
                    onClick={() => handleSocialMedia(media.label)}
                    title={media.label}
                    href={
                      media.link.startsWith("http")
                        ? media.link
                        : `https://${media.link}`
                    }
                    target="_blank"
                    className={`flex justify-center items-center w-full rounded-md shadow shadow-zinc-900 h-[52px] ${media.icon} text-white text-2xl cursor-pointer`}
                    style={{ backgroundColor: media.color }}
                  ></a>
                )}
              </>
            ))}
          </div>
        )}

        <button
          className={`w-full rounded-lg py-4 mb-8 mt-5 shadow-md font-poppins font-extrabold shadow-zinc-950`}
          onClick={() => {
            generateVCard();
            capture();
          }}
          style={{
            backgroundColor: styles.button.bg_color,
            color: styles.button.text_color,
          }}
        >
          {t("saveContact")}
        </button>
      </div>
    </>
  );
};

export default BottomContent;
