"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bgColors = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Card_1 = __importDefault(require("./Card"));
const react_router_dom_1 = require("react-router-dom");
exports.bgColors = [
    { style: "bg-teal-600", textColor: "text-black" },
    { style: "bg-red-600", textColor: "text-white" },
    { style: "bg-gray-500", textColor: "text-black" },
    { style: "bg-lime-500", textColor: "text-black" },
    { style: "bg-yellow-300", textColor: "text-black" },
    { style: "bg-cyan-600", textColor: "text-black" },
    { style: "bg-amber-500", textColor: "text-white" },
    { style: "bg-fuchsia-700", textColor: "text-black" },
    { style: "bg-black", textColor: "text-white" },
];
const SampleProducts = () => {
    const [metalBg, setMetalBg] = (0, react_1.useState)({
        bg: "bg-amber-500",
        color: "text-white",
    });
    const [plasticBg, setPlasticBg] = (0, react_1.useState)({
        bg: "bg-gray-500",
        color: "text-black",
    });
    const [bambooBg, setBambooBg] = (0, react_1.useState)({
        bg: "bg-black",
        color: "text-white",
    });
    return ((0, jsx_runtime_1.jsxs)("div", { className: "lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 gap-x-5 px-2", children: [(0, jsx_runtime_1.jsxs)("div", { className: "lg:mb-0 mb-10", children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/product/29", children: (0, jsx_runtime_1.jsx)(Card_1.default, { textColor: metalBg.color, bg: metalBg.bg }) }), (0, jsx_runtime_1.jsxs)("div", { className: "mt-4 secondary-bg rounded-xl px-3 py-5 shadow shadow-zinc-950", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between", children: [(0, jsx_runtime_1.jsxs)("p", { className: "text-lg text-white", children: ["Vibecard", " ", (0, jsx_runtime_1.jsx)("span", { className: "text-teal-400 font-extrabold", children: "Metal" }), " Cards"] }), (0, jsx_runtime_1.jsx)("p", { className: "text-white font-poppins", children: "\u20AC35" })] }), (0, jsx_runtime_1.jsx)("div", { className: "flex justify-center gap-x-2 mt-4", children: exports.bgColors.map((bg) => ((0, jsx_runtime_1.jsx)("div", { className: `border ${bg.style === metalBg.bg && "border-black"} rounded-full w-7 h-7 text-center`, children: (0, jsx_runtime_1.jsx)("button", { onClick: () => setMetalBg({ bg: bg.style, color: bg.textColor }), className: `${bg.style} rounded-full w-5 h-5 mt-[3px]` }) }, bg.style))) })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "lg:mb-0 mb-10", children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/product/29", children: (0, jsx_runtime_1.jsx)(Card_1.default, { textColor: plasticBg.color, bg: plasticBg.bg }) }), (0, jsx_runtime_1.jsxs)("div", { className: "mt-4 secondary-bg rounded-xl px-3 py-5 shadow shadow-zinc-950", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between", children: [(0, jsx_runtime_1.jsxs)("p", { className: "text-white", children: ["Vibecard", " ", (0, jsx_runtime_1.jsx)("span", { className: "text-teal-400 font-extrabold", children: "Recycled Papers" }), " ", "Cards"] }), (0, jsx_runtime_1.jsx)("p", { className: "text-white font-poppins", children: "\u20AC10" })] }), (0, jsx_runtime_1.jsx)("div", { className: "flex justify-center gap-x-2 mt-4", children: exports.bgColors.map((bg) => ((0, jsx_runtime_1.jsx)("div", { className: `border ${bg.style === plasticBg.bg && "border-black"} rounded-full w-7 h-7 text-center`, children: (0, jsx_runtime_1.jsx)("button", { onClick: () => setPlasticBg({ bg: bg.style, color: bg.textColor }), className: `${bg.style} rounded-full w-5 h-5 mt-[3px]` }) }, bg.style))) })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "lg:mb-0 mb-10", children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/product/29", children: (0, jsx_runtime_1.jsx)(Card_1.default, { textColor: bambooBg.color, bg: bambooBg.bg }) }), (0, jsx_runtime_1.jsxs)("div", { className: "mt-4 secondary-bg rounded-xl px-3 py-5 shadow shadow-zinc-950", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between", children: [(0, jsx_runtime_1.jsxs)("p", { className: "text-white", children: ["Vibecard", " ", (0, jsx_runtime_1.jsx)("span", { className: "text-teal-400 font-extrabold", children: "Bamboo " }), "Cards"] }), (0, jsx_runtime_1.jsx)("p", { className: "text-white font-poppins", children: "\u20AC25" })] }), (0, jsx_runtime_1.jsx)("div", { className: "flex justify-center gap-x-2 mt-4", children: exports.bgColors.map((bg) => ((0, jsx_runtime_1.jsx)("div", { className: `border ${bg.style === bambooBg.bg && "border-black"} rounded-full w-7 h-7 text-center`, children: (0, jsx_runtime_1.jsx)("button", { onClick: () => setBambooBg({ bg: bg.style, color: bg.textColor }), className: `${bg.style} rounded-full w-5 h-5 mt-[3px]` }) }, bg.style))) })] })] })] }));
};
exports.default = SampleProducts;
