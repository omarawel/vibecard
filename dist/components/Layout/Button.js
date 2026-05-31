"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const i18next_1 = require("i18next");
const useTextColorStore_1 = require("../../store/useTextColorStore");
const Button = () => {
    const { button } = (0, useTextColorStore_1.useTextColorStore)();
    return ((0, jsx_runtime_1.jsx)("button", { className: `w-full rounded-lg py-4 mb-8 mt-5 shadow-md font-poppins font-extrabold shadow-zinc-950`, style: { backgroundColor: button.color, color: button.font }, children: (0, i18next_1.t)("saveContact") }));
};
exports.default = Button;
