"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = require("@/services/request");
const axios_1 = __importDefault(require("axios"));
const react_1 = require("react");
const useMessage = () => {
    const [messages, setMessages] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        axios_1.default
            .get(`${request_1.baseUrl}/api/v1/dashboard/users-messages`, {
            headers: {
                "Content-Type": "application/json",
                "ngrok-skip-browser-warning": "69420",
            },
        })
            .then((response) => {
            setMessages(response.data);
        })
            .catch((error) => {
            console.log(error);
        });
    }, []);
    return {
        messages,
    };
};
exports.default = useMessage;
