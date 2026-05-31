"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const AffiliateMenu_1 = __importDefault(require("./AffiliateMenu"));
const useAmbassador_1 = __importDefault(require("@/store/useAmbassador"));
const react_i18next_1 = require("react-i18next");
const AffiliateNavbar = () => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const { logout } = (0, useAmbassador_1.default)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    const handleLogout = () => {
        logout();
        navigate("/ambassador");
    };
    const [menu, setMenu] = (0, react_1.useState)(false);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "mb-14", children: [(0, jsx_runtime_1.jsxs)("nav", { className: "flex justify-between text-white mt-5", children: [(0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/affiliate", className: "logo-font text-4xl", children: "vibecard" }) }), (0, jsx_runtime_1.jsx)("div", { className: "lg:hidden", children: (0, jsx_runtime_1.jsx)("button", { onClick: () => setMenu(!menu), className: "bi-list text-2xl" }) }), (0, jsx_runtime_1.jsxs)("div", { className: "lg:flex hidden gap-x-10", children: [(0, jsx_runtime_1.jsxs)(react_router_dom_1.Link, { to: "/affiliate/setting", className: "mx-5 text-xl", children: [(0, jsx_runtime_1.jsx)("span", { className: "bi-gear-fill me-1" }), t("Setting")] }), (0, jsx_runtime_1.jsxs)("p", { onClick: () => handleLogout(), className: "cursor-pointer text-red-500 text-xl", children: [(0, jsx_runtime_1.jsx)("span", { className: "bi-box-arrow-right me-1" }), "Logout"] })] })] }), menu && (0, jsx_runtime_1.jsx)(AffiliateMenu_1.default, { username: "Lorem", menu: () => setMenu(false) })] }));
};
exports.default = AffiliateNavbar;
