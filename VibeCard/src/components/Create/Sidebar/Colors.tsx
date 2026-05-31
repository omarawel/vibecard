import BackgroundColor from "./BackgroundColor";
import TextColor from "./TextColor";
// Zustand store
import { useTextColorStore } from "../../../store/useTextColorStore";
import { useCardColorStore } from "../../../store/useCardColorStore";
import { useCoverColorStore } from "../../../store/useCoverColorStore";
import { useState } from "react";
import { texts } from "./Texts";
import { useTranslation } from "react-i18next";

interface Props {
  onClose?: () => void;
}

const Colors = ({ onClose }: Props) => {
  const [dropdown, setDropdown] = useState(false);
  const [view, setView] = useState("Pronoun");

  const { t } = useTranslation();

  const { company, jobTitle, location, name, pronoun, tagLine, button } =
    useTextColorStore();

  const { cardColorBg } = useCardColorStore();
  const { coverColorBg } = useCoverColorStore();

  return (
    <>
      {/* Background */}
      <div className="flex justify-between">
        <p className="chakra text-white mb-4">{t("cardBg")}</p>
        <button
          onClick={onClose}
          className="lg:hidden block bi-x-lg mb-5"
        ></button>
      </div>
      <div className="lg:overflow-hidden lg:h-auto h-[75dvh] overflow-y-scroll lg:pb-0 pb-3">
        <BackgroundColor
          bgColors={cardColorBg}
          cardType="card"
          colorPicker={false}
        />

        {/* Cover Background */}
        <p className="chakra text-white mb-3">{t("coverBg")}</p>
        <BackgroundColor bgColors={coverColorBg} cardType="cover" colorPicker />

        {/* Button Color */}
        <p className="chakra text-white mb-3">{t("btnBgC")}</p>
        <BackgroundColor
          bgColors={button.color}
          cardType="button"
          colorPicker={false}
        />
        <p className="chakra text-white mb-3">{t("btnTextC")}</p>
        <TextColor name={"button"} bg={button.font} />

        {/* Text Colors */}
        <div
          className={`relative text-sm mb-4 border-teal-500 shadow shadow-stone-300 rounded-lg ${
            dropdown && "lg:h-64"
          }`}
        >
          <div
            onClick={() => setDropdown(!dropdown)}
            className="cursor-pointer bg-white text-black rounded-lg "
          >
            <p className="px-2 py-2 chakra text-lg">{t("chooseT")}</p>
            <p
              className={`${
                dropdown ? "bi-caret-up-fill" : "bi-caret-down-fill"
              } absolute top-3 right-3 text-lg`}
            ></p>
          </div>
          {dropdown && (
            <div
              className={`absolute bg-white w-full mt-1 rounded px-2 py-3 shadow-md shadow-zinc-900 space-y-1 z-10`}
            >
              {texts.map((text) => (
                <p
                  onClick={() => {
                    setView(text.title);
                    setDropdown(false);
                  }}
                  key={text.title}
                  className={`${
                    view === text.title && "text-teal-900 text-xl"
                  } hover:text-gray-400 w-full cursor-pointer chakra text-lg text-black`}
                >
                  {t(text.translate)}
                </p>
              ))}
            </div>
          )}

          {/* Pronoun */}
          {view === "pronoun" && (
            <TextColor name={"pronoun"} bg={pronoun.color} title={"pronoun"} />
          )}
          {/* Name */}
          {view === "name" && (
            <TextColor name={"name"} bg={name.color} title={"name"} />
          )}
          {/* Job Title */}
          {view === "jobTitle" && (
            <TextColor
              name={"jobTitle"}
              bg={jobTitle.color}
              title={"Job Title"}
            />
          )}
          {/* Location */}
          {view === "location" && (
            <TextColor
              name={"location"}
              bg={location.color}
              title={"location"}
            />
          )}
          {/* Company */}
          {view === "company" && (
            <TextColor name={"company"} bg={company.color} title={"company"} />
          )}
          {/* Tag Title */}
          {view === "tagLine" && (
            <TextColor name={"tagLine"} bg={tagLine.color} title={"bio"} />
          )}
        </div>
      </div>
    </>
  );
};

export default Colors;
