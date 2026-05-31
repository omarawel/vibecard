"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCoverColorStore = void 0;
const zustand_1 = require("zustand");
exports.useCoverColorStore = (0, zustand_1.create)((set) => ({
    coverColorBg: "gradient-cover",
    updateCoverColor: (coverColorBg) => set(() => ({ coverColorBg })),
}));
