import { useTranslation } from "react-i18next";

interface Props {
  title: string;
  desc: string;
  desc2?: string;
  step: string;
}

const Steps = ({ desc, title, step, desc2 }: Props) => {
  const { t } = useTranslation();
  return (
    <div className="border-gradient-2 hover:border hover:border-gray-500 rounded-2xl p-7 text-white lg:mb-5 mb-4 secondary-bg shadow- shadow">
      <div className="relative right-20 lg:-top-28 -top-40">
        <div className="absolute lg:right-[35em]  right-36 top-40 bulb"></div>
      </div>
      <p className="font-extrabold mb-2 text-gray-400 font-poppins">
        {t("step")} {step}
      </p>
      <p className="text-white text-xl font-poppins">{t(title)}</p>
      <p className="text-md mt-3 text-gray-300 font-poppins text-sm">
        {t(desc)}
      </p>
      {desc2 && (
        <p className="text-md mt-2 text-gray-300 font-poppins text-sm">
          {t(desc2)}
        </p>
      )}
    </div>
  );
};

export default Steps;
