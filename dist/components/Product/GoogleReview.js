"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const Available_1 = __importDefault(require("./Available"));
const GoogleReview = ({ img }) => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "lg:mb-0 mb-10", children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: `/products/card-google-review`, children: (0, jsx_runtime_1.jsx)("img", { src: img, alt: "", className: "rounded-lg h-72 w-full object-cover" }) }), (0, jsx_runtime_1.jsx)(Available_1.default, { name: "googleReview" })] }));
};
exports.default = GoogleReview;
