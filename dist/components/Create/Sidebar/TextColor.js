"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const i18next_1 = require("i18next");
const coverColor_1 = require("../../../services/coverColor");
const useTextColorStore_1 = require("../../../store/useTextColorStore");
const TextColor = ({ bg, name, title }) => {
    const { updateColor, updateFont } = (0, useTextColorStore_1.useTextColorStore)();
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { className: `flex ${title ? "my-5" : ""} text-sm ms-1`, children: title && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("p", { className: "first-letter:uppercase text-teal-400 chakra text-xl", children: (0, i18next_1.t)(title) }), (0, jsx_runtime_1.jsxs)("p", { className: "ms-2 text-white chakra", children: [" ", (0, i18next_1.t)("color")] })] })) }), (0, jsx_runtime_1.jsxs)("div", { className: "bg-white rounded p-2 mb-5", children: [(0, jsx_runtime_1.jsx)("p", { className: "mt-2 chakra text-black", children: (0, i18next_1.t)("default") }), (0, jsx_runtime_1.jsx)("div", { className: `w-full h-10 rounded-lg my-2 shadow shadow-zinc-900`, style: { backgroundColor: bg } }), (0, jsx_runtime_1.jsx)("p", { className: "mt-3 chakra text-black", children: (0, i18next_1.t)("chooseC") }), (0, jsx_runtime_1.jsx)("div", { className: "grid lg:grid-cols-6 grid-cols-7 lg:gap-3 gap-2 overflow-hidden py-5", children: coverColor_1.textColor.map((text) => ((0, jsx_runtime_1.jsx)("button", { onClick: title
                                ? () => updateColor(name, text.value)
                                : () => updateFont(name, text.value), className: `lg:p-3 px-4 py-5 rounded shadow-sm shadow-zinc-900 hover:shadow-none`, style: { backgroundColor: text.value } }, text.id))) })] })] }));
};
exports.default = TextColor;
