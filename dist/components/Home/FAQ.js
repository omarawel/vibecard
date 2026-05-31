"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const faq_1 = require("../../services/faq");
const react_i18next_1 = require("react-i18next");
const Faq = ({ textSize, ambassador }) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const [id, setId] = (0, react_1.useState)(0);
    const handleFaq = (faqId) => {
        if (id === faqId) {
            setId(0);
        }
        else {
            setId(faqId);
        }
    };
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: !ambassador
            ? faq_1.faq.map((faqs) => ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between w-full mb-5 border-b pb-4 border-gray-700", children: [(0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("p", { className: `${textSize ? "text-sm" : "lg:text-xl text-lg "} text-white font-poppins`, children: t(faqs.question) }) }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("button", { onClick: () => handleFaq(faqs.id), className: `text-white font-poppins rounded px-2 py-0 shadow-none cursor-pointer pt-1 ${id === faqs.id ? "bi-caret-up-fill" : "bi-caret-down-fill"}  textSize ? "text-sm" : "text-xl "
                }` }) })] }), id === faqs.id && ((0, jsx_runtime_1.jsx)("div", { className: `text-sm ${textSize ? "px-1 mx-2" : "px-3 mx-2 lg:mx-10"} py-5 mb-4 rounded `, children: (0, jsx_runtime_1.jsx)("p", { className: `text-white font-poppins ${textSize ? "text-sm" : "text-lg"}`, children: t(faqs.answer) }) }))] }, faqs.id)))
            : faq_1.ambassadorFaq.map((faqs) => ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between w-full mb-5 border-b pb-4 border-gray-700", children: [(0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("p", { className: `${textSize ? "text-sm" : "text-lg"} text-white font-poppins`, children: t(faqs.question) }) }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("button", { onClick: () => handleFaq(faqs.id), className: `text-white font-poppins rounded px-2 py-0 shadow-none cursor-pointer pt-1 ${id === faqs.id ? "bi-caret-up-fill" : "bi-caret-down-fill"}  textSize ? "text-sm" : "text-xl "
              }` }) })] }), id === faqs.id && ((0, jsx_runtime_1.jsx)("div", { className: `text-sm ${textSize ? "px-1 mx-2" : "px-3 mx-2 lg:mx-10"} py-5 mb-4 rounded `, children: (0, jsx_runtime_1.jsx)("p", { className: `text-white font-poppins ${textSize ? "text-sm" : "text-lg"}`, children: t(faqs.answer) }) }))] }, faqs.id))) }));
};
exports.default = Faq;
