import { useState } from "react";
import { fontSize, fonts } from "../../../services/fonts";
import { State, useTextColorStore } from "../../../store/useTextColorStore";
import { t } from "i18next";

interface Props {
  defaultFontStyle: string;
  defaultFontSize: string;
  view: keyof State;
}

const FontStylesSize = ({ view, defaultFontSize, defaultFontStyle }: Props) => {
  const [fontStyle, setFontStyle] = useState({
    style: "font-poppins",
    name: "Poppins",
  });

  const { updateFont, updateSize } = useTextColorStore();

  const handleFontStyle = (
    style: string,
    name: string,
    element: keyof State
  ) => {
    updateFont(element, style);

    setFontStyle({
      ...fontStyle,
      style: style,
      name: name,
    });
  };

  return (
    <>
      {/* Font Styles */}
      <div className="flex my-5 text-sm ms-1">
        <p className="first-letter:uppercase text-teal-400 chakra text-lg">
          {t(view)}
        </p>
        <p className="ms-2 text-white chakra"> {t("fontStyle")}</p>
      </div>

      <div className="bg-white w-full rounded p-2">
        {fonts.map((font) => (
          <p
            key={font.name}
            onClick={() =>
              handleFontStyle(font.style, font.name, view as keyof State)
            }
            className={`${font.style} hover:gray-300 hover:text-teal-400
  cursor-pointer  pb-2 text-lg ${
    defaultFontStyle === font.style ? "text-sky-600" : "text-black"
  }`}
          >
            {font.name}
          </p>
        ))}
      </div>

      {/* Font Sizes */}
      <div className="flex my-3 text-sm ms-1">
        <p className="first-letter:uppercase text-teal-400 chakra text-lg">
          {t(view)}
        </p>
        <p className=" ms-2 text-white chakra"> {t("fontSize")}</p>
      </div>
      <div className="bg-white w-full rounded p-2 mb-3">
        {fontSize.map((size) => (
          <p
            key={size.name}
            onClick={() => updateSize(view, size.size)}
            className={`${size.size} hover:gray-300 hover:text-teal-400
  cursor-pointer  pb-2 ${
    defaultFontSize === size.size ? "text-teal-400" : "text-black"
  }`}
          >
            {t(size.name)}
          </p>
        ))}
      </div>
    </>
  );
};

export default FontStylesSize;
