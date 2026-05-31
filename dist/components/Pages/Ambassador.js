"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const AmbassadorRegister_1 = __importDefault(require("../Ambassador/AmbassadorRegister"));
const FAQ_1 = __importDefault(require("../Home/FAQ"));
const Footer_1 = __importDefault(require("../Footer/Footer"));
const react_1 = require("react");
const AmbassadorLogin_1 = __importDefault(require("../Ambassador/AmbassadorLogin"));
const useDocumentTitle_1 = __importDefault(require("@/hooks/useDocumentTitle"));
const react_i18next_1 = require("react-i18next");
const assets_1 = require("@/assets");
const Ambassador = () => {
    const [title] = (0, react_1.useState)("Vibecard - Ambassador");
    (0, useDocumentTitle_1.default)(title);
    const { t } = (0, react_i18next_1.useTranslation)();
    // Scroll to top
    (0, react_1.useEffect)(() => {
        window.scrollTo(0, 0);
    }, []);
    const [active, setActive] = (0, react_1.useState)(false);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { className: "lg:container mx-auto px-2 text-white mt-5", children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/", className: "logo-font text-4xl", children: "vibecard" }), (0, jsx_runtime_1.jsxs)("div", { className: "lg:grid grid-cols-2 gap-x-16 my-16", children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("p", { className: "text-2xl font-poppins", children: t("ambassador") }), (0, jsx_runtime_1.jsx)("p", { className: "font-poppins text-gray-400 mt-2", children: t("ambassadorNote") }), (0, jsx_runtime_1.jsx)("p", { className: "font-poppins mt-3 lg:hidden text-lg", children: t("ambassadorNotAlready") }), active ? ((0, jsx_runtime_1.jsxs)("p", { className: "mt-10 font-poppins", children: [t("ambassadorGetPaid"), " ", (0, jsx_runtime_1.jsx)("button", { onClick: () => setActive(false), className: "text-teal-500", children: t("ambassadorCreate") })] })) : ((0, jsx_runtime_1.jsxs)("p", { className: "mt-10 font-poppins", children: [t("ambassadorAlready"), " ", (0, jsx_runtime_1.jsx)("button", { onClick: () => setActive(true), className: "text-teal-500", children: t("login") })] })), (0, jsx_runtime_1.jsx)("img", { src: assets_1.ambassador1, alt: "ambassador", className: "mt-5 rounded-xl" })] }), (0, jsx_runtime_1.jsx)("div", { className: "sticky top-10 self-start", children: (0, jsx_runtime_1.jsx)("div", { className: "w-full", children: active ? (0, jsx_runtime_1.jsx)(AmbassadorLogin_1.default, {}) : (0, jsx_runtime_1.jsx)(AmbassadorRegister_1.default, {}) }) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "lg:hidden", children: [(0, jsx_runtime_1.jsx)("h1", { className: "mb-4", children: "FAQ" }), (0, jsx_runtime_1.jsx)(FAQ_1.default, { ambassador: true })] }), (0, jsx_runtime_1.jsxs)("div", { className: "mt-16 lg:block hidden lg:mx-32", children: [(0, jsx_runtime_1.jsx)("h1", { className: "mb-5 text-2xl text-teal-500", children: "FAQ" }), (0, jsx_runtime_1.jsx)(FAQ_1.default, { ambassador: true })] })] }), (0, jsx_runtime_1.jsx)(Footer_1.default, {})] }));
};
exports.default = Ambassador;
