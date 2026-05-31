"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const useWallets_1 = require("@/hooks/useWallets");
const WalletCard_1 = __importDefault(require("./WalletCard")); // Assuming WalletCard component exists
const Wallets = ({ wallets }) => {
    const { getTotalWalletBalance } = (0, useWallets_1.useWallets)();
    return ((0, jsx_runtime_1.jsxs)("div", { className: "w-full h-auto bg-white rounded-lg shadow-lg p-4", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-lg font-semibold mb-4", children: "Your Wallets" }), (0, jsx_runtime_1.jsx)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: wallets.length > 0 ? (wallets.map((wal) => ((0, jsx_runtime_1.jsx)(WalletCard_1.default, { wallet: wal }, wal.id)))) : ((0, jsx_runtime_1.jsx)("p", { children: "No wallets found." })) }), (0, jsx_runtime_1.jsxs)("div", { className: "mt-6 p-4 bg-gray-100 rounded-lg", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-lg font-semibold", children: "Total Balance:" }), (0, jsx_runtime_1.jsxs)("p", { className: "text-2xl font-bold", children: ["$", getTotalWalletBalance(wallets).toFixed(2)] })] })] }));
};
exports.default = Wallets;
