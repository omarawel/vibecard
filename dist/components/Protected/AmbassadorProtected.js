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
const useAmbassador_1 = __importDefault(require("@/store/useAmbassador"));
const AmbassadorProtected = ({ children }) => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const [loading, setLoading] = (0, react_1.useState)(true);
    const { login } = (0, useAmbassador_1.default)();
    (0, react_1.useEffect)(() => {
        axios_1.default
            .get(`${request_1.baseUrl}/api/v1/ambassador/me`, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        })
            .then((response) => {
            if (response.data.verified !== false) {
                login(response.data.uid, response.data.first_name, response.data.last_name, response.data.email, response.data.facebook, response.data.verified, response.data.twich, response.data.instagram, response.data.referral_code, response.data.youtube, response.data.earnings, response.data.linkedin, response.data.tiktoc, response.data.twitter, response.data.website, response.data.conversions, response.data.orders, response.data.sales, response.data.referrals);
                setLoading(false);
            }
            else {
                navigate("/ambassador");
            }
        })
            .catch(() => {
            navigate("/ambassador");
        });
    }, []);
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: loading ? (0, jsx_runtime_1.jsx)(Loading_1.default, {}) : children });
};
exports.default = AmbassadorProtected;
