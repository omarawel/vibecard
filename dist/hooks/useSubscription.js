"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const axios_1 = __importDefault(require("axios"));
const request_1 = require("@/services/request");
const useSubscription = () => {
    const [quota, setQuota] = (0, react_1.useState)(true);
    (0, react_1.useEffect)(() => {
        axios_1.default
            .get(`${request_1.baseUrl}/api/v1/auth/can-create-card`, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        })
            .then(() => {
            setQuota(true);
        })
            .catch(() => {
            setQuota(false);
        });
    }, []);
    return { quota };
};
exports.default = useSubscription;
