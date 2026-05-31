"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const input = ({ type, label, password, forgotPassword }) => {
    const [showPassword, setShowPassword] = (0, react_1.useState)(false);
    return ((0, jsx_runtime_1.jsxs)("div", { className: `mb-5 ${password && "relative"} `, children: [(0, jsx_runtime_1.jsx)("label", { className: "text-sm text-gray-500 block", htmlFor: label, children: label }), (0, jsx_runtime_1.jsx)("input", { type: password ? (!showPassword ? "password" : "text") : type, name: label, className: "bg-gray-100 py-2 rounded-lg w-full focus:outline-none px-5 mt-1 block" }), password && ((0, jsx_runtime_1.jsx)("span", { onClick: () => setShowPassword(!showPassword), className: `absolute ${showPassword ? "bi-eye" : "bi-eye-slash"} right-2 top-8 cursor-pointer` })), forgotPassword && ((0, jsx_runtime_1.jsx)("div", { className: "mt-2 text-end", children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/", className: "text-xs text-blue-600", children: "Forgot Password?" }) }))] }));
};
exports.default = input;
