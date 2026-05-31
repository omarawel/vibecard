import { baseUrl } from "@/services/request";
import { Data, StyleData } from "@/services/viewCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { Insights } from "../Pages/Insights";
import { useTranslation } from "react-i18next";
import { deezer, trustpilot, calendly } from "@/assets";

interface Props {
  cardUrl: string | null;
  socialMedia: Insights[];
}

const LinkTaps = ({ cardUrl, socialMedia }: Props) => {
  const [data, setData] = useState<Data>();
  const [styles, setStyles] = useState<StyleData>();

  const { t } = useTranslation();

  useEffect(() => {
    if (cardUrl) {
      axios
        .get(`${baseUrl}/api/v1/cards/card/${cardUrl}`)
        .then((response) => {
          setData(response.data);
          setStyles(JSON.parse(response.data.styles));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [cardUrl]);

  // Get social media link clicked amount
  const getClickCount = (label: string) => {
    const account = socialMedia?.find(
      (social) => social.social_media_name === label
    );
    return account ? account.clicked_value : 0;
  };

  return (
    <div className="col-span-3 secondary-bg text-white shadow rounded mt-5">
      <div className="grid grid-cols-12 mb-6 pb-3 border-b border-gray-200 p-4">
        <div className="col-span-2">
          <h1 className="lg:text-lg text-sm">{t("link")}</h1>
        </div>
        <div className="lg:col-span-4 col-span-4">
          <h1 className="lg:text-lg text-sm">{t("name")}</h1>
        </div>
        <div className="lg:col-span-5 col-span-4">
          <h1 className="lg:text-lg text-sm">{t("job")}</h1>
        </div>
        <div className="lg:col-span-1 col-span-2">
          <h1 className="lg:text-lg text-sm">{t("taps")}</h1>
        </div>
      </div>
      <div>
        {styles?.socialMedia.map((s) => (
          <div
            key={s.icon}
            className="grid lg:grid-cols-12 grid-cols-12 bg-white text-black mb-2 rounded px-4 pt-3"
          >
            <div className="lg:col-span-2 col-span-2 mb-4">
              {s.icon === "deezer" ? (
                <img src={deezer} className="w-11 rounded" alt="deezer" />
              ) : s.icon === "trustpilot" ? (
                <img
                  src={trustpilot}
                  className="w-11 rounded"
                  alt="trustpilot"
                />
              ) : s.icon === "calendly" ? (
                <img src={calendly} className="w-11 rounded" alt="calendly" />
              ) : (
                <span
                  className={`${s.icon} lg:text-4xl text-xl rounded p-1`}
                  style={{ color: s.color }}
                ></span>
              )}
            </div>
            <div className="lg:col-span-4 col-span-4">
              <p className="lg:text-lg text-xs">{data?.full_name}</p>
            </div>
            <div className="lg:col-span-5 col-span-4">
              <p className="lg:text-lg text-xs">{data?.job_title}</p>
            </div>
            <div className="lg:col-span-1 col-span-2">
              <p className="text-xl">{getClickCount(s.label)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LinkTaps;
