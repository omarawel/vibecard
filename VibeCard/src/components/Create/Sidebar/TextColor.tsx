import { t } from "i18next";
import { textColor } from "../../../services/coverColor";
import { useTextColorStore } from "../../../store/useTextColorStore";
import { State } from "../../../store/useTextColorStore";

interface Props {
  bg: string;
  name: keyof State;
  title?: string;
}

const TextColor = ({ bg, name, title }: Props) => {
  const { updateColor, updateFont } = useTextColorStore();

  return (
    <>
      <div className={`flex ${title ? "my-5" : ""} text-sm ms-1`}>
        {title && (
          <>
            <p className="first-letter:uppercase text-teal-400 chakra text-xl">
              {t(title)}
            </p>

            <p className="ms-2 text-white chakra"> {t("color")}</p>
          </>
        )}
      </div>
      <div className="bg-white rounded p-2 mb-5">
        <p className="mt-2 chakra text-black">{t("default")}</p>
        <div
          className={`w-full h-10 rounded-lg my-2 shadow shadow-zinc-900`}
          style={{ backgroundColor: bg }}
        ></div>
        <p className="mt-3 chakra text-black">{t("chooseC")}</p>
        <div className="grid lg:grid-cols-6 grid-cols-7 lg:gap-3 gap-2 overflow-hidden py-5">
          {textColor.map((text) => (
            <button
              key={text.id}
              onClick={
                title
                  ? () => updateColor(name, text.value)
                  : () => updateFont(name, text.value)
              }
              className={`lg:p-3 px-4 py-5 rounded shadow-sm shadow-zinc-900 hover:shadow-none`}
              style={{ backgroundColor: text.value }}
            ></button>
          ))}
        </div>
      </div>
    </>
  );
};

export default TextColor;
