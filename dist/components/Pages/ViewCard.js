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
const axios_1 = __importDefault(require("axios"));
const request_1 = require("../../services/request");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const Loading_1 = __importDefault(require("../Loading/Loading"));
const useDocumentTitle_1 = __importDefault(require("../../hooks/useDocumentTitle"));
const Default_1 = __importDefault(require("../ViewCard/Default"));
const Center_1 = __importDefault(require("../ViewCard/Center"));
const Right_1 = __importDefault(require("../ViewCard/Right"));
const html2canvas_1 = __importDefault(require("html2canvas"));
const ViewCard = () => {
    const [title] = (0, react_1.useState)("My Card");
    (0, useDocumentTitle_1.default)(title);
    // Scroll to top
    (0, react_1.useEffect)(() => {
        window.scrollTo(0, 0);
    }, []);
    const { id } = (0, react_router_dom_1.useParams)();
    const captureRef = (0, react_1.useRef)(null);
    const [data, setData] = (0, react_1.useState)();
    const [styles, setStyles] = (0, react_1.useState)();
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [qrImg, setQrImg] = (0, react_1.useState)(null);
    const [profileImg, setProfileImg] = (0, react_1.useState)(null);
    const [logo, setLogo] = (0, react_1.useState)(null);
    const [coverImg, setCoverImg] = (0, react_1.useState)(null);
    const [imgUrl, setImgUrl] = (0, react_1.useState)("");
    const imgToBlob = (url) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield fetch(url);
            if (!response.ok) {
                throw new Error("Failed to fetch image");
            }
            const blob = yield response.blob();
            return URL.createObjectURL(blob);
        }
        catch (error) {
            console.error("Error fetching and converting image:", error);
            return null;
        }
    });
    (0, react_1.useEffect)(() => {
        const fetchData = () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const response = yield axios_1.default.get(`${request_1.baseUrl}/api/v1/cards/card/${id}?increment=true`);
                setProfileImg(response.data.main_picture);
                setData(response.data);
                setStyles(JSON.parse(response.data.styles));
                const imageFields = [
                    { field: response.data.qr_code, setter: setQrImg },
                    { field: response.data.qr_code, setter: setImgUrl },
                    // { field: response.data.main_picture, setter: setProfileImg },
                    { field: response.data.covor_picture, setter: setCoverImg },
                    { field: response.data.company_logo, setter: setLogo },
                ];
                const imagePromises = imageFields.map(({ field, setter }) => {
                    if (field) {
                        return imgToBlob(field).then((imgUrl) => setter(imgUrl || ""));
                    }
                    return Promise.resolve(); // No need to wait for null fields
                });
                yield Promise.all(imagePromises);
                setLoading(false);
            }
            catch (err) {
                console.error("Error fetching data:", err);
                setLoading(false);
            }
        });
        fetchData();
    }, [id, request_1.baseUrl]);
    const handleCapture = () => __awaiter(void 0, void 0, void 0, function* () {
        if (captureRef.current) {
            try {
                yield Promise.all(Array.from(captureRef.current.querySelectorAll("img")).map((img) => new Promise((resolve, reject) => {
                    if (img.complete) {
                        resolve();
                    }
                    else {
                        img.onload = () => resolve();
                        img.onerror = () => reject(new Error("Image failed to load"));
                    }
                })));
                const canvas = yield (0, html2canvas_1.default)(captureRef.current, { useCORS: true });
                const dataUrl = canvas.toDataURL("image/png");
                const link = document.createElement("a");
                link.href = dataUrl;
                link.download = "capture.png";
                link.click();
            }
            catch (error) {
                console.error("Error capturing image:", error);
            }
        }
    });
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = imgUrl;
        link.download = "image.jpg";
        link.click();
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [loading && (0, jsx_runtime_1.jsx)(Loading_1.default, {}), (0, jsx_runtime_1.jsx)("div", { className: "h-[100vh]", children: (0, jsx_runtime_1.jsxs)("div", { className: "lg:px-40 md:px-36 px-2", children: [(0, jsx_runtime_1.jsx)("div", { className: "lg:pt-10 md:pt-10 py-5 lg:ps-24", children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/", className: "text-2xl text-white logo-font", children: "vibecard" }) }), (0, jsx_runtime_1.jsxs)("div", { ref: captureRef, className: "lg:flex justify-center lg:mt-10 mt-5 py-5", children: [(0, jsx_runtime_1.jsx)("div", { className: "lg:block flex justify-center lg:me-28 lg:mb-0 mb-10 lg:content-center", children: (data === null || data === void 0 ? void 0 : data.qr_code) && ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("img", { src: qrImg ? qrImg : "", alt: "Qr code", className: "lg:w-80 w-72 rounded-2xl shadow-2xl shadow-zinc-950" }), (0, jsx_runtime_1.jsxs)("p", { onClick: () => handleDownload(), className: "text-center mt-5 text-blue-400 font-poppins cursor-pointer", children: ["Download ", (0, jsx_runtime_1.jsx)("span", { className: "bi-download px-2" }), " "] })] })) }), (0, jsx_runtime_1.jsxs)("div", { className: "lg:w-[28%] w-[88%] md:w-full lg:mx-0 mx-auto", children: [data && styles && data.card_layout === "default" && ((0, jsx_runtime_1.jsx)(Default_1.default, { data: data, profile: profileImg ? profileImg : null, cover: coverImg ? coverImg : "", logo: logo ? logo : "", styles: styles, capture: () => handleCapture() })), data && styles && data.card_layout === "center" && ((0, jsx_runtime_1.jsx)(Center_1.default, { data: data, profile: profileImg ? profileImg : null, cover: coverImg ? coverImg : "", logo: logo ? logo : "", styles: styles, capture: () => handleCapture() })), data && styles && data.card_layout === "right" && ((0, jsx_runtime_1.jsx)(Right_1.default, { data: data, profile: profileImg ? profileImg : null, cover: coverImg ? coverImg : "", logo: logo ? logo : "", styles: styles, capture: () => handleCapture() }))] })] })] }) })] }));
};
exports.default = ViewCard;
