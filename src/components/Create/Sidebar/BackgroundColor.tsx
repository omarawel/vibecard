import { useState } from "react";
import { cardColor, coverColor } from "../../../services/coverColor";
import { useCoverColorStore } from "../../../store/useCoverColorStore";
import { useCardColorStore } from "../../../store/useCardColorStore";
import { useTextColorStore } from "../../../store/useTextColorStore";
import { t } from "i18next";

interface Props {
  cardType: string;
  colorPicker: boolean;
  bgColors: string;
}
const BackgroundColor = ({ colorPicker, bgColors, cardType }: Props) => {
  const [color, setColor] = useState("#000000");

  const { updateCoverColor } = useCoverColorStore();
  const { updateCardColor } = useCardColorStore();
  const { updateColor } = useTextColorStore();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = event.target.value;
    setColor(newColor);

    if (newColor !== "#000000") {
      updateCoverColor(newColor);
    }
  };

  return (
    <div className="bg-white rounded p-2 mb-5">
      <p className="chakra mt-2 text-black">{t("default")}</p>
      <div
        className={`${
          bgColors === "gradient-cover" && bgColors
        } w-full h-20 rounded-lg my-2 shadow shadow-zinc-900`}
        style={{ backgroundColor: bgColors }}
      ></div>
      <p className="chakra mt-2 text-black">{t("trend")}</p>
      <div className="grid lg:grid-cols-6 grid-cols-7 lg:gap-3 gap-2 overflow-hidden py-5">
        {cardType === "cover" || cardType === "button"
          ? coverColor.map((cover) => (
              <button
                key={cover.id}
                onClick={
                  cardType === "cover"
                    ? () => updateCoverColor(cover.value)
                    : () => updateColor("button", cover.value)
                }
                className={`lg:p-3 px-4 py-5 rounded shadow-sm shadow-zinc-900 hover:shadow-none`}
                style={{ backgroundColor: cover.value }}
              ></button>
            ))
          : cardColor.map((card) => (
              <button
                key={card.id}
                onClick={() => updateCardColor(card.value)}
                className={`lg:p-3 px-4 py-5 rounded shadow-sm shadow-zinc-900 hover:shadow-none`}
                style={{ backgroundColor: card.value }}
              ></button>
            ))}
      </div>
      {colorPicker && (
        <div className={`relative ${color}`}>
          <p className="chakra mb-2 text-black">{t("pick")}</p>
          <input
            type="color"
            className="w-full h-14 border-none outline-none shadow shadow-orange-900"
            value={color}
            onChange={(e) => handleChange(e)}
          />
        </div>
      )}
    </div>
  );
};

export default BackgroundColor;
