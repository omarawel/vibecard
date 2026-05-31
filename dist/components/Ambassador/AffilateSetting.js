"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const AffiliateNavbar_1 = __importDefault(require("./AffiliateNavbar"));
const zod_1 = require("zod");
const react_hook_form_1 = require("react-hook-form");
const zod_2 = require("@hookform/resolvers/zod");
const react_1 = require("react");
const Button_1 = __importDefault(require("../Button/Button"));
const axios_1 = __importDefault(require("axios"));
const request_1 = require("../../services/request");
const react_router_dom_1 = require("react-router-dom");
const AffiliateFooter_1 = __importDefault(require("./AffiliateFooter"));
const useAmbassador_1 = __importDefault(require("@/store/useAmbassador"));
const react_i18next_1 = require("react-i18next");
const schema = zod_1.z.object({
    first_name: zod_1.z
        .string()
        .min(3, { message: "First Name must be greater than 3 characters." }),
    last_name: zod_1.z
        .string()
        .min(3, { message: "Last Name must be greater than 3 characters." }),
    email: zod_1.z.string().email({ message: "Email address required." }),
    password: zod_1.z.string().min(8, {
        message: "Password must be greater than 8 characters.",
    }),
});
const AffiliateSetting = () => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const { email, firstName, lastName, referral_code } = (0, useAmbassador_1.default)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    // const [registerError, setRegisterError] = useState("");
    const [loader, setLoader] = (0, react_1.useState)(false);
    // Default Value
    const [fName, setFName] = (0, react_1.useState)(firstName ? firstName : "");
    const [lName, setLName] = (0, react_1.useState)(lastName ? lastName : "");
    const [userEmail, setUserEmail] = (0, react_1.useState)(email ? email : "");
    const [referral, setReferral] = (0, react_1.useState)(referral_code ? referral_code : "");
    const { register, handleSubmit, formState: { errors }, } = (0, react_hook_form_1.useForm)({ resolver: (0, zod_2.zodResolver)(schema) });
    const [showPassword, setShowPassword] = (0, react_1.useState)(false);
    const handleReferral = () => {
        axios_1.default
            .put(`${request_1.baseUrl}/api/v1/ambassador/edit-referral-code`, { referral_code: referral }, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        })
            .then(() => {
            window.location.reload();
        })
            .catch((error) => {
            console.log(error);
        });
    };
    const onSubmit = (data) => {
        setLoader(true);
        const editData = {
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            password: data.password,
        };
        axios_1.default
            .put(`${request_1.baseUrl}/api/v1/ambassador/edit-details`, editData, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        })
            .then(() => {
            navigate(`/affiliate`);
        })
            .catch((error) => {
            console.log(error);
        });
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { className: "lg:container mx-auto px-2", children: [(0, jsx_runtime_1.jsx)(AffiliateNavbar_1.default, {}), (0, jsx_runtime_1.jsxs)("div", { className: "mt-10", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-xl text-white", children: t("updateProfile") }), (0, jsx_runtime_1.jsxs)("div", { className: "lg:flex bg-white my-5 rounded justify-between", children: [(0, jsx_runtime_1.jsxs)("div", { className: "p-4", children: [(0, jsx_runtime_1.jsx)("p", { children: t("referralCode") }), (0, jsx_runtime_1.jsx)("p", { className: "text-xs", children: t("customize") }), (0, jsx_runtime_1.jsx)("p", { className: "text-sm bg-black rounded border py-2 px-5 text-teal-400 font-bold font-poppins mt-1", children: referral })] }), (0, jsx_runtime_1.jsxs)("div", { className: "lg:flex gap-x-7 mt-2 me-8 lg:px-0 px-5 lg:pb-0 pb-5", children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "referral", className: "text-xs", children: t("referralCode") }), " ", (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("input", { type: "text", name: "referral", className: "rounded focus:outline-none h-11 secondary-bg lg:w-96 w-full text-white ps-3", onChange: (e) => setReferral(e.currentTarget.value), value: referral })] }), (0, jsx_runtime_1.jsx)("button", { onClick: () => handleReferral(), className: "btn-bg p-0 shadow-none h-11 mt-6 px-10 rounded text-white", children: t("saveChange") })] })] }), (0, jsx_runtime_1.jsx)("form", { onSubmit: handleSubmit(onSubmit), className: "w-full", children: (0, jsx_runtime_1.jsxs)("div", { className: "lg:grid grid-cols-2 gap-x-10 bg-white rounded lg:p-8 p-4 mt-5", children: [(0, jsx_runtime_1.jsxs)("div", { className: "lg:mb-4 mb-3", children: [(0, jsx_runtime_1.jsxs)("label", { className: "text-sm text-gray-700 block", htmlFor: "username", children: [t("fName"), " ", (0, jsx_runtime_1.jsx)("span", { className: "bi-asterisk text-[5px]" })] }), (0, jsx_runtime_1.jsx)("input", Object.assign({}, register("first_name"), { type: "text", name: "first_name", className: `text-white secondary-bg py-3 rounded w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm h-12 ${errors.first_name && "border-red-600 border-1 border"}`, onChange: (e) => setFName(e.currentTarget.value), value: fName })), errors.first_name && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-600 text-xs pt-1", children: errors.first_name.message }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "lg:mb-4 mb-3", children: [(0, jsx_runtime_1.jsxs)("label", { className: "text-sm text-gray-700 block", htmlFor: "username", children: [t("fName"), " ", (0, jsx_runtime_1.jsx)("span", { className: "bi-asterisk text-[5px]" })] }), (0, jsx_runtime_1.jsx)("input", Object.assign({}, register("last_name"), { type: "text", name: "last_name", className: `text-white secondary-bg py-3 rounded w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm h-12 ${errors.email && "border-red-600 border-1 border"}`, onChange: (e) => setLName(e.currentTarget.value), value: lName })), errors.last_name && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-600 text-xs pt-1", children: errors.last_name.message }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "lg:mb-4 mb-3", children: [(0, jsx_runtime_1.jsxs)("label", { className: "text-sm text-gray-700 block", htmlFor: "email", children: [t("email"), " ", (0, jsx_runtime_1.jsx)("span", { className: "bi-asterisk text-[5px]" })] }), (0, jsx_runtime_1.jsx)("input", Object.assign({}, register("email"), { type: "email", name: "email", className: `text-white secondary-bg py-3 rounded w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm h-12 ${errors.email && "border-red-600 border-1 border"}`, onChange: (e) => setUserEmail(e.currentTarget.value), value: userEmail })), errors.email && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-600 text-xs pt-1", children: errors.email.message }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "lg:mb-4 mb-3 relative", children: [(0, jsx_runtime_1.jsxs)("label", { className: "text-sm text-gray-700 block", htmlFor: "password", children: [t("password"), " ", (0, jsx_runtime_1.jsx)("span", { className: "bi-asterisk text-[5px]" })] }), (0, jsx_runtime_1.jsx)("input", Object.assign({}, register("password"), { type: showPassword ? "text" : "password", name: "password", className: `text-white secondary-bg py-3 rounded w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm h-12 ${errors.password && "border-red-600 border-1 border"}` })), (0, jsx_runtime_1.jsx)("span", { onClick: () => setShowPassword(!showPassword), className: `absolute ${showPassword ? "bi-eye" : "bi-eye-slash"} right-2 top-8 cursor-pointer text-white px-2 text-lg border-l border-gray-500` }), errors.password && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-600 text-xs pt-1", children: errors.password.message }))] }), (0, jsx_runtime_1.jsx)("div", { className: "col-span-2", children: (0, jsx_runtime_1.jsx)(Button_1.default, { loader: loader, label: t("update") }) })] }) })] })] }), (0, jsx_runtime_1.jsx)(AffiliateFooter_1.default, {})] }));
};
exports.default = AffiliateSetting;
