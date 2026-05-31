"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const Card_1 = __importDefault(require("../Card/Card"));
const RegForm_1 = __importDefault(require("../Register/RegForm"));
const SignUpOption_1 = __importDefault(require("../SignUpOption/SignUpOption"));
const useDocumentTitle_1 = __importDefault(require("../../hooks/useDocumentTitle"));
const react_i18next_1 = require("react-i18next");
const Register = () => {
    const [title] = (0, react_1.useState)("Register");
    (0, useDocumentTitle_1.default)(title);
    const { t } = (0, react_i18next_1.useTranslation)();
    const [username, setUsername] = (0, react_1.useState)("");
    const [submitButtonClicked, setSubmitButtonClicked] = (0, react_1.useState)(false);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "lg:px-40 md:px-36 px-2 pb-10", children: [(0, jsx_runtime_1.jsx)("div", { className: "lg:mb-5 lg:pt-10 md:mb-10 md:pt-10 py-5 lg:ps-24", children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/", className: "text-2xl text-white logo-font", children: "vibecard" }) }), (0, jsx_runtime_1.jsx)("div", { className: "flex justify-center w-full", children: (0, jsx_runtime_1.jsx)("div", { className: "lg:w-5/6 md:w-5/6 w-full", children: (0, jsx_runtime_1.jsxs)("div", { className: "lg:grid grid-cols-2 gap-5", children: [(0, jsx_runtime_1.jsxs)("div", { className: "lg:p-10 md:p-9 p-8 shadow-lg secondary-bg rounded-lg text-white border border-violet-800", children: [(0, jsx_runtime_1.jsxs)("h1", { className: "text-2xl", children: [t("join"), " vibecard"] }), (0, jsx_runtime_1.jsx)("p", { className: "text-sm mb-10 mt-2", children: t("sign") }), (0, jsx_runtime_1.jsx)(RegForm_1.default, { username: (username) => setUsername(username), buttonClicked: (value) => setSubmitButtonClicked(value) }), (0, jsx_runtime_1.jsx)("div", { className: "relative lg:block hidden lg:-top-72 left-[30em]", children: (0, jsx_runtime_1.jsx)("div", { className: "absolute lg:right-[15em] w-full right-36 top-40 bulb" }) }), (0, jsx_runtime_1.jsx)(SignUpOption_1.default, {}), (0, jsx_runtime_1.jsxs)("p", { className: "text-sm mt-5 text-end text-gray-500", children: [t("already"), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/login", className: "text-sm text-blue-600 ms-1", children: "Login" })] })] }), (0, jsx_runtime_1.jsx)(Card_1.default, { submitted: submitButtonClicked, username: username })] }) }) })] }));
};
exports.default = Register;
