"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
// ProtectedComponent.tsx
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const axios_1 = __importDefault(require("axios"));
const request_1 = require("../../services/request");
const Loading_1 = __importDefault(require("../Loading/Loading"));
const useAuth_1 = __importDefault(require("@/store/useAuth"));
const Protected = ({ children }) => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const { login } = (0, useAuth_1.default)();
    const [loading, setLoading] = (0, react_1.useState)(true);
    (0, react_1.useEffect)(() => {
        axios_1.default
            .get(`${request_1.baseUrl}/api/v1/dashboard/me`, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        })
            .then((response) => {
            login(response.data.email, response.data.type);
            setLoading(false);
        })
            .catch(() => {
            navigate("/login");
        });
    }, []);
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: loading ? (0, jsx_runtime_1.jsx)(Loading_1.default, {}) : children });
};
exports.default = Protected;
