"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
require("./modals.css");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const Modal = ({ link }) => {
    const [copy, setCopy] = (0, react_1.useState)("copy-link");
    const { t } = (0, react_i18next_1.useTranslation)();
    const handleCopy = (card_url) => {
        navigator.clipboard
            .writeText(`vibe-card.vercel.app/card/${card_url}`)
            .then(() => {
            setCopy("copied");
        });
    };
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("div", { className: "overlay top-0 z-50" }), (0, jsx_runtime_1.jsx)("div", { className: "fixed top-0 left-0 flex z-50 justify-center items-center h-[100dvh] w-full lg:px-0 px-3", children: (0, jsx_runtime_1.jsxs)("div", { className: "lg:w-[35%] w-full main-bg rounded px-5 py-10 shadow shadow-zinc-900", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between mb-5", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-white lg:text-xl", children: t("card-created") }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/dashboard", className: "bi-x-lg text-xl text-red-500" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "lg:flex justify-between gap-x-10", children: [(0, jsx_runtime_1.jsxs)("p", { onClick: () => handleCopy(link), className: "bg-black rounded w-full text-center text-white text-sm shadow shadow-teal-500 py-3 cursor-pointer", children: [(0, jsx_runtime_1.jsx)("span", { className: "bi-clipboard text-lg me-4" }), t(copy)] }), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Link, { to: `/card/${link}`, className: "w-full btn-bg rounded text-white cursor-pointer shadow lg:mt-0 mt-2", children: [t("preview-card"), (0, jsx_runtime_1.jsx)("span", { className: "bi-arrow-up-right ms-3" })] })] })] }) })] }));
};
exports.default = Modal;
