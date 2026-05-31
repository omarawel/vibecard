"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const zod_1 = require("zod");
const react_hook_form_1 = require("react-hook-form");
const zod_2 = require("@hookform/resolvers/zod");
const axios_1 = __importDefault(require("axios"));
const request_1 = require("../../services/request");
const Button_1 = __importDefault(require("../Button/Button"));
const useAuth_1 = __importDefault(require("@/store/useAuth"));
const schema = zod_1.z.object({
    password: zod_1.z.string().min(4, {
        message: "Password required.",
    }),
    email: zod_1.z.string().email({ message: "Email is required." }),
});
const Setting = ({ onClose }) => {
    const { type } = (0, useAuth_1.default)();
    const [approved, setApproved] = (0, react_1.useState)(false);
    const [updateError, setUpdateError] = (0, react_1.useState)(false);
    const [showPassword, setShowPassword] = (0, react_1.useState)(false);
    const [loader, setLoader] = (0, react_1.useState)(false);
    const [passwordType, setPasswordType] = (0, react_1.useState)(true);
    // Form Data and Validation
    const { register, handleSubmit, formState: { errors }, } = (0, react_hook_form_1.useForm)({ resolver: (0, zod_2.zodResolver)(schema) });
    // On Form Submit
    const onSubmit = (data) => {
        setLoader(true);
        const updateData = {
            email: data.email,
            password: data.password,
        };
        if (type === "super_admin") {
            axios_1.default
                .put(`${request_1.baseUrl}/api/v1/dashboard/update-super-admin-password`, updateData, {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            })
                .then(() => {
                setApproved(true);
            })
                .catch((error) => {
                setLoader(false);
                setUpdateError(true);
                console.log(error);
            });
        }
        else {
            axios_1.default
                .put(`${request_1.baseUrl}/api/v1/dashboard/update-admin-password`, updateData, {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            })
                .then(() => {
                setApproved(true);
            })
                .catch((error) => {
                setLoader(false);
                setUpdateError(true);
                console.log(error);
            });
        }
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { className: "overlay w-full z-50" }), (0, jsx_runtime_1.jsx)("div", { className: "fixed w-full z-50 top-0 left-0", children: (0, jsx_runtime_1.jsx)("div", { className: "flex justify-center items-center h-[100vh]", children: (0, jsx_runtime_1.jsx)("div", { className: "p-8 secondary-bg rounded lg:w-[33%] w-full lg:mx-0 mx-3 lg:px-20", children: !approved ? ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit(onSubmit), className: "relative", children: [(0, jsx_runtime_1.jsx)("p", { onClick: () => onClose(), className: "bi-x absolute -top-6 text-xl lg:-right-16 right-0 text-white cursor-pointer" }), (0, jsx_runtime_1.jsx)("p", { className: "text-white block font-poppins text-lg", children: "Update your Credentials" }), updateError && ((0, jsx_runtime_1.jsxs)("p", { className: "text-white bg-red-500 w-full rounded p-1 text-sm mt-4", children: [(0, jsx_runtime_1.jsx)("span", { className: "bi-exclamation-triangle-fill me-4" }), "Something went wrong try again"] })), (0, jsx_runtime_1.jsxs)("div", { className: "my-5", children: [(0, jsx_runtime_1.jsx)("label", { className: "text-sm text-gray-400 block font-poppins", htmlFor: "email", children: "Email" }), (0, jsx_runtime_1.jsx)("input", Object.assign({}, register("email"), { type: "email", name: "email", className: "text-black font-poppins text-sm w-full py-3 mt-2 bg-gray-100 rounded focus:outline-none px-5 shadow shadow-gray-300" })), errors.email && ((0, jsx_runtime_1.jsx)("p", { className: "bg-red-600 font-poppins text-xs mt-2 text-white p-1 rounded", children: errors.email.message }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-10 relative", children: [(0, jsx_runtime_1.jsx)("label", { className: "text-sm text-gray-400 block font-poppins", htmlFor: "password", children: "Password" }), (0, jsx_runtime_1.jsx)("input", Object.assign({}, register("password"), { type: passwordType ? "password" : "text", name: "password", className: "text-black font-poppins text-sm w-full py-3 mt-2 bg-gray-100 rounded focus:outline-none px-5 shadow shadow-gray-300" })), (0, jsx_runtime_1.jsx)("span", { onClick: () => {
                                                    setShowPassword(!showPassword);
                                                    setPasswordType(!passwordType);
                                                }, className: `absolute ${showPassword ? "bi-eye" : "bi-eye-slash"} right-2 top-9 cursor-pointer text-black px-2 text-lg border-l border-gray-500` }), errors.password && ((0, jsx_runtime_1.jsx)("p", { className: "bg-red-600 font-poppins text-xs mt-2 text-white p-1 rounded", children: errors.password.message }))] }), (0, jsx_runtime_1.jsx)(Button_1.default, { loader: loader, label: "Update" })] }) })) : ((0, jsx_runtime_1.jsxs)("div", { className: "text-center mt-4", children: [(0, jsx_runtime_1.jsx)("p", { className: "bi-check-circle-fill text-green-500 text-4xl" }), (0, jsx_runtime_1.jsx)("p", { className: "text-white mt-5 text-xl chakra first-letter:uppercase", children: "Account Changed Successfully!" })] })) }) }) })] }));
};
exports.default = Setting;
