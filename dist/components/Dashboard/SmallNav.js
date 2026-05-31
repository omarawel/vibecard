"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const useMessages_1 = require("@/hooks/useMessages");
const user_png_1 = __importDefault(require("@/assets/icons/user.png"));
const SmallNav = () => {
    const { unseenMessagesCount } = (0, useMessages_1.useMessages)();
    return ((0, jsx_runtime_1.jsxs)("nav", { className: "w-full h-16 bg-white shadow-md flex items-center justify-between px-4 md:hidden", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-xl font-semibold", children: "Dashboard" }), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center space-x-4", children: [(0, jsx_runtime_1.jsxs)("div", { className: "relative", children: [(0, jsx_runtime_1.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6 text-gray-600 cursor-pointer", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: (0, jsx_runtime_1.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 17h5l-1.5-1.5a2 2 0 01-.5-1.5v-4.5a4.5 4.5 0 00-4.5-4.5h-2.5a2.5 2.5 0 01-5 0h-2.5a4.5 4.5 0 00-4.5 4.5v4.5a2.5 2.5 0 01-.5 1.5L3 17h5" }) }), unseenMessagesCount > 0 && ((0, jsx_runtime_1.jsx)("span", { className: "absolute -top-1 -right-1 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs", children: unseenMessagesCount }))] }), (0, jsx_runtime_1.jsx)("img", { src: user_png_1.default, alt: "User Avatar", className: "w-10 h-10 rounded-full cursor-pointer" })] })] }));
};
exports.default = SmallNav;
