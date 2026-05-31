"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./loading.css");
const Loading = () => {
    return ((0, jsx_runtime_1.jsx)("div", { className: "loader-container font-logo", children: (0, jsx_runtime_1.jsx)("svg", { viewBox: "0 0 400 160", children: (0, jsx_runtime_1.jsx)("text", { x: "50%", y: "50%", dy: ".32rem", textAnchor: "middle", className: "text-body logo-font", children: "vibecard" }) }) }));
};
exports.default = Loading;
