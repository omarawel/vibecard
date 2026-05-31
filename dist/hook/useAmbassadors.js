"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const axios_1 = __importDefault(require("axios"));
const request_1 = require("@/services/request");
const useAmbassadors = () => {
    const [activeAmbassadors, setActiveAmbassadors] = (0, react_1.useState)([]);
    const [pendingAmbassadors, setPendingAmbassadors] = (0, react_1.useState)([]);
    const [loading, setLoading] = (0, react_1.useState)(true);
    (0, react_1.useEffect)(() => {
        // Fetch Active Ambassadors
        const fetchActiveAmbassadors = () => __awaiter(void 0, void 0, void 0, function* () {
            setLoading(true);
            try {
                const response = yield axios_1.default.get(`${request_1.baseUrl}/api/v1/ambassador/get-active`, {
                    headers: {
                        "Content-Type": "application/json",
                        "ngrok-skip-browser-warning": "69420",
                    },
                });
                setActiveAmbassadors(response.data);
                setLoading(false);
            }
            catch (error) {
                console.error(error);
            }
        });
        // Fetch Pending Ambassadors
        const fetchPendingAmbassadors = () => __awaiter(void 0, void 0, void 0, function* () {
            setLoading(true);
            try {
                const response = yield axios_1.default.get(`${request_1.baseUrl}/api/v1/ambassador/get-pendings`, {
                    headers: {
                        "Content-Type": "application/json",
                        "ngrok-skip-browser-warning": "69420",
                    },
                });
                setPendingAmbassadors(response.data);
                setLoading(false);
            }
            catch (error) {
                console.error(error);
            }
        });
        fetchPendingAmbassadors();
        fetchActiveAmbassadors();
    }, []);
    return {
        activeAmbassadors,
        pendingAmbassadors,
        loading,
    };
};
exports.default = useAmbassadors;
