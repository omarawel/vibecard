"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const useAmbassadors_1 = require("@/hooks/useAmbassadors");
const avatar_png_1 = __importDefault(require("@/assets/icons/avatar.png"));
const PendingAmbassadors = ({ pending }) => {
    const { getAmbassadorName } = (0, useAmbassadors_1.useAmbassadors)();
    return ((0, jsx_runtime_1.jsxs)("div", { className: "w-full h-auto bg-white rounded-lg shadow-lg p-4", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-lg font-semibold mb-4", children: "Pending Ambassadors" }), (0, jsx_runtime_1.jsx)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: pending.length > 0 ? (pending.map((ambassador) => ((0, jsx_runtime_1.jsxs)("div", { className: "flex items-center space-x-3 p-2 border rounded-md", children: [(0, jsx_runtime_1.jsx)("img", { src: avatar_png_1.default, alt: "Avatar", className: "w-10 h-10 rounded-full" }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("p", { className: "font-medium", children: getAmbassadorName(ambassador) }), (0, jsx_runtime_1.jsx)("p", { className: "text-sm text-gray-500", children: ambassador.email })] })] }, ambassador.id)))) : ((0, jsx_runtime_1.jsx)("p", { children: "No pending ambassadors found." })) })] }));
};
exports.default = PendingAmbassadors;
