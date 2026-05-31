"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const react_i18next_1 = require("react-i18next");
const useAmbassador_1 = __importDefault(require("@/store/useAmbassador"));
const AffiliateMenu = ({ username, menu }) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const { logout } = (0, useAmbassador_1.default)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    const handleLogout = () => {
        logout();
        navigate("/ambassador");
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "fixed z-50 w-full h-full main-bg top-0 left-0 px-2", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between text-white mt-5 pe-6 ps-3", children: [(0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/", className: "logo-font text-3xl", children: "vibecard" }) }), (0, jsx_runtime_1.jsx)("div", { className: "lg:hidden", children: (0, jsx_runtime_1.jsx)("button", { onClick: () => menu(), className: "bi-x-lg text-2xl" }) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "ms-3", children: [(0, jsx_runtime_1.jsxs)("p", { className: "mt-8 mb-5 text-2xl font-bold text-teal-500", children: [(0, jsx_runtime_1.jsx)("span", { className: "bi-person-fill font-bold me-2" }), username] }), (0, jsx_runtime_1.jsx)("hr", { className: "me-6 mb-5 border border-gray-700" }), (0, jsx_runtime_1.jsxs)("div", { className: "relative h-[620px] text-white", children: [(0, jsx_runtime_1.jsxs)(react_router_dom_1.Link, { to: "/affiliate/setting", className: "text-lg", children: [(0, jsx_runtime_1.jsx)("span", { className: "bi-gear-fill me-1" }), t("Setting")] }), (0, jsx_runtime_1.jsxs)("p", { onClick: () => handleLogout(), className: "cursor-pointer text-red-500 text-lg mt-5", children: [(0, jsx_runtime_1.jsx)("span", { className: "bi-box-arrow-right me-1" }), "Logout"] })] })] })] }));
};
exports.default = AffiliateMenu;
