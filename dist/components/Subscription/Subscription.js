"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const request_1 = require("@/services/request");
const axios_1 = __importDefault(require("axios"));
const react_1 = require("react");
const Subscription = () => {
    const [subscription, setSubscription] = (0, react_1.useState)();
    const [pro, setPro] = (0, react_1.useState)();
    const [proPlus, setProPlus] = (0, react_1.useState)();
    (0, react_1.useEffect)(() => {
        axios_1.default
            .get(`${request_1.baseUrl}/api/v1/dashboard/subscription-plan`, {
            headers: {
                "Content-Type": "application/json",
                "ngrok-skip-browser-warning": "69420",
            },
        })
            .then((response) => {
            setSubscription(response.data);
        })
            .catch((error) => {
            console.log(error);
        });
    }, []);
    (0, react_1.useEffect)(() => {
        setPro(subscription ? subscription.pro.price : 0);
        setProPlus(subscription ? subscription.proPlus.price : 0);
    }, [subscription]);
    const handleChange = (edit) => {
        const data = {
            plan: edit,
            new_price: edit === "pro" ? pro : proPlus,
        };
        axios_1.default
            .put(`${request_1.baseUrl}/api/v1/dashboard/usp`, data, {
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(() => {
            window.location.reload();
        })
            .catch((error) => {
            console.log(error);
        });
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: "bg2 rounded-lg py-4 lg:px-4 px-2", children: (0, jsx_runtime_1.jsxs)("div", { className: "grid lg:grid-cols-3 grid-cols-4 text-white", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-gray-400 text-sm w-full font-poppins mb-5", children: "Plan" }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-400 text-sm w-full font-poppins mb-5", children: "Price" }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-400 text-sm w-full font-poppins mb-5", children: "Edit" }), (0, jsx_runtime_1.jsxs)("div", { className: "lg:col-span-3 col-span-4 grid lg:grid-cols-3 grid-cols-4 secondary-bg mb-2 py-3 px-3 rounded-lg", children: [(0, jsx_runtime_1.jsx)("p", { className: "font-poppins", children: "Pro" }), (0, jsx_runtime_1.jsxs)("p", { className: "font-poppins", children: ["\u20AC", subscription === null || subscription === void 0 ? void 0 : subscription.pro.price] }), (0, jsx_runtime_1.jsx)("div", { className: "flex gap-x-3", children: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("input", { type: "number", className: "ps-3 text-black font-poppins font-bold focus:outline-none rounded w-28 lg:h-8 h-9", onChange: (e) => setPro(e.currentTarget.value), value: pro }), (0, jsx_runtime_1.jsx)("button", { onClick: () => handleChange("pro"), className: "bi-check bg-green-500 lg:h-8 h-9 rounded px-2 text-xl" })] }) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "lg:col-span-3 col-span-4 grid lg:grid-cols-3 grid-cols-4 secondary-bg mb-2 py-3 px-3 rounded-lg", children: [(0, jsx_runtime_1.jsx)("p", { className: "font-poppins", children: "Pro +" }), (0, jsx_runtime_1.jsxs)("p", { className: "font-poppins", children: ["\u20AC", subscription === null || subscription === void 0 ? void 0 : subscription.proPlus.price] }), (0, jsx_runtime_1.jsx)("div", { className: "flex gap-x-3", children: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("input", { type: "number", className: "ps-3 font-poppins text-black font-bold focus:outline-none rounded w-28 lg:h-8 h-9", onChange: (e) => setProPlus(e.currentTarget.value), value: proPlus }), (0, jsx_runtime_1.jsx)("button", { onClick: () => handleChange("proPlus"), className: "bi-check bg-green-500 lg:h-8 h-9 rounded px-2 text-xl" })] }) })] })] }) }));
};
exports.default = Subscription;
