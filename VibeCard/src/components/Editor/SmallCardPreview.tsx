import { useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";
import { bgColors } from "../Product/ProductColor";
import { Style } from "./LargeEditor";
import useProduct from "@/store/useProduct";
import "./switch.css";
import { useTranslation } from "react-i18next";

interface Props {
  orientation: boolean;
  active: string;
  activeCard: (value: string) => void;
  setSwitch: (value: boolean) => void;
  //   Front
  bg: string;
  pickedBg: string;
  switchBtn: boolean;
  image: string;
  croppedImage: string;
  name: string;
  fontStyle: { style: string };
  fSize: string;
  textColor: string;
  extraText: string;
  extraFontStyle: Style;
  extraFontSize: string;
  extraTextColor: string;
  setBg: (value: string) => void;
  setPickBg: (value: string) => void;
  //   Back
  backBg: string;
  pickedBackBg: string;
  backImage: string;
  backName: string;
  backPickedBg: string;
  backCroppedImage: string;
  backFontStyle: Style;
  backFontSize: string;
  backTextColor: string;
  backExtraText: string;
  backExtraFontStyle: Style;
  backExtraFontSize: string;
  backExtraTextColor: string;
  setBackBg: (value: string) => void;
  setBackPickBg: (value: string) => void;
}

const SmallDevicePreview = ({
  orientation,
  active,
  switchBtn,
  activeCard,
  setPickBg,
  //   Front
  bg,
  name,
  image,
  fSize,
  textColor,
  fontStyle,
  pickedBg,
  croppedImage,
  extraText,
  extraFontSize,
  extraFontStyle,
  extraTextColor,
  setBg,
  setSwitch,
  //   Back
  backBg,
  pickedBackBg,
  backName,
  backImage,
  backFontSize,
  backTextColor,
  backExtraFontStyle,
  backCroppedImage,
  backExtraText,
  backExtraFontSize,
  backExtraTextColor,
  backFontStyle,
  setBackBg,
  setBackPickBg,
}: Props) => {
  const { t } = useTranslation();

  const { updateBack, updateFront } = useProduct();

  //   Front
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [position2, setPosition2] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [position3, setPosition3] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [showLines, setShowLines] = useState<{ x: boolean; y: boolean }>({
    x: false,
    y: false,
  });
  const containerRef = useRef<HTMLDivElement>(null);
  const draggableRef1 = useRef<HTMLDivElement>(null);
  const draggableRef2 = useRef<HTMLDivElement>(null);
  const draggableRef3 = useRef<HTMLDivElement>(null);

  //   Front
  const [backPosition, setBackPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [backPosition2, setBackPosition2] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [backPosition3, setBackPosition3] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [showBackLines, setShowBackLines] = useState<{
    x: boolean;
    y: boolean;
  }>({
    x: false,
    y: false,
  });
  const containerBackRef = useRef<HTMLDivElement>(null);
  const draggableBackRef1 = useRef<HTMLDivElement>(null);
  const draggableBackRef2 = useRef<HTMLDivElement>(null);
  const draggableBackRef3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (image === "full") {
      setPosition({ x: 0, y: 0 });
    }
  }, [image]);

  //   Front
  const handleDrag1 = (e: any, data: any) => {
    console.log(e);
    setPosition({ x: data.x, y: data.y });
    checkIfCentered();
  };

  const handleDrag2 = (e: any, data: any) => {
    console.log(e, data);
    setPosition2({ x: data.x, y: data.y });
    checkIfCentered();
  };

  const handleDrag3 = (e: any, data: any) => {
    console.log(e, data);
    setPosition3({ x: data.x, y: data.y });
    checkIfCentered();
  };

  const checkIfCentered = () => {
    const container = containerRef.current;
    const draggable1 = draggableRef1.current;
    const draggable2 = draggableRef2.current;
    const draggable3 = draggableRef3.current;

    if (!container || (!draggable1 && !draggable2)) return;

    const containerRect = container.getBoundingClientRect();

    let isCenteredX = false;
    let isCenteredY = false;

    if (draggable1) {
      const draggableRect1 = draggable1.getBoundingClientRect();
      const containerCenterX = containerRect.width / 2;
      const containerCenterY = containerRect.height / 2;
      const draggableCenterX1 =
        draggableRect1.left - containerRect.left + draggableRect1.width / 2;
      const draggableCenterY1 =
        draggableRect1.top - containerRect.top + draggableRect1.height / 2;

      isCenteredX = Math.abs(draggableCenterX1 - containerCenterX) < 10;
      isCenteredY = Math.abs(draggableCenterY1 - containerCenterY) < 10;
    }

    if (draggable2) {
      const draggableRect2 = draggable2.getBoundingClientRect();
      const containerCenterX = containerRect.width / 2;
      const containerCenterY = containerRect.height / 2;
      const draggableCenterX2 =
        draggableRect2.left - containerRect.left + draggableRect2.width / 2;
      const draggableCenterY2 =
        draggableRect2.top - containerRect.top + draggableRect2.height / 2;

      isCenteredX =
        isCenteredX || Math.abs(draggableCenterX2 - containerCenterX) < 10;
      isCenteredY =
        isCenteredY || Math.abs(draggableCenterY2 - containerCenterY) < 10;
    }

    if (draggable3) {
      const draggableRect3 = draggable3.getBoundingClientRect();
      const containerCenterX = containerRect.width / 2;
      const containerCenterY = containerRect.height / 2;
      const draggableCenterX3 =
        draggableRect3.left - containerRect.left + draggableRect3.width / 2;
      const draggableCenterY3 =
        draggableRect3.top - containerRect.top + draggableRect3.height / 2;

      isCenteredX =
        isCenteredX || Math.abs(draggableCenterX3 - containerCenterX) < 10;
      isCenteredY =
        isCenteredY || Math.abs(draggableCenterY3 - containerCenterY) < 10;
    }

    if (isCenteredX || isCenteredY) {
      setShowLines({ x: isCenteredX, y: isCenteredY });

      // Hide lines after 5 seconds
      setTimeout(() => {
        setShowLines({ x: false, y: false });
      }, 5000);
    }
  };

  // Back
  const handleBackDrag1 = (e: any, data: any) => {
    console.log(e);
    setBackPosition({ x: data.x, y: data.y });
    checkIfBackCentered();
  };

  const handleBackDrag2 = (e: any, data: any) => {
    console.log(e, data);
    setBackPosition2({ x: data.x, y: data.y });
    checkIfBackCentered();
  };

  const handleBackDrag3 = (e: any, data: any) => {
    console.log(e, data);
    setBackPosition3({ x: data.x, y: data.y });
    checkIfBackCentered();
  };

  const checkIfBackCentered = () => {
    const container = containerBackRef.current;
    const draggable1 = draggableBackRef1.current;
    const draggable2 = draggableBackRef2.current;
    const draggable3 = draggableBackRef3.current;

    if (!container || (!draggable1 && !draggable2)) return;

    const containerRect = container.getBoundingClientRect();

    let isCenteredX = false;
    let isCenteredY = false;

    if (draggable1) {
      const draggableRect1 = draggable1.getBoundingClientRect();
      const containerCenterX = containerRect.width / 2;
      const containerCenterY = containerRect.height / 2;
      const draggableCenterX1 =
        draggableRect1.left - containerRect.left + draggableRect1.width / 2;
      const draggableCenterY1 =
        draggableRect1.top - containerRect.top + draggableRect1.height / 2;

      isCenteredX = Math.abs(draggableCenterX1 - containerCenterX) < 10;
      isCenteredY = Math.abs(draggableCenterY1 - containerCenterY) < 10;
    }

    if (draggable2) {
      const draggableRect2 = draggable2.getBoundingClientRect();
      const containerCenterX = containerRect.width / 2;
      const containerCenterY = containerRect.height / 2;
      const draggableCenterX2 =
        draggableRect2.left - containerRect.left + draggableRect2.width / 2;
      const draggableCenterY2 =
        draggableRect2.top - containerRect.top + draggableRect2.height / 2;

      isCenteredX =
        isCenteredX || Math.abs(draggableCenterX2 - containerCenterX) < 10;
      isCenteredY =
        isCenteredY || Math.abs(draggableCenterY2 - containerCenterY) < 10;
    }

    if (draggable3) {
      const draggableRect3 = draggable3.getBoundingClientRect();
      const containerCenterX = containerRect.width / 2;
      const containerCenterY = containerRect.height / 2;
      const draggableCenterX3 =
        draggableRect3.left - containerRect.left + draggableRect3.width / 2;
      const draggableCenterY3 =
        draggableRect3.top - containerRect.top + draggableRect3.height / 2;

      isCenteredX =
        isCenteredX || Math.abs(draggableCenterX3 - containerCenterX) < 10;
      isCenteredY =
        isCenteredY || Math.abs(draggableCenterY3 - containerCenterY) < 10;
    }

    if (isCenteredX || isCenteredY) {
      setShowBackLines({ x: isCenteredX, y: isCenteredY });

      // Hide lines after 5 seconds
      setTimeout(() => {
        setShowBackLines({ x: false, y: false });
      }, 2000);
    }
  };

  return (
    <>
      {/* Colors */}
      <div className="absolute top-0 flex justify-between gap-x-2 p-2 w-full h-10">
        {switchBtn ? (
          <div className={`relative`}>
            <p className="text-xs mb-2 text-black lg:block hidden">
              {t("pick")}
            </p>
            <div className="lg:0 w-32 h-32">
              <input
                type="color"
                className="w-full lg:h-16 h-12 border-none outline-none shadow shadow-orange-900"
                onChange={(e) =>
                  switchBtn && active === "front"
                    ? setPickBg(e.currentTarget.value)
                    : setBackPickBg(e.currentTarget.value)
                }
                value={pickedBg}
              />
            </div>
          </div>
        ) : (
          <div className="flex gap-x-1">
            {bgColors.map((b) => (
              <p
                key={b.style}
                onClick={() =>
                  active === "front" ? setBg(b.style) : setBackBg(b.style)
                }
                className={`${b.style} rounded border border-gray-600 lg:w-6 lg:h-6 w-5 h-5 cursor-pointer`}
              ></p>
            ))}
          </div>
        )}

        <div className="lg:me-0 me-1">
          <label className="switch">
            <input
              onClick={() => setSwitch(switchBtn ? false : true)}
              type="checkbox"
            />
            <span className="slider w-11 h-5"></span>
          </label>
        </div>
      </div>

      <div>
        <div className="flex justify-end gap-x-10 mt-6">
          <p
            onClick={() => activeCard("front")}
            className={`text-sm mb-2 ${
              active === "front" && "btn-bg p-0 w-20 rounded"
            }`}
          >
            {t("front")}
          </p>
          <p
            onClick={() => activeCard("back")}
            className={`text-sm mb-2 ${
              active === "back" && "btn-bg p-0 w-20 rounded"
            }`}
          >
            {t("back")}
          </p>
        </div>
        {/* Front */}
        {active === "front" && (
          <div className="flex justify-center items-center h-full">
            <div
              onClick={() => activeCard("front")}
              className={`${!switchBtn && bg} ${
                active === "front" && "border-2 border-sky-600"
              } relative rounded-md ${
                orientation
                  ? " w-48 h-[30vh]"
                  : "w-full h-[30vh] md:w-[55%] md:h-[35vh]"
              } shadow-lg shadow-zinc-900 overflow-hidden cursor-pointer`}
              style={{
                backgroundColor: switchBtn ? pickedBg : "",
              }}
            >
              <div ref={containerRef} className="h-full">
                <svg
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    pointerEvents: "none",
                  }}
                >
                  {showLines.x && (
                    <line
                      x1="50%"
                      y1="0"
                      x2="50%"
                      y2="100%"
                      stroke="blue"
                      strokeWidth="0.5"
                    />
                  )}
                  {showLines.y && (
                    <line
                      x1="0"
                      y1="50%"
                      x2="100%"
                      y2="50%"
                      stroke="blue"
                      strokeWidth="0.5"
                    />
                  )}
                </svg>
                <div className="flex justify-center items-center h-full">
                  {/* Image */}
                  {croppedImage && (
                    <Draggable
                      bounds={image === "full" ? "" : "parent"}
                      axis="both"
                      handle=".handle"
                      defaultPosition={
                        image === "full" ? { x: 0, y: 0 } : undefined
                      }
                      grid={[10, 10]}
                      scale={1}
                      position={position}
                      onStart={(e, data) => console.log("Start:", e, data)}
                      onDrag={handleDrag1}
                      onStop={(e, data) => {
                        console.log(e);
                        updateFront({
                          imagePosition: { x: data.x, y: data.y },
                        });
                      }}
                    >
                      <div ref={draggableRef1} className="absolute">
                        <div className="flex fixed justify-center w-full h-full items-center">
                          <button className="bi-arrows-move handle text-gray-100 hover:text-white bg-[#22112286] border border-gray-600 px-1 rounded"></button>
                        </div>
                        <img
                          src={croppedImage && croppedImage}
                          alt="logo"
                          className={`h-${image} w-${image} object-cover`}
                        />
                      </div>
                    </Draggable>
                  )}
                  {/* Name */}
                  {name !== "" && (
                    <Draggable
                      bounds="parent"
                      axis="both"
                      handle=".handle"
                      position={position2}
                      grid={[10, 10]}
                      scale={1}
                      onStart={(e, data) => console.log("Start:", e, data)}
                      onDrag={handleDrag2}
                      onStop={(e, data) => {
                        console.log(e);
                        updateFront({ textPosition: { x: data.x, y: data.y } });
                      }}
                    >
                      <div ref={draggableRef2} className="absolute top-3">
                        <button
                          className={`bi-arrows-move handle absolute -top-1 left-2 text-sm`}
                          style={{
                            color: textColor,
                          }}
                        ></button>
                        <p
                          className={`${fontStyle.style} text-${fSize} overflow-hidden text-ellipsis px-2`}
                          style={{
                            color: textColor,
                          }}
                        >
                          {name}
                        </p>
                      </div>
                    </Draggable>
                  )}
                  {/* Extra Text */}
                  {extraText !== "" && (
                    <Draggable
                      bounds="parent"
                      axis="both"
                      handle=".handle"
                      position={position3}
                      grid={[10, 10]}
                      scale={1}
                      onStart={(e, data) => console.log("Start:", e, data)}
                      onDrag={handleDrag3}
                      onStop={(e, data) => {
                        console.log(e);
                        updateFront({
                          extraTextPosition: { x: data.x, y: data.y },
                        });
                      }}
                    >
                      <div ref={draggableRef3} className="absolute bottom-3 ">
                        <button
                          className={`bi-arrows-move handle absolute -top-1 left-2 text-sm`}
                          style={{
                            color: extraTextColor,
                          }}
                        ></button>
                        <p
                          className={`${extraFontStyle.style} text-${extraFontSize} overflow-hidden text-ellipsis px-2`}
                          style={{
                            color: extraTextColor,
                          }}
                        >
                          {extraText}
                        </p>
                      </div>
                    </Draggable>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Back */}
        {active === "back" && (
          <div className="flex justify-center items-center h-full">
            <div
              onClick={() => activeCard("back")}
              className={`${!switchBtn && backBg} ${
                active === "back" && "border-2 border-sky-600"
              } relative rounded-md ${
                orientation
                  ? " w-48 h-[30vh]"
                  : "w-full h-[30vh] md:w-[55%] md:h-[35vh]"
              }  shadow-lg shadow-zinc-900 overflow-hidden cursor-pointer`}
              style={{
                backgroundColor: switchBtn ? pickedBackBg : "",
              }}
            >
              <div ref={containerBackRef} className="h-full">
                <svg
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    pointerEvents: "none",
                  }}
                >
                  {showBackLines.x && (
                    <line
                      x1="50%"
                      y1="0"
                      x2="50%"
                      y2="100%"
                      stroke="blue"
                      strokeWidth="0.5"
                    />
                  )}
                  {showBackLines.y && (
                    <line
                      x1="0"
                      y1="50%"
                      x2="100%"
                      y2="50%"
                      stroke="blue"
                      strokeWidth="0.5"
                    />
                  )}
                </svg>
                <div className="flex justify-center items-center h-full">
                  {/* Image */}
                  {backCroppedImage && (
                    <Draggable
                      bounds={image === "full" ? "" : "parent"}
                      axis="both"
                      handle=".handle"
                      defaultPosition={
                        image === "full" ? { x: 0, y: 0 } : undefined
                      }
                      grid={[10, 10]}
                      scale={1}
                      position={backPosition}
                      onStart={(e, data) => console.log("Start:", e, data)}
                      onDrag={handleBackDrag1}
                      onStop={(e, data) => {
                        console.log(e);
                        updateBack({ imagePosition: { x: data.x, y: data.y } });
                      }}
                    >
                      <div ref={draggableBackRef1} className="absolute">
                        <div className="flex fixed justify-center w-full h-full items-center">
                          <button
                            className={`bi-arrows-move handle text-gray-100 hover:text-white bg-[#22112286] border border-gray-600 px-1 rounded`}
                          ></button>
                        </div>
                        <img
                          src={backCroppedImage && backCroppedImage}
                          alt="logo"
                          className={`h-${backImage} w-${backImage} object-cover`}
                        />
                      </div>
                    </Draggable>
                  )}
                  {/* Name */}
                  {backName !== "" && (
                    <Draggable
                      bounds="parent"
                      axis="both"
                      handle=".handle"
                      position={backPosition2}
                      grid={[10, 10]}
                      scale={1}
                      onStart={(e, data) => console.log("Start:", e, data)}
                      onDrag={handleBackDrag2}
                      onStop={(e, data) => {
                        console.log(e);
                        updateBack({ textPosition: { x: data.x, y: data.y } });
                      }}
                    >
                      <div ref={draggableBackRef2} className="absolute top-3">
                        <button
                          className={`bi-arrows-move handle absolute -top-1 left-2 text-xs`}
                          style={{
                            color: backTextColor,
                          }}
                        ></button>
                        <p
                          className={`${backFontStyle.style} text-${backFontSize} overflow-hidden text-ellipsis px-2`}
                          style={{
                            color: backTextColor,
                          }}
                        >
                          {backName}
                        </p>
                      </div>
                    </Draggable>
                  )}
                  {/* Extra Text */}
                  {backExtraText !== "" && (
                    <Draggable
                      bounds="parent"
                      axis="both"
                      handle=".handle"
                      position={backPosition3}
                      grid={[10, 10]}
                      scale={1}
                      onStart={(e, data) => console.log("Start:", e, data)}
                      onDrag={handleBackDrag3}
                      onStop={(e, data) => {
                        console.log(e);
                        updateBack({
                          extraTextPosition: { x: data.x, y: data.y },
                        });
                      }}
                    >
                      <div
                        ref={draggableBackRef3}
                        className="absolute bottom-3"
                      >
                        <button
                          className={`bi-arrows-move handle absolute -top-1 left-2 text-xs`}
                          style={{
                            color: backExtraTextColor,
                          }}
                        ></button>
                        <p
                          className={`${backExtraFontStyle.style} text-${backExtraFontSize} overflow-hidden text-ellipsis px-2`}
                          style={{
                            color: backExtraTextColor,
                          }}
                        >
                          {backExtraText}
                        </p>
                      </div>
                    </Draggable>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SmallDevicePreview;
