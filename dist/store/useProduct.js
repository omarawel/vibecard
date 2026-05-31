"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zustand_1 = require("zustand");
// Create the Zustand store
const useProduct = (0, zustand_1.create)((set) => ({
    front: {
        text: "",
        textSize: "text-4xl",
        image: null,
        bgColor: "",
        fontStyle: "syne",
        imageSize: "40",
        pickedBg: "#ffffff",
        color: "#000000",
        extraTextPosition: { x: "", y: "" },
        imagePosition: { x: "", y: "" },
        textPosition: { x: "", y: "" },
        extraText: "",
        extraTextColor: "",
        extraTextFontSize: "",
        extraTextFontStyle: "",
        rotation: 0,
    },
    back: {
        text: "",
        textSize: "text-4xl",
        image: null,
        bgColor: "",
        fontStyle: "syne",
        imageSize: "40",
        pickedBg: "#ffffff",
        extraTextPosition: { x: "", y: "" },
        imagePosition: { x: "", y: "" },
        textPosition: { x: "", y: "" },
        color: "#000000",
        extraText: "",
        extraTextColor: "",
        extraTextFontSize: "",
        extraTextFontStyle: "",
        rotation: 0,
    },
    // productId: 0,
    orientation: "",
    updateFront: (card) => set((state) => ({
        front: Object.assign(Object.assign({}, state.front), card),
    })),
    updateBack: (card) => set((state) => ({
        back: Object.assign(Object.assign({}, state.back), card),
    })),
    // setProductId: (id) => set({ productId: id }),
    setCardOrientation: (orientation) => set({ orientation: orientation }),
    // setOrientation : (orientation) => set({orientation: orientation}))
}));
exports.default = useProduct;
