"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const request_1 = require("@/services/request");
const axios_1 = __importDefault(require("axios"));
const react_1 = require("react");
const Loading_1 = __importDefault(require("../Loading/Loading"));
const react_router_dom_1 = require("react-router-dom");
const react_i18next_1 = require("react-i18next");
const WalletOrders = () => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const [wallets, setWallets] = (0, react_1.useState)([]);
    const [loading, setLoading] = (0, react_1.useState)(true);
    (0, react_1.useEffect)(() => {
        axios_1.default
            .get(`${request_1.baseUrl}/api/v1/products/my-orders`, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        })
            .then((response) => {
            const wallet = response.data.wallet_orders.filter((w) => w.payment_status !== "pending" && w.status !== "cancelled");
            setWallets(wallet);
            setLoading(false);
        })
            .catch((error) => {
            console.log(error);
        });
    }, []);
    // Get date
    function getDate(timestamp) {
        const date = new Date(timestamp);
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    }
    // Cancel Time
    const isDisabled = (createdAt) => {
        const createdDate = new Date(createdAt); // Parse the created date
        const currentDate = new Date(); // Get current date/time
        const differenceInMs = currentDate.getTime() - createdDate.getTime(); // Difference in milliseconds
        let differenceInHours = differenceInMs / (1000 * 60 * 60); // Convert milliseconds to hours
        return differenceInHours >= 18; // Return true if 18 hours or more have passed
    };
    // Handle Cancel
    const handleCancel = (id) => {
        axios_1.default
            .put(`${request_1.baseUrl}/api/v1/products/cancel-my-order?order_id=${id}`, {}, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        })
            .then(() => {
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        })
            .catch((error) => {
            console.log(error);
        });
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [loading && (0, jsx_runtime_1.jsx)(Loading_1.default, {}), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("p", { className: "text-white font-poppins mt-4", children: ["Wallet ", t("orders")] }), wallets.length > 0 ? ((0, jsx_runtime_1.jsx)("div", { className: "lg:grid grid-cols-2 gap-x-5 mt-8", children: wallets.map((wal) => ((0, jsx_runtime_1.jsxs)("div", { className: "lg:grid grid-cols-3 secondary-bg p-4 rounded-lg gap-x-5", children: [(0, jsx_runtime_1.jsx)("div", { className: "col-span-2", children: wal.wallets.length > 0 && ((0, jsx_runtime_1.jsx)("img", { src: wal.wallets[0].image, className: "rounded-lg", alt: "Ordered Wallet" })) }), (0, jsx_runtime_1.jsxs)("div", { className: "text-white space-y-3 lg:mt-0 mt-5", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-white mb-3 font-poppins lg:mt-1 mt-2 lg:text-lg font-bold", children: "Order Information" }), (0, jsx_runtime_1.jsxs)("p", { className: "lg:text-sm font-poppins", children: ["Ordered date : ", getDate(wal.created_at)] }), (0, jsx_runtime_1.jsxs)("p", { className: "lg:text-sm font-poppins", children: ["Quantity: ", wal.wallets.map((w) => w.quantity)] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex", children: [(0, jsx_runtime_1.jsx)("p", { className: "lg:text-sm font-poppins", children: "Status :" }), (0, jsx_runtime_1.jsx)("p", { className: "font-poppins first-letter:uppercase ms-2 lg:text-sm", children: wal.status })] }), wal.status === "pending" && ((0, jsx_runtime_1.jsx)("div", { className: "lg:pt-28 pt-5", children: isDisabled(wal.created_at) ? ((0, jsx_runtime_1.jsx)("p", { className: "text-xs bg-red-500 rounded p-1 font-poppins", children: "It has been 18 hours since the product was ordered, and the cancel time has expired." })) : ((0, jsx_runtime_1.jsx)("button", { onClick: () => handleCancel(wal.order_id), className: "font-poppins bg-red-500 w-full rounded py-2 text-sm shadow", children: "Cancel" })) }))] })] }, wal.order_id))) })) : ((0, jsx_runtime_1.jsx)("div", { className: "flex lg:h-[40vh] h-[40vh] items-center", children: (0, jsx_runtime_1.jsxs)("div", { className: "lg:w-[50%] p-5 secondary-bg rounded", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-white font-poppins mb-5", children: t("wallet-empty") }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/all-products", className: "btn-bg rounded shadow-none p-3 font-poppins mb-3 text-white", children: t("order-now") })] }) }))] })] }));
};
exports.default = WalletOrders;
