"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const request_1 = require("@/services/request");
const axios_1 = __importDefault(require("axios"));
const react_1 = require("react");
const Materials = () => {
    const [cards, setCards] = (0, react_1.useState)();
    const [metal, setMetal] = (0, react_1.useState)();
    const [bamboo, setBamboo] = (0, react_1.useState)();
    const [paper, setPaper] = (0, react_1.useState)();
    const [wallet, setWallet] = (0, react_1.useState)();
    (0, react_1.useEffect)(() => {
        axios_1.default
            .get(`${request_1.baseUrl}/api/v1/dashboard/card-material-pricing`, {
            headers: {
                "Content-Type": "application/json",
                "ngrok-skip-browser-warning": "69420",
            },
        })
            .then((response) => {
            setCards(response.data);
        })
            .catch((error) => {
            console.log(error);
        });
    }, []);
    (0, react_1.useEffect)(() => {
        setMetal(cards ? cards.metal.price : 0);
        setBamboo(cards ? cards.bamboo.price : 0);
        setPaper(cards ? cards.recycled_paper.price : 0);
        setWallet(cards ? cards.wallet.price : 0);
    }, [cards]);
    const handleChange = (edit) => {
        const data = {
            material: edit,
            new_price: edit === "metal"
                ? metal
                : edit === "bamboo"
                    ? bamboo
                    : edit === "recycled_paper"
                        ? paper
                        : wallet,
        };
        axios_1.default
            .put(`${request_1.baseUrl}/api/v1/dashboard/update-cmp`, data, {
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
    return ((0, jsx_runtime_1.jsx)("div", { className: "bg2 rounded-lg lg:p-4 p-2", children: (0, jsx_runtime_1.jsxs)("div", { className: "grid lg:grid-cols-3 grid-cols-4 text-white", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-gray-400 text-sm mb-5 font-poppins", children: "Type" }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-400 text-sm mb-5 font-poppins", children: "Price" }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-400 text-sm mb-5 font-poppins", children: "Edit" }), (0, jsx_runtime_1.jsxs)("div", { className: "col-span-4 lg:col-span-3 grid lg:grid-cols-3 grid-cols-4 secondary-bg mb-2 py-3 px-2 rounded-lg", children: [(0, jsx_runtime_1.jsx)("p", { className: "font-poppins", children: "Metal" }), (0, jsx_runtime_1.jsxs)("p", { className: "font-poppins", children: ["\u20AC", cards === null || cards === void 0 ? void 0 : cards.metal.price] }), (0, jsx_runtime_1.jsx)("div", { className: "lg:col-span-1 col-span-2 flex gap-x-2", children: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("input", { type: "number", className: "ps-3 text-black font-bold font-poppins focus:outline-none rounded w-28 lg:h-8 h-9", onChange: (e) => setMetal(e.currentTarget.value), value: metal }), (0, jsx_runtime_1.jsx)("button", { onClick: () => handleChange("metal"), className: "bi-check bg-green-500 lg:h-8 h-9 rounded px-2 text-xl" })] }) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "col-span-4 lg:col-span-3 grid lg:grid-cols-3 grid-cols-4 secondary-bg mb-2 py-3 px-2 rounded-lg", children: [(0, jsx_runtime_1.jsx)("p", { className: "font-poppins", children: "Bamboo" }), (0, jsx_runtime_1.jsxs)("p", { className: "font-poppins", children: ["\u20AC", cards === null || cards === void 0 ? void 0 : cards.bamboo.price] }), (0, jsx_runtime_1.jsxs)("div", { className: "lg:col-span-1 col-span-2 flex gap-x-2", children: [(0, jsx_runtime_1.jsx)("input", { type: "number", className: "ps-3 text-black font-poppins font-bold focus:outline-none rounded w-28 lg:h-8 h-9", onChange: (e) => setBamboo(e.currentTarget.value), value: bamboo }), (0, jsx_runtime_1.jsx)("button", { onClick: () => handleChange("bamboo"), className: "bi-check bg-green-500 lg:h-8 h-9 rounded px-2 text-xl" })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "col-span-4 lg:col-span-3 grid lg:grid-cols-3 grid-cols-4 secondary-bg mb-2 py-3 px-2 rounded-lg", children: [(0, jsx_runtime_1.jsx)("p", { className: "mb-1 font-poppins", children: "PVC" }), (0, jsx_runtime_1.jsxs)("p", { className: "mb-1 font-poppins", children: ["\u20AC", cards === null || cards === void 0 ? void 0 : cards.recycled_paper.price] }), (0, jsx_runtime_1.jsxs)("div", { className: "lg:col-span-1 col-span-2 flex gap-x-2", children: [(0, jsx_runtime_1.jsx)("input", { type: "number", className: "ps-3 text-black font-poppins font-bold focus:outline-none rounded w-28 lg:h-8 h-9", onChange: (e) => setPaper(e.currentTarget.value), value: paper }), (0, jsx_runtime_1.jsx)("button", { onClick: () => handleChange("recycled_paper"), className: "bi-check bg-green-500 lg:h-8 h-9 rounded px-2 text-xl" })] })] })] }) }));
};
exports.default = Materials;
