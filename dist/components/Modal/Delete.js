"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const axios_1 = __importDefault(require("axios"));
const react_1 = require("react");
const request_1 = require("../../services/request");
const Delete = ({ onDelete, name, url }) => {
    const [deleteConfirmed, setDeleteConfirmed] = (0, react_1.useState)(false);
    //   Deleting
    const handleDelete = () => {
        if ((name = "Admin")) {
            axios_1.default
                .delete(`${request_1.baseUrl}${url}`, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then(() => {
                setDeleteConfirmed(true);
                setTimeout(() => {
                    window.location.reload();
                }, 3000);
            })
                .catch((error) => {
                console.log(error);
            });
        }
        else {
            axios_1.default
                .post(`${request_1.baseUrl}${url}`, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then(() => {
                setDeleteConfirmed(true);
                setTimeout(() => {
                    window.location.reload();
                }, 3000);
            })
                .catch((error) => {
                console.log(error);
            });
        }
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { className: "overlay w-full z-50" }), (0, jsx_runtime_1.jsx)("div", { className: "fixed top-0 left-0 w-full z-50", children: (0, jsx_runtime_1.jsx)("div", { className: "flex justify-center items-center h-[100vh]", children: (0, jsx_runtime_1.jsx)("div", { className: "py-6 px-8 secondary-bg rounded lg:w-[30%] lg:mx-0 mx-3", children: !deleteConfirmed ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("h1", { className: "text-white text-xl ", children: ["Delete ", name] }), (0, jsx_runtime_1.jsx)("p", { className: "text-sm  text-gray-400 my-5", children: "Are you sure you want to decline the request of the ambassador? This action cannot be undone. Do you want to proceed?" }), (0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between gap-x-10", children: [(0, jsx_runtime_1.jsx)("button", { onClick: () => onDelete(false), className: "w-full bg-sky-600 rounded text-white shadow-none h-12", children: "Cancel" }), (0, jsx_runtime_1.jsx)("button", { onClick: () => handleDelete(), className: "w-full bg-red-500 rounded text-white shadow-none h-12", children: (0, jsx_runtime_1.jsxs)("p", { children: ["Delete", (0, jsx_runtime_1.jsx)("span", { className: "bi-trash-fill ms-3" })] }) })] })] })) : ((0, jsx_runtime_1.jsxs)("div", { className: "text-center mt-4", children: [(0, jsx_runtime_1.jsx)("p", { className: "bi-check-circle-fill text-green-500 text-4xl" }), (0, jsx_runtime_1.jsxs)("p", { className: "text-white mt-5 text-xl chakra first-letter:uppercase", children: [name, " Delete Successfully!"] })] })) }) }) })] }));
};
exports.default = Delete;
