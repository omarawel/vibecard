"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useInsightStore = void 0;
const zustand_1 = require("zustand");
exports.useInsightStore = (0, zustand_1.create)((set) => ({
    activeCard: null,
    updateActiveCard: (activeCard) => set(() => ({ activeCard })),
}));
