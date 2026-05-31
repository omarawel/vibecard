"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const fonts_1 = require("../../../services/fonts");
const useTextColorStore_1 = require("../../../store/useTextColorStore");
const i18next_1 = require("i18next");
const FontStylesSize = ({ view, defaultFontSize, defaultFontStyle }) => {
    const [fontStyle, setFontStyle] = (0, react_1.useState)({
        style: "font-poppins",
        name: "Poppins",
    });
    const { updateFont, updateSize } = (0, useTextColorStore_1.useTextColorStore)();
    const handleFontStyle = (style, name, element) => {
        updateFont(element, style);
        setFontStyle(Object.assign(Object.assign({}, fontStyle), { style: style, name: name }));
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex my-5 text-sm ms-1", children: [(0, jsx_runtime_1.jsx)("p", { className: "first-letter:uppercase text-teal-400 chakra text-lg", children: (0, i18next_1.t)(view) }), (0, jsx_runtime_1.jsxs)("p", { className: "ms-2 text-white chakra", children: [" ", (0, i18next_1.t)("fontStyle")] })] }), (0, jsx_runtime_1.jsx)("div", { className: "bg-white w-full rounded p-2", children: fonts_1.fonts.map((font) => ((0, jsx_runtime_1.jsx)("p", { onClick: () => handleFontStyle(font.style, font.name, view), className: `${font.style} hover:gray-300 hover:text-teal-400
  cursor-pointer  pb-2 text-lg ${defaultFontStyle === font.style ? "text-sky-600" : "text-black"}`, children: font.name }, font.name))) }), (0, jsx_runtime_1.jsxs)("div", { className: "flex my-3 text-sm ms-1", children: [(0, jsx_runtime_1.jsx)("p", { className: "first-letter:uppercase text-teal-400 chakra text-lg", children: (0, i18next_1.t)(view) }), (0, jsx_runtime_1.jsxs)("p", { className: " ms-2 text-white chakra", children: [" ", (0, i18next_1.t)("fontSize")] })] }), (0, jsx_runtime_1.jsx)("div", { className: "bg-white w-full rounded p-2 mb-3", children: fonts_1.fontSize.map((size) => ((0, jsx_runtime_1.jsx)("p", { onClick: () => updateSize(view, size.size), className: `${size.size} hover:gray-300 hover:text-teal-400
  cursor-pointer  pb-2 ${defaultFontSize === size.size ? "text-teal-400" : "text-black"}`, children: (0, i18next_1.t)(size.name) }, size.name))) })] }));
};
exports.default = FontStylesSize;
