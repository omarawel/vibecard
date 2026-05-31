import useProduct from "@/store/useProduct";
import { useEffect, useState, useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useTranslation } from "react-i18next";

interface Props {
  showPreview: (value: boolean) => void;
  orientation: boolean;
}

const Preview = ({ showPreview, orientation }: Props) => {
  const { t } = useTranslation();

  const { back, front } = useProduct();
  const printRef = useRef<HTMLDivElement>(null);

  const [frontImage, setFrontImage] = useState<string | null>(null);
  const [backImage, setBackImage] = useState<string | null>(null);

  // Get images from a file
  useEffect(() => {
    let frontUrl: string | null = null;
    let backUrl: string | null = null;

    if (front.image instanceof File) {
      frontUrl = URL.createObjectURL(front.image);
      setFrontImage(frontUrl);
    }

    if (back.image instanceof File) {
      backUrl = URL.createObjectURL(back.image);
      setBackImage(backUrl);
    }

    // Cleanup URLs on unmount or when image changes
    return () => {
      if (frontUrl) URL.revokeObjectURL(frontUrl);
      if (backUrl) URL.revokeObjectURL(backUrl);
    };
  }, [front, back]);

  // Handling Print
  const handlePrint = async () => {
    if (!printRef.current) return;
    // Capture the content of the modal
    const canvas = await html2canvas(printRef.current, {
      scale: 2, // Increase scale for better quality
      useCORS: true, // Use CORS to handle external resources
      scrollX: 0,
      scrollY: -window.scrollY, // Adjust for any scrolling
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: [canvas.width, canvas.height], // Set PDF dimensions to match canvas
    });

    // Adjust for scaling and multi-page content
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    // const imgWidth = canvas.width;
    const imgHeight = canvas.height;

    let position = 0;
    let remainingHeight = imgHeight;
    // let remainingWidth = imgWidth;

    while (remainingHeight > 0) {
      const sliceHeight = Math.min(pdfHeight, remainingHeight);
      pdf.addImage(imgData, "PNG", 0, position, pdfWidth, sliceHeight);
      remainingHeight -= sliceHeight;
      position -= pdfHeight;
      if (remainingHeight > 0) {
        pdf.addPage();
      }
    }

    // pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
    pdf.save("viebcard_product.pdf");
  };

  return (
    <>
      <div className="overlay w-full z-50"></div>
      <div className="flex justify-center">
        <div
          ref={printRef}
          className={`fixed lg:w-[45%] md:w-[55%] w-[98%] lg:h-[100dvh] h-[98dvh] lg:top-4 top-2 z-50 bg-gray-200 rounded-lg border-gradient-2 lg:overflow-auto overflow-y-scroll`}
        >
          <div className="relative flex justify-between">
            <button
              onClick={handlePrint}
              className="absolute lg:left-10 left-2 top-3 text-xl text-blue-600 bi-printer-fill"
            ></button>
            <p
              onClick={() => showPreview(false)}
              className="absolute lg:right-10 right-2 top-3 bi-x-lg text-xl text-red-600 cursor-pointer"
            ></p>
          </div>

          <div
            className={`absolute lg:flex hidden mt-10 ${
              !orientation && "hidden"
            } w-full justify-between`}
          >
            <p
              className={`mt-16 text-sm mb-2 ${!orientation && "hidden"} ms-14`}
            >
              {t("front")}
            </p>
            <p
              className={`mt-16 text-sm mb-2 ${!orientation && "hidden"} me-16`}
            >
              {t("back")}
            </p>
          </div>
          <>
            <div
              className={`${
                orientation
                  ? " lg:flex gap-x-5 h-full items-center lg:my-0 my-14 lg:px-16 lg:ms-0 lg:w-full w-[50%] lg:m-0 m-auto"
                  : "lg:px-20 px-2 mt-24"
              }  `}
            >
              <p
                className={`${
                  orientation && "lg:hidden"
                } lg:mt-8 text-sm mb-2 mt-14`}
              >
                {t("front")}
              </p>
              {/* Front */}
              <div
                className={`relative rounded-md  ${
                  orientation
                    ? " lg:h-[400px] lg:w-full w-48 h-[30vh]"
                    : "lg:h-[280px] h-[30vh] md:h-[35vh] w-full"
                }  mb-5 shadow-md shadow-zinc-900 overflow-hidden ${
                  front.pickedBg === "#ffffff" ? front.bgColor : ""
                }`}
                style={{
                  backgroundColor:
                    front.pickedBg === "#ffffff" ? "" : front.pickedBg,
                }}
              >
                <div
                  className={`flex justify-center items-center h-full overflow-hidden`}
                >
                  {frontImage && (
                    <div
                      className={`absolute`}
                      style={{
                        transform: `translate(${front.imagePosition.x}px, ${front.imagePosition.y}px)`,
                      }}
                    >
                      <img
                        src={frontImage}
                        alt="user"
                        className={`h-${front.imageSize} w-${front.imageSize} object-cover`}
                        style={{
                          rotate: `${front.rotation}deg`,
                        }}
                      />
                    </div>
                  )}
                  {front.text !== "" && (
                    <div
                      className={`absolute ${orientation ? "top-3" : "top-3"} `}
                      style={{
                        transform: `translate(${front.textPosition.x}px, ${front.textPosition.y}px)`,
                      }}
                    >
                      <p
                        className={`${front.fontStyle} text-${front.textSize} overflow-hidden text-ellipsis px-2`}
                        style={{
                          color: front.color,
                        }}
                      >
                        {front.text}
                      </p>
                    </div>
                  )}
                  {front.extraText !== "" && (
                    <div
                      className="absolute bottom-5"
                      style={{
                        transform: `translate(${front.extraTextPosition.x}px, ${front.extraTextPosition.y}px)`,
                      }}
                    >
                      <p
                        className={`${front.extraTextFontStyle} text-${front.extraTextFontSize} overflow-hidden text-ellipsis px-2`}
                        style={{
                          color: front.extraTextColor,
                        }}
                      >
                        {front.extraText}
                      </p>
                    </div>
                  )}
                </div>
              </div>
              {/* Back */}
              <p className={`${orientation && "lg:hidden"} mt-1 text-sm mb-2`}>
                {t("back")}
              </p>
              <div
                className={`relative rounded-md ${
                  orientation
                    ? " lg:h-[400px] lg:w-full w-48 h-[30vh]"
                    : "lg:h-[280px] h-[30vh] md:h-[35vh] w-full"
                } lg:mb-5 shadow-md shadow-zinc-900 overflow-hidden ${
                  back.pickedBg === "#ffffff" ? back.bgColor : ""
                }`}
                style={{
                  backgroundColor:
                    back.pickedBg === "#ffffff" ? "" : back.pickedBg,
                  margin: "",
                }}
              >
                <div
                  className={`flex justify-center items-center h-full overflow-hidden`}
                >
                  {backImage && (
                    <div
                      className={`absolute`}
                      style={{
                        transform: `translate(${back.imagePosition.x}px, ${back.imagePosition.y}px)`,
                      }}
                    >
                      <img
                        src={backImage}
                        alt="user"
                        className={`h-${back.imageSize} w-${back.imageSize} object-cover`}
                        style={{
                          rotate: `${back.rotation}deg`,
                        }}
                      />
                    </div>
                  )}
                  {back.text !== "" && (
                    <div
                      className="absolute top-3"
                      style={{
                        transform: `translate(${back.textPosition.x}px, ${back.textPosition.y}px)`,
                      }}
                    >
                      <p
                        className={`${back.fontStyle} text-${back.textSize} overflow-hidden text-ellipsis px-2`}
                        style={{
                          color: back.color,
                        }}
                      >
                        {back.text}
                      </p>
                    </div>
                  )}
                  {back.extraText !== "" && (
                    <div
                      className="absolute bottom-5"
                      style={{
                        transform: `translate(${back.extraTextPosition.x}px, ${back.extraTextPosition.y}px)`,
                      }}
                    >
                      <p
                        className={`${back.extraTextFontStyle} text-${back.extraTextFontSize} overflow-hidden text-ellipsis px-2`}
                        style={{
                          color: back.extraTextColor,
                        }}
                      >
                        {back.extraText}
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <p className="lg:hidden text-transparent">
                Lorem, ipsum dolor sit amet cons
              </p>
            </div>
          </>
        </div>
      </div>
    </>
  );
};

export default Preview;
