"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const footer_1 = require("../../services/footer");
const react_i18next_1 = require("react-i18next");
const react_1 = require("react");
const axios_1 = __importDefault(require("axios"));
const request_1 = require("@/services/request");
const Footer = () => {
    const { t } = (0, react_i18next_1.useTranslation)();
    // Subscription
    const [quota, setQuota] = (0, react_1.useState)(true);
    (0, react_1.useEffect)(() => {
        axios_1.default
            .get(`${request_1.baseUrl}/api/v1/auth/can-create-card`, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        })
            .then(() => {
            setQuota(true);
        })
            .catch(() => {
            setQuota(false);
        });
    }, []);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "mt-10 border-t border-gray-800 overflow-hidden", children: [(0, jsx_runtime_1.jsx)("div", { className: "relative right-20 lg:-top-40 -top-40", children: (0, jsx_runtime_1.jsx)("div", { className: "absolute lg:right-[43em]  right-36 top-40 bulb" }) }), (0, jsx_runtime_1.jsx)("div", { className: "lg:container mx-auto py-10", children: (0, jsx_runtime_1.jsxs)("div", { className: "grid lg:grid-cols-6 md:grid-cols-6 grid-cols-6 gap-x-5 lg:px-0 md:px-3 px-3", children: [(0, jsx_runtime_1.jsxs)("div", { className: "relative lg:col-span-3 md:col-span-2 col-span-6", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-white text-4xl logo-font", children: "vibecard" }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-400 text-sm pe-10 mt-4", children: t("footer-intro") }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-400 text-sm pe-10 mt-2", children: t("intro3") + " " + t("intro4") }), (0, jsx_runtime_1.jsxs)("div", { className: "flex gap-x-10 my-14", children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "https://www.linkedin.com/company/vibecard/", className: "text-white text-3xl bi-linkedin" }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "https://www.instagram.com/vibe_card_r", className: "text-white text-3xl bi-instagram" }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "https://www.tiktok.com/@vibecard", className: "text-white text-3xl bi-tiktok" })] }), (0, jsx_runtime_1.jsx)("div", { className: "lg:block hidden absolute bottom-0", children: (0, jsx_runtime_1.jsx)("p", { className: "text-gray-300 text-xs", children: "All right reserved. \u00A9 vibecard 2024" }) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "lg:col-span-1 md:col-span-2 col-span-2 lg:my-0 md:my-0 my-6", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-gray-400 text-lg mb-5", children: t("explore") }), footer_1.explore.map((e) => e.path === "/create" ? (quota ? ((0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: e.path, className: "block text-gray-200 mb-4 hover:text-gray-500 text-sm", children: t(e.name) }, e.id)) : ((0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/pricing", className: "block text-gray-200 mb-4 hover:text-gray-500 text-sm", children: t(e.name) }, e.id))) : ((0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: e.path, className: "block text-gray-200 mb-4 hover:text-gray-500 text-sm", children: t(e.name) }, e.id)))] }), (0, jsx_runtime_1.jsxs)("div", { className: "lg:col-span-1 md:col-span-2 col-span-3 lg:my-0 md:my-0 my-6", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-gray-400 text-lg mb-5", children: t("legal") }), footer_1.legal.map((l) => ((0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: l.path, className: "block text-gray-200 mb-4 hover:text-gray-500 text-sm", children: t(l.name) }, l.id)))] }), (0, jsx_runtime_1.jsxs)("div", { className: "lg:col-span-1 md:col-span-2 col-span-2 lg:my-0 md:my-0 my-6 lg:ms-10", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-gray-400 text-lg mb-5", children: t("shop") }), footer_1.shop.map((c) => ((0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: c.path, className: "block text-gray-200 mb-4 hover:text-gray-500 text-sm", children: t(c.name) }, c.id)))] }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-300 text-sm mt-8 lg:hidden md:hidden col-span-3", children: "All right reserved. \u00A9 vibecard 2024" })] }) })] }));
};
exports.default = Footer;
