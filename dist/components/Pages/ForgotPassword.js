"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const Button_1 = __importDefault(require("../Button/Button"));
const zod_1 = require("zod");
const react_hook_form_1 = require("react-hook-form");
const zod_2 = require("@hookform/resolvers/zod");
const axios_1 = __importDefault(require("axios"));
const request_1 = require("../../services/request");
const react_1 = require("react");
const useDocumentTitle_1 = __importDefault(require("../../hooks/useDocumentTitle"));
const react_i18next_1 = require("react-i18next");
const schema = zod_1.z.object({
    email: zod_1.z.string().email({ message: "Email address required." }),
});
const ForgotPassword = () => {
    const [title] = (0, react_1.useState)("Forgot Password?");
    (0, useDocumentTitle_1.default)(title);
    const { t } = (0, react_i18next_1.useTranslation)();
    const [forgotPasswordError, setForgotPasswordError] = (0, react_1.useState)("");
    const [loader, setLoader] = (0, react_1.useState)(false);
    const navigate = (0, react_router_dom_1.useNavigate)();
    const { register, handleSubmit, formState: { errors }, } = (0, react_hook_form_1.useForm)({ resolver: (0, zod_2.zodResolver)(schema) });
    const onSubmit = (data) => {
        setLoader(true);
        axios_1.default
            .put(`${request_1.baseUrl}/api/v1/auth/password-reset-request?email=${data.email}`, {
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
            console.log(response);
            navigate(`/check-email?email=${data.email}`);
        })
            .catch(() => {
            setLoader(false);
            setForgotPasswordError("Email address not found");
        });
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "h-[100vh]", children: [(0, jsx_runtime_1.jsx)("div", { className: "lg:px-40 md:px-36 px-2", children: (0, jsx_runtime_1.jsx)("div", { className: "lg:pt-10 md:pt-10 py-5 lg:ps-24", children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/", className: "text-2xl text-white logo-font", children: "vibecard" }) }) }), (0, jsx_runtime_1.jsx)("div", { className: "flex justify-center lg:px-40 md:px-36 px-2 lg:mt-28 md:mt-24 mt-20", children: (0, jsx_runtime_1.jsx)("div", { className: "content-center lg:w-3/6 md:w-5/6 w-full h-96", children: (0, jsx_runtime_1.jsxs)("div", { className: "lg:p-10 md:p-9 p-8 shadow-lg secondary-bg rounded-lg text-white border border-violet-800", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-2xl", children: t("resetPass") }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-400 text-sm mt-6", children: t("forgotPasswordNote1") }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-400 text-sm mt-2", children: t("forgotPasswordNote2") }), forgotPasswordError !== "" && ((0, jsx_runtime_1.jsxs)("p", { className: "text-red-600 text-sm mt-5", children: [(0, jsx_runtime_1.jsx)("span", { className: "bi-exclamation-triangle-fill me-4" }), forgotPasswordError] })), (0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit(onSubmit), className: "my-5", children: [(0, jsx_runtime_1.jsx)("label", { className: "text-sm text-gray-500 block", htmlFor: "email", children: t("email") }), (0, jsx_runtime_1.jsx)("input", Object.assign({}, register("email"), { type: "email", name: "email", className: `bg-gray-100 py-3 rounded-lg w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm ${errors.email && "border-red-600 border-1 border"}` })), errors.email && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-600 text-xs pt-1", children: errors.email.message })), (0, jsx_runtime_1.jsx)(Button_1.default, { loader: loader, label: t("resetPass") })] })] }) }) })] }));
};
exports.default = ForgotPassword;
