"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const useContentStore_1 = require("../../store/useContentStore");
const ImageCropper_1 = __importDefault(require("../ImageCrop/ImageCropper"));
const react_i18next_1 = require("react-i18next");
const useCoverColorStore_1 = require("@/store/useCoverColorStore");
const InputImages = ({ type, title, error, onPreviewChange, onHandleFile, coverBg, }) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const [preview, setPreview] = (0, react_1.useState)(null);
    const [cropping, setCropping] = (0, react_1.useState)(null);
    const { updateCoverLogo } = (0, useContentStore_1.useContentStore)();
    const inputRef = (0, react_1.useRef)(null);
    const { updateCoverColor } = (0, useCoverColorStore_1.useCoverColorStore)();
    const handleFileChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            const selectedFile = e.target.files[0];
            const previewURL = URL.createObjectURL(selectedFile);
            setCropping(previewURL);
            // Reset the input value
            if (inputRef.current) {
                inputRef.current.value = "";
            }
        }
    };
    const handleFileRemoved = (type) => {
        setPreview(null);
        onPreviewChange(type, null);
        onHandleFile(type, null);
    };
    const handleCropComplete = (croppedImage) => {
        setPreview(croppedImage);
        setCropping(null);
        onPreviewChange(type, croppedImage);
        // You might want to convert the croppedImage back to a File object
        fetch(croppedImage)
            .then((res) => res.blob())
            .then((blob) => {
            const file = new File([blob], `${type}.jpg`, { type: "image/jpeg" });
            onHandleFile(type, file);
            if (type === "logo") {
                updateCoverLogo(true);
            }
            if (type === "cover") {
                updateCoverColor("");
            }
        });
    };
    // Handle Preview
    (0, react_1.useEffect)(() => {
        if (coverBg === false) {
            setPreview(null);
            onPreviewChange("cover", null);
            onHandleFile("cover", null);
        }
    }, [coverBg]);
    const aspectRatio = type === "profile" ? 1 : type === "cover" ? 3 : 1;
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("p", { className: "text-xs mb-4 font-poppins first-letter:uppercase lg:text-center text-gray-400", children: t(title) }), (0, jsx_runtime_1.jsxs)("div", { className: `border shadow shadow-gray-600 rounded-lg border-gray-600 ${type === "cover" ? "lg:w-72 w-full h-auto" : "lg:w-28 w-full h-auto"} p-1 relative ${error && "border border-red-600"}`, children: [(0, jsx_runtime_1.jsx)("input", { type: "file", id: `${type}-file`, className: "hidden", onChange: handleFileChange, accept: "image/*", ref: inputRef }), preview ? ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("img", { src: preview, alt: `${type} preview`, className: "file-preview" }) })) : ((0, jsx_runtime_1.jsx)("label", { htmlFor: `${type}-file`, className: "cursor-pointer", children: (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col text-center mt-5", children: [(0, jsx_runtime_1.jsx)("i", { className: "bi-image text-xl text-gray-200" }), (0, jsx_runtime_1.jsx)("span", { className: "text-[8px] text-gray-200 font-poppins", children: t("image") })] }) })), preview && ((0, jsx_runtime_1.jsx)("div", { onClick: () => handleFileRemoved(type), className: "absolute -top-4 -right-3 z-20", children: (0, jsx_runtime_1.jsx)("p", { className: "bi-x bg-red-700 shadow shadow-zinc-900 h-6 w-6 pt-1 rounded-full text-center cursor-pointer text-white text-sm" }) }))] }), error && ((0, jsx_runtime_1.jsx)("p", { className: "text-[10px] mt-2 text-red-500", children: "Profile picture required" })), cropping && ((0, jsx_runtime_1.jsx)(ImageCropper_1.default, { imageSrc: cropping, onCropComplete: handleCropComplete, aspect: aspectRatio }))] }));
};
exports.default = InputImages;
