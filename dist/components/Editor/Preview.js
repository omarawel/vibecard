"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const useProduct_1 = __importDefault(require("@/store/useProduct"));
const react_1 = require("react");
const html2canvas_1 = __importDefault(require("html2canvas"));
const jspdf_1 = __importDefault(require("jspdf"));
const react_i18next_1 = require("react-i18next");
const Preview = ({ showPreview, orientation }) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const { back, front } = (0, useProduct_1.default)();
    const printRef = (0, react_1.useRef)(null);
    const [frontImage, setFrontImage] = (0, react_1.useState)(null);
    const [backImage, setBackImage] = (0, react_1.useState)(null);
    // Get images from a file
    (0, react_1.useEffect)(() => {
        let frontUrl = null;
        let backUrl = null;
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
            if (frontUrl)
                URL.revokeObjectURL(frontUrl);
            if (backUrl)
                URL.revokeObjectURL(backUrl);
        };
    }, [front, back]);
    // Handling Print
    const handlePrint = () => __awaiter(void 0, void 0, void 0, function* () {
        if (!printRef.current)
            return;
        // Capture the content of the modal
        const canvas = yield (0, html2canvas_1.default)(printRef.current, {
            scale: 2, // Increase scale for better quality
            useCORS: true, // Use CORS to handle external resources
            scrollX: 0,
            scrollY: -window.scrollY, // Adjust for any scrolling
        });
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jspdf_1.default({
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
    });
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { className: "overlay w-full z-50" }), (0, jsx_runtime_1.jsx)("div", { className: "flex justify-center", children: (0, jsx_runtime_1.jsxs)("div", { ref: printRef, className: `fixed lg:w-[45%] md:w-[55%] w-[98%] lg:h-[100dvh] h-[98dvh] lg:top-4 top-2 z-50 bg-gray-200 rounded-lg border-gradient-2 lg:overflow-auto overflow-y-scroll`, children: [(0, jsx_runtime_1.jsxs)("div", { className: "relative flex justify-between", children: [(0, jsx_runtime_1.jsx)("button", { onClick: handlePrint, className: "absolute lg:left-10 left-2 top-3 text-xl text-blue-600 bi-printer-fill" }), (0, jsx_runtime_1.jsx)("p", { onClick: () => showPreview(false), className: "absolute lg:right-10 right-2 top-3 bi-x-lg text-xl text-red-600 cursor-pointer" })] }), (0, jsx_runtime_1.jsxs)("div", { className: `absolute lg:flex hidden mt-10 ${!orientation && "hidden"} w-full justify-between`, children: [(0, jsx_runtime_1.jsx)("p", { className: `mt-16 text-sm mb-2 ${!orientation && "hidden"} ms-14`, children: t("front") }), (0, jsx_runtime_1.jsx)("p", { className: `mt-16 text-sm mb-2 ${!orientation && "hidden"} me-16`, children: t("back") })] }), (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("div", { className: `${orientation
                                    ? " lg:flex gap-x-5 h-full items-center lg:my-0 my-14 lg:px-16 lg:ms-0 lg:w-full w-[50%] lg:m-0 m-auto"
                                    : "lg:px-20 px-2 mt-24"}  `, children: [(0, jsx_runtime_1.jsx)("p", { className: `${orientation && "lg:hidden"} lg:mt-8 text-sm mb-2 mt-14`, children: t("front") }), (0, jsx_runtime_1.jsx)("div", { className: `relative rounded-md  ${orientation
                                            ? " lg:h-[400px] lg:w-full w-48 h-[30vh]"
                                            : "lg:h-[280px] h-[30vh] md:h-[35vh] w-full"}  mb-5 shadow-md shadow-zinc-900 overflow-hidden ${front.pickedBg === "#ffffff" ? front.bgColor : ""}`, style: {
                                            backgroundColor: front.pickedBg === "#ffffff" ? "" : front.pickedBg,
                                        }, children: (0, jsx_runtime_1.jsxs)("div", { className: `flex justify-center items-center h-full overflow-hidden`, children: [frontImage && ((0, jsx_runtime_1.jsx)("div", { className: `absolute`, style: {
                                                        transform: `translate(${front.imagePosition.x}px, ${front.imagePosition.y}px)`,
                                                    }, children: (0, jsx_runtime_1.jsx)("img", { src: frontImage, alt: "user", className: `h-${front.imageSize} w-${front.imageSize} object-cover`, style: {
                                                            rotate: `${front.rotation}deg`,
                                                        } }) })), front.text !== "" && ((0, jsx_runtime_1.jsx)("div", { className: `absolute ${orientation ? "top-3" : "top-3"} `, style: {
                                                        transform: `translate(${front.textPosition.x}px, ${front.textPosition.y}px)`,
                                                    }, children: (0, jsx_runtime_1.jsx)("p", { className: `${front.fontStyle} text-${front.textSize} overflow-hidden text-ellipsis px-2`, style: {
                                                            color: front.color,
                                                        }, children: front.text }) })), front.extraText !== "" && ((0, jsx_runtime_1.jsx)("div", { className: "absolute bottom-5", style: {
                                                        transform: `translate(${front.extraTextPosition.x}px, ${front.extraTextPosition.y}px)`,
                                                    }, children: (0, jsx_runtime_1.jsx)("p", { className: `${front.extraTextFontStyle} text-${front.extraTextFontSize} overflow-hidden text-ellipsis px-2`, style: {
                                                            color: front.extraTextColor,
                                                        }, children: front.extraText }) }))] }) }), (0, jsx_runtime_1.jsx)("p", { className: `${orientation && "lg:hidden"} mt-1 text-sm mb-2`, children: t("back") }), (0, jsx_runtime_1.jsx)("div", { className: `relative rounded-md ${orientation
                                            ? " lg:h-[400px] lg:w-full w-48 h-[30vh]"
                                            : "lg:h-[280px] h-[30vh] md:h-[35vh] w-full"} lg:mb-5 shadow-md shadow-zinc-900 overflow-hidden ${back.pickedBg === "#ffffff" ? back.bgColor : ""}`, style: {
                                            backgroundColor: back.pickedBg === "#ffffff" ? "" : back.pickedBg,
                                            margin: "",
                                        }, children: (0, jsx_runtime_1.jsxs)("div", { className: `flex justify-center items-center h-full overflow-hidden`, children: [backImage && ((0, jsx_runtime_1.jsx)("div", { className: `absolute`, style: {
                                                        transform: `translate(${back.imagePosition.x}px, ${back.imagePosition.y}px)`,
                                                    }, children: (0, jsx_runtime_1.jsx)("img", { src: backImage, alt: "user", className: `h-${back.imageSize} w-${back.imageSize} object-cover`, style: {
                                                            rotate: `${back.rotation}deg`,
                                                        } }) })), back.text !== "" && ((0, jsx_runtime_1.jsx)("div", { className: "absolute top-3", style: {
                                                        transform: `translate(${back.textPosition.x}px, ${back.textPosition.y}px)`,
                                                    }, children: (0, jsx_runtime_1.jsx)("p", { className: `${back.fontStyle} text-${back.textSize} overflow-hidden text-ellipsis px-2`, style: {
                                                            color: back.color,
                                                        }, children: back.text }) })), back.extraText !== "" && ((0, jsx_runtime_1.jsx)("div", { className: "absolute bottom-5", style: {
                                                        transform: `translate(${back.extraTextPosition.x}px, ${back.extraTextPosition.y}px)`,
                                                    }, children: (0, jsx_runtime_1.jsx)("p", { className: `${back.extraTextFontStyle} text-${back.extraTextFontSize} overflow-hidden text-ellipsis px-2`, style: {
                                                            color: back.extraTextColor,
                                                        }, children: back.extraText }) }))] }) }), (0, jsx_runtime_1.jsx)("p", { className: "lg:hidden text-transparent", children: "Lorem, ipsum dolor sit amet cons" })] }) })] }) })] }));
};
exports.default = Preview;
