"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const assets_1 = require("../../assets");
const axios_1 = __importDefault(require("axios"));
const request_1 = require("@/services/request");
const react_i18next_1 = require("react-i18next");
const SignUpOption = () => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const handleGoogleAccount = () => {
        axios_1.default
            .post(`${request_1.baseUrl}/api/v1/auth/login/google`)
            .then((response) => {
            window.location.href = response.data.url;
        })
            .catch((error) => {
            console.log(error);
        });
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { className: "grid grid-cols-3 mt-4", children: [(0, jsx_runtime_1.jsx)("div", { className: "border-t-2 border-gray-700 mt-2" }), (0, jsx_runtime_1.jsx)("div", { className: "text-center text-xs", children: "or" }), (0, jsx_runtime_1.jsx)("div", { className: "border-t-2 mt-2 border-gray-700" })] }), (0, jsx_runtime_1.jsxs)("div", { onClick: () => handleGoogleAccount(), className: "cursor-pointer text-xs flex justify-center text-center border-2 border-gray-700 w-full rounded-lg py-3 mt-4", children: [(0, jsx_runtime_1.jsx)("img", { src: assets_1.google, className: "me-4 w-3 h-3" }), (0, jsx_runtime_1.jsx)("span", { children: t("continue") }), "."] })] }));
};
exports.default = SignUpOption;
