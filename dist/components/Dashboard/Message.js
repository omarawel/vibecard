"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const useMessages_1 = require("@/hooks/useMessages");
const MessageComponent = ({ m }) => {
    const { formatMessage } = (0, useMessages_1.useMessages)();
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col p-3 border-b", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-sm text-gray-600", children: formatMessage(m) }), (0, jsx_runtime_1.jsx)("span", { className: "text-xs text-gray-400 self-end mt-1", children: new Date(m.timestamp).toLocaleString() })] }));
};
exports.default = MessageComponent;
