"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const react_1 = require("react");
const assets_1 = require("@/assets");
const useDocumentTitle_1 = __importDefault(require("@/hooks/useDocumentTitle"));
const Page404 = () => {
    const [title] = (0, react_1.useState)("404:Page not Found");
    (0, useDocumentTitle_1.default)(title);
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)("div", { className: "flex justify-center h-[100dvh]", children: (0, jsx_runtime_1.jsxs)("div", { className: "mt-40", children: [(0, jsx_runtime_1.jsx)("img", { src: assets_1.notFound, alt: "not found", className: "grayscale rounded-md" }), (0, jsx_runtime_1.jsx)("p", { className: "font-poppins font-extralight text-gray-200 text-4xl", children: "Page not Found." }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/", children: (0, jsx_runtime_1.jsx)("div", { className: "mt-5 w-full btn-bg py-3 rounded text-center font-semibold text-sm text-gray-200 shadow shadow-gray-500 font-poppins", children: "Return to Home" }) })] }) }) }));
};
exports.default = Page404;
