"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCartStore = void 0;
const zustand_1 = require("zustand");
exports.useCartStore = (0, zustand_1.create)((set) => ({
    cart: JSON.parse(localStorage.getItem("cart") || "[]"),
    addToCart: (newItem) => set((state) => {
        const existingItemIndex = state.cart.findIndex((item) => item.id === newItem.id);
        let updatedCart;
        if (existingItemIndex >= 0) {
            updatedCart = state.cart.map((item, index) => index === existingItemIndex
                ? Object.assign(Object.assign({}, item), { quantity: item.quantity + 1 }) : item);
        }
        else {
            updatedCart = [...state.cart, newItem];
        }
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return { cart: updatedCart };
    }),
    removeFromCart: (id) => set((state) => {
        const updatedCart = state.cart.filter((item) => item.id !== id);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return { cart: updatedCart };
    }),
    updateCartItemQuantity: (id, quantity) => set((state) => {
        const updatedCart = state.cart.map((item) => item.id === id ? Object.assign(Object.assign({}, item), { quantity }) : item);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return { cart: updatedCart };
    }),
    clearCart: () => set(() => {
        localStorage.removeItem("cart");
        return { cart: [] };
    }),
}));
