"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const CustomTick = (props) => {
    const { x, y, payload } = props;
    return ((0, jsx_runtime_1.jsx)("g", { transform: `translate(${x},${y})`, children: (0, jsx_runtime_1.jsx)("text", { x: 0, y: 0, dy: 6, textAnchor: "middle", fill: "#4B5563" // Change this color as needed
            , className: "text-xs tracking-wide" // Tailwind classes for additional styling
            , children: payload.value.slice(0, 3) }) }));
};
exports.default = CustomTick;
