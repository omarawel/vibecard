"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tabs = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const useAuth_1 = __importDefault(require("@/store/useAuth"));
const react_router_dom_1 = require("react-router-dom");
exports.tabs = [
    { id: 1, icon: "bi-speedometer", title: "Dashboard", path: "/" },
    {
        id: 2,
        icon: "bi-person-heart",
        title: "Ambassadors",
        path: "/ambassadors",
    },
    {
        id: 3,
        icon: "bi-border-width",
        title: "Card",
        path: "/orders/cards",
    },
    { id: 5, icon: "bi-wallet-fill", title: "Wallets", path: "/orders/wallets" },
];
const Sidebar = ({ active }) => {
    const { type } = (0, useAuth_1.default)();
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("div", { className: "lg:block md:block hidden sticky top-0 secondary-bg border-r border-gray-700 h-[100dvh] lg:pe-3 pt-3", children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/", children: (0, jsx_runtime_1.jsxs)("h1", { className: "text-white lg:text-4xl md:text-2xl md:text-center lg:text-start lg:ms-3 logo-font ", children: [(0, jsx_runtime_1.jsx)("span", { className: "md:hidden lg:block  logo-font", children: "vibecard" }), (0, jsx_runtime_1.jsx)("span", { className: "lg:hidden md:block hidden text-5xl logo-font", children: "v" })] }) }), (0, jsx_runtime_1.jsxs)("div", { className: "mt-10 md:text-center lg:text-start lg:ms-3", children: [exports.tabs.map((tab) => ((0, jsx_runtime_1.jsxs)(react_router_dom_1.Link, { to: tab.path, className: `${active === tab.title
                                ? "lg:bg-teal-500 rounded lg:text-black md:text-teal-400"
                                : "text-white"} block mb-5 lg:text-xl md:text-3xl p-2`, children: [(0, jsx_runtime_1.jsx)("span", { className: `${tab.icon}` }), (0, jsx_runtime_1.jsx)("span", { className: `lg:inline hidden lg:ms-5 font-poppins`, children: tab.title })] }, tab.id))), type === "super_admin" && ((0, jsx_runtime_1.jsxs)(react_router_dom_1.Link, { to: "/forms", className: `${active === "Forms"
                                ? "lg:bg-teal-600 rounded lg:text-black md:text-teal-400"
                                : "text-white"} block mb-5 lg:text-xl md:text-3xl p-2`, children: [(0, jsx_runtime_1.jsx)("span", { className: `bi-input-cursor-text` }), (0, jsx_runtime_1.jsx)("span", { className: `lg:inline hidden lg:ms-5 font-poppins`, children: "Forms" })] }))] })] }) }));
};
exports.default = Sidebar;
