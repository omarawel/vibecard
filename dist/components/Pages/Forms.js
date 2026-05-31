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
const SmallNav_1 = __importDefault(require("../Dashboard/SmallNav"));
const Sidebar_1 = __importDefault(require("../Dashboard/Sidebar"));
const Nav_1 = __importDefault(require("../Dashboard/Nav"));
const Delete_1 = __importDefault(require("../Modal/Delete"));
const useDocumentTitle_1 = __importDefault(require("@/hooks/useDocumentTitle"));
const Loading_1 = __importDefault(require("../Loading/Loading"));
const schema = zod_1.z.object({
    password: zod_1.z.string().min(4, {
        message: "Password required.",
    }),
    email: zod_1.z.string().email({ message: "Email is required." }),
});
const Forms = () => {
    const [title] = (0, react_1.useState)("Forms");
    (0, useDocumentTitle_1.default)(title);
    const [admins, setAdmins] = (0, react_1.useState)([]);
    const [loading, setLoading] = (0, react_1.useState)(true);
    // States
    const [updateError, setUpdateError] = (0, react_1.useState)(false);
    const [showPassword, setShowPassword] = (0, react_1.useState)(false);
    const [loader, setLoader] = (0, react_1.useState)(false);
    const [passwordType, setPasswordType] = (0, react_1.useState)(true);
    const [onDelete, setOnDelete] = (0, react_1.useState)(false);
    const [onDeleteEmail, setOnDeleteEmail] = (0, react_1.useState)("");
    // Form Data and Validation
    const { register, handleSubmit, formState: { errors }, } = (0, react_hook_form_1.useForm)({ resolver: (0, zod_2.zodResolver)(schema) });
    (0, react_1.useEffect)(() => {
        axios_1.default
            .get(`${request_1.baseUrl}/api/v1/dashboard/get-admins`, {
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
            setAdmins(response.data);
            setLoading(false);
        })
            .catch((error) => {
            console.log(error);
        });
    }, []);
    // On Form Submit
    const onSubmit = (data) => {
        setLoader(true);
        axios_1.default
            .post(`${request_1.baseUrl}//api/v1/dashboard/create-admin`, data, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        })
            .then(() => {
            window.location.reload();
        })
            .catch((error) => {
            setLoader(false);
            setUpdateError(true);
            console.log(error);
        });
    };
    // onDelete
    const handelAdmin = (email, url) => {
        axios_1.default
            .put(`${request_1.baseUrl}/api/v1/dashboard/${url}/${email}`, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        })
            .then(() => {
            window.location.reload();
        })
            .catch((error) => {
            setLoader(false);
            setUpdateError(true);
            console.log(error);
        });
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [loading && (0, jsx_runtime_1.jsx)(Loading_1.default, {}), onDelete && ((0, jsx_runtime_1.jsx)(Delete_1.default, { name: "Admin", url: `/api/v1/dashboard/delete-admin/${onDeleteEmail}`, onDelete: () => {
                    setOnDelete(false);
                    setOnDeleteEmail("");
                } })), (0, jsx_runtime_1.jsxs)("div", { className: "relative lg:grid md:grid grid-cols-11", children: [(0, jsx_runtime_1.jsx)(SmallNav_1.default, { active: "Forms" }), (0, jsx_runtime_1.jsx)("div", { className: "lg:col-span-2 w-full", children: (0, jsx_runtime_1.jsx)(Sidebar_1.default, { active: "Forms" }) }), (0, jsx_runtime_1.jsxs)("div", { className: "lg:col-span-9 lg:px-4 md:px-2 px-2 py-2 md:col-span-10", children: [(0, jsx_runtime_1.jsx)(Nav_1.default, {}), (0, jsx_runtime_1.jsxs)("div", { className: "mt-4 text-white lg:px-2", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-white font-poppins", children: "Admins" }), (0, jsx_runtime_1.jsx)("div", { className: "grid lg:grid-cols-3 md:grid-cols-2 gap-x-4 mt-4", children: admins.map((admin, index) => ((0, jsx_runtime_1.jsxs)("div", { className: "secondary-bg rounded p-5 py-6 lg:mb-0 mb-4", children: [(0, jsx_runtime_1.jsxs)("p", { className: "font-bold uppercase font-poppins", children: ["Admin ", index + 1] }), (0, jsx_runtime_1.jsxs)("p", { className: "text-sm mt-4 font-poppins", children: ["Email : ", admin.email] }), (0, jsx_runtime_1.jsxs)("p", { className: "text-sm mb-4 font-poppins", children: ["Status :", " ", (0, jsx_runtime_1.jsx)("span", { className: `first-letter:uppercase ${admin.status === "active"
                                                                ? "text-green-400"
                                                                : "text-red-400"}`, children: admin.status }), " "] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between gap-x-4 mt-3", children: [(0, jsx_runtime_1.jsx)("p", { onClick: () => {
                                                                setOnDelete(true);
                                                                setOnDeleteEmail(admin.email);
                                                            }, className: "cursor-pointer shadow shadow-zinc-900 text-center bg-red-500 text-xs rounded w-full py-2 font-poppins", children: "Delete" }), admin.status === "active" ? ((0, jsx_runtime_1.jsx)("p", { onClick: () => handelAdmin(admin.email, "deactivate-admin"), className: "cursor-pointer shadow shadow-zinc-900 text-center bg-blue-500 text-xs rounded w-full py-2 font-poppins", children: "Deactivate" })) : ((0, jsx_runtime_1.jsx)("p", { onClick: () => handelAdmin(admin.email, "activate-admin"), className: "cursor-pointer shadow shadow-zinc-900 text-center bg-green-500 text-xs rounded w-full py-2", children: "Active" }))] })] }, index))) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "lg:mx-2", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-white mt-5 mb-7 font-poppins", children: "Create a new Admin Account" }), (0, jsx_runtime_1.jsx)("div", { className: "p-8 secondary-bg rounded lg:w-[50%] w-full lg:px-20", children: (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit(onSubmit), className: "relative", children: [updateError && ((0, jsx_runtime_1.jsx)("div", { className: "relative", children: (0, jsx_runtime_1.jsxs)("p", { className: "absolute -top-9 text-white bg-red-500 w-full rounded p-1 text-sm", children: [(0, jsx_runtime_1.jsx)("span", { className: "bi-exclamation-triangle-fill me-4 font-poppins" }), "Something went wrong try again"] }) })), (0, jsx_runtime_1.jsxs)("div", { className: "my-5", children: [(0, jsx_runtime_1.jsx)("label", { className: "text-sm text-gray-400 font-poppins block", htmlFor: "email", children: "Email" }), (0, jsx_runtime_1.jsx)("input", Object.assign({}, register("email"), { type: "email", name: "email", className: "text-black font-poppins text-sm w-full py-3 mt-2 bg-gray-100 rounded focus:outline-none px-5 shadow shadow-gray-300" })), errors.email && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-600 text-xs pt-1", children: errors.email.message }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-10 relative", children: [(0, jsx_runtime_1.jsx)("label", { className: "text-sm text-gray-400 font-poppins block", htmlFor: "password", children: "Password" }), (0, jsx_runtime_1.jsx)("input", Object.assign({}, register("password"), { type: passwordType ? "password" : "text", name: "password", className: "text-black font-poppins text-sm w-full py-3 mt-2 bg-gray-100 rounded focus:outline-none px-5 shadow shadow-gray-300" })), (0, jsx_runtime_1.jsx)("span", { onClick: () => {
                                                                    setShowPassword(!showPassword);
                                                                    setPasswordType(!passwordType);
                                                                }, className: `absolute ${showPassword ? "bi-eye" : "bi-eye-slash"} right-2 top-9 cursor-pointer text-black px-2 text-lg border-l border-gray-500` }), errors.password && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-600 text-xs pt-1", children: errors.password.message }))] }), (0, jsx_runtime_1.jsx)(Button_1.default, { loader: loader, label: "Create" })] }) }) })] })] })] })] }));
};
exports.default = Forms;
