"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = require("@/services/request");
const axios_1 = __importDefault(require("axios"));
const react_1 = require("react");
const useWallets = () => {
    const [allWallets, setAllWallets] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        axios_1.default
            .get(`${request_1.baseUrl}/api/v1/products/get-wallets`, {
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
            setAllWallets(response.data.wallets);
        })
            .catch((error) => {
            console.log(error);
        });
    }, []);
    return {
        allWallets,
    };
};
exports.default = useWallets;
