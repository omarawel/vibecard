"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const axios_1 = __importDefault(require("axios"));
const react_1 = require("react");
const request_1 = require("../../services/request");
const Approve = ({ onApprove, url, name }) => {
    const [approved, setApproved] = (0, react_1.useState)(false);
    //   Approve
    const handleApprove = () => {
        axios_1.default
            .post(`${request_1.baseUrl}${url}`, {
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(() => {
            setApproved(true);
            setTimeout(() => {
                window.location.reload();
            }, 3000);
        })
            .catch((error) => {
            console.log(error);
        });
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { className: "overlay w-full z-50" }), (0, jsx_runtime_1.jsx)("div", { className: "fixed w-full z-50 top-0 left-0", children: (0, jsx_runtime_1.jsx)("div", { className: "flex justify-center items-center h-[100vh]", children: (0, jsx_runtime_1.jsx)("div", { className: "p-8 secondary-bg rounded lg:w-[30%] lg:mx-0 mx-3", children: !approved ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("h1", { className: "text-white text-xl ", children: ["Approve ", name] }), (0, jsx_runtime_1.jsxs)("p", { className: "text-sm  text-gray-400 my-5", children: ["Are you sure you want to approve ", name] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between gap-x-10", children: [(0, jsx_runtime_1.jsx)("button", { onClick: () => onApprove(false), className: "w-full bg-sky-600 rounded text-white shadow-none h-12", children: "Cancel" }), (0, jsx_runtime_1.jsx)("button", { onClick: () => handleApprove(), className: "w-full bg-green-600 rounded text-white shadow-none h-12", children: (0, jsx_runtime_1.jsxs)("p", { children: ["Approve", (0, jsx_runtime_1.jsx)("span", { className: "bi-check-circle-fill ms-3" })] }) })] })] })) : ((0, jsx_runtime_1.jsxs)("div", { className: "text-center mt-4", children: [(0, jsx_runtime_1.jsx)("p", { className: "bi-check-circle-fill text-green-500 text-4xl" }), (0, jsx_runtime_1.jsxs)("p", { className: "text-white mt-5 text-xl chakra first-letter:uppercase", children: [name, " Approved Successfully!"] })] })) }) }) })] }));
};
exports.default = Approve;
