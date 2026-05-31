"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.socialMedias = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const zod_1 = require("zod");
const react_hook_form_1 = require("react-hook-form");
const zod_2 = require("@hookform/resolvers/zod");
const react_1 = require("react");
const Button_1 = __importDefault(require("../Button/Button"));
const axios_1 = __importDefault(require("axios"));
const request_1 = require("../../services/request");
const react_i18next_1 = require("react-i18next");
exports.socialMedias = [
    { name: "Tik Tok", value: "tiktok", icon: "bi-tiktok", color: "text-white" },
    {
        name: "Instagram",
        value: "instagram",
        icon: "bi-instagram",
        color: "text-pink-500",
    },
    {
        name: "YouTube",
        value: "youtube",
        icon: "bi-youtube",
        color: "text-red-500",
    },
    {
        name: "Facebook",
        value: "facebook",
        icon: "bi-facebook",
        color: "text-blue-500",
    },
    {
        name: "Twitch",
        value: "twitch",
        icon: "bi-twitch",
        color: "text-purple-600",
    },
    {
        name: "Twitter",
        value: "twitter",
        icon: "bi-twitter",
        color: "text-cyan-600",
    },
    {
        name: "Linkedin",
        value: "linkedin",
        icon: "bi-linkedin",
        color: "text-blue-600",
    },
    {
        name: "Website",
        value: "website",
        icon: "bi-globe",
        color: "text-blue-600",
    },
];
const schema = zod_1.z.object({
    twitter: zod_1.z.string().optional(),
    twitch: zod_1.z.string().optional(),
    youtube: zod_1.z.string().optional(),
    facebook: zod_1.z.string().optional(),
    instagram: zod_1.z.string().optional(),
    tiktok: zod_1.z.string().optional(),
    website: zod_1.z.string().optional(),
    linkedin: zod_1.z.string().optional(),
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
const AmbassadorRegister = () => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const [registerError, setRegisterError] = (0, react_1.useState)("");
    const [showPassword, setShowPassword] = (0, react_1.useState)(false);
    const [successMsg, setSuccessMsg] = (0, react_1.useState)(false);
    const [loader, setLoader] = (0, react_1.useState)(false);
    const { register, handleSubmit, formState: { errors }, } = (0, react_hook_form_1.useForm)({ resolver: (0, zod_2.zodResolver)(schema) });
    const onSubmit = (data) => {
        setLoader(true);
        const registerAmbassador = {
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            password: data.password,
            tiktoc_link: `https://tiktok.com/${data.tiktok}`,
            twich_link: `https://twitch.com/${data.twitch}`,
            twitter_link: `https://twitter.com/${data.twitter}`,
            instagram_link: `https://tiktok.com/${data.instagram}`,
            facebook_link: `https://fb.com/${data.facebook}`,
            youtube_link: `https://youtube.com/${data.youtube}`,
            linkedin_link: `https://linkedin.com/${data.linkedin}`,
            website_link: `https://${data.website}`,
        };
        axios_1.default
            .post(`${request_1.baseUrl}/api/v1/ambassador/register`, registerAmbassador, {
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(() => {
            setLoader(false);
            setSuccessMsg(true);
            setTimeout(() => {
                setSuccessMsg(false);
            }, 3000);
        })
            .catch((error) => {
            setLoader(false);
            setRegisterError("Something went wrong");
            console.log(error);
        });
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [successMsg && ((0, jsx_runtime_1.jsxs)("div", { className: "fixed z-50 lg:right-20 right-1 lg:top-5 top-2 bg-green-500 lg:w-96 rounded px-4 py-2 lg:mx-0 mx-2", children: [(0, jsx_runtime_1.jsx)("p", { children: t("ambassadorSuccess") }), (0, jsx_runtime_1.jsx)("p", { className: "mt-2", children: t("stayTuned") })] })), (0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit(onSubmit), className: "w-full", children: [registerError !== "" && ((0, jsx_runtime_1.jsx)("div", { className: "relative", children: (0, jsx_runtime_1.jsxs)("p", { className: "absolute -top-9 text-white text-sm bg-red-500 w-full rounded p-2", children: [(0, jsx_runtime_1.jsx)("span", { className: "bi-exclamation-triangle-fill me-4" }), registerError] }) })), (0, jsx_runtime_1.jsx)("p", { className: "col-span-2 text-white text-xl lg:mt-0 mt-10", children: t("beAmbassador") }), (0, jsx_runtime_1.jsxs)("div", { className: "lg:grid grid-cols-2 gap-x-10 bg-white rounded lg:p-8 p-4 mt-5", children: [(0, jsx_runtime_1.jsxs)("div", { className: "lg:mb-4 mb-3", children: [(0, jsx_runtime_1.jsxs)("label", { className: "text-sm text-gray-700 block", htmlFor: "username", children: [t("fName"), " ", (0, jsx_runtime_1.jsx)("span", { className: "bi-asterisk text-[5px]" })] }), (0, jsx_runtime_1.jsx)("input", Object.assign({}, register("first_name"), { type: "text", name: "first_name", className: `text-white secondary-bg py-3 rounded w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm h-12 ${errors.email && "border-red-600 border-1 border"}` })), errors.first_name && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-600 text-xs pt-1", children: errors.first_name.message }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "lg:mb-4 mb-3", children: [(0, jsx_runtime_1.jsxs)("label", { className: "text-sm text-gray-700 block", htmlFor: "username", children: [t("lName"), " ", (0, jsx_runtime_1.jsx)("span", { className: "bi-asterisk text-[5px]" })] }), (0, jsx_runtime_1.jsx)("input", Object.assign({}, register("last_name"), { type: "text", name: "last_name", className: `text-white secondary-bg py-3 rounded w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm h-12 ${errors.email && "border-red-600 border-1 border"}` })), errors.last_name && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-600 text-xs pt-1", children: errors.last_name.message }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "lg:mb-4 mb-3", children: [(0, jsx_runtime_1.jsxs)("label", { className: "text-sm text-gray-700 block", htmlFor: "email", children: [t("email"), " ", (0, jsx_runtime_1.jsx)("span", { className: "bi-asterisk text-[5px]" })] }), (0, jsx_runtime_1.jsx)("input", Object.assign({}, register("email"), { type: "email", name: "email", className: `text-white secondary-bg py-3 rounded w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm h-12 ${errors.email && "border-red-600 border-1 border"}` })), errors.email && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-600 text-xs pt-1", children: errors.email.message }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "lg:mb-4 mb-3 relative", children: [(0, jsx_runtime_1.jsxs)("label", { className: "text-sm text-gray-700 block", htmlFor: "password", children: [t("password"), " ", (0, jsx_runtime_1.jsx)("span", { className: "bi-asterisk text-[5px]" })] }), (0, jsx_runtime_1.jsx)("input", Object.assign({}, register("password"), { type: showPassword ? "text" : "password", name: "password", className: `text-white secondary-bg py-3 rounded w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm h-12 ${errors.password && "border-red-600 border-1 border"}` })), (0, jsx_runtime_1.jsx)("span", { onClick: () => setShowPassword(!showPassword), className: `absolute ${showPassword ? "bi-eye" : "bi-eye-slash"} right-2 top-8 cursor-pointer text-white px-2 text-lg border-l border-gray-500` }), errors.password && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-600 text-xs pt-1", children: errors.password.message }))] }), exports.socialMedias.map((social) => ((0, jsx_runtime_1.jsxs)("div", { className: "lg:mb-4 mb-3 relative", children: [(0, jsx_runtime_1.jsx)("label", { className: "text-xs text-gray-900 block", htmlFor: "username", children: social.name }), (0, jsx_runtime_1.jsx)("span", { className: `absolute left-1 top-8 cursor-pointer px-2 text-lg border-r border-gray-500 bi-at text-white` }), social.value === "tiktok" && ((0, jsx_runtime_1.jsx)("input", Object.assign({}, register("tiktok"), { type: "text", className: "text-white secondary-bg py-3 rounded w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm h-12 ps-12" }))), social.value === "instagram" && ((0, jsx_runtime_1.jsx)("input", Object.assign({}, register("instagram"), { type: "text", className: "text-white secondary-bg py-3 rounded w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm h-12 ps-12" }))), social.value === "youtube" && ((0, jsx_runtime_1.jsx)("input", Object.assign({}, register("youtube"), { type: "text", className: "text-white secondary-bg py-3 rounded w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm h-12 ps-12" }))), social.value === "facebook" && ((0, jsx_runtime_1.jsx)("input", Object.assign({}, register("facebook"), { type: "text", className: "text-white secondary-bg py-3 rounded w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm h-12 ps-12" }))), social.value === "twitch" && ((0, jsx_runtime_1.jsx)("input", Object.assign({}, register("twitch"), { type: "text", className: "text-white secondary-bg py-3 rounded w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm h-12 ps-12" }))), social.value === "twitter" && ((0, jsx_runtime_1.jsx)("input", Object.assign({}, register("twitter"), { type: "text", className: "text-white secondary-bg py-3 rounded w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm h-12 ps-12" }))), social.value === "linkedin" && ((0, jsx_runtime_1.jsx)("input", Object.assign({}, register("linkedin"), { type: "text", className: "text-white secondary-bg py-3 rounded w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm h-12 ps-12" }))), social.value === "website" && ((0, jsx_runtime_1.jsx)("input", Object.assign({}, register("website"), { type: "text", className: "text-white secondary-bg py-3 rounded w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm h-12 ps-12" }))), (0, jsx_runtime_1.jsx)("span", { className: `absolute right-2 top-8 cursor-pointer px-2 text-lg border-l border-gray-500 ${social.icon} ${social.color}` })] }, social.value))), (0, jsx_runtime_1.jsx)("div", { className: "col-span-2", children: (0, jsx_runtime_1.jsx)(Button_1.default, { loader: loader, label: "Submit" }) })] })] })] }));
};
exports.default = AmbassadorRegister;
