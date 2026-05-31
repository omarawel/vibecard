"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_draggable_1 = __importDefault(require("react-draggable"));
const ProductColor_1 = require("../Product/ProductColor");
const useProduct_1 = __importDefault(require("@/store/useProduct"));
const react_i18next_1 = require("react-i18next");
const LargeCardPreview = ({ orientation, active, switchBtn, activeCard, setPickBg, 
//   Front
bg, name, image, fSize, textColor, fontStyle, pickedBg, croppedImage, extraText, extraFontsize, extraFontStyle, extraTextColor, setBg, setSwitch, 
//   Back
backBg, pickedBackBg, backName, backImage, backFontSize, backTextColor, backExtraFontStyle, backCroppedImage, backExtraText, backExtraFontsize, backExtraTextColor, backFontStyle, setBackBg, setBackPickBg, }) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const { updateBack, updateFront } = (0, useProduct_1.default)();
    const frontContainerRef = (0, react_1.useRef)(null);
    const backContainerRef = (0, react_1.useRef)(null);
    //   Front
    const [position, setPosition] = (0, react_1.useState)({
        x: 0,
        y: 0,
    });
    const [position2, setPosition2] = (0, react_1.useState)({
        x: 0,
        y: 0,
    });
    const [position3, setPosition3] = (0, react_1.useState)({
        x: 0,
        y: 0,
    });
    const [showLines, setShowLines] = (0, react_1.useState)({
        x: false,
        y: false,
    });
    const containerRef = (0, react_1.useRef)(null);
    const draggableRef1 = (0, react_1.useRef)(null);
    const draggableRef2 = (0, react_1.useRef)(null);
    const draggableRef3 = (0, react_1.useRef)(null);
    //   Back
    const [backPosition, setBackPosition] = (0, react_1.useState)({
        x: 0,
        y: 0,
    });
    const [backPosition2, setBackPosition2] = (0, react_1.useState)({
        x: 0,
        y: 0,
    });
    const [backPosition3, setBackPosition3] = (0, react_1.useState)({
        x: 0,
        y: 0,
    });
    const [showBackLines, setShowBackLines] = (0, react_1.useState)({
        x: false,
        y: false,
    });
    const containerBackRef = (0, react_1.useRef)(null);
    const draggableBackRef1 = (0, react_1.useRef)(null);
    const draggableBackRef2 = (0, react_1.useRef)(null);
    const draggableBackRef3 = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        if (image === "full") {
            setPosition({ x: 0, y: 0 });
        }
    }, [image]);
    //   Front
    const handleDrag1 = (e, data) => {
        console.log(e);
        setPosition({ x: data.x, y: data.y });
        checkIfCentered();
    };
    const handleDrag2 = (e, data) => {
        console.log(e, data);
        setPosition2({ x: data.x, y: data.y });
        checkIfCentered();
    };
    const handleDrag3 = (e, data) => {
        console.log(e, data);
        setPosition3({ x: data.x, y: data.y });
        checkIfCentered();
    };
    const checkIfCentered = () => {
        const container = containerRef.current;
        const draggable1 = draggableRef1.current;
        const draggable2 = draggableRef2.current;
        const draggable3 = draggableRef3.current;
        if (!container || (!draggable1 && !draggable2))
            return;
        const containerRect = container.getBoundingClientRect();
        let isCenteredX = false;
        let isCenteredY = false;
        if (draggable1) {
            const draggableRect1 = draggable1.getBoundingClientRect();
            const containerCenterX = containerRect.width / 2;
            const containerCenterY = containerRect.height / 2;
            const draggableCenterX1 = draggableRect1.left - containerRect.left + draggableRect1.width / 2;
            const draggableCenterY1 = draggableRect1.top - containerRect.top + draggableRect1.height / 2;
            isCenteredX = Math.abs(draggableCenterX1 - containerCenterX) < 10;
            isCenteredY = Math.abs(draggableCenterY1 - containerCenterY) < 10;
        }
        if (draggable2) {
            const draggableRect2 = draggable2.getBoundingClientRect();
            const containerCenterX = containerRect.width / 2;
            const containerCenterY = containerRect.height / 2;
            const draggableCenterX2 = draggableRect2.left - containerRect.left + draggableRect2.width / 2;
            const draggableCenterY2 = draggableRect2.top - containerRect.top + draggableRect2.height / 2;
            isCenteredX =
                isCenteredX || Math.abs(draggableCenterX2 - containerCenterX) < 10;
            isCenteredY =
                isCenteredY || Math.abs(draggableCenterY2 - containerCenterY) < 10;
        }
        if (draggable3) {
            const draggableRect3 = draggable3.getBoundingClientRect();
            const containerCenterX = containerRect.width / 2;
            const containerCenterY = containerRect.height / 2;
            const draggableCenterX3 = draggableRect3.left - containerRect.left + draggableRect3.width / 2;
            const draggableCenterY3 = draggableRect3.top - containerRect.top + draggableRect3.height / 2;
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
            }, 2000);
        }
    };
    // Back
    const handleBackDrag1 = (e, data) => {
        console.log(e);
        setBackPosition({ x: data.x, y: data.y });
        checkIfBackCentered();
    };
    const handleBackDrag2 = (e, data) => {
        console.log(e, data);
        setBackPosition2({ x: data.x, y: data.y });
        checkIfBackCentered();
    };
    const handleBackDrag3 = (e, data) => {
        console.log(e, data);
        setBackPosition3({ x: data.x, y: data.y });
        checkIfBackCentered();
    };
    const checkIfBackCentered = () => {
        const container = containerBackRef.current;
        const draggable1 = draggableBackRef1.current;
        const draggable2 = draggableBackRef2.current;
        const draggable3 = draggableBackRef3.current;
        if (!container || (!draggable1 && !draggable2))
            return;
        const containerRect = container.getBoundingClientRect();
        let isCenteredX = false;
        let isCenteredY = false;
        if (draggable1) {
            const draggableRect1 = draggable1.getBoundingClientRect();
            const containerCenterX = containerRect.width / 2;
            const containerCenterY = containerRect.height / 2;
            const draggableCenterX1 = draggableRect1.left - containerRect.left + draggableRect1.width / 2;
            const draggableCenterY1 = draggableRect1.top - containerRect.top + draggableRect1.height / 2;
            isCenteredX = Math.abs(draggableCenterX1 - containerCenterX) < 10;
            isCenteredY = Math.abs(draggableCenterY1 - containerCenterY) < 10;
        }
        if (draggable2) {
            const draggableRect2 = draggable2.getBoundingClientRect();
            const containerCenterX = containerRect.width / 2;
            const containerCenterY = containerRect.height / 2;
            const draggableCenterX2 = draggableRect2.left - containerRect.left + draggableRect2.width / 2;
            const draggableCenterY2 = draggableRect2.top - containerRect.top + draggableRect2.height / 2;
            isCenteredX =
                isCenteredX || Math.abs(draggableCenterX2 - containerCenterX) < 10;
            isCenteredY =
                isCenteredY || Math.abs(draggableCenterY2 - containerCenterY) < 10;
        }
        if (draggable3) {
            const draggableRect3 = draggable3.getBoundingClientRect();
            const containerCenterX = containerRect.width / 2;
            const containerCenterY = containerRect.height / 2;
            const draggableCenterX3 = draggableRect3.left - containerRect.left + draggableRect3.width / 2;
            const draggableCenterY3 = draggableRect3.top - containerRect.top + draggableRect3.height / 2;
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
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { className: "absolute top-0 flex justify-between gap-x-2 p-2 w-full", children: [switchBtn ? ((0, jsx_runtime_1.jsxs)("div", { className: `relative`, children: [(0, jsx_runtime_1.jsx)("p", { className: "text-xs mb-2 text-black lg:block hidden", children: t("pick") }), (0, jsx_runtime_1.jsx)("div", { className: "lg:0 w-32 h-32", children: (0, jsx_runtime_1.jsx)("input", { type: "color", className: "w-full lg:h-16 h-12 border-none outline-none shadow shadow-orange-900", onChange: (e) => switchBtn && active === "front"
                                        ? setPickBg(e.currentTarget.value)
                                        : setBackPickBg(e.currentTarget.value), value: active === "front" ? pickedBg : pickedBackBg }) })] })) : ((0, jsx_runtime_1.jsx)("div", { className: "flex gap-x-1", children: ProductColor_1.bgColors.map((b) => ((0, jsx_runtime_1.jsx)("p", { onClick: () => active === "front" ? setBg(b.style) : setBackBg(b.style), className: `${b.style} rounded border border-gray-600 lg:w-6 lg:h-6 w-5 h-5 cursor-pointer` }, b.style))) })), (0, jsx_runtime_1.jsx)("div", { className: "lg:me-0 me-1", children: (0, jsx_runtime_1.jsxs)("label", { className: "switch", children: [(0, jsx_runtime_1.jsx)("input", { onClick: () => setSwitch(switchBtn ? false : true), type: "checkbox" }), (0, jsx_runtime_1.jsx)("span", { className: "slider w-11 h-5" })] }) })] }), (0, jsx_runtime_1.jsxs)("div", { className: `absolute flex mt-10 ${!orientation && "hidden"} w-full justify-between`, children: [(0, jsx_runtime_1.jsxs)("p", { className: `mt-8 text-sm mb-2 ms-14`, children: [" ", t("front")] }), (0, jsx_runtime_1.jsxs)("p", { className: `mt-8 text-sm mb-2 me-16`, children: [" ", t("back")] })] }), (0, jsx_runtime_1.jsxs)("div", { className: `pb-10 ${orientation &&
                    "flex gap-x-10 justify-center items-center h-full mt-10"} `, children: [(0, jsx_runtime_1.jsx)("p", { className: `${orientation && "hidden"} mt-8 text-sm mb-2 ms-10`, children: t("front") }), (0, jsx_runtime_1.jsx)("div", { ref: frontContainerRef, className: `flex justify-center items-center ${orientation ? "w-[265px]" : "h-full"} `, children: (0, jsx_runtime_1.jsx)("div", { onClick: () => activeCard("front"), className: `${!switchBtn && bg} ${active === "front" && "border-2 border-sky-600"} relative rounded-md shadow-lg shadow-zinc-900 ${orientation ? "w-full h-[400px]" : "mx-20 w-full h-[280px]"} overflow-hidden cursor-pointer`, style: {
                                backgroundColor: switchBtn ? pickedBg : "",
                            }, children: (0, jsx_runtime_1.jsxs)("div", { ref: containerRef, className: "h-full", children: [(0, jsx_runtime_1.jsxs)("svg", { style: {
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            width: "100%",
                                            height: "100%",
                                            pointerEvents: "none",
                                        }, children: [showLines.x && ((0, jsx_runtime_1.jsx)("line", { x1: "50%", y1: "0", x2: "50%", y2: "100%", stroke: "blue", strokeWidth: "0.5" })), showLines.y && ((0, jsx_runtime_1.jsx)("line", { x1: "0", y1: "50%", x2: "100%", y2: "50%", stroke: "blue", strokeWidth: "0.5" }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex justify-center items-center h-full", children: [croppedImage && ((0, jsx_runtime_1.jsx)(react_draggable_1.default, { bounds: image === "full" ? "" : "parent", axis: "both", handle: ".handle", defaultPosition: image === "full" ? { x: 0, y: 0 } : undefined, grid: [10, 10], scale: 1, position: position, onStart: (e, data) => console.log("Start:", e, data), onDrag: handleDrag1, onStop: (e, data) => {
                                                    console.log(e);
                                                    updateFront({ imagePosition: { x: data.x, y: data.y } });
                                                }, children: (0, jsx_runtime_1.jsxs)("div", { ref: draggableRef1, className: "absolute", children: [(0, jsx_runtime_1.jsx)("div", { className: "flex fixed justify-center w-full h-full items-center", children: (0, jsx_runtime_1.jsx)("button", { className: "bi-arrows-move handle text-gray-100 hover:text-white bg-[#22112286] border border-gray-600 px-1 rounded" }) }), (0, jsx_runtime_1.jsx)("img", { src: croppedImage && croppedImage, alt: "logo", className: `h-${image} w-${image} object-cover` })] }) })), name !== "" && ((0, jsx_runtime_1.jsx)(react_draggable_1.default, { bounds: "parent", axis: "both", handle: ".handle", defaultPosition: { x: 0, y: 0 }, grid: [10, 10], position: position2, scale: 1, onStart: (e, data) => console.log("Start:", e, data), onDrag: handleDrag2, onStop: (e, data) => {
                                                    console.log(e);
                                                    updateFront({ textPosition: { x: data.x, y: data.y } });
                                                }, children: (0, jsx_runtime_1.jsxs)("div", { ref: draggableRef2, className: "absolute top-3 ", children: [(0, jsx_runtime_1.jsx)("button", { className: `bi-arrows-move handle absolute -top-1 left-2 text-sm`, style: {
                                                                color: textColor,
                                                            } }), (0, jsx_runtime_1.jsx)("p", { className: `${fontStyle.style} text-${fSize} overflow-hidden text-ellipsis px-2`, style: {
                                                                color: textColor,
                                                            }, children: name })] }) })), extraText !== "" && ((0, jsx_runtime_1.jsx)(react_draggable_1.default, { bounds: "parent", axis: "both", handle: ".handle", defaultPosition: { x: 0, y: 0 }, grid: [10, 10], position: position3, scale: 1, onStart: (e, data) => console.log("Start:", e, data), onDrag: handleDrag3, onStop: (e, data) => {
                                                    console.log(e);
                                                    updateFront({
                                                        extraTextPosition: { x: data.x, y: data.y },
                                                    });
                                                }, children: (0, jsx_runtime_1.jsxs)("div", { ref: draggableRef3, className: "absolute bottom-3 ", children: [(0, jsx_runtime_1.jsx)("button", { className: `bi-arrows-move handle absolute -top-1 left-2 text-sm`, style: {
                                                                color: extraTextColor,
                                                            } }), (0, jsx_runtime_1.jsx)("p", { className: `${extraFontStyle.style} text-${extraFontsize} overflow-hidden text-ellipsis px-2`, style: {
                                                                color: extraTextColor,
                                                            }, children: extraText })] }) }))] })] }) }) }), (0, jsx_runtime_1.jsx)("p", { className: `${orientation && "hidden"} mt-8 text-sm mb-2 ms-10`, children: t("back") }), (0, jsx_runtime_1.jsx)("div", { ref: backContainerRef, className: `${orientation && "w-[265px]"} flex justify-center items-center h-full`, children: (0, jsx_runtime_1.jsx)("div", { onClick: () => activeCard("back"), className: `${!switchBtn && backBg} ${active === "back" && "border-2 border-sky-600"} relative rounded-md  shadow-lg shadow-zinc-900 ${orientation ? "w-full h-[400px]" : "mx-20 w-full h-[280px]"} overflow-hidden cursor-pointer`, style: {
                                backgroundColor: switchBtn ? pickedBackBg : "",
                            }, children: (0, jsx_runtime_1.jsxs)("div", { ref: containerBackRef, className: "h-full", children: [(0, jsx_runtime_1.jsxs)("svg", { style: {
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            width: "100%",
                                            height: "100%",
                                            pointerEvents: "none",
                                        }, children: [showBackLines.x && ((0, jsx_runtime_1.jsx)("line", { x1: "50%", y1: "0", x2: "50%", y2: "100%", stroke: "blue", strokeWidth: "0.5" })), showBackLines.y && ((0, jsx_runtime_1.jsx)("line", { x1: "0", y1: "50%", x2: "100%", y2: "50%", stroke: "blue", strokeWidth: "0.5" }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex justify-center items-center h-full", children: [backCroppedImage && ((0, jsx_runtime_1.jsx)(react_draggable_1.default, { bounds: image === "full" ? "" : "parent", axis: "both", handle: ".handle", defaultPosition: image === "full" ? { x: 0, y: 0 } : undefined, grid: [10, 10], scale: 1, position: backPosition, onStart: (e, data) => console.log("Start:", e, data), onDrag: handleBackDrag1, onStop: (e, data) => {
                                                    console.log(e);
                                                    updateBack({ imagePosition: { x: data.x, y: data.y } });
                                                }, children: (0, jsx_runtime_1.jsxs)("div", { ref: draggableBackRef1, className: "absolute", children: [(0, jsx_runtime_1.jsx)("div", { className: "flex fixed justify-center w-full h-full items-center", children: (0, jsx_runtime_1.jsx)("button", { className: `bi-arrows-move handle text-gray-100 hover:text-white bg-[#22112286] border border-gray-600 px-1 rounded` }) }), (0, jsx_runtime_1.jsx)("img", { src: backCroppedImage && backCroppedImage, alt: "logo", className: `h-${backImage} w-${backImage} object-cover` })] }) })), backName !== "" && ((0, jsx_runtime_1.jsx)(react_draggable_1.default, { bounds: "parent", axis: "both", handle: ".handle", defaultPosition: { x: 0, y: 0 }, grid: [10, 10], position: backPosition2, scale: 1, onStart: (e, data) => console.log("Start:", e, data), onDrag: handleBackDrag2, onStop: (e, data) => {
                                                    console.log(e);
                                                    updateBack({ textPosition: { x: data.x, y: data.y } });
                                                }, children: (0, jsx_runtime_1.jsxs)("div", { ref: draggableBackRef2, className: "absolute top-3", children: [(0, jsx_runtime_1.jsx)("button", { className: `bi-arrows-move handle absolute -top-1 left-2 text-xs`, style: {
                                                                color: backTextColor,
                                                            } }), (0, jsx_runtime_1.jsx)("p", { className: `${backFontStyle.style} text-${backFontSize} overflow-hidden text-ellipsis px-2`, style: {
                                                                color: backTextColor,
                                                            }, children: backName })] }) })), backExtraText !== "" && ((0, jsx_runtime_1.jsx)(react_draggable_1.default, { bounds: "parent", axis: "both", handle: ".handle", defaultPosition: { x: 0, y: 0 }, grid: [10, 10], position: backPosition3, scale: 1, onStart: (e, data) => console.log("Start:", e, data), onDrag: handleBackDrag3, onStop: (e, data) => {
                                                    console.log(e);
                                                    updateBack({
                                                        extraTextPosition: { x: data.x, y: data.y },
                                                    });
                                                }, children: (0, jsx_runtime_1.jsxs)("div", { ref: draggableBackRef3, className: "absolute bottom-3", children: [(0, jsx_runtime_1.jsx)("button", { className: `bi-arrows-move handle absolute -top-1 left-2 text-xs`, style: {
                                                                color: backExtraTextColor,
                                                            } }), (0, jsx_runtime_1.jsx)("p", { className: `${backExtraFontStyle.style} text-${backExtraFontsize} overflow-hidden text-ellipsis px-2`, style: {
                                                                color: backExtraTextColor,
                                                            }, children: backExtraText })] }) }))] })] }) }) })] })] }));
};
exports.default = LargeCardPreview;
