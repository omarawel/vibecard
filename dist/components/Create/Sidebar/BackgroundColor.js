"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const coverColor_1 = require("../../../services/coverColor");
const useCoverColorStore_1 = require("../../../store/useCoverColorStore");
const useCardColorStore_1 = require("../../../store/useCardColorStore");
const useTextColorStore_1 = require("../../../store/useTextColorStore");
const i18next_1 = require("i18next");
const BackgroundColor = ({ colorPicker, bgColors, cardType }) => {
    const [color, setColor] = (0, react_1.useState)("#000000");
    const { updateCoverColor } = (0, useCoverColorStore_1.useCoverColorStore)();
    const { updateCardColor } = (0, useCardColorStore_1.useCardColorStore)();
    const { updateColor } = (0, useTextColorStore_1.useTextColorStore)();
    const handleChange = (event) => {
        const newColor = event.target.value;
        setColor(newColor);
        if (newColor !== "#000000") {
            updateCoverColor(newColor);
        }
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "bg-white rounded p-2 mb-5", children: [(0, jsx_runtime_1.jsx)("p", { className: "chakra mt-2 text-black", children: (0, i18next_1.t)("default") }), (0, jsx_runtime_1.jsx)("div", { className: `${bgColors === "gradient-cover" && bgColors} w-full h-20 rounded-lg my-2 shadow shadow-zinc-900`, style: { backgroundColor: bgColors } }), (0, jsx_runtime_1.jsx)("p", { className: "chakra mt-2 text-black", children: (0, i18next_1.t)("trend") }), (0, jsx_runtime_1.jsx)("div", { className: "grid lg:grid-cols-6 grid-cols-7 lg:gap-3 gap-2 overflow-hidden py-5", children: cardType === "cover" || cardType === "button"
                    ? coverColor_1.coverColor.map((cover) => ((0, jsx_runtime_1.jsx)("button", { onClick: cardType === "cover"
                            ? () => updateCoverColor(cover.value)
                            : () => updateColor("button", cover.value), className: `lg:p-3 px-4 py-5 rounded shadow-sm shadow-zinc-900 hover:shadow-none`, style: { backgroundColor: cover.value } }, cover.id)))
                    : coverColor_1.cardColor.map((card) => ((0, jsx_runtime_1.jsx)("button", { onClick: () => updateCardColor(card.value), className: `lg:p-3 px-4 py-5 rounded shadow-sm shadow-zinc-900 hover:shadow-none`, style: { backgroundColor: card.value } }, card.id))) }), colorPicker && ((0, jsx_runtime_1.jsxs)("div", { className: `relative ${color}`, children: [(0, jsx_runtime_1.jsx)("p", { className: "chakra mb-2 text-black", children: (0, i18next_1.t)("pick") }), (0, jsx_runtime_1.jsx)("input", { type: "color", className: "w-full h-14 border-none outline-none shadow shadow-orange-900", value: color, onChange: (e) => handleChange(e) })] }))] }));
};
exports.default = BackgroundColor;
