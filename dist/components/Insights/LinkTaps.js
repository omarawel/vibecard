"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const request_1 = require("@/services/request");
const axios_1 = __importDefault(require("axios"));
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const assets_1 = require("@/assets");
const LinkTaps = ({ cardUrl, socialMedia }) => {
    const [data, setData] = (0, react_1.useState)();
    const [styles, setStyles] = (0, react_1.useState)();
    const { t } = (0, react_i18next_1.useTranslation)();
    (0, react_1.useEffect)(() => {
        if (cardUrl) {
            axios_1.default
                .get(`${request_1.baseUrl}/api/v1/cards/card/${cardUrl}`)
                .then((response) => {
                setData(response.data);
                setStyles(JSON.parse(response.data.styles));
            })
                .catch((error) => {
                console.log(error);
            });
        }
    }, [cardUrl]);
    // Get social media link clicked amount
    const getClickCount = (label) => {
        const account = socialMedia === null || socialMedia === void 0 ? void 0 : socialMedia.find((social) => social.social_media_name === label);
        return account ? account.clicked_value : 0;
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "col-span-3 secondary-bg text-white shadow rounded mt-5", children: [(0, jsx_runtime_1.jsxs)("div", { className: "grid grid-cols-12 mb-6 pb-3 border-b border-gray-200 p-4", children: [(0, jsx_runtime_1.jsx)("div", { className: "col-span-2", children: (0, jsx_runtime_1.jsx)("h1", { className: "lg:text-lg text-sm", children: t("link") }) }), (0, jsx_runtime_1.jsx)("div", { className: "lg:col-span-4 col-span-4", children: (0, jsx_runtime_1.jsx)("h1", { className: "lg:text-lg text-sm", children: t("name") }) }), (0, jsx_runtime_1.jsx)("div", { className: "lg:col-span-5 col-span-4", children: (0, jsx_runtime_1.jsx)("h1", { className: "lg:text-lg text-sm", children: t("job") }) }), (0, jsx_runtime_1.jsx)("div", { className: "lg:col-span-1 col-span-2", children: (0, jsx_runtime_1.jsx)("h1", { className: "lg:text-lg text-sm", children: t("taps") }) })] }), (0, jsx_runtime_1.jsx)("div", { children: styles === null || styles === void 0 ? void 0 : styles.socialMedia.map((s) => ((0, jsx_runtime_1.jsxs)("div", { className: "grid lg:grid-cols-12 grid-cols-12 bg-white text-black mb-2 rounded px-4 pt-3", children: [(0, jsx_runtime_1.jsx)("div", { className: "lg:col-span-2 col-span-2 mb-4", children: s.icon === "deezer" ? ((0, jsx_runtime_1.jsx)("img", { src: assets_1.deezer, className: "w-11 rounded", alt: "deezer" })) : s.icon === "trustpilot" ? ((0, jsx_runtime_1.jsx)("img", { src: assets_1.trustpilot, className: "w-11 rounded", alt: "trustpilot" })) : s.icon === "calendly" ? ((0, jsx_runtime_1.jsx)("img", { src: assets_1.calendly, className: "w-11 rounded", alt: "calendly" })) : ((0, jsx_runtime_1.jsx)("span", { className: `${s.icon} lg:text-4xl text-xl rounded p-1`, style: { color: s.color } })) }), (0, jsx_runtime_1.jsx)("div", { className: "lg:col-span-4 col-span-4", children: (0, jsx_runtime_1.jsx)("p", { className: "lg:text-lg text-xs", children: data === null || data === void 0 ? void 0 : data.full_name }) }), (0, jsx_runtime_1.jsx)("div", { className: "lg:col-span-5 col-span-4", children: (0, jsx_runtime_1.jsx)("p", { className: "lg:text-lg text-xs", children: data === null || data === void 0 ? void 0 : data.job_title }) }), (0, jsx_runtime_1.jsx)("div", { className: "lg:col-span-1 col-span-2", children: (0, jsx_runtime_1.jsx)("p", { className: "text-xl", children: getClickCount(s.label) }) })] }, s.icon))) })] }));
};
exports.default = LinkTaps;
