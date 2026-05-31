"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCardColorStore = void 0;
const zustand_1 = require("zustand");
exports.useCardColorStore = (0, zustand_1.create)((set) => ({
    cardColorBg: "#222222",
    updateCardColor: (cardColorBg) => set(() => ({ cardColorBg })),
}));
