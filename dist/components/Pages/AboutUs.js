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
const AboutUs = () => {
    const [title] = (0, react_1.useState)("About Us");
    (0, useDocumentTitle_1.default)(title);
    const { t } = (0, react_i18next_1.useTranslation)();
    // Scroll to top
    (0, react_1.useEffect)(() => {
        window.scrollTo(0, 0);
    }, []);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Navbar_1.default, {}), (0, jsx_runtime_1.jsx)("div", { className: "lg:container mx-auto lg:px-6 px-3", children: (0, jsx_runtime_1.jsxs)("div", { className: "lg:mt-32 mt-28 text-white", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-4xl font-extrabold", children: t("aboutUs") }), (0, jsx_runtime_1.jsx)("h2", { className: "my-5 text-xl font-extrabold", children: t("innovation") }), (0, jsx_runtime_1.jsx)("p", { className: "text-lg", children: t("innovationNote") }), (0, jsx_runtime_1.jsx)("h1", { className: "my-5 text-xl font-extrabold", children: t("firstStep") }), (0, jsx_runtime_1.jsx)("p", { className: "text-lg", children: t("firstStepNote") }), (0, jsx_runtime_1.jsx)("h1", { className: "my-5 text-xl font-extrabold", children: t("ambitious") }), (0, jsx_runtime_1.jsx)("p", { className: "text-lg", children: t("ambitiousNote") }), (0, jsx_runtime_1.jsx)("h1", { className: "my-5 text-xl font-extrabold", children: t("sustainability") }), (0, jsx_runtime_1.jsx)("p", { className: "text-lg", children: t("sustainabilityNote") }), (0, jsx_runtime_1.jsx)("h1", { className: "my-5 text-xl font-extrabold", children: t("shape") }), (0, jsx_runtime_1.jsx)("p", { className: "text-lg", children: t("shapeNote") })] }) }), (0, jsx_runtime_1.jsx)(Footer_1.default, {})] }));
};
exports.default = AboutUs;
