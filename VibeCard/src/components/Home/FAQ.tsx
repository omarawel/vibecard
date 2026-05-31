import { useState } from "react";
import { faq, ambassadorFaq } from "../../services/faq";
import { useTranslation } from "react-i18next";

interface Props {
  textSize?: boolean;
  ambassador?: boolean;
}

const Faq = ({ textSize, ambassador }: Props) => {
  const { t } = useTranslation();

  const [id, setId] = useState<number>(0);

  const handleFaq = (faqId: number) => {
    if (id === faqId) {
      setId(0);
    } else {
      setId(faqId);
    }
  };
  return (
    <>
      {!ambassador
        ? faq.map((faqs) => (
            <div key={faqs.id}>
              <div className="flex justify-between w-full mb-5 border-b pb-4 border-gray-700">
                <div>
                  <p
                    className={`${
                      textSize ? "text-sm" : "lg:text-xl text-lg "
                    } text-white font-poppins`}
                  >
                    {t(faqs.question)}
                  </p>
                </div>
                <div>
                  <button
                    onClick={() => handleFaq(faqs.id)}
                    className={`text-white font-poppins rounded px-2 py-0 shadow-none cursor-pointer pt-1 ${
                      id === faqs.id ? "bi-caret-up-fill" : "bi-caret-down-fill"
                    }  textSize ? "text-sm" : "text-xl "
                }`}
                  ></button>
                </div>
              </div>
              {id === faqs.id && (
                <div
                  className={`text-sm ${
                    textSize ? "px-1 mx-2" : "px-3 mx-2 lg:mx-10"
                  } py-5 mb-4 rounded `}
                >
                  <p
                    className={`text-white font-poppins ${
                      textSize ? "text-sm" : "text-lg"
                    }`}
                  >
                    {t(faqs.answer)}
                  </p>
                </div>
              )}
            </div>
          ))
        : ambassadorFaq.map((faqs) => (
            <div key={faqs.id}>
              <div className="flex justify-between w-full mb-5 border-b pb-4 border-gray-700">
                <div>
                  <p
                    className={`${
                      textSize ? "text-sm" : "text-lg"
                    } text-white font-poppins`}
                  >
                    {t(faqs.question)}
                  </p>
                </div>
                <div>
                  <button
                    onClick={() => handleFaq(faqs.id)}
                    className={`text-white font-poppins rounded px-2 py-0 shadow-none cursor-pointer pt-1 ${
                      id === faqs.id ? "bi-caret-up-fill" : "bi-caret-down-fill"
                    }  textSize ? "text-sm" : "text-xl "
              }`}
                  ></button>
                </div>
              </div>
              {id === faqs.id && (
                <div
                  className={`text-sm ${
                    textSize ? "px-1 mx-2" : "px-3 mx-2 lg:mx-10"
                  } py-5 mb-4 rounded `}
                >
                  <p
                    className={`text-white font-poppins ${
                      textSize ? "text-sm" : "text-lg"
                    }`}
                  >
                    {t(faqs.answer)}
                  </p>
                </div>
              )}
            </div>
          ))}
    </>
  );
};

export default Faq;
