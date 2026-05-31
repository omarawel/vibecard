"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Nav_1 = __importDefault(require("../Dashboard/Nav"));
const Sidebar_1 = __importDefault(require("../Dashboard/Sidebar"));
const SmallNav_1 = __importDefault(require("../Dashboard/SmallNav"));
const useAmbassadors_1 = __importDefault(require("@/hooks/useAmbassadors"));
const axios_1 = __importDefault(require("axios"));
const request_1 = require("@/services/request");
const Subscription_1 = __importDefault(require("../Subscription/Subscription"));
const Materials_1 = __importDefault(require("../Materials/Materials"));
const useDocumentTitle_1 = __importDefault(require("@/hooks/useDocumentTitle"));
const Loading_1 = __importDefault(require("../Loading/Loading"));
const Wallets_1 = __importDefault(require("../Wallet/Wallets"));
const Home = () => {
    const [title] = (0, react_1.useState)("Vibecard - Dashboard");
    (0, useDocumentTitle_1.default)(title);
    const { activeAmbassadors, pendingAmbassadors } = (0, useAmbassadors_1.default)();
    const [general, setGeneral] = (0, react_1.useState)();
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [cards, setCards] = (0, react_1.useState)([]);
    const [material, setMaterial] = (0, react_1.useState)("");
    (0, react_1.useEffect)(() => {
        axios_1.default
            .get(`${request_1.baseUrl}/api/v1/dashboard/general`, {
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
            setGeneral(response.data);
            setLoading(false);
        })
            .catch((error) => {
            console.log(error);
        });
    }, []);
    (0, react_1.useEffect)(() => {
        axios_1.default
            .get(`${request_1.baseUrl}/api/v1/products/available-materials`, {
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
            setCards(response.data.materials);
        })
            .catch((error) => {
            console.log(error);
        });
    }, []);
    // Remove Material
    const handleRemoveMaterial = (material) => {
        axios_1.default
            .delete(`${request_1.baseUrl}/api/v1/products/remove-material?material=${material}`, {
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(() => {
            window.location.reload();
        })
            .catch((error) => {
            console.error(error);
        });
    };
    // Add Material
    const handleAddMaterial = () => {
        axios_1.default
            .post(`${request_1.baseUrl}/api/v1/products/add-material?material=${material}`, {}, {
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
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [loading && (0, jsx_runtime_1.jsx)(Loading_1.default, {}), (0, jsx_runtime_1.jsxs)("div", { className: "relative lg:grid md:grid grid-cols-11", children: [(0, jsx_runtime_1.jsx)(SmallNav_1.default, { active: "Dashboard" }), (0, jsx_runtime_1.jsx)("div", { className: "lg:col-span-2 w-full", children: (0, jsx_runtime_1.jsx)(Sidebar_1.default, { active: "Dashboard" }) }), (0, jsx_runtime_1.jsxs)("div", { className: "lg:col-span-9 lg:px-4 md:px-2 px-2 py-2 md:col-span-10", children: [(0, jsx_runtime_1.jsx)(Nav_1.default, {}), (0, jsx_runtime_1.jsx)("p", { className: "text-white font-poppins text-lg mt-2", children: "Analytics" }), (0, jsx_runtime_1.jsxs)("div", { className: "grid lg:grid-cols-3 md:grid-cols-2 mt-5 gap-x-6", children: [(0, jsx_runtime_1.jsxs)("div", { className: "bg2 w-full p-4 rounded-lg shadow shadow-zinc-700 lg:mb-0 mb-5 ps-6", children: [(0, jsx_runtime_1.jsx)("p", { className: "font-poppins text-gray-400", children: "Total User" }), (0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between mt-4", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-4xl font-bold mt-1 font-poppins text-white", children: general === null || general === void 0 ? void 0 : general.number_of_total_users }), (0, jsx_runtime_1.jsx)("p", { className: "font-poppins bi-person-fill text-5xl text-teal-500 me-4" })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "bg2 w-full p-4 rounded-lg shadow shadow-zinc-700 lg:mb-0 mb-5 ps-6", children: [(0, jsx_runtime_1.jsx)("p", { className: "font-poppins text-gray-400", children: "Total Generated Cards" }), (0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between mt-4", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-4xl font-bold mt-1 font-poppins text-white", children: general === null || general === void 0 ? void 0 : general.number_of_cards }), (0, jsx_runtime_1.jsx)("p", { className: "bi-credit-card-2-front-fill text-5xl mt-1 text-teal-500 me-4" })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "bg2 w-full p-4 rounded-lg shadow shadow-zinc-700 lg:mb-0 mb-5 ps-6", children: [(0, jsx_runtime_1.jsx)("p", { className: "font-poppins text-gray-400", children: "Total Approved Ambassadors" }), (0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between mt-4", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-4xl mt-1 font-bold font-poppins text-white", children: activeAmbassadors.length }), (0, jsx_runtime_1.jsx)("p", { className: "bi-person-heart text-5xl mt-1 text-teal-500 me-4" })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "bg2 w-full p-5 rounded-lg shadow shadow-zinc-700 lg:mb-0 mb-5 lg:mt-5", children: [(0, jsx_runtime_1.jsx)("p", { className: "font-poppins text-gray-400", children: "Total Pending Ambassadors" }), (0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between mt-4", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-4xl mt-1 font-bold text-white", children: pendingAmbassadors.length }), (0, jsx_runtime_1.jsx)("p", { className: "bi-person-heart text-5xl mt-1 text-teal-500 me-4" })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "bg2 w-full p-5 rounded-lg shadow shadow-zinc-700 lg:mb-0 mb-5 lg:mt-5", children: [(0, jsx_runtime_1.jsx)("p", { className: "font-poppins text-gray-400", children: "Free Subscribers" }), (0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between mt-4", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-4xl mt-1 font-bold font-poppins text-white", children: general === null || general === void 0 ? void 0 : general.subscription_info.free }), (0, jsx_runtime_1.jsx)("p", { className: "bi-person text-5xl mt-1 text-teal-500 me-4" })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "bg2 w-full p-5 rounded-lg shadow shadow-zinc-700 lg:mb-0 mb-5 lg:mt-5", children: [(0, jsx_runtime_1.jsx)("p", { className: "font-poppins text-gray-400", children: "Pro Subscribers" }), (0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between mt-4", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-4xl font-bold mt-1 font-poppins text-white", children: general === null || general === void 0 ? void 0 : general.subscription_info.pro }), (0, jsx_runtime_1.jsx)("p", { className: "bi-person text-5xl mt-1 text-teal-500 me-4" })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "bg2 w-full p-5 rounded-lg shadow shadow-zinc-700 lg:mb-0 mb-5 lg:mt-5", children: [(0, jsx_runtime_1.jsx)("p", { className: "font-poppins text-gray-400", children: "Pro + Subscribers" }), (0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between mt-4", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-4xl mt-1 font-bold font-poppins text-white", children: general === null || general === void 0 ? void 0 : general.subscription_info.proPlus }), (0, jsx_runtime_1.jsx)("p", { className: "bi-person text-5xl mt-1 text-teal-500 me-4" })] })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "grid lg:grid-cols-2 lg:mt-7 mt-4 gap-x-5", children: [(0, jsx_runtime_1.jsxs)("div", { className: "md:mb-4", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-white font-poppins mb-5", children: "Subscription Plans" }), (0, jsx_runtime_1.jsx)(Subscription_1.default, {}), (0, jsx_runtime_1.jsx)("p", { className: "text-white font-poppins my-5", children: "Wallets" }), (0, jsx_runtime_1.jsx)(Wallets_1.default, {})] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("p", { className: "text-white font-poppins mb-5", children: "Products" }), (0, jsx_runtime_1.jsx)(Materials_1.default, {}), (0, jsx_runtime_1.jsxs)("div", { className: "grid grid-cols-4 gap-x-5 my-5", children: [(0, jsx_runtime_1.jsxs)("div", { className: "lg:col-span-2 col-span-4", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-white font-poppins mb-3", children: "Available Card" }), (0, jsx_runtime_1.jsx)("div", { className: "secondary-bg text-white p-4 rounded-xl", children: cards.length > 0 ? (cards.map((c) => ((0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between mb-2", children: [(0, jsx_runtime_1.jsx)("p", { className: "font-poppins first-letter:uppercase", children: c }), (0, jsx_runtime_1.jsx)("button", { onClick: () => handleRemoveMaterial(c), className: "bg-red-500 bi-trash tex-sm rounded w-8 h-8" })] })))) : ((0, jsx_runtime_1.jsx)("p", { className: "text-sm font-poppins py-4", children: "There no available card material" })) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "lg:col-span-2 col-span-4", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-white font-poppins mb-3 lg:mt-0 mt-4", children: "Add Material" }), (0, jsx_runtime_1.jsxs)("div", { className: "secondary-bg text-white p-4 rounded-xl", children: [(0, jsx_runtime_1.jsxs)("select", { onChange: (e) => setMaterial(e.currentTarget.value), name: "material", className: "w-full focus:outline-none rounded h-10 text-black font-poppins ps-2 text-sm", children: [(0, jsx_runtime_1.jsx)("option", { selected: true, hidden: true, children: "Choose material" }), (0, jsx_runtime_1.jsx)("option", { value: "bamboo", children: "Bamboo" }), (0, jsx_runtime_1.jsx)("option", { value: "metal", children: "Metal" }), (0, jsx_runtime_1.jsx)("option", { value: "recycled_paper", children: "PVC" })] }), (0, jsx_runtime_1.jsx)("button", { onClick: () => handleAddMaterial(), className: "bg-green-500 w-full rounded font-poppins mt-2 h-9", children: "Add" })] })] })] })] })] })] })] })] }));
};
exports.default = Home;
