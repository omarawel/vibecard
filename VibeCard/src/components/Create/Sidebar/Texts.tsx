import { useState } from "react";
import "../fonts.css";
import { useTextColorStore } from "../../../store/useTextColorStore";
import FontStylesSize from "./FontStylesSize";
import { t } from "i18next";

export const texts = [
  { title: "pronoun", translate: "pronoun" },
  { title: "name", translate: "name" },
  { title: "location", translate: "location" },
  { title: "jobTitle", translate: "jobTitle" },
  { title: "tagLine", translate: "bio" },
  { title: "company", translate: "company" },
];

interface Props {
  onClose?: () => void;
}

const Texts = ({ onClose }: Props) => {
  const [dropdown, setDropdown] = useState(false);
  const [view, setView] = useState("pronoun");

  const { pronoun, company, jobTitle, name, tagLine, location } =
    useTextColorStore();

  return (
    <>
      <div className="flex justify-between">
        <p className="chakra text-white mb-4">{t("textStyles")}</p>
        <button
          onClick={onClose}
          className="lg:hidden block bi-x-lg mb-5"
        ></button>
      </div>

      <div className="z-50 lg:overflow-hidden lg:h-auto h-[75dvh] overflow-y-scroll lg:pb-0 pb-5">
        <div className="relative text-sm border-teal-500 shadow shadow-stone-300 rounded-lg">
          <div
            onClick={() => setDropdown(!dropdown)}
            className="bg-white cursor-pointer text-black rounded-lg"
          >
            <p className="px-2 py-2 chakra text-lg">{t("chooseT")} </p>
            <p
              className={`${
                dropdown ? "bi-caret-up-fill" : "bi-caret-down-fill"
              } absolute top-2 right-3`}
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
                  } hover:text-gray-400 w-full cursor-pointer chakra text-lg first-letter:uppercase text-black`}
                >
                  {t(text.translate)}
                </p>
              ))}
            </div>
          )}
        </div>

        {view === "pronoun" && (
          <>
            <FontStylesSize
              defaultFontStyle={pronoun.font}
              view={view}
              defaultFontSize={pronoun.size}
            />
          </>
        )}
        {view === "name" && (
          <>
            <FontStylesSize
              defaultFontStyle={name.font}
              view={view}
              defaultFontSize={name.size}
            />
          </>
        )}
        {view === "company" && (
          <>
            <FontStylesSize
              defaultFontStyle={company.font}
              view={view}
              defaultFontSize={company.size}
            />
          </>
        )}
        {view === "tagLine" && (
          <>
            <FontStylesSize
              defaultFontStyle={tagLine.font}
              view={view}
              defaultFontSize={tagLine.size}
            />
          </>
        )}
        {view === "location" && (
          <>
            <FontStylesSize
              defaultFontStyle={location.font}
              view={view}
              defaultFontSize={location.size}
            />
          </>
        )}
        {view === "jobTitle" && (
          <>
            <FontStylesSize
              defaultFontStyle={jobTitle.font}
              view={view}
              defaultFontSize={jobTitle.size}
            />
          </>
        )}
      </div>
    </>
  );
};

export default Texts;
