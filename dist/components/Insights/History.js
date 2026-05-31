"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const History = ({ view, contact, social }) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    return ((0, jsx_runtime_1.jsxs)("div", { className: "lg:grid grid-cols-3 pb-5 lg:gap-x-5", children: [(0, jsx_runtime_1.jsxs)("div", { className: "w-full shadow shadow-gray-400 rounded px-5 py-4 bg-white text-black lg:mb-0 mb-3", children: [(0, jsx_runtime_1.jsx)("p", { className: "chakra", children: t("cardView") }), (0, jsx_runtime_1.jsx)("h1", { className: "font-poppins text-3xl mt-3 font-extrabold", children: view })] }), (0, jsx_runtime_1.jsxs)("div", { className: "w-full shadow shadow-gray-600 rounded px-5 py-4 bg-white text-black lg:mb-0 mb-3", children: [(0, jsx_runtime_1.jsx)("p", { className: "chakra", children: t("linkTaps") }), (0, jsx_runtime_1.jsx)("h1", { className: "font-poppins text-3xl mt-3 font-extrabold", children: social })] }), (0, jsx_runtime_1.jsxs)("div", { className: "w-full shadow shadow-gray-600 rounded px-5 py-4 bg-white text-black lg:mb-0 mb-3", children: [(0, jsx_runtime_1.jsx)("p", { className: "chakra", children: t("contactTaps") }), (0, jsx_runtime_1.jsx)("h1", { className: "font-poppins text-3xl mt-3 font-extrabold", children: contact })] })] }));
};
exports.default = History;
