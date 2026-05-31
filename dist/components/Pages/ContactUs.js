"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Footer_1 = __importDefault(require("../Footer/Footer"));
const Navbar_1 = __importDefault(require("../Navbar/Navbar"));
const useDocumentTitle_1 = __importDefault(require("@/hooks/useDocumentTitle"));
const react_1 = require("react");
const zod_1 = require("zod");
const zod_2 = require("@hookform/resolvers/zod");
const react_hook_form_1 = require("react-hook-form");
const Button_1 = __importDefault(require("../Button/Button"));
const axios_1 = __importDefault(require("axios"));
const request_1 = require("@/services/request");
const react_i18next_1 = require("react-i18next");
const schema = zod_1.z.object({
    username: zod_1.z
        .string()
        .min(3, { message: "Username must be greater than 3 characters." }),
    email: zod_1.z.string().email({ message: "Email address required" }),
    message: zod_1.z.string().min(10, {
        message: "Message must be at least 10 characters.",
    }),
});
const ContactUs = () => {
    const [title] = (0, react_1.useState)("Contact Us");
    (0, useDocumentTitle_1.default)(title);
    const { t } = (0, react_i18next_1.useTranslation)();
    // Scroll to top
    (0, react_1.useEffect)(() => {
        window.scrollTo(0, 0);
    }, []);
    const [errorMsg, setErrorMsg] = (0, react_1.useState)(false);
    const [successMsg, setSuccessMsg] = (0, react_1.useState)(false);
    const [loader, setLoader] = (0, react_1.useState)(false);
    const { register, handleSubmit, formState: { errors }, } = (0, react_hook_form_1.useForm)({ resolver: (0, zod_2.zodResolver)(schema) });
    const onSubmit = (data) => {
        const contact = {
            username: data.username,
            email: data.email,
            message: data.message,
        };
        setLoader(true);
        axios_1.default
            .post(`${request_1.baseUrl}/api/v1/auth/contact-us`, contact, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        })
            .then(() => {
            setLoader(false);
            setSuccessMsg(true);
        })
            .catch((error) => {
            console.log(error);
            setErrorMsg(true);
            setLoader(false);
        });
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Navbar_1.default, {}), successMsg && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { className: "overlay w-full z-50" }), (0, jsx_runtime_1.jsx)("div", { className: "flex justify-center align-center", children: (0, jsx_runtime_1.jsxs)("div", { className: "fixed lg:top-60 top-44 z-50 lg:w-[30%] lg:mx-0 mx-1 secondary-bg rounded-xl border-gradient-2", children: [(0, jsx_runtime_1.jsx)("button", { onClick: () => setSuccessMsg(false), className: "absolute right-5 top-3 bi-x-lg text-white" }), (0, jsx_runtime_1.jsx)("div", { className: "p-8", children: (0, jsx_runtime_1.jsxs)("div", { className: "text-center mt-4", children: [(0, jsx_runtime_1.jsx)("p", { className: "bi-check-circle-fill text-green-500 text-4xl" }), (0, jsx_runtime_1.jsx)("p", { className: "text-white mt-5 text-xl chakra", children: t("contactSuccess") })] }) })] }) })] })), (0, jsx_runtime_1.jsxs)("div", { className: "lg:container mx-auto text-white px-3 lg:mt-32 mt-28", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-4xl font-extrabold lg:text-center", children: t("chat") }), (0, jsx_runtime_1.jsx)("div", { className: "flex justify-center", children: (0, jsx_runtime_1.jsx)("div", { className: "lg:w-[50%] w-full", children: (0, jsx_runtime_1.jsx)("p", { className: "mt-3 text-xl text-gray-300", children: t("contactDesc") }) }) }), errorMsg && ((0, jsx_runtime_1.jsx)("p", { className: "text-center mt-10 text-red-500", children: t("contactError") })), (0, jsx_runtime_1.jsx)("div", { className: "flex justify-center", children: (0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit(onSubmit), className: "lg:w-[55%] w-full secondary-bg mt-10 rounded p-10", children: [(0, jsx_runtime_1.jsxs)("div", { className: "mb-5", children: [(0, jsx_runtime_1.jsx)("label", { className: "text-sm text-gray-500 block", htmlFor: "username", children: "Username" }), (0, jsx_runtime_1.jsx)("input", Object.assign({}, register("username"), { type: "text", name: "username", className: `bg-gray-100 text-black py-3 rounded w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm ${errors.username && "border-red-400 border-1 border"}` })), errors.username && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-400 text-xs pt-1", children: errors.username.message }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-5", children: [(0, jsx_runtime_1.jsx)("label", { className: "text-sm text-gray-500 block", htmlFor: "email", children: "Email" }), (0, jsx_runtime_1.jsx)("input", Object.assign({}, register("email"), { type: "email", name: "email", className: `bg-gray-100 text-black py-3 rounded w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm ${errors.email && "border-red-400 border-1 border"}` })), errors.email && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-400 text-xs pt-1", children: errors.email.message }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-5 relative", children: [(0, jsx_runtime_1.jsx)("label", { className: "text-sm text-gray-500 block", htmlFor: "message", children: "Your Message" }), (0, jsx_runtime_1.jsx)("textarea", Object.assign({}, register("message"), { name: "message", className: `bg-gray-100 text-black py-3 rounded w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm resize-none h-28 ${errors.message && "border-red-400 border-1 border"}` })), errors.message && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-400 text-xs pt-1", children: errors.message.message }))] }), (0, jsx_runtime_1.jsx)("div", { className: "mt-10", children: (0, jsx_runtime_1.jsx)(Button_1.default, { loader: loader, label: "Submit" }) })] }) })] }), (0, jsx_runtime_1.jsx)(Footer_1.default, {})] }));
};
exports.default = ContactUs;
