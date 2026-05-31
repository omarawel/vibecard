"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Navbar_1 = __importDefault(require("../Navbar/Navbar"));
const Footer_1 = __importDefault(require("../Footer/Footer"));
const useDocumentTitle_1 = __importDefault(require("@/hooks/useDocumentTitle"));
const CardOrders_1 = __importDefault(require("../MyOrders/CardOrders"));
const WalletOrders_1 = __importDefault(require("../MyOrders/WalletOrders"));
const react_i18next_1 = require("react-i18next");
const MyOrders = () => {
    const [title] = (0, react_1.useState)("Vibecard - My Orders");
    (0, useDocumentTitle_1.default)(title);
    const { t } = (0, react_i18next_1.useTranslation)();
    const [activeTap, setActiveTap] = (0, react_1.useState)("cards");
    // Scroll to top
    (0, react_1.useEffect)(() => {
        window.scrollTo(0, 0);
    }, []);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Navbar_1.default, {}), (0, jsx_runtime_1.jsx)("div", { className: "lg:container mx-auto lg:mt-36 mt-24 lg:px-0 px-3", children: (0, jsx_runtime_1.jsxs)("div", { className: "lg:mx-9", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-white lg:text-2xl font-poppins mb-5", children: t("my-orders-title") }), (0, jsx_runtime_1.jsxs)("div", { className: "flex gap-x-5 lg:mt-6", children: [(0, jsx_runtime_1.jsx)("button", { onClick: () => setActiveTap("cards"), className: `px-10 py-2 rounded lg:text-md text-sm font-poppins shadow-none ${activeTap === "cards" ? "btn-bg text-white" : "bg-white"}`, children: t("card") }), (0, jsx_runtime_1.jsx)("button", { onClick: () => setActiveTap("wallets"), className: `px-10 py-2 rounded lg:text-md text-sm font-poppins shadow-none ${activeTap === "wallets" ? "btn-bg text-white" : "bg-white"}`, children: t("wallet") })] }), activeTap === "cards" && (0, jsx_runtime_1.jsx)(CardOrders_1.default, {}), activeTap === "wallets" && (0, jsx_runtime_1.jsx)(WalletOrders_1.default, {})] }) }), (0, jsx_runtime_1.jsx)(Footer_1.default, {})] }));
};
exports.default = MyOrders;
