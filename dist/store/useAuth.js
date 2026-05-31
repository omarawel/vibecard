"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zustand_1 = require("zustand");
const useAuth = (0, zustand_1.create)((set) => ({
    email: null,
    type: null,
    isAuthenticated: false,
    login: (email, type) => set({ email, type, isAuthenticated: true }),
    logout: () => set({ email: null, type: null, isAuthenticated: false }),
}));
exports.default = useAuth;
