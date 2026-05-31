"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const useContentStore_1 = require("../../store/useContentStore");
const Contacts = () => {
    const { contact } = (0, useContentStore_1.useContentStore)();
    return ((0, jsx_runtime_1.jsx)("div", { className: `lg:my-2 my-5 ${contact.length > 0
            ? `grid ${contact.length + 2 <= 3 ? "grid-cols-3" : "grid-cols-5"}  gap-5 my-5`
            : "invisible"}`, children: contact.map((c) => ((0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: `${c.link}`, className: `${c.icon} text-3xl text-center rounded-lg py-2 shadow-inner`, style: { color: c.color.replace("bg", "text") } }, c.icon))) }));
};
exports.default = Contacts;
