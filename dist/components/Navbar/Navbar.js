"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const navs_1 = require("../../services/navs");
const Menu_1 = __importDefault(require("./Menu"));
const useUserData_1 = __importDefault(require("../../store/useUserData"));
const axios_1 = __importDefault(require("axios"));
const request_1 = require("../../services/request");
const Loading_1 = __importDefault(require("../Loading/Loading"));
const Logout_1 = __importDefault(require("../Logout/Logout"));
const react_i18next_1 = require("react-i18next");
const assets_1 = require("@/assets");
const Navbar = ({ bulb }) => {
    const { t, i18n } = (0, react_i18next_1.useTranslation)();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    // States
    const [isMenu, setIsMenu] = (0, react_1.useState)(false);
    const { login, user, plan } = (0, useUserData_1.default)();
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [quota, setQuota] = (0, react_1.useState)(true);
    // Login
    (0, react_1.useEffect)(() => {
        axios_1.default
            .get(`${request_1.baseUrl}/api/v1/auth/me`, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        })
            .then((response) => {
            login(response.data.username, response.data.email, response.data.plan);
            setLoading(false);
        })
            .catch(() => {
            setLoading(false);
        });
    }, []);
    // Subscription
    (0, react_1.useEffect)(() => {
        axios_1.default
            .get(`${request_1.baseUrl}/api/v1/auth/can-create-card`, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        })
            .then(() => {
            setQuota(true);
        })
            .catch(() => {
            setQuota(false);
        });
    }, []);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [loading && (0, jsx_runtime_1.jsx)(Loading_1.default, {}), (0, jsx_runtime_1.jsxs)("header", { className: `fixed main-bg lg:py-3 py-2 top-0 z-50 w-full nav-bg`, children: [!bulb && ((0, jsx_runtime_1.jsx)("div", { className: "right-64 top-10", children: (0, jsx_runtime_1.jsx)("div", { className: "absolute w-[5%] lg:w-[25%] lg:right-20 -right-40 bulb" }) })), (0, jsx_runtime_1.jsxs)("div", { className: "lg:container mx-auto flex justify-between", children: [(0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)("div", { className: `flex lg:pe-10 text-white ${user === null && "pe-28"}`, children: [(0, jsx_runtime_1.jsx)("div", { className: "lg:hidden", children: (0, jsx_runtime_1.jsx)("p", { onClick: () => setIsMenu(true), className: `lg:hidden font-poppins text-2xl text-teal-950 font-bold pt-2`, children: (0, jsx_runtime_1.jsx)("span", { className: "px-3 flex", children: (0, jsx_runtime_1.jsx)("span", { className: `bi-list text-3xl pt-1 text-white` }) }) }) }), (0, jsx_runtime_1.jsx)("div", { className: `lg:pe-10 text-white py-2`, children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/", className: `logo-font lg:text-4xl text-4xl`, children: "vibecard" }) }), (0, jsx_runtime_1.jsx)("div", { className: `ms-5 lg:inline-block hidden text-white pt-4 space-x-12 px-10`, children: navs_1.nav.map((n) => ((0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: n.path, className: `text-sm text-gray-300 font- `, children: t(n.title) }, n.id))) })] }) }), (0, jsx_runtime_1.jsx)("div", { className: "lg:block hidden text-white pt-3", children: (0, jsx_runtime_1.jsx)("div", { className: "flex", children: user !== null ? ((0, jsx_runtime_1.jsxs)("div", { className: "relative flex gap-x-10", children: [(0, jsx_runtime_1.jsx)("div", { className: "", children: (0, jsx_runtime_1.jsx)("img", { onClick: () => changeLanguage(i18n.language === "en" ? "de" : "en"), src: i18n.language === "de" ? assets_1.en : assets_1.de, alt: "flag", className: "w-7 cursor-pointer" }) }), (0, jsx_runtime_1.jsxs)("p", { onClick: () => setIsMenu(!isMenu), className: "text-center font-bold cursor-pointer text-teal-500 chakra uppercase text-lg", children: [(0, jsx_runtime_1.jsx)("span", { className: "bi-person-fill text-xl me-2" }), user] }), isMenu && ((0, jsx_runtime_1.jsxs)("div", { className: "secondary-bg lg:block shadow shadow-gray-600 hidden absolute z-50 w-44 px-4 py-5 rounded-lg mt-8", children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/dashboard", className: "block text-md mb-3 hover:text-gray-400 text-sm font-poppins", children: t("nav4") }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/my-orders", className: "block text-md mb-3 hover:text-gray-400 text-sm font-poppins", children: t("dashBtn3") }), quota ? ((0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: `/create`, className: "block text-md mb-3 hover:text-gray-400 text-sm font-poppins", children: t("nav5") })) : ((0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: `/pricing`, className: "block text-md mb-3 hover:text-gray-400 text-sm font-poppins", children: t("nav5") })), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/setting", className: "block text-md mb-3 hover:text-gray-400 text-sm font-poppins", children: t("nav6") }), plan !== "free" ? ((0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/insights", className: "block text-md mb-3 hover:text-gray-400 text-sm font-poppins", children: t("nav7") })) : ((0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between", children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/pricing", className: "block text-md mb-3 hover:text-gray-400 text-sm font-poppins", children: t("nav7") }), (0, jsx_runtime_1.jsx)("p", { className: "font-poppins bg-blue-500 rounded-full w-16 shadow-inner shadow-red-950 h-5 text-center text-sm pt-[1px]", children: "Pro" })] })), (0, jsx_runtime_1.jsx)("hr", { className: "my-2" }), (0, jsx_runtime_1.jsx)(Logout_1.default, {})] }))] })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { className: "me-5", children: (0, jsx_runtime_1.jsx)("img", { onClick: () => changeLanguage(i18n.language === "en" ? "de" : "en"), src: i18n.language === "de" ? assets_1.en : assets_1.de, alt: "flag", className: "w-7 cursor-pointer" }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/login", children: (0, jsx_runtime_1.jsx)("div", { className: "btn-bg shadow-none p-2 text-sm lowercase first-letter:uppercase rounded px-10", children: "Sign In" }) })] })) }) }), (0, jsx_runtime_1.jsxs)("div", { className: "lg:hidden flex mt-1 pt-2", children: [(0, jsx_runtime_1.jsx)("div", { className: "me-3", children: (0, jsx_runtime_1.jsx)("img", { onClick: () => changeLanguage(i18n.language === "en" ? "de" : "en"), src: i18n.language === "de" ? assets_1.en : assets_1.de, alt: "flag", className: "w-8 cursor-pointer" }) }), user !== null && ((0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/dashboard", children: (0, jsx_runtime_1.jsx)("span", { className: "px-3 flex", children: (0, jsx_runtime_1.jsx)("p", { className: `bi-person-fill text-3xl text-teal-500` }) }) }))] })] })] }), isMenu && ((0, jsx_runtime_1.jsx)("div", { className: "lg:hidden fixed h-[100dvh] z-50 top-0 w-full secondary-bg animate__animated animate__fadeInLeft", children: (0, jsx_runtime_1.jsx)(Menu_1.default, { nav: navs_1.nav, username: user, menu: () => setIsMenu(false) }) }))] }));
};
exports.default = Navbar;
