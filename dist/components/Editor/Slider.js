"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./slider.css");
const CustomSlider = ({ value, min, max, step, onChange, }) => {
    const handleChange = (e) => {
        onChange(Number(e.target.value));
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: "relative mt-10", children: (0, jsx_runtime_1.jsx)("input", { type: "range", className: "custom-slider myt-10 mb-5 w-full bg-sky-900", value: value, min: min, max: max, step: step, name: "zoom", onChange: handleChange }) }));
};
exports.default = CustomSlider;
