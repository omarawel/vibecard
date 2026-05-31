"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const AffiliateFooter = () => {
    return ((0, jsx_runtime_1.jsx)("footer", { className: "secondary-bg mt-5 py-5", children: (0, jsx_runtime_1.jsx)("div", { className: "container mx-auto", children: (0, jsx_runtime_1.jsxs)("div", { className: "grid grid-cols-3", children: [(0, jsx_runtime_1.jsxs)("div", { className: "", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-sm text-gray-400", children: "Customer Support" }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { className: "text-white text-xs", to: "/contact-us", children: "Contact" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-sm text-gray-400", children: "Legal" }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { className: "text-white text-xs", to: "/privacy-policy", children: "Privacy Policy" })] }), (0, jsx_runtime_1.jsx)("div", { className: "", children: (0, jsx_runtime_1.jsxs)("p", { className: "text-sm text-gray-400 text-end", children: ["@2024 ", (0, jsx_runtime_1.jsx)("span", { className: "logo-font", children: "vibecard" })] }) })] }) }) }));
};
exports.default = AffiliateFooter;
