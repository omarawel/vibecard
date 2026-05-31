"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTextColorStore = void 0;
const zustand_1 = require("zustand");
// Create the Zustand store
exports.useTextColorStore = (0, zustand_1.create)((set) => ({
    pronoun: { font: "font-monospace", color: "#9ca3af", size: "text-sm" },
    name: { font: "font-poppins", color: "#ffffff", size: "text-xl" },
    tagLine: { font: "ubuntu", color: "#9ca3af", size: "text-sm" },
    jobTitle: { font: "syne", color: "#2dd4bf", size: "text-lg" },
    company: { font: "metamorphous", color: "#9ca3af", size: "text-sm" },
    location: { font: "roboto", color: "#9ca3af", size: "text-sm" },
    button: { font: "#000000", color: "#14b8a6", size: "" },
    updateFont: (key, font) => set((state) => ({
        [key]: Object.assign(Object.assign({}, state[key]), { font }),
    })),
    updateColor: (key, color) => set((state) => ({
        [key]: Object.assign(Object.assign({}, state[key]), { color }),
    })),
    updateSize: (key, size) => set((state) => ({
        [key]: Object.assign(Object.assign({}, state[key]), { size }),
    })),
}));
