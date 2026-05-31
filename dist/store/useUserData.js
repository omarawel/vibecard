"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zustand_1 = require("zustand");
const useAuthStore = (0, zustand_1.create)((set) => ({
    user: null,
    email: null,
    isAuthenticated: false,
    plan: null,
    login: (user, email, plan) => set({ user, email, plan, isAuthenticated: true }),
    logout: () => set({ user: null, email: null, plan: null, isAuthenticated: false }),
}));
exports.default = useAuthStore;
