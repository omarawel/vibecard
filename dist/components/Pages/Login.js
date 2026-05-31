"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const zod_1 = require("zod");
const react_hook_form_1 = require("react-hook-form");
const zod_2 = require("@hookform/resolvers/zod");
const axios_1 = __importDefault(require("axios"));
const request_1 = require("../../services/request");
const useDocumentTitle_1 = __importDefault(require("@/hooks/useDocumentTitle"));
const Button_1 = __importDefault(require("../Button/Button"));
const schema = zod_1.z.object({
    password: zod_1.z.string().min(4, {
        message: "Password required.",
    }),
    email: zod_1.z.string().email({ message: "Email is required." }),
});
const Login = () => {
    const [title] = (0, react_1.useState)("Login");
    (0, useDocumentTitle_1.default)(title);
    const navigate = (0, react_router_dom_1.useNavigate)();
    // States
    const [loginError, setLoginError] = (0, react_1.useState)("");
    const [showPassword, setShowPassword] = (0, react_1.useState)(false);
    const [loader, setLoader] = (0, react_1.useState)(false);
    const [passwordType, setPasswordType] = (0, react_1.useState)(true);
    // Form Data and Validation
    const { register, handleSubmit, formState: { errors }, } = (0, react_hook_form_1.useForm)({ resolver: (0, zod_2.zodResolver)(schema) });
    // On Form Submit
    const onSubmit = (data) => {
        setLoader(true);
        const logData = {
            email: data.email,
            password: data.password,
        };
        axios_1.default
            .post(`${request_1.baseUrl}/api/v1/dashboard/login`, logData, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        })
            .then(() => {
            navigate("/");
        })
            .catch((error) => {
            setLoader(false);
            console.log(error);
            setLoginError("Invalid Email and Password");
        });
    };
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)("div", { className: "lg:px-40 md:px-36 px-2 h-[100vh]", children: (0, jsx_runtime_1.jsx)("div", { className: "flex justify-center w-full h-full items-center", children: (0, jsx_runtime_1.jsx)("div", { className: "lg:w-[40%] w-full", children: (0, jsx_runtime_1.jsxs)("div", { className: "lg:p-10 md:p-9 p-8 secondary-bg rounded-lg text-white mb-3 shadow shadow-zinc-800", children: [(0, jsx_runtime_1.jsxs)("p", { className: "text-2xl font-poppins mb-4", children: [(0, jsx_runtime_1.jsx)("span", { className: "logo-font", children: "vibecard" }), " admin"] }), (0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit(onSubmit), children: [loginError !== "" && ((0, jsx_runtime_1.jsxs)("p", { className: "bg-red-600 rounded text-sm w-full p-1 font-poppins my-4", children: [(0, jsx_runtime_1.jsx)("span", { className: "bi-exclamation-triangle-fill me-4" }), loginError] })), (0, jsx_runtime_1.jsxs)("div", { className: "mb-5", children: [(0, jsx_runtime_1.jsx)("label", { className: "text-sm text-gray-500 block font-poppins", htmlFor: "email", children: "Email" }), (0, jsx_runtime_1.jsx)("input", Object.assign({}, register("email"), { type: "email", name: "email", className: "text-black font-poppins text-sm w-full py-3 mt-2 bg-gray-100 rounded focus:outline-none px-5 shadow shadow-gray-300 font-poppins" })), errors.email && ((0, jsx_runtime_1.jsx)("p", { className: "bg-red-600 text-xs mt-1 ps-3 rounded py-1 font-poppins", children: errors.email.message }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-10 relative", children: [(0, jsx_runtime_1.jsx)("label", { className: "text-sm text-gray-500 block font-poppins", htmlFor: "password", children: "Password" }), (0, jsx_runtime_1.jsx)("input", Object.assign({}, register("password"), { type: passwordType ? "password" : "text", name: "password", className: "text-black font-poppins text-sm w-full py-3 mt-2 bg-gray-100 rounded focus:outline-none px-5 shadow shadow-gray-300" })), (0, jsx_runtime_1.jsx)("span", { onClick: () => {
                                                    setShowPassword(!showPassword);
                                                    setPasswordType(!passwordType);
                                                }, className: `absolute ${showPassword ? "bi-eye" : "bi-eye-slash"} right-2 top-9 cursor-pointer text-black px-2 text-lg border-l border-gray-500` }), errors.password && ((0, jsx_runtime_1.jsx)("p", { className: "bg-red-600 text-xs mt-1 ps-3 rounded py-1 font-poppins", children: errors.password.message }))] }), (0, jsx_runtime_1.jsx)(Button_1.default, { loader: loader, label: "Login" })] }), (0, jsx_runtime_1.jsx)("div", { className: "relative lg:block hidden lg:-top-64 left-[30em] -top-40", children: (0, jsx_runtime_1.jsx)("div", { className: "absolute lg:right-[15em] w-full right-36 top-40 bulb" }) })] }) }) }) }) }));
};
exports.default = Login;
