"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const useDocumentTitle_1 = __importDefault(require("../../hooks/useDocumentTitle"));
const Footer_1 = __importDefault(require("../Footer/Footer"));
const Navbar_1 = __importDefault(require("../Navbar/Navbar"));
const react_i18next_1 = require("react-i18next");
const ChatbotPrivacyPolicy = () => {
    const [title] = (0, react_1.useState)("Chatbot Privacy Policy");
    (0, useDocumentTitle_1.default)(title);
    const { t } = (0, react_i18next_1.useTranslation)();
    // Scroll to top
    (0, react_1.useEffect)(() => {
        window.scrollTo(0, 0);
    }, []);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Navbar_1.default, {}), (0, jsx_runtime_1.jsxs)("div", { className: "lg:container mx-auto lg:px-6 px-3 lg:mt-32 mt-24", children: [(0, jsx_runtime_1.jsxs)("div", { className: "mt-8 text-white lg:px-0", children: [(0, jsx_runtime_1.jsx)("h1", { className: "lg:text-4xl text-2xl font-extrabold mb-5", children: t("chatbot-privacy-title") }), (0, jsx_runtime_1.jsx)("p", { className: "text-lg mb-4", children: t("chatbot-privacy-note") }), (0, jsx_runtime_1.jsx)("p", { className: "text-lg mb-4", children: t("chatbot-privacy-note2") }), (0, jsx_runtime_1.jsx)("h1", { className: "my-5 text-xl font-extrabold", children: t("chatbot-privacy-title2") }), (0, jsx_runtime_1.jsx)("p", { className: "text-lg mb-4", children: t("chatbot-privacy-note3") }), (0, jsx_runtime_1.jsx)("p", { className: "text-lg mb-4", children: t("chatbot-privacy-note4") }), (0, jsx_runtime_1.jsx)("p", { className: "text-lg mb-4", children: t("chatbot-privacy-note5") }), (0, jsx_runtime_1.jsx)("p", { className: "text-lg mb-4", children: t("chatbot-privacy-note6") })] }), (0, jsx_runtime_1.jsx)(Footer_1.default, {})] })] }));
};
exports.default = ChatbotPrivacyPolicy;
