"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Colors_1 = __importDefault(require("./Sidebar/Colors"));
const sidebarIcons_1 = require("../../services/sidebarIcons");
const Texts_1 = __importDefault(require("./Sidebar/Texts"));
const Content_1 = __importDefault(require("./Sidebar/Content"));
const Layout_1 = __importDefault(require("./Sidebar/Layout"));
const useCardData_1 = require("../../store/useCardData");
const assets_1 = require("../../assets");
const useUserData_1 = __importDefault(require("../../store/useUserData"));
const react_router_dom_1 = require("react-router-dom");
const axios_1 = __importDefault(require("axios"));
const request_1 = require("../../services/request");
const react_i18next_1 = require("react-i18next");
const Sidebar = () => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const [selected, setSelected] = (0, react_1.useState)(t("colors"));
    const { preview } = (0, useCardData_1.useCardData)();
    const { user, logout } = (0, useUserData_1.default)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    const handleLogout = () => {
        axios_1.default
            .post(`${request_1.baseUrl}/api/v1/auth/logout`, {}, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        })
            .then(() => {
            logout();
            navigate("/");
        })
            .catch((err) => {
            console.error("Logout failed: ", err);
        });
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "grid grid-cols-5 bg-[#050a19] -md w-full h-[100dvh] border border-stone-900 rounded-r", children: [(0, jsx_runtime_1.jsxs)("div", { className: "text-white bg-[#050a19] shadow shadow-stone-400 overflow-hidden", children: [sidebarIcons_1.sidebarIcons.map((icons) => ((0, jsx_runtime_1.jsxs)("div", { onClick: () => setSelected(t(icons.title)), className: `relative top-0 z-[1100] py-5 text-center cursor-pointer ${selected === t(icons.title) ? "secondary-bg" : "hover:bg-blue-950"} p-3`, children: [(0, jsx_runtime_1.jsx)("p", { className: `${icons.icon} text-xl` }), (0, jsx_runtime_1.jsx)("p", { className: "text-[10px] font-poppins text-gray-300 py-1", children: t(icons.title) })] }, icons.id))), (0, jsx_runtime_1.jsxs)("div", { className: "absolute bottom-0 p-2 w-16", children: [(0, jsx_runtime_1.jsx)("img", { src: preview.profile ? preview.profile : assets_1.userPic, alt: "user", className: "w-full overflow-hidden border-2 border-black rounded-full" }), (0, jsx_runtime_1.jsx)("p", { className: "uppercase text-xs text-center mt-2 text-teal-500 font-poppins font-bold text-ellipsis text-nowrap overflow-hidden", children: user }), (0, jsx_runtime_1.jsx)("p", { onClick: () => handleLogout(), className: "text-center mt-2 bi-box-arrow-right text-red-500 text-xl cursor-pointer", title: "Logout" })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "col-span-4 p-2 mt-3 overflow-y-scroll", children: [selected === t("layout") && (0, jsx_runtime_1.jsx)(Layout_1.default, {}), selected === t("colors") && (0, jsx_runtime_1.jsx)(Colors_1.default, {}), selected === t("text") && (0, jsx_runtime_1.jsx)(Texts_1.default, {}), selected === t("content") && (0, jsx_runtime_1.jsx)(Content_1.default, {})] })] }));
};
exports.default = Sidebar;
