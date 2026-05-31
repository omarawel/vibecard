"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Loader_1 = __importDefault(require("../Loader/Loader"));
const Button = ({ label, loader }) => {
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: loader ? ((0, jsx_runtime_1.jsx)("div", { className: "btn-bg w-full py-3 rounded font-poppins mt-5 shadow-lg", children: (0, jsx_runtime_1.jsx)(Loader_1.default, {}) })) : ((0, jsx_runtime_1.jsx)("button", { className: "btn-bg w-full py-3 rounded font-poppins mt-5 shadow-lg", children: label })) }));
};
exports.default = Button;
