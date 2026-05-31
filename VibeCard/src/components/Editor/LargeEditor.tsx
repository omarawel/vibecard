import React, { useCallback, useEffect, useRef, useState } from "react";
import Cropper from "react-easy-crop";
import { getCroppedImg } from "./cropUtils";
import CustomSlider from "./Slider";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { fontSize, imageSize, fonts } from "@/services/editor";
import useProduct from "@/store/useProduct";
import { save } from "@/assets";
import LargeCardPreview from "./LargeCardPreview";
import Preview from "./Preview";
import { useNavigate } from "react-router-dom";
import CardOrder from "../Order/CardOrder";
import { useTranslation } from "react-i18next";

export interface Image {
  width: string;
  height: string;
}

export interface Style {
  name: string;
  style: string;
}

const LargeEditor: React.FC = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const productsInfo = localStorage.getItem("product");

  useEffect(() => {
    if (!productsInfo) {
      navigate("/all-products");
    }
  }, []);

  // Zustand
  const { updateBack, updateFront, setCardOrientation } = useProduct();

  // Order
  const [order, setOrder] = useState<boolean>(false);

  // Cropper
  const [crop, setCrop] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
 
  const [frontRotation, setFrontRotation] = useState(0);
  const [backRotation, setBackRotation] = useState(0);

  const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);
  const [aspect, setAspect] = useState<number>();
  // Input Ref
  const inputRef = useRef<HTMLInputElement>(null);

  // Front and Back
  const [orientation, setOrientation] = useState<boolean>(false);
  const [switchBtn, setSwitchBtn] = useState(false);
  const [tab, setTab] = useState<string>("image");
  const [pickedBg, setPickBg] = useState<string>("#ffffff");
  const [active, setActive] = useState<string>("front");

  // Front Card
  const [croppedImage, setCroppedImage] = useState<string | null>(null);
  const [frontFile, setFrontFile] = useState<File | null>();
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [bg, setBg] = useState<string>("bg-white");
  const [name, setName] = useState<string>("");
  const [extraText, setExtraText] = useState<string>("");
  const [font, setFontSize] = useState<string>("4xl");
  const [image, setImage] = useState<string>("40");
  const [textColor, setTextColor] = useState<string>("");
  const [extraFont, setExtraFont] = useState<string>("2xl");
  const [extraTextColor, setExtraTextColor] = useState<string>("");
  const [fontStyle, setFontStyle] = useState<Style>({
    style: "syne",
    name: "Syne",
  });
  const [extraFontStyle, setExtraFontStyle] = useState<Style>({
    style: "syne",
    name: "Syne",
  });

  // Back Card
  const [backImageSrc, setBackImageSrc] = useState<string | null>(null);
  const [backCroppedImage, setBackCroppedImage] = useState<string | null>(null);
  const [backFile, setBackFile] = useState<File | null>();
  const [backPickedBg, setBackPickBg] = useState<string>("#ffffff");
  const [backBg, setBackBg] = useState<string>("bg-white");
  const [backName, setBackName] = useState<string>("");
  const [backExtraText, setBackExtraText] = useState<string>("");
  const [backFont, setBackFontSize] = useState<string>("4xl");
  const [backImage, setBackImage] = useState<string>("40");
  const [backTextColor, setBackTextColor] = useState<string>("");
  const [backExtraFont, setBackExtraFont] = useState<string>("2xl");
  const [backExtraTextColor, setBackExtraTextColor] = useState<string>("");
  const [backExtraFontStyle, setBackExtraFontStyle] = useState<Style>({
    style: "syne",
    name: "Syne",
  });
  const [backFontStyle, setBackFontStyle] = useState<Style>({
    style: "syne",
    name: "Syne",
  });

  // Preview
  const [showMyCard, setShowMyCard] = useState<boolean>(false);

  // Error
  const [error, setError] = useState<boolean>(false);

  // Error hide
  useEffect(() => {
    setTimeout(() => {
      setError(false);
    }, 10000);
  }, [error]);

  // Show Extra Text
  const [show, setShow] = useState<boolean>(false);
  useEffect(() => {
    if (extraText !== "" || backExtraText !== "") {
      setShow(true);
    }
  }, [extraText, backExtraText]);

  // On crop complete
  const onCropComplete = (_: any, croppedAreaPixels: any) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  // Showing Cropped Image
  const showCroppedImage = async () => {
    try {
      if (active === "front") {
        const croppedImage = await getCroppedImg(
          imageSrc!,
          croppedAreaPixels,
          frontRotation
        );
        setCroppedImage(croppedImage as string);
        setImageSrc(null);
      } else {
        const croppedImage = await getCroppedImg(
          backImageSrc!,
          croppedAreaPixels,
          backRotation
        );
        setBackCroppedImage(croppedImage as string);
        setBackImageSrc(null);
      }
    } catch (e) {
      console.error(e);
    }
  };

  // Live Preview
  const updateCroppedImage = useCallback(async () => {
    if (croppedAreaPixels) {
      try {
        if (active === "front") {
          const croppedImage = await getCroppedImg(
            imageSrc!,
            croppedAreaPixels,
            frontRotation
          );
          setCroppedImage(croppedImage as string);
        } else if (active === "back") {
          const croppedImage = await getCroppedImg(
            backImageSrc!,
            croppedAreaPixels,
            backRotation
          );
          setBackCroppedImage(croppedImage as string);
        }
      } catch (e) {
        console.error(e);
      }
    }
  }, [imageSrc, croppedAreaPixels, frontRotation, backRotation]);

  // Update Live
  useEffect(() => {
    updateCroppedImage();
  }, [updateCroppedImage]);

  // On File Change
  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];

      // Set the file to the respective state
      if (active === "front") {
        setFrontFile(file);
      } else {
        setBackFile(file);
      }

      const reader = new FileReader();
      reader.addEventListener("load", () => {
        const result = reader.result as string;
        if (active === "front") {
          setImageSrc(result);
        } else {
          setBackImageSrc(result);
        }

        // Create an Image object and set the aspect ratio
        const img = new Image();
        img.src = result;
        img.onload = () => {
          setAspect(img.width / img.height);
        };
      });
      reader.readAsDataURL(file);
    }
  };

  // On Order request
  const handleSubmit = () => {
    if (frontFile || backFile) {
      // setOrientation
      setCardOrientation(orientation ? "portrait" : "landscape");
      // Set Front
      updateFront({
        bgColor: bg,
        fontStyle: fontStyle.style,
        image: frontFile,
        text: name,
        textSize: font,
        imageSize: image,
        pickedBg: pickedBg,
        color: textColor,
        extraText: extraText,
        extraTextColor: extraTextColor,
        extraTextFontSize: extraFont,
        extraTextFontStyle: extraFontStyle.style,
        rotation: frontRotation,
      });
      // Set Back
      updateBack({
        bgColor: backBg,
        fontStyle: backFontStyle.style,
        image: backFile,
        text: backName,
        textSize: backFont,
        imageSize: backImage,
        pickedBg: backPickedBg,
        color: backTextColor,
        extraText: backExtraText,
        extraTextColor: backExtraTextColor,
        extraTextFontSize: backExtraFont,
        extraTextFontStyle: backExtraFontStyle.style,
        rotation: backRotation,
      });
      setOrder(true);
    } else {
      setError(true);
    }
  };

  // Handle Preview
  const handlePreview = () => {
    // Set Front
    updateFront({
      bgColor: bg,
      fontStyle: fontStyle.style,
      image: frontFile,
      text: name,
      textSize: font,
      imageSize: image,
      pickedBg: pickedBg,
      color: textColor,
      extraText: extraText,
      extraTextColor: extraTextColor,
      extraTextFontSize: extraFont,
      extraTextFontStyle: extraFontStyle.style,
      rotation: frontRotation,
    });
    // Set Back
    updateBack({
      bgColor: backBg,
      fontStyle: backFontStyle.style,
      image: backFile,
      text: backName,
      textSize: backFont,
      imageSize: backImage,
      pickedBg: backPickedBg,
      color: backTextColor,
      extraText: backExtraText,
      extraTextColor: backExtraTextColor,
      extraTextFontSize: backExtraFont,
      extraTextFontStyle: backExtraFontStyle.style,
      rotation: backRotation,
    });
    setShowMyCard(true);
  };

  // Handle Orientation
  const handleOrientation = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.currentTarget.value === "landscape") {
      setOrientation(false);
    } else {
      setOrientation(true);
    }
    setBackFile(null);
    setBackCroppedImage(null);
    setBackName("");
    setBackExtraText("");
    //
    setFrontFile(null);
    setCroppedImage(null);
    setName("");
    setExtraText("");
  };

  return (
    <>
      {/* Order */}
      {order && (
        <CardOrder
          backFile={backFile ? backFile : null}
          frontFile={frontFile ? frontFile : null}
          closeOrder={() => setOrder(false)}
          view={orientation}
        />
      )}

      {/* Error */}
      {error && (
        <div className="fixed flex top-4 right-0 z-50 text-white bg-red-500 rounded ps-10 text-sm py-3">
          <p>{t("logoError")}</p>
          <p
            onClick={() => setError(false)}
            className="text-white ms-5 me-2 bi-x-lg rounded px-2 cursor-pointer"
          ></p>
        </div>
      )}

      <Navbar bulb />

      <div className="container mx-auto">
        <div className="grid grid-cols-10 secondary-bg rounded mt-10 relative">
          {/* Edit */}
          <div className={`col-span-5 relative px-5 `}>
            <div className="grid grid-cols-12 gap-x-10">
              <div className="col-span-2 w-full border-r border-gray-600 pt-10">
                <p
                  onClick={() => setTab("image")}
                  className={`${
                    tab === "image" && "bg-blue-950 py-3 rounded me-1"
                  }  px-3 bi-image text-center text-5xl text-white cursor-pointer`}
                ></p>
                <p
                  onClick={() => setTab("text")}
                  className={`${
                    tab === "text" && "bg-blue-950 py-3 rounded me-1"
                  } px-3 bi-fonts mt-10 text-center text-5xl text-white cursor-pointer`}
                ></p>
              </div>
              {/* Editor */}
              <div className="col-span-10 pb-10 h-[90dvh] overflow-y-scroll pe-20 pt-5">
                {/* Orientation */}
                <div>
                  <label
                    htmlFor="orientation"
                    className="text-white text-xl chakra me-5"
                  >
                    {t("orientation")}
                  </label>
                  <select
                    name="orientation"
                    className="rounded h-7 w-40 focus:outline-none"
                    onChange={handleOrientation}
                  >
                    <option value="landscape"> {t("landscape")}</option>
                    <option value="portrait"> {t("portrait")}</option>
                  </select>
                </div>
                <hr className="my-5 border-gray-500" />
                {/* image */}
                {tab === "image" && (
                  <div className="w-full">
                    <p className="text-font py-5 text-white">
                      {t("designWImage")}
                    </p>
                    <div className="flex justify-between">
                      <p className="text-white">{t("imageLogo")}</p>
                      {active === "front" && croppedImage && (
                        <button
                          onClick={() => {
                            setCroppedImage(null);
                            setImageSrc(null);
                          }}
                          className="bg-red-500 rounded text-xs px-2 text-white"
                        >
                          {t("reset")}
                        </button>
                      )}
                      {active === "back" && backCroppedImage && (
                        <button
                          onClick={() => {
                            setBackCroppedImage(null);
                            setBackImageSrc(null);
                          }}
                          className="bg-red-500 rounded text-xs  px-2 text-white"
                        >
                          {t("reset")}
                        </button>
                      )}
                    </div>
                    <div className="flex justify-between">
                      <div className="bg-white border w-full h-32 mt-5 rounded pb-3 ps-3 text-center">
                        <input
                          type="file"
                          id={`logo-file`}
                          className="hidden"
                          onChange={onFileChange}
                          accept="image/*"
                          ref={inputRef}
                        />
                        <label htmlFor={`logo-file`} className="cursor-pointer">
                          <div className="flex flex-col pt-10">
                            <i className="bi-image text-2xl"></i>
                            <span className="text-sm">
                              {t("upload")}{" "}
                              {active === "front" ? t("front") : t("back")}{" "}
                              {t("imageName")}
                            </span>
                          </div>
                        </label>
                      </div>
                    </div>

                    {imageSrc && (
                      <div className="h-[400px] w-full relative mt-4 mb-10 rounded overflow-hidden">
                        <Cropper
                          image={imageSrc}
                          crop={crop}
                          zoom={zoom}
                          aspect={aspect}
                          rotation={frontRotation}
                          onCropChange={setCrop}
                          onZoomChange={setZoom}
                          onRotationChange={setFrontRotation}
                          onCropComplete={onCropComplete}
                          cropShape="rect"
                          showGrid={true}
                        />
                        <div className="absolute w-full bottom-7">
                          <CustomSlider
                            value={zoom}
                            min={1}
                            max={3}
                            step={0.1}
                            onChange={setZoom}
                          />
                        </div>
                        <p
                          onClick={() => showCroppedImage()}
                          className="absolute  bottom-0 z-50 bg-white cursor-pointer rounded p-2 shadow "
                        >
                          <img src={save} alt="" className="h-5" />
                        </p>
                        <p
                          onClick={() =>
                            setFrontRotation((frontRotation + 90) % 360)
                          }
                          className="absolute right-0 bottom-0 z-50 bg-white font-extrabold bi-arrow-repeat text-2xl cursor-pointer rounded px-2"
                        ></p>
                      </div>
                    )}

                    {backImageSrc && (
                      <div className="h-[400px] w-full relative mt-4 mb-10 rounded overflow-hidden">
                        <Cropper
                          image={backImageSrc}
                          crop={crop}
                          zoom={zoom}
                          aspect={aspect}
                          rotation={backRotation}
                          onCropChange={setCrop}
                          onZoomChange={setZoom}
                          onRotationChange={setBackRotation}
                          onCropComplete={onCropComplete}
                          cropShape="rect"
                          showGrid={true}
                        />
                        <div className="absolute w-full bottom-7">
                          <CustomSlider
                            value={zoom}
                            min={1}
                            max={3}
                            step={0.1}
                            onChange={setZoom}
                          />
                        </div>
                        <p
                          onClick={() => showCroppedImage()}
                          className="absolute  bottom-0 z-50 bg-white cursor-pointer rounded p-2 shadow "
                        >
                          <img src={save} alt="" className="h-5" />
                        </p>
                        <p
                          onClick={() =>
                            setBackRotation((backRotation + 90) % 360)
                          }
                          className="absolute right-0 bottom-0 z-50 bg-white font-extrabold bi-arrow-repeat text-2xl cursor-pointer rounded px-2"
                        ></p>
                      </div>
                    )}

                    {/* Image Size */}
                    <div className="my-8">
                      <div className="mb-5">
                        <label
                          htmlFor="width"
                          className="text-white block text-sm"
                        >
                          {t("imageSize")}
                        </label>
                        <select
                          name="width"
                          className="w-full h-10 rounded p-1 mt-2 focus:outline-none"
                          onChange={(e) =>
                            active === "front"
                              ? setImage(e.currentTarget.value)
                              : setBackImage(e.currentTarget.value)
                          }
                          value={active === "front" ? image : backImage}
                          style={{
                            backgroundColor: "#f0f0f0",
                            color: "#333",
                          }}
                        >
                          {imageSize.map((size, index) => (
                            <option key={index} value={`${size}`}>
                              {size}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                )}
                {/* text */}
                {tab === "text" && (
                  <div className="w-full">
                    <div>
                      <p className="text-white text-lg mb-5">
                        {t("companyName")}
                      </p>
                      <input
                        type="text"
                        className="rounded w-full h-11 px-4 focus:outline-none mb-4 placeholder:font-bold placeholder:text-sm"
                        placeholder={t("nameGoes")}
                        value={active === "front" ? name : backName}
                        onChange={
                          active === "front"
                            ? (e) => setName(e.currentTarget.value)
                            : (e) => setBackName(e.currentTarget.value)
                        }
                      />

                      <div className="mt-4">
                        {/* Font Size */}
                        <div>
                          <p className="text-white text-xs">{t("fontSizes")}</p>
                          <select
                            name="height"
                            className="w-full h-10 rounded p-1 mt-2 focus:outline-none"
                            onChange={(e) =>
                              active === "front"
                                ? setFontSize(e.currentTarget.value)
                                : setBackFontSize(e.currentTarget.value)
                            }
                            value={active === "front" ? font : backFont}
                          >
                            {fontSize.map((f) =>
                              f !== font ? (
                                <option key={f} value={f}>
                                  {f}
                                </option>
                              ) : (
                                <option
                                  value={active === "front" ? font : backFont}
                                >
                                  {active === "front" ? font : backFont}
                                </option>
                              )
                            )}
                          </select>
                        </div>

                        {/* Text Color */}
                        <div className="lg:0 mb-5 mt-10">
                          <p className="text-white text-xs mb-2">
                            {t("textColor")}
                          </p>
                          <input
                            type="color"
                            className="w-full lg:h-16 h-12 border-none outline-none shadow shadow-orange-900"
                            onChange={(e) =>
                              active === "front"
                                ? setTextColor(e.currentTarget.value)
                                : setBackTextColor(e.currentTarget.value)
                            }
                            value={
                              active === "front" ? textColor : backTextColor
                            }
                          />
                        </div>

                        {/* Font Style */}
                        <div>
                          <p className="text-white text-xs mt-5">
                            {t("fontStyles")}
                          </p>
                          <div className="relative">
                            <p className="bg-white rounded py-2 px-1 text-sm my-2 w-40">
                              {active === "front"
                                ? fontStyle.name
                                : backFontStyle.name}
                            </p>
                            <div className="w-full bg-white rounded p-2 text-sm">
                              {fonts.map((font) => (
                                <p
                                  onClick={() =>
                                    active === "front"
                                      ? setFontStyle({
                                          name: font.name,
                                          style: font.style,
                                        })
                                      : setBackFontStyle({
                                          name: font.name,
                                          style: font.style,
                                        })
                                  }
                                  className={`cursor-pointer mb-1`}
                                >
                                  {font.name}
                                </p>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <hr className="border w-full my-10" />
                    <p className="text-white font-poppins">
                      {t("inputConfirm")}
                    </p>
                    <div className="mt-4">
                      <p className="text-white text-xs mb-4">{t("another")}</p>

                      <input
                        type="text"
                        className="rounded w-full h-11 px-4 focus:outline-none mb-4 placeholder:font-bold placeholder:text-sm"
                        placeholder={t("anotherGoes")}
                        value={active === "front" ? extraText : backExtraText}
                        onChange={
                          active === "front"
                            ? (e) => setExtraText(e.currentTarget.value)
                            : (e) => setBackExtraText(e.currentTarget.value)
                        }
                      />

                      {show && (
                        <div className="mt-4">
                          {/* Font Size */}
                          <div>
                            <p className="text-white text-xs">
                              {t("fontSizes")}
                            </p>
                            <select
                              name="height"
                              className="w-full h-10 rounded p-1 mt-2 focus:outline-none"
                              onChange={(e) =>
                                active === "front"
                                  ? setExtraFont(e.currentTarget.value)
                                  : setBackExtraFont(e.currentTarget.value)
                              }
                              value={
                                active === "front" ? extraFont : backExtraFont
                              }
                            >
                              {fontSize.map((f) =>
                                f !== font ? (
                                  <option key={f} value={f}>
                                    {f}
                                  </option>
                                ) : (
                                  <option
                                    value={active === "front" ? font : backFont}
                                  >
                                    {active === "front" ? font : backFont}
                                  </option>
                                )
                              )}
                            </select>
                          </div>

                          {/* Text Color */}
                          <div className="lg:0 mb-5 mt-10">
                            <p className="text-white text-xs mb-2">
                              {t("textColor")}
                            </p>
                            <input
                              type="color"
                              className="w-full lg:h-16 h-12 border-none outline-none shadow shadow-orange-900"
                              onChange={(e) =>
                                active === "front"
                                  ? setExtraTextColor(e.currentTarget.value)
                                  : setBackExtraTextColor(e.currentTarget.value)
                              }
                              value={
                                active === "front"
                                  ? extraTextColor
                                  : backExtraTextColor
                              }
                            />
                          </div>

                          {/* Font Style */}
                          <div>
                            <p className="text-white text-xs mt-5">
                              {t("fontStyles")}
                            </p>
                            <div className="relative">
                              <p className="bg-white rounded py-2 px-1 text-sm my-2 w-40">
                                {active === "front"
                                  ? extraFontStyle.name
                                  : backExtraFontStyle.name}
                              </p>
                              <div className="w-full bg-white rounded p-2 text-sm">
                                {fonts.map((font) => (
                                  <p
                                    onClick={() =>
                                      active === "front"
                                        ? setExtraFontStyle({
                                            name: font.name,
                                            style: font.style,
                                          })
                                        : setBackExtraFontStyle({
                                            name: font.name,
                                            style: font.style,
                                          })
                                    }
                                    className={`cursor-pointer mb-1`}
                                  >
                                    {font.name}
                                  </p>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Order */}
          <div className="absolute -bottom-0 left-0 z-30 w-full">
            <div className="flex justify-center w-full gap-x-4">
              <button
                onClick={() => handleSubmit()}
                className="btn-bg rounded shadow-xl py-3 shadow-zinc-950 font-poppins"
              >
                {t("orderThis")}
              </button>
            </div>
          </div>

          {/* Large Preview */}
          <div className="col-span-5">
            <button
              onClick={() => handlePreview()}
              className="absolute z-40 right-28 text-center rounded bi-eye-fill text-2xl mt-1"
            ></button>
            <div className={`relative py-5 bg-gray-200 h-full rounded`}>
              <LargeCardPreview
                orientation={orientation}
                active={active}
                setSwitch={(value) => setSwitchBtn(value)}
                activeCard={(value: string) => setActive(value)}
                // Front
                bg={bg}
                fSize={font}
                name={name}
                image={image}
                pickedBg={pickedBg}
                croppedImage={croppedImage ? croppedImage : ""}
                textColor={textColor}
                fontStyle={fontStyle}
                switchBtn={switchBtn}
                extraFontStyle={extraFontStyle}
                extraFontsize={extraFont}
                extraText={extraText}
                extraTextColor={extraTextColor}
                setPickBg={(value) => setPickBg(value)}
                setBg={(value: string) => setBg(value)}
                //  Back
                pickedBackBg={backPickedBg}
                backBg={backBg}
                backCroppedImage={backCroppedImage ? backCroppedImage : ""}
                backExtraText={backExtraText}
                backExtraFontStyle={backExtraFontStyle}
                backExtraFontsize={backExtraFont}
                backExtraTextColor={backExtraTextColor}
                backFontSize={backFont}
                backFontStyle={backFontStyle}
                backImage={backImage}
                backName={backName}
                backPickedBg={backPickedBg}
                backTextColor={backTextColor}
                setBackBg={(value: string) => setBackBg(value)}
                setBackPickBg={(value) => setBackPickBg(value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Show My Card */}
      {showMyCard && (
        <Preview
          orientation={orientation}
          showPreview={(value) => setShowMyCard(value)}
        />
      )}

      {/*Footer  */}
      <Footer />
    </>
  );
};

export default LargeEditor;
