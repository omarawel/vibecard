"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const assets_1 = require("../../assets");
// import { bgColors } from "./Products";
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const socials = [
    { id: 1, icon: "bi-instagram", bg: "bg-pink-600" },
    { id: 2, icon: "bi-facebook", bg: "bg-blue-500" },
    { id: 12, icon: "bi-file-pdf-fill", bg: "bg-red-700" },
    { id: 4, icon: "bi-github", bg: "bg-zinc-700" },
    { id: 5, icon: "bi-tiktok", bg: "bg-black" },
    { id: 3, icon: "bi-linkedin", bg: "bg-sky-700" },
    { id: 6, icon: "bi-snapchat", bg: "bg-yellow-500" },
    { id: 7, icon: "bi-twitter-x", bg: "bg-black" },
    { id: 8, icon: "bi-youtube", bg: "bg-red-700" },
    { id: 9, icon: "bi-threads-fill", bg: "bg-black" },
    { id: 10, icon: "bi-calendar", bg: "bg-sky-700" },
    { id: 11, icon: "bi-pinterest", bg: "bg-red-700" },
];
const bgCover = [
    { style: "bg-gray-500", textColor: "text-black" },
    { style: "bg-lime-500", textColor: "text-black" },
    { style: "bg-cyan-600", textColor: "text-black" },
    { style: "bg-amber-500", textColor: "text-white" },
    { style: "bg-fuchsia-700", textColor: "text-black" },
];
const bgColors = [
    { style: "bg-teal-900", textColor: "text-white" },
    { style: "bg-black", textColor: "text-white" },
    { style: "bg-sky-900", textColor: "text-white" },
    { style: "bg-zinc-900", textColor: "text-white" },
    { style: "bg-rose-900", textColor: "text-white" },
    { style: "bg-white", textColor: "text-black" },
];
const HeroCard = () => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const [coverBg, setCoverBg] = (0, react_1.useState)("bg-amber-500");
    const [cardBg, setCardBg] = (0, react_1.useState)({
        bg: "bg-zinc-900",
        color: "text-white",
    });
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("div", { className: "lg:grid grid-cols-3 my-5 px-3 lg:ms-52", children: [(0, jsx_runtime_1.jsxs)("div", { className: "relative lg:block hidden", children: [(0, jsx_runtime_1.jsx)("p", { className: "absolute w-52 border border-teal-500 -right-20 top-8" }), (0, jsx_runtime_1.jsx)("div", { className: "absolute right-20 top-0 bg-white w-52 rounded py-3 px-3", children: (0, jsx_runtime_1.jsx)("div", { children: bgCover.map((bg) => ((0, jsx_runtime_1.jsx)("button", { onClick: () => setCoverBg(bg.style), className: `${bg.style} w-6 h-6 border border-black me-3 rounded` }, bg.style))) }) }), (0, jsx_runtime_1.jsx)("p", { className: "absolute w-64 border border-teal-500 -right-14 bottom-40" }), (0, jsx_runtime_1.jsx)("div", { className: "absolute right-32 bottom-32 bg-white w-60 rounded py-3 px-3", children: (0, jsx_runtime_1.jsx)("div", { children: bgColors.map((bg) => ((0, jsx_runtime_1.jsx)("button", { onClick: () => setCardBg({ bg: bg.style, color: bg.textColor }), className: `${bg.style} w-6 h-6 border border-black me-3 rounded`, style: { background: bg.style } }, bg.style))) }) })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("div", { className: "ms-2 mb-3 flex lg:hidden justify-center", children: bgCover.map((bg) => ((0, jsx_runtime_1.jsx)("button", { onClick: () => setCoverBg(bg.style), className: `${bg.style} w-6 h-6 border border-white me-3 rounded` }, bg.style))) }), (0, jsx_runtime_1.jsx)("div", { className: "flex justify-center", children: (0, jsx_runtime_1.jsxs)("div", { className: `rounded-2xl overflow-hidden shadow-md lg:shadow-black shadow-gray-400 z-0 lg:mb-0 w-80 secondary-bg lg:pb-8 pb-8 ${cardBg.bg}`, children: [(0, jsx_runtime_1.jsxs)("div", { className: `lg:h-28 h-32 w-full relative flex justify-between z-0 ${coverBg}`, children: [(0, jsx_runtime_1.jsx)("div", { className: "absolute lg:top-16 left-2 top-16", children: (0, jsx_runtime_1.jsx)("img", { src: assets_1.ceo, alt: "user", className: "lg:w-20 lg:h-20 w-24 h-24 border-[4px] rounded-full border-gradient object-cover" }) }), (0, jsx_runtime_1.jsx)("p", { className: "text-xs logo-font ps-3 pt-1", children: "vibecard" }), (0, jsx_runtime_1.jsx)("div", { className: "content-center", children: (0, jsx_runtime_1.jsxs)("p", { className: `absolute right-0 me-1 w-48 text-center text-xl ${cardBg.color} chakra`, children: [(0, jsx_runtime_1.jsx)("span", { className: "", children: "Mr " }), "Omar"] }) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "px-5 mt-10 text-white", children: [(0, jsx_runtime_1.jsxs)("div", { className: "relative", children: [(0, jsx_runtime_1.jsx)("img", { src: assets_1.logo, alt: "Cover", className: "absolute right-0 -top-6 w-14 h-14 rounded-full border-gradient bg-white object-cover" }), (0, jsx_runtime_1.jsx)("p", { className: `mb-1 lg:mt-0 mt-4 text-xl ${cardBg.color}`, children: "CEO" }), (0, jsx_runtime_1.jsx)("p", { className: `text-lg ${cardBg.color}`, children: "vibecard" }), (0, jsx_runtime_1.jsx)("p", { className: `mt-3 text-xs ${cardBg.color}`, children: t("intro3") + " " + t("intro4") }), (0, jsx_runtime_1.jsxs)("p", { className: `my-2 text-md ${cardBg.color}`, children: [(0, jsx_runtime_1.jsx)("span", { className: `bi-geo-alt-fill me-2 ${cardBg.color}` }), t("germany")] })] }), (0, jsx_runtime_1.jsxs)("div", { className: `grid grid-cols-5 gap-4 justify-center my-7`, children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: `/`, className: `bi-envelope-fill text-4xl text-center rounded-lg py-2 shadow-inner text-zinc-400` }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: `/`, className: `bi-globe text-4xl text-center rounded-lg py-2 shadow-inner text-violet-700` }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: `/`, className: `bi-telephone-fill text-4xl text-center rounded-lg py-2 shadow-inner text-yellow-400` }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: `/`, className: `bi-telegram text-4xl text-center rounded-lg py-2 shadow-inner text-cyan-400` }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: `/`, className: `bi-whatsapp text-4xl text-center rounded-lg py-2 shadow-inner text-green-500` })] }), (0, jsx_runtime_1.jsx)("div", { className: "grid grid-cols-4 gap-x-3 gap-y-5 justify-center", children: socials.map((s) => ((0, jsx_runtime_1.jsx)("div", { className: `${s.bg} text-center p-2 rounded-lg shadow shadow-zinc-900`, children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: `/`, className: `${s.icon} text-3xl text-center rounded-lg py-2` }) }, s.id))) })] })] }) }), (0, jsx_runtime_1.jsx)("div", { className: "flex lg:hidden justify-center mt-5 mb-14", children: bgColors.map((bg) => ((0, jsx_runtime_1.jsx)("button", { onClick: () => setCardBg({ bg: bg.style, color: bg.textColor }), className: `${bg.style} w-6 h-6 border border-white me-3 rounded`, style: { background: bg.style } }, bg.style))) })] })] }) }));
};
exports.default = HeroCard;
