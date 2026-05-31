"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bgColors = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
exports.bgColors = [
    { style: "bg-black", textColor: "text-white" },
    { style: "bg-white", textColor: "text-black" },
    { style: "bg-amber-500", textColor: "text-white" },
    { style: "bg-cyan-600", textColor: "text-black" },
    { style: "bg-gray-600", textColor: "text-white" },
    { style: "bg-fuchsia-900", textColor: "text-white" },
    { style: "bg-indigo-700", textColor: "text-white" },
    { style: "bg-red-700", textColor: "text-white" },
    { style: "bg-yellow-400", textColor: "text-white" },
    { style: "bg-green-600", textColor: "text-white" },
    // { style: "bg-teal-900", textColor: "text-white" },
    // { style: "bg-lime-500", textColor: "text-white" },
    // { style: "bg-orange-500", textColor: "text-white" },
    // { style: "bg-purple-700", textColor: "text-white" },
    // { style: "bg-pink-500", textColor: "text-white" },
];
const ProductColor = ({ defaultBg, setBg, title }) => {
    return ((0, jsx_runtime_1.jsx)("div", { className: "mt-2 bg-gray-800 rounded px-3 py-5 shadow shadow-zinc-950 mb-8", children: (0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-lg text-white", children: title }), (0, jsx_runtime_1.jsx)("div", { className: "flex justify-center", children: exports.bgColors.map((bg) => ((0, jsx_runtime_1.jsx)("div", { className: `border ${bg.style === defaultBg ? "border-black" : ""} rounded-full w-7 h-7 text-center`, children: (0, jsx_runtime_1.jsx)("button", { onClick: () => setBg(bg.style, bg.textColor), className: `${bg.style} rounded-full w-5 h-5 mt-[3px]` }) }, bg.style))) })] }) }));
};
exports.default = ProductColor;
