"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const useDocumentTitle_1 = __importDefault(require("../../hooks/useDocumentTitle"));
const react_i18next_1 = require("react-i18next");
const Verify = () => {
    const [title] = (0, react_1.useState)("Verify");
    (0, useDocumentTitle_1.default)(title);
    const { t } = (0, react_i18next_1.useTranslation)();
    const location = (0, react_router_dom_1.useLocation)();
    const searchParams = new URLSearchParams(location.search);
    const emailAddress = searchParams.get("email");
    return ((0, jsx_runtime_1.jsxs)("div", { className: "h-[100vh]", children: [(0, jsx_runtime_1.jsx)("div", { className: "lg:px-40 md:px-36 px-2", children: (0, jsx_runtime_1.jsx)("div", { className: "lg:pt-10 md:pt-10 py-5 lg:ps-24", children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/", className: "text-2xl text-white logo-font", children: "vibecard" }) }) }), (0, jsx_runtime_1.jsx)("div", { className: "flex justify-center lg:px-40 md:px-36 px-2 lg:mt-28 md:mt-28", children: (0, jsx_runtime_1.jsx)("div", { className: "content-center lg:w-3/6 md:w-5/6 w-full h-96", children: (0, jsx_runtime_1.jsx)("div", { className: "lg:p-10 md:p-9 p-8 shadow-lg secondary-bg rounded-lg text-white border border-violet-800", children: emailAddress ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-4xl", children: t("verifyTitle") }), (0, jsx_runtime_1.jsxs)("p", { className: "text-gray-500 mt-6", children: [t("verifyDesc1"), " ", (0, jsx_runtime_1.jsx)("span", { className: "text-sky-600", children: emailAddress }), ".", " ", t("verifyDesc2")] })] })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("h1", { className: "text-3xl", children: [t("welcome"), " ", (0, jsx_runtime_1.jsx)("span", { className: "logo-font", children: "vibecard" })] }), (0, jsx_runtime_1.jsxs)("p", { className: "text-center pt-10 text-2xl", children: [(0, jsx_runtime_1.jsx)("span", { className: "bi-check-circle-fill text-blue-500 me-5 text-xl" }), t("verifySuccess")] }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/login", children: (0, jsx_runtime_1.jsx)("p", { className: "btn-bg w-full py-3 rounded font-poppins mt-7 shadow shadow-zinc-900 text-center", children: t("login") }) })] })) }) }) })] }));
};
exports.default = Verify;
