"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_i18next_1 = require("react-i18next");
const Steps = ({ desc, title, step, desc2 }) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    return ((0, jsx_runtime_1.jsxs)("div", { className: "border-gradient-2 hover:border hover:border-gray-500 rounded-2xl p-7 text-white lg:mb-5 mb-4 secondary-bg shadow- shadow", children: [(0, jsx_runtime_1.jsx)("div", { className: "relative right-20 lg:-top-28 -top-40", children: (0, jsx_runtime_1.jsx)("div", { className: "absolute lg:right-[35em]  right-36 top-40 bulb" }) }), (0, jsx_runtime_1.jsxs)("p", { className: "font-extrabold mb-2 text-gray-400 font-poppins", children: [t("step"), " ", step] }), (0, jsx_runtime_1.jsx)("p", { className: "text-white text-xl font-poppins", children: t(title) }), (0, jsx_runtime_1.jsx)("p", { className: "text-md mt-3 text-gray-300 font-poppins text-sm", children: t(desc) }), desc2 && ((0, jsx_runtime_1.jsx)("p", { className: "text-md mt-2 text-gray-300 font-poppins text-sm", children: t(desc2) }))] }));
};
exports.default = Steps;
