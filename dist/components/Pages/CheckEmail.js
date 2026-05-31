"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const axios_1 = __importDefault(require("axios"));
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const request_1 = require("../../services/request");
const zod_1 = require("zod");
const react_hook_form_1 = require("react-hook-form");
const zod_2 = require("@hookform/resolvers/zod");
const Button_1 = __importDefault(require("../Button/Button"));
const useDocumentTitle_1 = __importDefault(require("../../hooks/useDocumentTitle"));
const react_i18next_1 = require("react-i18next");
const schema = zod_1.z.object({
    password: zod_1.z.string().min(8, {
        message: "Password must be greater than 8 characters.",
    }),
});
const CheckEmail = () => {
    const [title] = (0, react_1.useState)("Verify you Email");
    (0, useDocumentTitle_1.default)(title);
    const { t } = (0, react_i18next_1.useTranslation)();
    const location = (0, react_router_dom_1.useLocation)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    const [confirmPassword, setConfirmPassword] = (0, react_1.useState)("");
    const [confirmPasswordError, setConfirmPasswordError] = (0, react_1.useState)(false);
    const [showPassword, setShowPassword] = (0, react_1.useState)(false);
    const { register, handleSubmit, formState: { errors }, } = (0, react_hook_form_1.useForm)({ resolver: (0, zod_2.zodResolver)(schema) });
    const searchParams = new URLSearchParams(location.search);
    const emailAddress = searchParams.get("email");
    const token = searchParams.get("token");
    // New Password
    const onSubmit = (data) => {
        if (data.password !== confirmPassword) {
            return setConfirmPasswordError(true);
        }
        else {
            setConfirmPasswordError(false);
            const reset = {
                token: token,
                new_password: data.password,
            };
            console.log(reset);
            axios_1.default
                .put(`${request_1.baseUrl}/api/v1/auth/reset`, reset, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then(() => {
                navigate("/login");
            })
                .catch((error) => {
                console.log(error);
            });
        }
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "h-[100vh] bg", children: [(0, jsx_runtime_1.jsx)("div", { className: "lg:px-40 md:px-36 px-2", children: (0, jsx_runtime_1.jsx)("div", { className: "lg:pt-10 md:pt-10 py-5 lg:ps-24", children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/", className: "text-2xl text-white logo-font", children: "vibecard" }) }) }), (0, jsx_runtime_1.jsx)("div", { className: "flex justify-center lg:px-40 md:px-36 px-2 lg:mt-28 md:mt-28", children: (0, jsx_runtime_1.jsx)("div", { className: "content-center lg:w-3/6 md:w-5/6 w-full h-96", children: (0, jsx_runtime_1.jsxs)("div", { className: "lg:p-10 md:p-9 p-8 shadow-lg secondary-bg rounded-lg", children: [emailAddress && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-4xl", children: t("resetTitle") }), (0, jsx_runtime_1.jsxs)("p", { className: "text-gray-400 text-sm mt-6", children: [t("resetTitle2"), " ", (0, jsx_runtime_1.jsx)("span", { className: "text-blue-600", children: emailAddress }), " ", t("resetTitle3")] }), (0, jsx_runtime_1.jsxs)("p", { className: "text-gray-400 text-sm mt-2", children: [t("resetTitle4"), "link", " ", (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/request", className: "text-xl text-blue-600", children: t("here") }), "."] })] })), token && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-2xl text-white", children: t("enterPassword") }), (0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit(onSubmit), className: "my-8 px-5", children: [(0, jsx_runtime_1.jsxs)("div", { className: "mb-5 relative", children: [(0, jsx_runtime_1.jsx)("label", { className: "text-sm text-gray-500 block", htmlFor: "password", children: t("password") }), (0, jsx_runtime_1.jsx)("input", Object.assign({}, register("password"), { type: showPassword ? "text" : "password", name: "password", className: `bg-gray-100 py-3 rounded w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm ${errors.password && "border-red-600 border-1 border"}` })), (0, jsx_runtime_1.jsx)("span", { onClick: () => setShowPassword(!showPassword), className: `absolute ${showPassword ? "bi-eye" : "bi-eye-slash"} right-2 top-8 cursor-pointer` }), errors.password && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-600 text-xs pt-1", children: errors.password.message }))] }), (0, jsx_runtime_1.jsx)("label", { className: "text-sm text-gray-500 block mt-5", htmlFor: "password", children: t("conPass") }), (0, jsx_runtime_1.jsx)("input", { type: "password", name: "confirm-password", className: `bg-gray-100 py-3 rounded w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm ${confirmPasswordError && "border-red-600 border-1 border"}`, onChange: (event) => setConfirmPassword(event.currentTarget.value) }), confirmPasswordError && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-600 text-xs pt-1", children: "Password does not match!" })), (0, jsx_runtime_1.jsx)(Button_1.default, { label: t("resetPass") })] })] }))] }) }) })] }));
};
exports.default = CheckEmail;
