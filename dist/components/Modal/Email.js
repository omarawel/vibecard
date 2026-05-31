"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const request_1 = require("@/services/request");
const axios_1 = __importDefault(require("axios"));
const react_1 = require("react");
const Email = ({ id, onApprove, type }) => {
    const [approved, setApproved] = (0, react_1.useState)(false);
    const [message, setMessage] = (0, react_1.useState)("");
    const [error, setError] = (0, react_1.useState)(false);
    const handleSendEmail = () => {
        if (message.length < 10) {
            setError(true);
            return;
        }
        setError(false);
        const data = {
            message: message,
            order_id: id,
            order_type: type,
        };
        axios_1.default
            .post(`${request_1.baseUrl}/api/v1/products/send-order-update`, data, {
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(() => {
            setApproved(true);
        })
            .catch((error) => {
            console.log(error);
        });
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { className: "overlay w-full z-50" }), (0, jsx_runtime_1.jsx)("div", { className: "fixed w-full z-50 top-0 left-0", children: (0, jsx_runtime_1.jsx)("div", { className: "flex justify-center items-center h-[100vh]", children: (0, jsx_runtime_1.jsx)("div", { className: "relative p-8 secondary-bg rounded lg:w-[35%] w-full lg:mx-0 mx-3", children: !approved ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("button", { onClick: () => onApprove(false), className: "bi-x-lg text-white shadow-none absolute top-2 right-3" }), (0, jsx_runtime_1.jsx)("p", { className: "text-sm text-gray-400 my-2 font-poppins", children: "Write an email for the client" }), (0, jsx_runtime_1.jsxs)("div", { className: "mt-2", children: [(0, jsx_runtime_1.jsx)("textarea", { name: "message", className: "w-full rounded resize-none h-40 p-2 font-poppins focus:outline-none", placeholder: "Write message", onChange: (e) => setMessage(e.currentTarget.value) }), error && ((0, jsx_runtime_1.jsx)("p", { className: "text-sm font-poppins bg-red-500 rounded text-white p-1 mt-2", children: "Message mut be 10 chars long." })), (0, jsx_runtime_1.jsx)("button", { onClick: () => handleSendEmail(), className: "w-full mt-4 bg-green-600 rounded text-white shadow-none h-12 font-poppins", children: "Send Email" })] })] })) : ((0, jsx_runtime_1.jsxs)("div", { className: "text-center mt-4", children: [(0, jsx_runtime_1.jsx)("p", { className: "bi-check-circle-fill text-green-500 text-4xl" }), (0, jsx_runtime_1.jsx)("p", { className: "text-white mt-5 text-xl font-poppins first-letter:uppercase", children: "Email sended successfully!" })] })) }) }) })] }));
};
exports.default = Email;
