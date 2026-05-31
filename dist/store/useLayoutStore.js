"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLayoutStore = void 0;
const zustand_1 = require("zustand");
exports.useLayoutStore = (0, zustand_1.create)((set) => ({
    layout: "default",
    watermark: false,
    updateLayout: (layout) => set(() => ({ layout })),
    updateWatermark: (watermark) => set(() => ({ watermark })),
}));
