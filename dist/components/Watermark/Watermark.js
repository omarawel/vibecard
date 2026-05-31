"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const assets_1 = require("@/assets");
const Watermark = () => {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { className: "absolute top-1 px-1 right-2 z-40 watermark-effect", children: (0, jsx_runtime_1.jsx)("img", { src: assets_1.watermark, alt: "vibecard", className: "watermark p-1" }) }), (0, jsx_runtime_1.jsx)("div", { className: "absolute top-0 z-50  h-6 w-full" })] }));
};
exports.default = Watermark;
