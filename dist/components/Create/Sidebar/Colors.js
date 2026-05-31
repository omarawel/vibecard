"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const BackgroundColor_1 = __importDefault(require("./BackgroundColor"));
const TextColor_1 = __importDefault(require("./TextColor"));
// Zustand store
const useTextColorStore_1 = require("../../../store/useTextColorStore");
const useCardColorStore_1 = require("../../../store/useCardColorStore");
const useCoverColorStore_1 = require("../../../store/useCoverColorStore");
const react_1 = require("react");
const Texts_1 = require("./Texts");
const react_i18next_1 = require("react-i18next");
const Colors = ({ onClose }) => {
    const [dropdown, setDropdown] = (0, react_1.useState)(false);
    const [view, setView] = (0, react_1.useState)("Pronoun");
    const { t } = (0, react_i18next_1.useTranslation)();
    const { company, jobTitle, location, name, pronoun, tagLine, button } = (0, useTextColorStore_1.useTextColorStore)();
    const { cardColorBg } = (0, useCardColorStore_1.useCardColorStore)();
    const { coverColorBg } = (0, useCoverColorStore_1.useCoverColorStore)();
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between", children: [(0, jsx_runtime_1.jsx)("p", { className: "chakra text-white mb-4", children: t("cardBg") }), (0, jsx_runtime_1.jsx)("button", { onClick: onClose, className: "lg:hidden block bi-x-lg mb-5" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "lg:overflow-hidden lg:h-auto h-[75dvh] overflow-y-scroll lg:pb-0 pb-3", children: [(0, jsx_runtime_1.jsx)(BackgroundColor_1.default, { bgColors: cardColorBg, cardType: "card", colorPicker: false }), (0, jsx_runtime_1.jsx)("p", { className: "chakra text-white mb-3", children: t("coverBg") }), (0, jsx_runtime_1.jsx)(BackgroundColor_1.default, { bgColors: coverColorBg, cardType: "cover", colorPicker: true }), (0, jsx_runtime_1.jsx)("p", { className: "chakra text-white mb-3", children: t("btnBgC") }), (0, jsx_runtime_1.jsx)(BackgroundColor_1.default, { bgColors: button.color, cardType: "button", colorPicker: false }), (0, jsx_runtime_1.jsx)("p", { className: "chakra text-white mb-3", children: t("btnTextC") }), (0, jsx_runtime_1.jsx)(TextColor_1.default, { name: "button", bg: button.font }), (0, jsx_runtime_1.jsxs)("div", { className: `relative text-sm mb-4 border-teal-500 shadow shadow-stone-300 rounded-lg ${dropdown && "lg:h-64"}`, children: [(0, jsx_runtime_1.jsxs)("div", { onClick: () => setDropdown(!dropdown), className: "cursor-pointer bg-white text-black rounded-lg ", children: [(0, jsx_runtime_1.jsx)("p", { className: "px-2 py-2 chakra text-lg", children: t("chooseT") }), (0, jsx_runtime_1.jsx)("p", { className: `${dropdown ? "bi-caret-up-fill" : "bi-caret-down-fill"} absolute top-3 right-3 text-lg` })] }), dropdown && ((0, jsx_runtime_1.jsx)("div", { className: `absolute bg-white w-full mt-1 rounded px-2 py-3 shadow-md shadow-zinc-900 space-y-1 z-10`, children: Texts_1.texts.map((text) => ((0, jsx_runtime_1.jsx)("p", { onClick: () => {
                                        setView(text.title);
                                        setDropdown(false);
                                    }, className: `${view === text.title && "text-teal-900 text-xl"} hover:text-gray-400 w-full cursor-pointer chakra text-lg text-black`, children: t(text.translate) }, text.title))) })), view === "pronoun" && ((0, jsx_runtime_1.jsx)(TextColor_1.default, { name: "pronoun", bg: pronoun.color, title: "pronoun" })), view === "name" && ((0, jsx_runtime_1.jsx)(TextColor_1.default, { name: "name", bg: name.color, title: "name" })), view === "jobTitle" && ((0, jsx_runtime_1.jsx)(TextColor_1.default, { name: "jobTitle", bg: jobTitle.color, title: "Job Title" })), view === "location" && ((0, jsx_runtime_1.jsx)(TextColor_1.default, { name: "location", bg: location.color, title: "location" })), view === "company" && ((0, jsx_runtime_1.jsx)(TextColor_1.default, { name: "company", bg: company.color, title: "company" })), view === "tagLine" && ((0, jsx_runtime_1.jsx)(TextColor_1.default, { name: "tagLine", bg: tagLine.color, title: "bio" }))] })] })] }));
};
exports.default = Colors;
