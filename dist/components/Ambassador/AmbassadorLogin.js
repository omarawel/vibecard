"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const zod_1 = require("zod");
const react_hook_form_1 = require("react-hook-form");
const zod_2 = require("@hookform/resolvers/zod");
const react_1 = require("react");
const Button_1 = __importDefault(require("../Button/Button"));
const axios_1 = __importDefault(require("axios"));
const request_1 = require("../../services/request");
const react_i18next_1 = require("react-i18next");
const schema = zod_1.z.object({
    password: zod_1.z.string().min(4, {
        message: "Password required.",
    }),
    email: zod_1.z.string().email({ message: "Email is required." }),
});
const AmbassadorLogin = () => {
    const { t } = (0, react_i18next_1.useTranslation)();
    // Zustand
    // RRD
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
            .post(`${request_1.baseUrl}/api/v1/ambassador/login`, logData, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        })
            .then(() => {
            navigate("/affiliate");
        })
            .catch((error) => {
            setLoader(false);
            console.log(error);
            if (error.response.status === 401) {
                setLoginError("Invalid Email and Password");
            }
        });
    };
    return ((0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit(onSubmit), children: [loginError !== "" && ((0, jsx_runtime_1.jsx)("div", { className: "relative", children: (0, jsx_runtime_1.jsxs)("p", { className: "absolute -top-16 text-white text-sm bg-red-500 w-full rounded p-2", children: [(0, jsx_runtime_1.jsx)("span", { className: "bi-exclamation-triangle-fill me-4" }), loginError] }) })), (0, jsx_runtime_1.jsx)("p", { className: "col-span-2 text-white text-xl lg:mt-0 mt-10", children: t("trackAmbassador") }), (0, jsx_runtime_1.jsxs)("div", { className: "bg-white rounded lg:p-8 p-4 mt-5", children: [(0, jsx_runtime_1.jsxs)("div", { className: "mb-5", children: [(0, jsx_runtime_1.jsx)("label", { className: "text-sm text-gray-700 block", htmlFor: "email", children: t("email") }), (0, jsx_runtime_1.jsx)("input", Object.assign({}, register("email"), { type: "email", name: "email", className: "text-white font-poppins text-sm w-full py-3 mt-2 secondary-bg rounded focus:outline-none px-5 shadow shadow-gray-300 h-12" })), errors.email && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-600 text-xs pt-1", children: errors.email.message }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-5 relative", children: [(0, jsx_runtime_1.jsx)("label", { className: "text-sm text-gray-700 block", htmlFor: "password", children: t("password") }), (0, jsx_runtime_1.jsx)("input", Object.assign({}, register("password"), { type: passwordType ? "password" : "text", name: "password", className: "text-white font-poppins text-sm w-full py-3 mt-2 secondary-bg rounded focus:outline-none px-5 shadow shadow-gray-300 h-12" })), (0, jsx_runtime_1.jsx)("span", { onClick: () => {
                                    setShowPassword(!showPassword);
                                    setPasswordType(!passwordType);
                                }, className: `absolute ${showPassword ? "bi-eye" : "bi-eye-slash"} right-2 top-9 cursor-pointer text-white px-2 text-lg border-l border-gray-500` }), errors.password && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-600 text-xs pt-1", children: errors.password.message }))] }), (0, jsx_runtime_1.jsx)(Button_1.default, { loader: loader, label: "Login" })] })] }));
};
exports.default = AmbassadorLogin;
