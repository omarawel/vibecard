"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Card = ({ textColor, bg }) => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "relative px-8 py-5 bg-white rounded", children: [(0, jsx_runtime_1.jsx)("p", { className: "absolute top-2 left-2 bg-indigo-900 text-white text-sm py-1 px-10 rounded shadow shadow-zinc-900", children: "Best Seller" }), (0, jsx_runtime_1.jsx)("div", { className: `rounded-md w-full h-[200px] ${bg} flex justify-center items-center mb-5 shadow-lg shadow-zinc-900`, children: (0, jsx_runtime_1.jsx)("p", { className: `${textColor} logo-font text-center text-4xl`, children: "vibecard" }) }), (0, jsx_runtime_1.jsx)("div", { className: `rounded-md w-full h-[200px] ${bg} flex justify-center items-center shadow-lg shadow-zinc-900`, children: (0, jsx_runtime_1.jsx)("p", { className: `${textColor} bi-qr-code text-8xl` }) })] }));
};
exports.default = Card;
