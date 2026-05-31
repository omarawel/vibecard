"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const useDocumentTitle_1 = __importDefault(require("@/hooks/useDocumentTitle"));
const Orders_1 = __importDefault(require("../Orders/Orders"));
const react_1 = require("react");
const CardOrders = () => {
    const [title] = (0, react_1.useState)("Card Orders");
    (0, useDocumentTitle_1.default)(title);
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(Orders_1.default, { type: "Card" }) }));
};
exports.default = CardOrders;
