"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const useWallets_1 = __importDefault(require("@/hooks/useWallets"));
const useCartStore_1 = require("@/store/useCartStore");
const react_1 = require("react");
const react_i18next_1 = require("react-i18next");
const react_router_dom_1 = require("react-router-dom");
const Cart = ({ home }) => {
    const { allWallets } = (0, useWallets_1.default)();
    const { t } = (0, react_i18next_1.useTranslation)();
    const cart = (0, useCartStore_1.useCartStore)((state) => state.cart);
    const removeFromCart = (0, useCartStore_1.useCartStore)((state) => state.removeFromCart);
    const updateCartItemQuantity = (0, useCartStore_1.useCartStore)((state) => state.updateCartItemQuantity);
    const clearCart = (0, useCartStore_1.useCartStore)((state) => state.clearCart);
    const emptyCart = cart.length === 0;
    const [viewCart, setViewCart] = (0, react_1.useState)(false);
    const getWalletImg = (id) => {
        const wallet = allWallets.find((wal) => wal.wallet_id === id);
        return wallet ? wallet.image : "default-image.png";
    };
    const handleQuantityChange = (id, quantity) => {
        if (quantity > 0) {
            updateCartItemQuantity(id, quantity);
        }
        else {
            removeFromCart(id);
        }
    };
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: !emptyCart && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { className: "relative", children: (0, jsx_runtime_1.jsx)("button", { onClick: () => setViewCart(true), className: `fixed ${home ? "bottom-24 right-5" : "bottom-4 right-2"}  z-50 bi-cart-fill font-poppins btn-bg shadow text-xl text-white rounded-full p-0 w-12 h-12 md:w-14 md:h-14`, children: (0, jsx_runtime_1.jsx)("span", { className: "font-poppins ms-1 text-sm", children: cart.length }) }) }), viewCart && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { onClick: () => setViewCart(false), className: "overlay z-40" }), (0, jsx_runtime_1.jsxs)("div", { className: "animate__animated animate__fadeInRight secondary-bg shadow shadow-teal-500 w-[98%] md:w-[60%] lg:w-[28%] lg:h-[90%] h-[100%] fixed lg:top-20 top-0 right-0  z-50", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between px-5 pt-5", children: [(0, jsx_runtime_1.jsxs)("p", { className: "text-white font-poppins font-bold text-xl", children: [cart.length, " ", t("cart")] }), (0, jsx_runtime_1.jsx)("button", { onClick: () => setViewCart(false), className: "bi-x-lg text-white" })] }), (0, jsx_runtime_1.jsx)("div", { className: "h-[65%] bg-zinc-900 rounded mx-1 overflow-y-scroll p-5 mt-5", children: cart.map((c) => ((0, jsx_runtime_1.jsxs)("div", { className: "grid grid-cols-10 mb-4 gap-x-3 border-b border-gray-700 pb-4", children: [(0, jsx_runtime_1.jsx)("div", { className: "col-span-4", children: (0, jsx_runtime_1.jsx)("img", { src: getWalletImg(c.id), alt: "cart-item", className: "rounded" }) }), (0, jsx_runtime_1.jsx)("div", { className: "col-span-4", children: (0, jsx_runtime_1.jsx)("div", { className: "flex gap-x-2 h-full items-center", children: (0, jsx_runtime_1.jsx)("input", { type: "number", className: "w-full text-center font-poppins font-bold text-xl rounded h-10 focus:outline-none", value: c.quantity, onChange: (e) => handleQuantityChange(c.id, parseInt(e.target.value)) }) }) }), (0, jsx_runtime_1.jsx)("div", { className: "col-span-2 flex items-center h-full", children: (0, jsx_runtime_1.jsx)("button", { onClick: () => {
                                                        cart.length === 1 && setViewCart(false);
                                                        removeFromCart(c.id);
                                                    }, className: "bg-red-500 w-full h-10 bi-trash-fill text-white rounded" }) })] }))) }), (0, jsx_runtime_1.jsxs)("div", { className: "mx-3", children: [(0, jsx_runtime_1.jsx)("button", { onClick: () => {
                                                setViewCart(false);
                                                clearCart();
                                            }, className: "bg-red-600 shadow shadow-zinc-900 bi-trash font-poppins w-full text-white rounded mt-3 h-12", children: t("clear-cart") }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/order-multiple-products", children: (0, jsx_runtime_1.jsx)("p", { className: "bg-teal-600 shadow shadow-zinc-900 font-poppins w-full text-white rounded mt-3 h-12 text-center pt-3", children: t("checkout") }) })] })] })] }))] })) }));
};
exports.default = Cart;
