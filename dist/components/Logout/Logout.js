"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const axios_1 = __importDefault(require("axios"));
const request_1 = require("../../services/request");
const useUserData_1 = __importDefault(require("../../store/useUserData"));
const react_router_dom_1 = require("react-router-dom");
const react_i18next_1 = require("react-i18next");
const Logout = () => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const { logout } = (0, useUserData_1.default)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    const handleLogout = () => {
        axios_1.default
            .post(`${request_1.baseUrl}/api/v1/auth/logout`, {}, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        })
            .then(() => {
            logout();
            navigate("/");
        })
            .catch((error) => {
            console.log(error);
        });
    };
    return ((0, jsx_runtime_1.jsxs)("button", { onClick: handleLogout, className: "font-poppins text-red-500 rounded", children: [(0, jsx_runtime_1.jsx)("span", { className: "bi-box-arrow-right font-poppins" }), " ", t("nav8")] }));
};
exports.default = Logout;
