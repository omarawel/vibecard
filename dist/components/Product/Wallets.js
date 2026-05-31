"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const axios_1 = __importDefault(require("axios"));
const react_1 = require("react");
const Loading_1 = __importDefault(require("../Loading/Loading"));
const react_router_dom_1 = require("react-router-dom");
const request_1 = require("@/services/request");
const carousel_1 = require("../ui/carousel");
const react_i18next_1 = require("react-i18next");
const Wallets = ({ review_card }) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [wallets, setWallets] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        axios_1.default
            .get(`${request_1.baseUrl}/api/v1/products/get-wallets`, {
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
            setLoading(false);
            if (!review_card) {
                const filter = response.data.wallets.filter((wal) => wal.status !== "Not Available" && !wal.is_review_card);
                setWallets(filter);
            }
            else {
                const filter = response.data.wallets.filter((wal) => wal.status !== "Not Available" && wal.is_review_card);
                setWallets(filter);
            }
        })
            .catch((error) => {
            setLoading(false);
            console.log(error);
        });
    }, []);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [loading && (0, jsx_runtime_1.jsx)(Loading_1.default, {}), review_card ? ((0, jsx_runtime_1.jsx)("div", { className: "grid lg:grid-cols-3 gap-x-4", children: wallets.length > 0 &&
                    wallets.map((wallet) => ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: `${`/review-card/${wallet.wallet_id}`}`, children: (0, jsx_runtime_1.jsx)("div", { className: "mb-4 rounded-lg overflow-hidden", children: (0, jsx_runtime_1.jsx)("img", { src: wallet.image, alt: "Review Card", className: " w-full h-80" }) }, wallet.wallet_id) }), (0, jsx_runtime_1.jsxs)("div", { className: "mt-2 bg-gray-800 rounded px-3 py-5 shadow shadow-zinc-950 mb-8", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-lg text-white font-poppins no-select", children: t("review-card-title") }), (0, jsx_runtime_1.jsxs)("p", { className: "text-xs text-white font-poppins", children: [t("price"), " ", (0, jsx_runtime_1.jsx)("span", { className: "text-teal-500 font-poppins text-sm font-bold", children: wallet.price })] }), review_card && ((0, jsx_runtime_1.jsxs)("p", { className: "text-xs text-white font-poppins", children: [t("size"), " ", (0, jsx_runtime_1.jsx)("span", { className: "text-teal-500 font-poppins text-sm font-bold", children: wallet.size })] }))] })] }, wallet.wallet_id))) })) : ((0, jsx_runtime_1.jsxs)(carousel_1.Carousel, { children: [(0, jsx_runtime_1.jsx)(carousel_1.CarouselContent, { children: wallets.length > 0 &&
                            wallets.map((wallet) => ((0, jsx_runtime_1.jsxs)(carousel_1.CarouselItem, { className: "lg:basis-1/3 md:basis-1/2", children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: `${`/wallets/${wallet.wallet_id}`}`, children: (0, jsx_runtime_1.jsx)("div", { className: "mb-4 rounded-lg overflow-hidden", children: (0, jsx_runtime_1.jsx)("img", { src: wallet.image, alt: "wallets", className: " w-full h-80" }) }, wallet.wallet_id) }), (0, jsx_runtime_1.jsxs)("div", { className: "mt-2 bg-gray-800 rounded px-3 py-5 shadow shadow-zinc-950 mb-8", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-lg text-white font-poppins no-select", children: wallet.name }), (0, jsx_runtime_1.jsxs)("p", { className: "text-xs text-white font-poppins", children: [t("price"), " ", (0, jsx_runtime_1.jsx)("span", { className: "text-teal-500 font-poppins text-sm font-bold", children: wallet.price })] }), review_card && ((0, jsx_runtime_1.jsxs)("p", { className: "text-xs text-white font-poppins", children: [t("size"), " ", (0, jsx_runtime_1.jsx)("span", { className: "text-teal-500 font-poppins text-sm font-bold", children: wallet.size })] }))] })] }, wallet.wallet_id))) }), (0, jsx_runtime_1.jsx)("div", { className: `${wallets.length > 3
                            ? "lg:block md:block"
                            : "lg:hidden md:block block"}`, children: wallets.length > 1 && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(carousel_1.CarouselPrevious, { className: "absolute z-50 left-0 bg-black text-white" }), (0, jsx_runtime_1.jsx)(carousel_1.CarouselNext, { className: "absolute z-50 right-0 bg-black text-white" })] })) })] }))] }));
};
exports.default = Wallets;
