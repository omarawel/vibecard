"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.texts = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
require("../fonts.css");
const useTextColorStore_1 = require("../../../store/useTextColorStore");
const FontStylesSize_1 = __importDefault(require("./FontStylesSize"));
const i18next_1 = require("i18next");
exports.texts = [
    { title: "pronoun", translate: "pronoun" },
    { title: "name", translate: "name" },
    { title: "location", translate: "location" },
    { title: "jobTitle", translate: "jobTitle" },
    { title: "tagLine", translate: "bio" },
    { title: "company", translate: "company" },
];
const Texts = ({ onClose }) => {
    const [dropdown, setDropdown] = (0, react_1.useState)(false);
    const [view, setView] = (0, react_1.useState)("pronoun");
    const { pronoun, company, jobTitle, name, tagLine, location } = (0, useTextColorStore_1.useTextColorStore)();
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between", children: [(0, jsx_runtime_1.jsx)("p", { className: "chakra text-white mb-4", children: (0, i18next_1.t)("textStyles") }), (0, jsx_runtime_1.jsx)("button", { onClick: onClose, className: "lg:hidden block bi-x-lg mb-5" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "z-50 lg:overflow-hidden lg:h-auto h-[75dvh] overflow-y-scroll lg:pb-0 pb-5", children: [(0, jsx_runtime_1.jsxs)("div", { className: "relative text-sm border-teal-500 shadow shadow-stone-300 rounded-lg", children: [(0, jsx_runtime_1.jsxs)("div", { onClick: () => setDropdown(!dropdown), className: "bg-white cursor-pointer text-black rounded-lg", children: [(0, jsx_runtime_1.jsxs)("p", { className: "px-2 py-2 chakra text-lg", children: [(0, i18next_1.t)("chooseT"), " "] }), (0, jsx_runtime_1.jsx)("p", { className: `${dropdown ? "bi-caret-up-fill" : "bi-caret-down-fill"} absolute top-2 right-3` })] }), dropdown && ((0, jsx_runtime_1.jsx)("div", { className: `absolute bg-white w-full mt-1 rounded px-2 py-3 shadow-md shadow-zinc-900 space-y-1 z-10`, children: exports.texts.map((text) => ((0, jsx_runtime_1.jsx)("p", { onClick: () => {
                                        setView(text.title);
                                        setDropdown(false);
                                    }, className: `${view === text.title && "text-teal-900 text-xl"} hover:text-gray-400 w-full cursor-pointer chakra text-lg first-letter:uppercase text-black`, children: (0, i18next_1.t)(text.translate) }, text.title))) }))] }), view === "pronoun" && ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(FontStylesSize_1.default, { defaultFontStyle: pronoun.font, view: view, defaultFontSize: pronoun.size }) })), view === "name" && ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(FontStylesSize_1.default, { defaultFontStyle: name.font, view: view, defaultFontSize: name.size }) })), view === "company" && ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(FontStylesSize_1.default, { defaultFontStyle: company.font, view: view, defaultFontSize: company.size }) })), view === "tagLine" && ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(FontStylesSize_1.default, { defaultFontStyle: tagLine.font, view: view, defaultFontSize: tagLine.size }) })), view === "location" && ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(FontStylesSize_1.default, { defaultFontStyle: location.font, view: view, defaultFontSize: location.size }) })), view === "jobTitle" && ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(FontStylesSize_1.default, { defaultFontStyle: jobTitle.font, view: view, defaultFontSize: jobTitle.size }) }))] })] }));
};
exports.default = Texts;
