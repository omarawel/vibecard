import { t } from "i18next";
import { useTextColorStore } from "../../store/useTextColorStore";

const Button = () => {
  const { button } = useTextColorStore();
  return (
    <button
      className={`w-full rounded-lg py-4 mb-8 mt-5 shadow-md font-poppins font-extrabold shadow-zinc-950`}
      style={{ backgroundColor: button.color, color: button.font }}
    >
      {t("saveContact")}
    </button>
  );
};

export default Button;
