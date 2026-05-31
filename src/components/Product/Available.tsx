import { baseUrl } from "@/services/request";
import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface Props {
  name: string;
}

const Available = ({ name }: Props) => {
  const { t } = useTranslation();

  const [materials, setMaterials] = useState<string[]>([]);

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/v1/products/available-materials`, {
        headers: {
          "Content-Type": "application",
        },
      })
      .then((response) => {
        setMaterials(response.data.materials);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="mt-2 bg-gray-800 rounded px-3 py-5 shadow shadow-zinc-950 mb-8">
      <p className="text-lg text-white font-poppins">Vibecard {t(name)}</p>
      {materials.length > 0 && (
        <div className="flex text-white font-poppins gap-x-4">
          <p className="font-poppins text-sm">{t("availableIn")}</p>{" "}
          {materials.map((m) => (
            <p
              key={m}
              className="text-teal-500 font-poppins text-sm font-bold first-letter:uppercase"
            >
              {m === "recycled_paper" ? "PVC" : m},{" "}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Available;
