"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const zod_1 = require("zod");
const react_hook_form_1 = require("react-hook-form");
const zod_2 = require("@hookform/resolvers/zod");
const react_1 = require("react");
const Button_1 = __importDefault(require("../Button/Button"));
const axios_1 = __importDefault(require("axios"));
const request_1 = require("../../services/request");
const react_router_dom_1 = require("react-router-dom");
const react_i18next_1 = require("react-i18next");
const schema = zod_1.z.object({
    username: zod_1.z
        .string()
        .min(3, { message: "Username must be greater than 3 characters." }),
    email: zod_1.z.string().email({ message: "Email address required." }),
    password: zod_1.z.string().min(8, {
        message: "Password must be greater than 8 characters.",
    }),
});
const Form = ({ buttonClicked, username }) => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const { t } = (0, react_i18next_1.useTranslation)();
    const [registerError, setRegisterError] = (0, react_1.useState)("");
    const [confirmPassword, setConfirmPassword] = (0, react_1.useState)("");
    const [confirmPasswordError, setConfirmPasswordError] = (0, react_1.useState)(false);
    const [loader, setLoader] = (0, react_1.useState)(false);
    const { register, handleSubmit, formState: { errors }, } = (0, react_hook_form_1.useForm)({ resolver: (0, zod_2.zodResolver)(schema) });
    const [showPassword, setShowPassword] = (0, react_1.useState)(false);
    const onSubmit = (data) => {
        if (data.password !== confirmPassword) {
            return setConfirmPasswordError(true);
        }
        else {
            setConfirmPasswordError(false);
            buttonClicked(true);
            setLoader(true);
            axios_1.default
                .get(`${request_1.baseUrl}/api/v1/auth/check-email/${data.email}`, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then(() => {
                axios_1.default
                    .post(`${request_1.baseUrl}/api/v1/auth/register`, data, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                    .then(() => {
                    navigate(`/verify?email=${data.email}`);
                })
                    .catch((error) => {
                    console.log(error);
                });
            })
                .catch(() => {
                setLoader(false);
                setRegisterError("Email already exist.");
            });
        }
    };
    return ((0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit(onSubmit), children: [registerError !== "" && ((0, jsx_runtime_1.jsx)("div", { className: "relative", children: (0, jsx_runtime_1.jsxs)("p", { className: "absolute -top-7 text-red-600 text-sm", children: [(0, jsx_runtime_1.jsx)("span", { className: "bi-exclamation-triangle-fill me-4" }), registerError] }) })), (0, jsx_runtime_1.jsxs)("div", { className: "mb-5", children: [(0, jsx_runtime_1.jsx)("label", { className: "text-sm text-gray-500 block", htmlFor: "username", children: t("username") }), (0, jsx_runtime_1.jsx)("input", Object.assign({}, register("username"), { type: "text", name: "username", className: `text-black bg-gray-100 py-3 rounded-lg w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm ${errors.email && "border-red-600 border-1 border"}`, onChange: (e) => username(e.currentTarget.value) })), errors.username && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-600 text-xs pt-1", children: errors.username.message }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-5", children: [(0, jsx_runtime_1.jsx)("label", { className: "text-sm text-gray-500 block", htmlFor: "email", children: t("email") }), (0, jsx_runtime_1.jsx)("input", Object.assign({}, register("email"), { type: "email", name: "email", className: `text-black bg-gray-100 py-3 rounded-lg w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm ${errors.email && "border-red-600 border-1 border"}` })), errors.email && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-600 text-xs pt-1", children: errors.email.message }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-5 relative", children: [(0, jsx_runtime_1.jsx)("label", { className: "text-sm text-gray-500 block", htmlFor: "password", children: t("password") }), (0, jsx_runtime_1.jsx)("input", Object.assign({}, register("password"), { type: showPassword ? "text" : "password", name: "password", className: `text-black bg-gray-100 py-3 rounded-lg w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm ${errors.password && "border-red-600 border-1 border"}` })), (0, jsx_runtime_1.jsx)("span", { onClick: () => setShowPassword(!showPassword), className: `absolute ${showPassword ? "bi-eye" : "bi-eye-slash"} right-2 top-8 cursor-pointer text-black px-2 text-lg border-l border-gray-500` }), errors.password && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-600 text-xs pt-1", children: errors.password.message }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-5", children: [(0, jsx_runtime_1.jsx)("label", { className: "text-sm text-gray-500 block", htmlFor: "password", children: t("conPass") }), (0, jsx_runtime_1.jsx)("input", { type: "password", name: "confirm-password", className: `text-black bg-gray-100 py-3 rounded-lg w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm ${confirmPasswordError && "border-red-600 border-1 border"}`, onChange: (event) => setConfirmPassword(event.currentTarget.value) }), confirmPasswordError && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-600 text-xs pt-1", children: "Password does not match!" }))] }), (0, jsx_runtime_1.jsx)(Button_1.default, { loader: loader, label: "Register" })] }));
};
exports.default = Form;
