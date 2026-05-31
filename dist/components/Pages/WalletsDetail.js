"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Navbar_1 = __importDefault(require("../Navbar/Navbar"));
const react_router_dom_1 = require("react-router-dom");
const useDocumentTitle_1 = __importDefault(require("../../hooks/useDocumentTitle"));
const Footer_1 = __importDefault(require("../Footer/Footer"));
const react_1 = require("react");
const axios_1 = __importDefault(require("axios"));
const request_1 = require("@/services/request");
const Loading_1 = __importDefault(require("../Loading/Loading"));
const WalletOrder_1 = __importDefault(require("../Order/WalletOrder"));
const FAQ_1 = __importDefault(require("../Home/FAQ"));
const assets_1 = require("@/assets");
const Cart_1 = __importDefault(require("../Cart/Cart"));
const useCartStore_1 = require("@/store/useCartStore");
const react_i18next_1 = require("react-i18next");
const WalletCards_1 = __importDefault(require("../Wallet/WalletCards"));
const WalletsDetail = () => {
    const [title] = (0, react_1.useState)("Wallets");
    (0, useDocumentTitle_1.default)(title);
    const { t } = (0, react_i18next_1.useTranslation)();
    // Scroll to top
    (0, react_1.useEffect)(() => {
        window.scrollTo(0, 0);
    }, []);
    const { id } = (0, react_router_dom_1.useParams)();
    const [order, setOrder] = (0, react_1.useState)(false);
    const [wallets, setWallets] = (0, react_1.useState)();
    const [quantity, setQuantity] = (0, react_1.useState)(1);
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [beforeOrderMsg, setBeforeOrderMsg] = (0, react_1.useState)(false);
    const [productNotFound, setProductNotFound] = (0, react_1.useState)(false);
    const addToCart = (0, useCartStore_1.useCartStore)((state) => state.addToCart);
    (0, react_1.useEffect)(() => {
        axios_1.default
            .get(`${request_1.baseUrl}/api/v1/products/wallet/${id}`, {
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
            setWallets(response.data.wallet);
            setLoading(false);
        })
            .catch(() => {
            setLoading(false);
            setProductNotFound(true);
        });
    }, [id]);
    const handleMinus = () => {
        if (quantity === 1)
            return;
        setQuantity(quantity - 1);
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Cart_1.default, {}), order && ((0, jsx_runtime_1.jsx)(WalletOrder_1.default, { id: id ? id : "", img: wallets ? wallets.image : "", quantity: quantity, hideModal: () => setOrder(false) })), beforeOrderMsg && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { className: "overlay top-0 z-[55]" }), (0, jsx_runtime_1.jsx)("div", { className: "fixed top-0 left-0 flex z-[60] justify-center items-center h-[100dvh] w-full lg:px-0 px-3", children: (0, jsx_runtime_1.jsxs)("div", { className: "lg:w-[35%] w-full hero-bg rounded p-6 secondary-bg shadow shadow-zinc-900", children: [(0, jsx_runtime_1.jsx)("p", { className: "chakra mb-5 text-gray-200 text-xl", children: t("notice") }), (0, jsx_runtime_1.jsx)("p", { className: "font-poppins text-white text-sm", children: t("before-order-msg") }), (0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between gap-x-4 mt-6", children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/register", children: (0, jsx_runtime_1.jsx)("p", { className: `shadow-xl shadow-zinc-900 bg-white text-center pt-3 text-sm rounded h-11 lg:mb-0 mb-2 w-44 font-poppins font-bold`, children: t("create-account") }) }), (0, jsx_runtime_1.jsx)("button", { onClick: () => {
                                                setBeforeOrderMsg(false);
                                                setOrder(true);
                                            }, className: "btn-bg py-2 lg:text-center rounded shadow-md shadow-zinc-950 hover:shadow-none transition ease-in-out delay-200 text-center w-full font-poppins text-white font-bold", children: t("order-without-account") })] })] }) })] })), loading && (0, jsx_runtime_1.jsx)(Loading_1.default, {}), (0, jsx_runtime_1.jsx)(Navbar_1.default, {}), (0, jsx_runtime_1.jsx)("div", { className: "lg:px-0 px-2 lg:mt-32 mt-20 lg:mx-36", children: (0, jsx_runtime_1.jsx)("div", { className: "lg:container mx-auto lg:mt-10 mt-4 lg:secondary-bg rounded overflow-hidden", children: productNotFound ? ((0, jsx_runtime_1.jsxs)("div", { className: "bg-white rounded-xl p-8 my-10", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-2xl font-bold font-poppins", children: t("product-not-found") }), (0, jsx_runtime_1.jsx)("p", { className: "mt-2\r\n            mb-4 text-gray-500 font-poppins", children: t("product-not-found-2") }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/all-products", className: "font-poppins bg-blue-400 text-xs rounded shadow shadow-zinc-900 py-2 px-3 text-white active:shadow-none", children: t("back-to-product-page") })] })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { className: "lg:grid grid-cols-2 justify-between", children: [(0, jsx_runtime_1.jsx)("div", { className: "lg:hidden block rounded-xl lg:py-6 mt-5", children: (0, jsx_runtime_1.jsx)("p", { className: "lg:text-4xl text-2xl text-white font-extrabold", children: wallets === null || wallets === void 0 ? void 0 : wallets.name }) }), (0, jsx_runtime_1.jsxs)("div", { className: "pt-8", children: [id === "3d90e076f13441b3af07b32e4d1e1e26" && wallets && ((0, jsx_runtime_1.jsx)(WalletCards_1.default, { images: [wallets.image, assets_1.wall1, assets_1.wall2, assets_1.wall3] })), id === "95aaf8c38c8c41d988989b899536ab99" && wallets && ((0, jsx_runtime_1.jsx)(WalletCards_1.default, { images: [wallets.image, assets_1.wall1, assets_1.wall2, assets_1.wall3] })), id === "00b446a1d7864ce1a480569577a1770e" && wallets && ((0, jsx_runtime_1.jsx)(WalletCards_1.default, { images: [wallets.image, assets_1.slide1, assets_1.slide2, assets_1.slide3] })), id === "ffa02f0cbf90456f8707978c7d54fc9b" && wallets && ((0, jsx_runtime_1.jsx)(WalletCards_1.default, { images: [wallets.image, assets_1.red1, assets_1.red2, assets_1.red3] })), id === "3f638a3343514bca88a9e26cddce3a76" && wallets && ((0, jsx_runtime_1.jsx)(WalletCards_1.default, { images: [wallets.image, assets_1.red1, assets_1.red2, assets_1.red3] })), id === "c5d147cc775848f79e08ba1d90acb1da" && wallets && ((0, jsx_runtime_1.jsx)(WalletCards_1.default, { images: [wallets.image] }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "px-2 main-bg lg:ps-10", children: [(0, jsx_runtime_1.jsx)("div", { className: "lg:block hidden rounded-xl lg:py-6", children: (0, jsx_runtime_1.jsx)("p", { className: "lg:text-3xl text-2xl text-white font-extrabold", children: wallets === null || wallets === void 0 ? void 0 : wallets.name }) }), (0, jsx_runtime_1.jsxs)("p", { className: "text-white  font-poppins font-bold text-xl mt-5", children: [t("price"), " \u20AC", wallets === null || wallets === void 0 ? void 0 : wallets.price] }), (0, jsx_runtime_1.jsxs)("p", { className: "text-lg mt-5 mb-4 text-gray-400 font-poppins font-bold", children: [t("size"), " ", (0, jsx_runtime_1.jsx)("span", { className: "text-sm font-light font-poppins text-white", children: t("sizeDesc") })] }), (0, jsx_runtime_1.jsxs)("p", { className: "mt5 mb-4 text-gray-400", children: [" ", t("quantity")] }), (0, jsx_runtime_1.jsxs)("div", { className: "grid grid-cols-5 border border-gray-800 rounded-xl overflow-hidden lg:w-auto w-full", children: [(0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("button", { onClick: () => handleMinus(), className: "bi-dash bg-black w-full h-full text-white text-2xl" }) }), (0, jsx_runtime_1.jsx)("div", { className: "col-span-3", children: (0, jsx_runtime_1.jsx)("input", { type: "number", className: "h-14 border w-full text-center chakra text-3xl text-black focus:outline-none", value: quantity, readOnly: true, onChange: (e) => setQuantity(Number(e.currentTarget.value)) }) }), (0, jsx_runtime_1.jsx)("div", { className: "text-center w-full", children: (0, jsx_runtime_1.jsx)("button", { onClick: () => setQuantity(quantity + 1), className: "bi-plus-lg bg-black w-full h-full text-white text-2xl" }) })] }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)("button", { onClick: () => addToCart({
                                                        id: wallets ? wallets.wallet_id : "",
                                                        quantity,
                                                    }), className: "bg-white bi-cart-fill w-full mt-8 shadow shadow-zinc-900 text-black font-poppins rounded py-3", children: [(0, jsx_runtime_1.jsx)("span", { className: "mx-1" }), t("addToCart")] }) }), (0, jsx_runtime_1.jsx)("div", { className: "lg:flex justify-between gap-x-10 w-full mt-5", children: (0, jsx_runtime_1.jsx)("div", { className: "w-full lg:mb-0 mb-5", children: (0, jsx_runtime_1.jsx)("button", { onClick: () => setOrder(true), className: "btn-bg w-full shadow text-white font-bold rounded", children: t("order") }) }) })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "px-3", children: [(0, jsx_runtime_1.jsx)("p", { className: "lg:mt-20 mt-10 mb-4 text-white text-xl font-poppins font-bold", children: t("description") }), id === "c5d147cc775848f79e08ba1d90acb1da" ? ((0, jsx_runtime_1.jsx)("p", { className: "mt-5 mb-4 text-gray-300 font-poppins leading-relaxed text-", children: t("google-review-description") })) : ((0, jsx_runtime_1.jsx)("p", { className: "mt-5 mb-4 text-gray-300 font-poppins leading-relaxed text-", children: t("descriptionNote") }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "px-4 mt-10", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-teal-500 text-2xl", children: "FAQ" }), (0, jsx_runtime_1.jsx)("div", { className: "mt-8 flex justify-center", children: (0, jsx_runtime_1.jsx)("div", { className: "w-full", children: (0, jsx_runtime_1.jsx)(FAQ_1.default, {}) }) })] })] })) }) }), (0, jsx_runtime_1.jsx)(Footer_1.default, {})] }));
};
exports.default = WalletsDetail;
