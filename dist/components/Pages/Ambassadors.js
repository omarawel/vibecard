"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const SmallNav_1 = __importDefault(require("../Dashboard/SmallNav"));
const Nav_1 = __importDefault(require("../Dashboard/Nav"));
const Sidebar_1 = __importDefault(require("../Dashboard/Sidebar"));
const PendingAmbassadors_1 = __importDefault(require("../Ambassadors/PendingAmbassadors"));
const ApprovedAmbassadors_1 = __importDefault(require("../Ambassadors/ApprovedAmbassadors"));
const react_1 = require("react");
const useDocumentTitle_1 = __importDefault(require("@/hooks/useDocumentTitle"));
const Ambassadors = () => {
    const [title] = (0, react_1.useState)("Ambassadors");
    (0, useDocumentTitle_1.default)(title);
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("div", { className: "relative lg:grid md:grid grid-cols-11", children: [(0, jsx_runtime_1.jsx)(SmallNav_1.default, { active: "Ambassadors" }), (0, jsx_runtime_1.jsx)("div", { className: "lg:col-span-2 w-full", children: (0, jsx_runtime_1.jsx)(Sidebar_1.default, { active: "Ambassadors" }) }), (0, jsx_runtime_1.jsxs)("div", { className: "lg:col-span-9 lg:px-4 md:px-2 px-2 py-2 md:col-span-10", children: [(0, jsx_runtime_1.jsx)(Nav_1.default, {}), (0, jsx_runtime_1.jsx)("h1", { className: "text-white text-xl my-3 lg:hidden md:hidden ms-1", children: "Ambassadors" }), (0, jsx_runtime_1.jsx)(ApprovedAmbassadors_1.default, {}), (0, jsx_runtime_1.jsx)(PendingAmbassadors_1.default, {})] })] }) }));
};
exports.default = Ambassadors;
