"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const SmallNav_1 = __importDefault(require("../Dashboard/SmallNav"));
const Sidebar_1 = __importDefault(require("../Dashboard/Sidebar"));
const Nav_1 = __importDefault(require("../Dashboard/Nav"));
const AllCardOrders_1 = __importDefault(require("./AllCardOrders"));
const AllWalletOrders_1 = __importDefault(require("./AllWalletOrders"));
const tap = [
    { id: 1, name: "pending" },
    { id: 2, name: "cancelled" },
    { id: 3, name: "completed" },
];
const Orders = ({ type }) => {
    const [activeTap, setActiveTap] = (0, react_1.useState)("pending");
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)("div", { className: "relative lg:grid md:grid grid-cols-11", children: [(0, jsx_runtime_1.jsx)(SmallNav_1.default, { active: type }), (0, jsx_runtime_1.jsx)("div", { className: "lg:col-span-2 w-full", children: (0, jsx_runtime_1.jsx)(Sidebar_1.default, { active: type }) }), (0, jsx_runtime_1.jsxs)("div", { className: "lg:col-span-9 lg:px-4 md:px-2 py-2 md:col-span-10", children: [(0, jsx_runtime_1.jsx)(Nav_1.default, {}), (0, jsx_runtime_1.jsxs)("h1", { className: "text-white text-xl my-3 ms-1 first-letter:uppercase mt-6", children: [type, " Orders"] }), (0, jsx_runtime_1.jsx)("div", { className: "lg:flex grid grid-cols-3 lg:gap-x-5 gap-x-2 px-1", children: tap.map((t) => ((0, jsx_runtime_1.jsx)("button", { onClick: () => setActiveTap(t.name), className: `first-letter:uppercase font-poppins ${activeTap === t.name
                                    ? "btn-bg text-white p-0"
                                    : "bg-gray-600 text-gray-300"} rounded shadow lg:px-10 lg:py-2 py-3 text-sm`, children: t.name }, t.id))) }), type === "Card" ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [activeTap === "pending" && type === "Card" && ((0, jsx_runtime_1.jsx)(AllCardOrders_1.default, { tap: "pending" })), activeTap === "cancelled" && type === "Card" && ((0, jsx_runtime_1.jsx)(AllCardOrders_1.default, { tap: "cancelled" })), activeTap === "completed" && type === "Card" && ((0, jsx_runtime_1.jsx)(AllCardOrders_1.default, { tap: "completed" }))] })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [activeTap === "pending" && type === "Wallets" && ((0, jsx_runtime_1.jsx)(AllWalletOrders_1.default, { tap: "pending" })), activeTap === "cancelled" && type === "Wallets" && ((0, jsx_runtime_1.jsx)(AllWalletOrders_1.default, { tap: "cancelled" })), activeTap === "completed" && type === "Wallets" && ((0, jsx_runtime_1.jsx)(AllWalletOrders_1.default, { tap: "completed" }))] }))] })] }) }));
};
exports.default = Orders;
