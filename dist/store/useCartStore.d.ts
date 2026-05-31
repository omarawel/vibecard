interface CartItem {
    id: string;
    quantity: number;
}
interface CartState {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: string) => void;
    updateCartItemQuantity: (id: string, quantity: number) => void;
    clearCart: () => void;
}
export declare const useCartStore: import("zustand").UseBoundStore<import("zustand").StoreApi<CartState>>;
export {};
