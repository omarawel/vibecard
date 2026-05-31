"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const sidebarIcons_1 = require("../../services/sidebarIcons");
const SmallDeviceSidebar = ({ active, handleClick }) => {
    return ((0, jsx_runtime_1.jsx)("div", { className: "grid grid-cols-4 secondary-bg w-full", children: sidebarIcons_1.sidebarIcons.map((icons) => ((0, jsx_runtime_1.jsxs)("div", { onClick: () => handleClick(icons.title), className: `text-center cursor-pointer ${active === icons.title
                ? "hover:bg-sky-950 text-gray-400"
                : "secondary-bg text-white"} p-2`, children: [(0, jsx_runtime_1.jsx)("p", { className: `${icons.icon} text-xl` }), (0, jsx_runtime_1.jsx)("p", { className: "text-[10px] font-poppins text-gray-400 first-letter:uppercase", children: icons.title })] }, icons.id))) }));
};
exports.default = SmallDeviceSidebar;
