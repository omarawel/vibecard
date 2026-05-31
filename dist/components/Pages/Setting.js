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
const useUserData_1 = __importDefault(require("@/store/useUserData"));
const Button_1 = __importDefault(require("../Button/Button"));
const Navbar_1 = __importDefault(require("../Navbar/Navbar"));
const useDocumentTitle_1 = __importDefault(require("../../hooks/useDocumentTitle"));
const request_1 = require("@/services/request");
const axios_1 = __importDefault(require("axios"));
const react_router_dom_1 = require("react-router-dom");
const Footer_1 = __importDefault(require("../Footer/Footer"));
const react_i18next_1 = require("react-i18next");
const schema = zod_1.z.object({
    username: zod_1.z
        .string()
        .min(3, { message: "Username must be greater than 3 characters." }),
    password: zod_1.z.string().min(8, {
        message: "Password must be greater than 8 characters.",
    }),
});
const Setting = () => {
    const [title] = (0, react_1.useState)("Setting");
    (0, useDocumentTitle_1.default)(title);
    const { t } = (0, react_i18next_1.useTranslation)();
    // Scroll to top
    (0, react_1.useEffect)(() => {
        window.scrollTo(0, 0);
    }, []);
    const [username, setUsername] = (0, react_1.useState)("");
    const [usernameError, setUsernameError] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        axios_1.default
            .get(`${request_1.baseUrl}/api/v1/auth/check-username/${username}`, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        })
            .then(() => {
            setUsernameError(false);
        })
            .catch((error) => {
            if (error.response.status === 409) {
                setUsernameError(true);
            }
        });
    }, [username]);
    const { user, email, logout } = (0, useUserData_1.default)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    const [errorMsg, setErrorMsg] = (0, react_1.useState)(false);
    const [confirmPassword, setConfirmPassword] = (0, react_1.useState)("");
    const [confirmPasswordError, setConfirmPasswordError] = (0, react_1.useState)(false);
    const [loader, setLoader] = (0, react_1.useState)(false);
    const { register, handleSubmit, formState: { errors }, } = (0, react_hook_form_1.useForm)({ resolver: (0, zod_2.zodResolver)(schema) });
    const [showPassword, setShowPassword] = (0, react_1.useState)(false);
    const onSubmit = (data) => {
        console.log(data);
        if (data.password !== confirmPassword) {
            return setConfirmPasswordError(true);
        }
        else {
            setConfirmPasswordError(false);
            setLoader(true);
            axios_1.default
                .post(`${request_1.baseUrl}/api/v1/auth/update`, data, {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            })
                .then((response) => {
                console.log(response);
                // Logout
                axios_1.default
                    .post(`${request_1.baseUrl}/api/v1/auth/logout`, {}, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    withCredentials: true,
                })
                    .then(() => {
                    logout();
                    navigate("/login");
                })
                    .catch((err) => {
                    console.error("Logout failed: ", err);
                });
                // navigate(`/login}`);
            })
                .catch((error) => {
                console.log(error);
                setErrorMsg(true);
            });
        }
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Navbar_1.default, {}), (0, jsx_runtime_1.jsx)("div", { className: "", children: (0, jsx_runtime_1.jsx)("div", { className: "lg:container mx-auto lg:p-10 px-3 lg:mt-16 mt-28", children: (0, jsx_runtime_1.jsx)("div", { className: "flex justify-center", children: (0, jsx_runtime_1.jsx)("div", { className: "py-10 lg:px-10 px-5 rounded secondary-bg shadow", children: (0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit(onSubmit), children: [(0, jsx_runtime_1.jsx)("h1", { className: "mb-5 text-2xl text-white", children: t("accountSetting") }), (0, jsx_runtime_1.jsxs)("p", { className: "text-gray-400 mb-5", children: [t("hello"), " ", (0, jsx_runtime_1.jsxs)("span", { className: "text-teal-500", children: [user, " "] }), t("settingDesc")] }), errorMsg && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-600 my-5 text-lg", children: t("settingError") })), (0, jsx_runtime_1.jsxs)("div", { className: "mb-5", children: [(0, jsx_runtime_1.jsx)("label", { className: "text-sm text-gray-500 block", htmlFor: "username", children: t("username") }), (0, jsx_runtime_1.jsx)("input", Object.assign({}, register("username"), { type: "text", name: "username", className: `bg-gray-100 py-3 rounded-lg w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm ${errors.username && "border-red-400 border-1 border"}`, onChange: (e) => setUsername(e.currentTarget.value) })), errors.username && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-400 text-xs pt-1", children: errors.username.message })), usernameError && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-400 text-sm pt-2", children: "Username already exist!" }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-5", children: [(0, jsx_runtime_1.jsx)("label", { className: "text-sm text-gray-500 block", htmlFor: "email", children: t("email") }), (0, jsx_runtime_1.jsx)("input", { type: "email", name: "email", className: `bg-gray-400 py-3 rounded-lg w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm`, value: email ? email : "", readOnly: true, disabled: true })] }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-5 relative", children: [(0, jsx_runtime_1.jsx)("label", { className: "text-sm text-gray-500 block", htmlFor: "password", children: t("password") }), (0, jsx_runtime_1.jsx)("input", Object.assign({}, register("password"), { type: showPassword ? "text" : "password", name: "password", className: `bg-gray-100 py-3 rounded-lg w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm ${errors.password && "border-red-400 border-1 border"}` })), (0, jsx_runtime_1.jsx)("span", { onClick: () => setShowPassword(!showPassword), className: `absolute ${showPassword ? "bi-eye" : "bi-eye-slash"} right-2 top-8 cursor-pointer` }), errors.password && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-400 text-xs pt-1", children: errors.password.message }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-5", children: [(0, jsx_runtime_1.jsx)("label", { className: "text-sm text-gray-500 block", htmlFor: "password", children: t("conPass") }), (0, jsx_runtime_1.jsx)("input", { type: "password", name: "confirm-password", className: `bg-gray-100 py-3 rounded-lg w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm ${confirmPasswordError && "border-red-400 border-1 border"}`, onChange: (event) => setConfirmPassword(event.currentTarget.value) }), confirmPasswordError && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-600 text-xs pt-1", children: "Password does not match!" }))] }), (0, jsx_runtime_1.jsx)("div", { className: "mt-10", children: (0, jsx_runtime_1.jsx)(Button_1.default, { loader: loader, label: t("update") }) })] }) }) }) }) }), (0, jsx_runtime_1.jsx)(Footer_1.default, {})] }));
};
exports.default = Setting;
