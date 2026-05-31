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
const react_1 = require("react");
const react_easy_crop_1 = __importDefault(require("react-easy-crop"));
const cropUtils_1 = require("./cropUtils");
const Slider_1 = __importDefault(require("./Slider"));
const Navbar_1 = __importDefault(require("../Navbar/Navbar"));
const Footer_1 = __importDefault(require("../Footer/Footer"));
const editor_1 = require("@/services/editor");
const useProduct_1 = __importDefault(require("@/store/useProduct"));
const assets_1 = require("@/assets");
const LargeCardPreview_1 = __importDefault(require("./LargeCardPreview"));
const Preview_1 = __importDefault(require("./Preview"));
const react_router_dom_1 = require("react-router-dom");
const CardOrder_1 = __importDefault(require("../Order/CardOrder"));
const react_i18next_1 = require("react-i18next");
const LargeEditor = () => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    const productsInfo = localStorage.getItem("product");
    (0, react_1.useEffect)(() => {
        if (!productsInfo) {
            navigate("/all-products");
        }
    }, []);
    // Zustand
    const { updateBack, updateFront, setCardOrientation } = (0, useProduct_1.default)();
    // Order
    const [order, setOrder] = (0, react_1.useState)(false);
    // Cropper
    const [crop, setCrop] = (0, react_1.useState)({ x: 0, y: 0 });
    const [zoom, setZoom] = (0, react_1.useState)(1);
    const [frontRotation, setFrontRotation] = (0, react_1.useState)(0);
    const [backRotation, setBackRotation] = (0, react_1.useState)(0);
    const [croppedAreaPixels, setCroppedAreaPixels] = (0, react_1.useState)(null);
    const [aspect, setAspect] = (0, react_1.useState)();
    // Input Ref
    const inputRef = (0, react_1.useRef)(null);
    // Front and Back
    const [orientation, setOrientation] = (0, react_1.useState)(false);
    const [switchBtn, setSwitchBtn] = (0, react_1.useState)(false);
    const [tab, setTab] = (0, react_1.useState)("image");
    const [pickedBg, setPickBg] = (0, react_1.useState)("#ffffff");
    const [active, setActive] = (0, react_1.useState)("front");
    // Front Card
    const [croppedImage, setCroppedImage] = (0, react_1.useState)(null);
    const [frontFile, setFrontFile] = (0, react_1.useState)();
    const [imageSrc, setImageSrc] = (0, react_1.useState)(null);
    const [bg, setBg] = (0, react_1.useState)("bg-white");
    const [name, setName] = (0, react_1.useState)("");
    const [extraText, setExtraText] = (0, react_1.useState)("");
    const [font, setFontSize] = (0, react_1.useState)("4xl");
    const [image, setImage] = (0, react_1.useState)("40");
    const [textColor, setTextColor] = (0, react_1.useState)("");
    const [extraFont, setExtraFont] = (0, react_1.useState)("2xl");
    const [extraTextColor, setExtraTextColor] = (0, react_1.useState)("");
    const [fontStyle, setFontStyle] = (0, react_1.useState)({
        style: "syne",
        name: "Syne",
    });
    const [extraFontStyle, setExtraFontStyle] = (0, react_1.useState)({
        style: "syne",
        name: "Syne",
    });
    // Back Card
    const [backImageSrc, setBackImageSrc] = (0, react_1.useState)(null);
    const [backCroppedImage, setBackCroppedImage] = (0, react_1.useState)(null);
    const [backFile, setBackFile] = (0, react_1.useState)();
    const [backPickedBg, setBackPickBg] = (0, react_1.useState)("#ffffff");
    const [backBg, setBackBg] = (0, react_1.useState)("bg-white");
    const [backName, setBackName] = (0, react_1.useState)("");
    const [backExtraText, setBackExtraText] = (0, react_1.useState)("");
    const [backFont, setBackFontSize] = (0, react_1.useState)("4xl");
    const [backImage, setBackImage] = (0, react_1.useState)("40");
    const [backTextColor, setBackTextColor] = (0, react_1.useState)("");
    const [backExtraFont, setBackExtraFont] = (0, react_1.useState)("2xl");
    const [backExtraTextColor, setBackExtraTextColor] = (0, react_1.useState)("");
    const [backExtraFontStyle, setBackExtraFontStyle] = (0, react_1.useState)({
        style: "syne",
        name: "Syne",
    });
    const [backFontStyle, setBackFontStyle] = (0, react_1.useState)({
        style: "syne",
        name: "Syne",
    });
    // Preview
    const [showMyCard, setShowMyCard] = (0, react_1.useState)(false);
    // Error
    const [error, setError] = (0, react_1.useState)(false);
    // Error hide
    (0, react_1.useEffect)(() => {
        setTimeout(() => {
            setError(false);
        }, 10000);
    }, [error]);
    // Show Extra Text
    const [show, setShow] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        if (extraText !== "" || backExtraText !== "") {
            setShow(true);
        }
    }, [extraText, backExtraText]);
    // On crop complete
    const onCropComplete = (_, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels);
    };
    // Showing Cropped Image
    const showCroppedImage = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            if (active === "front") {
                const croppedImage = yield (0, cropUtils_1.getCroppedImg)(imageSrc, croppedAreaPixels, frontRotation);
                setCroppedImage(croppedImage);
                setImageSrc(null);
            }
            else {
                const croppedImage = yield (0, cropUtils_1.getCroppedImg)(backImageSrc, croppedAreaPixels, backRotation);
                setBackCroppedImage(croppedImage);
                setBackImageSrc(null);
            }
        }
        catch (e) {
            console.error(e);
        }
    });
    // Live Preview
    const updateCroppedImage = (0, react_1.useCallback)(() => __awaiter(void 0, void 0, void 0, function* () {
        if (croppedAreaPixels) {
            try {
                if (active === "front") {
                    const croppedImage = yield (0, cropUtils_1.getCroppedImg)(imageSrc, croppedAreaPixels, frontRotation);
                    setCroppedImage(croppedImage);
                }
                else if (active === "back") {
                    const croppedImage = yield (0, cropUtils_1.getCroppedImg)(backImageSrc, croppedAreaPixels, backRotation);
                    setBackCroppedImage(croppedImage);
                }
            }
            catch (e) {
                console.error(e);
            }
        }
    }), [imageSrc, croppedAreaPixels, frontRotation, backRotation]);
    // Update Live
    (0, react_1.useEffect)(() => {
        updateCroppedImage();
    }, [updateCroppedImage]);
    // On File Change
    const onFileChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            // Set the file to the respective state
            if (active === "front") {
                setFrontFile(file);
            }
            else {
                setBackFile(file);
            }
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                const result = reader.result;
                if (active === "front") {
                    setImageSrc(result);
                }
                else {
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
        }
        else {
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
    const handleOrientation = (e) => {
        if (e.currentTarget.value === "landscape") {
            setOrientation(false);
        }
        else {
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
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [order && ((0, jsx_runtime_1.jsx)(CardOrder_1.default, { backFile: backFile ? backFile : null, frontFile: frontFile ? frontFile : null, closeOrder: () => setOrder(false), view: orientation })), error && ((0, jsx_runtime_1.jsxs)("div", { className: "fixed flex top-4 right-0 z-50 text-white bg-red-500 rounded ps-10 text-sm py-3", children: [(0, jsx_runtime_1.jsx)("p", { children: t("logoError") }), (0, jsx_runtime_1.jsx)("p", { onClick: () => setError(false), className: "text-white ms-5 me-2 bi-x-lg rounded px-2 cursor-pointer" })] })), (0, jsx_runtime_1.jsx)(Navbar_1.default, { bulb: true }), (0, jsx_runtime_1.jsx)("div", { className: "container mx-auto", children: (0, jsx_runtime_1.jsxs)("div", { className: "grid grid-cols-10 secondary-bg rounded mt-10 relative", children: [(0, jsx_runtime_1.jsx)("div", { className: `col-span-5 relative px-5 `, children: (0, jsx_runtime_1.jsxs)("div", { className: "grid grid-cols-12 gap-x-10", children: [(0, jsx_runtime_1.jsxs)("div", { className: "col-span-2 w-full border-r border-gray-600 pt-10", children: [(0, jsx_runtime_1.jsx)("p", { onClick: () => setTab("image"), className: `${tab === "image" && "bg-blue-950 py-3 rounded me-1"}  px-3 bi-image text-center text-5xl text-white cursor-pointer` }), (0, jsx_runtime_1.jsx)("p", { onClick: () => setTab("text"), className: `${tab === "text" && "bg-blue-950 py-3 rounded me-1"} px-3 bi-fonts mt-10 text-center text-5xl text-white cursor-pointer` })] }), (0, jsx_runtime_1.jsxs)("div", { className: "col-span-10 pb-10 h-[90dvh] overflow-y-scroll pe-20 pt-5", children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "orientation", className: "text-white text-xl chakra me-5", children: t("orientation") }), (0, jsx_runtime_1.jsxs)("select", { name: "orientation", className: "rounded h-7 w-40 focus:outline-none", onChange: handleOrientation, children: [(0, jsx_runtime_1.jsxs)("option", { value: "landscape", children: [" ", t("landscape")] }), (0, jsx_runtime_1.jsxs)("option", { value: "portrait", children: [" ", t("portrait")] })] })] }), (0, jsx_runtime_1.jsx)("hr", { className: "my-5 border-gray-500" }), tab === "image" && ((0, jsx_runtime_1.jsxs)("div", { className: "w-full", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-font py-5 text-white", children: t("designWImage") }), (0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-white", children: t("imageLogo") }), active === "front" && croppedImage && ((0, jsx_runtime_1.jsx)("button", { onClick: () => {
                                                                    setCroppedImage(null);
                                                                    setImageSrc(null);
                                                                }, className: "bg-red-500 rounded text-xs px-2 text-white", children: t("reset") })), active === "back" && backCroppedImage && ((0, jsx_runtime_1.jsx)("button", { onClick: () => {
                                                                    setBackCroppedImage(null);
                                                                    setBackImageSrc(null);
                                                                }, className: "bg-red-500 rounded text-xs  px-2 text-white", children: t("reset") }))] }), (0, jsx_runtime_1.jsx)("div", { className: "flex justify-between", children: (0, jsx_runtime_1.jsxs)("div", { className: "bg-white border w-full h-32 mt-5 rounded pb-3 ps-3 text-center", children: [(0, jsx_runtime_1.jsx)("input", { type: "file", id: `logo-file`, className: "hidden", onChange: onFileChange, accept: "image/*", ref: inputRef }), (0, jsx_runtime_1.jsx)("label", { htmlFor: `logo-file`, className: "cursor-pointer", children: (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col pt-10", children: [(0, jsx_runtime_1.jsx)("i", { className: "bi-image text-2xl" }), (0, jsx_runtime_1.jsxs)("span", { className: "text-sm", children: [t("upload"), " ", active === "front" ? t("front") : t("back"), " ", t("imageName")] })] }) })] }) }), imageSrc && ((0, jsx_runtime_1.jsxs)("div", { className: "h-[400px] w-full relative mt-4 mb-10 rounded overflow-hidden", children: [(0, jsx_runtime_1.jsx)(react_easy_crop_1.default, { image: imageSrc, crop: crop, zoom: zoom, aspect: aspect, rotation: frontRotation, onCropChange: setCrop, onZoomChange: setZoom, onRotationChange: setFrontRotation, onCropComplete: onCropComplete, cropShape: "rect", showGrid: true }), (0, jsx_runtime_1.jsx)("div", { className: "absolute w-full bottom-7", children: (0, jsx_runtime_1.jsx)(Slider_1.default, { value: zoom, min: 1, max: 3, step: 0.1, onChange: setZoom }) }), (0, jsx_runtime_1.jsx)("p", { onClick: () => showCroppedImage(), className: "absolute  bottom-0 z-50 bg-white cursor-pointer rounded p-2 shadow ", children: (0, jsx_runtime_1.jsx)("img", { src: assets_1.save, alt: "", className: "h-5" }) }), (0, jsx_runtime_1.jsx)("p", { onClick: () => setFrontRotation((frontRotation + 90) % 360), className: "absolute right-0 bottom-0 z-50 bg-white font-extrabold bi-arrow-repeat text-2xl cursor-pointer rounded px-2" })] })), backImageSrc && ((0, jsx_runtime_1.jsxs)("div", { className: "h-[400px] w-full relative mt-4 mb-10 rounded overflow-hidden", children: [(0, jsx_runtime_1.jsx)(react_easy_crop_1.default, { image: backImageSrc, crop: crop, zoom: zoom, aspect: aspect, rotation: backRotation, onCropChange: setCrop, onZoomChange: setZoom, onRotationChange: setBackRotation, onCropComplete: onCropComplete, cropShape: "rect", showGrid: true }), (0, jsx_runtime_1.jsx)("div", { className: "absolute w-full bottom-7", children: (0, jsx_runtime_1.jsx)(Slider_1.default, { value: zoom, min: 1, max: 3, step: 0.1, onChange: setZoom }) }), (0, jsx_runtime_1.jsx)("p", { onClick: () => showCroppedImage(), className: "absolute  bottom-0 z-50 bg-white cursor-pointer rounded p-2 shadow ", children: (0, jsx_runtime_1.jsx)("img", { src: assets_1.save, alt: "", className: "h-5" }) }), (0, jsx_runtime_1.jsx)("p", { onClick: () => setBackRotation((backRotation + 90) % 360), className: "absolute right-0 bottom-0 z-50 bg-white font-extrabold bi-arrow-repeat text-2xl cursor-pointer rounded px-2" })] })), (0, jsx_runtime_1.jsx)("div", { className: "my-8", children: (0, jsx_runtime_1.jsxs)("div", { className: "mb-5", children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "width", className: "text-white block text-sm", children: t("imageSize") }), (0, jsx_runtime_1.jsx)("select", { name: "width", className: "w-full h-10 rounded p-1 mt-2 focus:outline-none", onChange: (e) => active === "front"
                                                                        ? setImage(e.currentTarget.value)
                                                                        : setBackImage(e.currentTarget.value), value: active === "front" ? image : backImage, style: {
                                                                        backgroundColor: "#f0f0f0",
                                                                        color: "#333",
                                                                    }, children: editor_1.imageSize.map((size, index) => ((0, jsx_runtime_1.jsx)("option", { value: `${size}`, children: size }, index))) })] }) })] })), tab === "text" && ((0, jsx_runtime_1.jsxs)("div", { className: "w-full", children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("p", { className: "text-white text-lg mb-5", children: t("companyName") }), (0, jsx_runtime_1.jsx)("input", { type: "text", className: "rounded w-full h-11 px-4 focus:outline-none mb-4 placeholder:font-bold placeholder:text-sm", placeholder: t("nameGoes"), value: active === "front" ? name : backName, onChange: active === "front"
                                                                    ? (e) => setName(e.currentTarget.value)
                                                                    : (e) => setBackName(e.currentTarget.value) }), (0, jsx_runtime_1.jsxs)("div", { className: "mt-4", children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("p", { className: "text-white text-xs", children: t("fontSizes") }), (0, jsx_runtime_1.jsx)("select", { name: "height", className: "w-full h-10 rounded p-1 mt-2 focus:outline-none", onChange: (e) => active === "front"
                                                                                    ? setFontSize(e.currentTarget.value)
                                                                                    : setBackFontSize(e.currentTarget.value), value: active === "front" ? font : backFont, children: editor_1.fontSize.map((f) => f !== font ? ((0, jsx_runtime_1.jsx)("option", { value: f, children: f }, f)) : ((0, jsx_runtime_1.jsx)("option", { value: active === "front" ? font : backFont, children: active === "front" ? font : backFont }))) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "lg:0 mb-5 mt-10", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-white text-xs mb-2", children: t("textColor") }), (0, jsx_runtime_1.jsx)("input", { type: "color", className: "w-full lg:h-16 h-12 border-none outline-none shadow shadow-orange-900", onChange: (e) => active === "front"
                                                                                    ? setTextColor(e.currentTarget.value)
                                                                                    : setBackTextColor(e.currentTarget.value), value: active === "front" ? textColor : backTextColor })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("p", { className: "text-white text-xs mt-5", children: t("fontStyles") }), (0, jsx_runtime_1.jsxs)("div", { className: "relative", children: [(0, jsx_runtime_1.jsx)("p", { className: "bg-white rounded py-2 px-1 text-sm my-2 w-40", children: active === "front"
                                                                                            ? fontStyle.name
                                                                                            : backFontStyle.name }), (0, jsx_runtime_1.jsx)("div", { className: "w-full bg-white rounded p-2 text-sm", children: editor_1.fonts.map((font) => ((0, jsx_runtime_1.jsx)("p", { onClick: () => active === "front"
                                                                                                ? setFontStyle({
                                                                                                    name: font.name,
                                                                                                    style: font.style,
                                                                                                })
                                                                                                : setBackFontStyle({
                                                                                                    name: font.name,
                                                                                                    style: font.style,
                                                                                                }), className: `cursor-pointer mb-1`, children: font.name }))) })] })] })] })] }), (0, jsx_runtime_1.jsx)("hr", { className: "border w-full my-10" }), (0, jsx_runtime_1.jsx)("p", { className: "text-white font-poppins", children: t("inputConfirm") }), (0, jsx_runtime_1.jsxs)("div", { className: "mt-4", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-white text-xs mb-4", children: t("another") }), (0, jsx_runtime_1.jsx)("input", { type: "text", className: "rounded w-full h-11 px-4 focus:outline-none mb-4 placeholder:font-bold placeholder:text-sm", placeholder: t("anotherGoes"), value: active === "front" ? extraText : backExtraText, onChange: active === "front"
                                                                    ? (e) => setExtraText(e.currentTarget.value)
                                                                    : (e) => setBackExtraText(e.currentTarget.value) }), show && ((0, jsx_runtime_1.jsxs)("div", { className: "mt-4", children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("p", { className: "text-white text-xs", children: t("fontSizes") }), (0, jsx_runtime_1.jsx)("select", { name: "height", className: "w-full h-10 rounded p-1 mt-2 focus:outline-none", onChange: (e) => active === "front"
                                                                                    ? setExtraFont(e.currentTarget.value)
                                                                                    : setBackExtraFont(e.currentTarget.value), value: active === "front" ? extraFont : backExtraFont, children: editor_1.fontSize.map((f) => f !== font ? ((0, jsx_runtime_1.jsx)("option", { value: f, children: f }, f)) : ((0, jsx_runtime_1.jsx)("option", { value: active === "front" ? font : backFont, children: active === "front" ? font : backFont }))) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "lg:0 mb-5 mt-10", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-white text-xs mb-2", children: t("textColor") }), (0, jsx_runtime_1.jsx)("input", { type: "color", className: "w-full lg:h-16 h-12 border-none outline-none shadow shadow-orange-900", onChange: (e) => active === "front"
                                                                                    ? setExtraTextColor(e.currentTarget.value)
                                                                                    : setBackExtraTextColor(e.currentTarget.value), value: active === "front"
                                                                                    ? extraTextColor
                                                                                    : backExtraTextColor })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("p", { className: "text-white text-xs mt-5", children: t("fontStyles") }), (0, jsx_runtime_1.jsxs)("div", { className: "relative", children: [(0, jsx_runtime_1.jsx)("p", { className: "bg-white rounded py-2 px-1 text-sm my-2 w-40", children: active === "front"
                                                                                            ? extraFontStyle.name
                                                                                            : backExtraFontStyle.name }), (0, jsx_runtime_1.jsx)("div", { className: "w-full bg-white rounded p-2 text-sm", children: editor_1.fonts.map((font) => ((0, jsx_runtime_1.jsx)("p", { onClick: () => active === "front"
                                                                                                ? setExtraFontStyle({
                                                                                                    name: font.name,
                                                                                                    style: font.style,
                                                                                                })
                                                                                                : setBackExtraFontStyle({
                                                                                                    name: font.name,
                                                                                                    style: font.style,
                                                                                                }), className: `cursor-pointer mb-1`, children: font.name }))) })] })] })] }))] })] }))] })] }) }), (0, jsx_runtime_1.jsx)("div", { className: "absolute -bottom-0 left-0 z-30 w-full", children: (0, jsx_runtime_1.jsx)("div", { className: "flex justify-center w-full gap-x-4", children: (0, jsx_runtime_1.jsx)("button", { onClick: () => handleSubmit(), className: "btn-bg rounded shadow-xl py-3 shadow-zinc-950 font-poppins", children: t("orderThis") }) }) }), (0, jsx_runtime_1.jsxs)("div", { className: "col-span-5", children: [(0, jsx_runtime_1.jsx)("button", { onClick: () => handlePreview(), className: "absolute z-40 right-28 text-center rounded bi-eye-fill text-2xl mt-1" }), (0, jsx_runtime_1.jsx)("div", { className: `relative py-5 bg-gray-200 h-full rounded`, children: (0, jsx_runtime_1.jsx)(LargeCardPreview_1.default, { orientation: orientation, active: active, setSwitch: (value) => setSwitchBtn(value), activeCard: (value) => setActive(value), 
                                        // Front
                                        bg: bg, fSize: font, name: name, image: image, pickedBg: pickedBg, croppedImage: croppedImage ? croppedImage : "", textColor: textColor, fontStyle: fontStyle, switchBtn: switchBtn, extraFontStyle: extraFontStyle, extraFontsize: extraFont, extraText: extraText, extraTextColor: extraTextColor, setPickBg: (value) => setPickBg(value), setBg: (value) => setBg(value), 
                                        //  Back
                                        pickedBackBg: backPickedBg, backBg: backBg, backCroppedImage: backCroppedImage ? backCroppedImage : "", backExtraText: backExtraText, backExtraFontStyle: backExtraFontStyle, backExtraFontsize: backExtraFont, backExtraTextColor: backExtraTextColor, backFontSize: backFont, backFontStyle: backFontStyle, backImage: backImage, backName: backName, backPickedBg: backPickedBg, backTextColor: backTextColor, setBackBg: (value) => setBackBg(value), setBackPickBg: (value) => setBackPickBg(value) }) })] })] }) }), showMyCard && ((0, jsx_runtime_1.jsx)(Preview_1.default, { orientation: orientation, showPreview: (value) => setShowMyCard(value) })), (0, jsx_runtime_1.jsx)(Footer_1.default, {})] }));
};
exports.default = LargeEditor;
