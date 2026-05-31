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
const request_1 = require("@/services/request");
const react_i18next_1 = require("react-i18next");
const schema = zod_1.z.object({
    firstName: zod_1.z
        .string()
        .min(3, { message: "First Name must be greater than 3 characters." }),
    lastName: zod_1.z
        .string()
        .min(3, { message: "Last Name must be greater than 3 characters." }),
    email: zod_1.z.string().email({ message: "Email address required." }),
    street: zod_1.z.string().min(2, { message: "Street name required" }),
    streetNo: zod_1.z.string().min(2, { message: "Street name required" }),
    address: zod_1.z.string().min(2, { message: "Address required." }),
    plz: zod_1.z.string().min(2, { message: "PLZ required." }),
    location: zod_1.z.string().min(2, { message: "Country required." }),
    phone: zod_1.z.string().min(10, { message: "Phone number required." }),
    referral: zod_1.z.string().optional(),
});
const WalletOrder = ({ id, quantity, img, hideModal, reviewCardLink, }) => {
    const [checkbox, setCheckbox] = (0, react_1.useState)(false);
    const [loader, setLoader] = (0, react_1.useState)(false);
    const { t } = (0, react_i18next_1.useTranslation)();
    // Scroll to top
    (0, react_1.useEffect)(() => {
        window.scrollTo(0, 0);
    }, []);
    const { register, handleSubmit, setValue, formState: { errors }, } = (0, react_hook_form_1.useForm)({
        resolver: (0, zod_2.zodResolver)(schema),
    });
    // Get Metadata
    (0, react_1.useEffect)(() => {
        axios_1.default
            .get(`${request_1.baseUrl}/api/v1/products/order-metadata`, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        })
            .then((response) => {
            const data = response.data.order_metadata;
            // Set form values using react-hook-form's setValue
            setValue("firstName", data.fname);
            setValue("lastName", data.lname);
            setValue("email", data.email);
            setValue("street", data.street);
            setValue("streetNo", data.street_no);
            setValue("address", data.address);
            setValue("plz", data.plz);
            setValue("location", data.location);
            setValue("phone", data.phone);
            setValue("referral", data.referral);
        })
            .catch((error) => {
            console.error("Failed to fetch order metadata:", error);
        });
    }, [setValue]);
    const onSubmit = (data) => {
        const singleWallet = { wallet_id: id, quantity: quantity };
        const deliveryData = {
            fname: data.firstName,
            lname: data.lastName,
            email: data.email,
            address: data.address,
            location: data.location,
            plz: data.plz,
            phone: data.phone,
            street: data.street,
            street_no: data.streetNo,
            referral_code: data.referral,
            link: reviewCardLink,
        };
        const orderWallet = {
            wallets: [singleWallet],
            order_metadata: deliveryData,
        };
        setLoader(true);
        // Send the form data to the server
        axios_1.default
            .post(`${request_1.baseUrl}/api/v1/products/order-wallet`, orderWallet, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        })
            .then((response) => {
            window.location.href = response.data.checkout_url;
        })
            .catch((error) => {
            setLoader(false);
            console.log(error);
        });
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { className: "overlay z-[999] bg-neutral-950/90" }), (0, jsx_runtime_1.jsx)("div", { className: "flex justify-center", children: (0, jsx_runtime_1.jsxs)("div", { className: "fixed z-[1000] top-0 lg:grid grid-cols-2 lg:rounded-3xl rounded overflow-hidden lg:h-[85vh] h-[90vh] lg:w-[80%] mx-2 lg:mt-20 mt-10 lg:overflow-hidden overflow-y-scroll", children: [(0, jsx_runtime_1.jsxs)("div", { className: "relative flex justify-center bg-white", children: [(0, jsx_runtime_1.jsx)("button", { onClick: () => hideModal(), className: "absolute lg:hidden top-1 right-1 text-white bg-red-500 bi-x-lg  rounded px-1" }), (0, jsx_runtime_1.jsx)("img", { src: img, alt: "wallet", className: "object-contain w-80 lg:absolute lg:top-[25%]" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "relative secondary-bg lg:p-2 lg:pb-0 pb-8", children: [(0, jsx_runtime_1.jsx)("button", { onClick: () => hideModal(), className: "lg:absolute lg:block hidden top-3 right-3 text-white bg-red-500 bi-x-lg  rounded px-1" }), (0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit(onSubmit), className: "lg:px-5 px-6 py-5", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-2xl mb-10 font-poppins text-white", children: t("deliveryInfo") }), (0, jsx_runtime_1.jsxs)("div", { className: "lg:grid grid-cols-2 gap-x-8", children: [(0, jsx_runtime_1.jsxs)("div", { className: "mb-4", children: [(0, jsx_runtime_1.jsx)("label", { className: "text-xs text-gray-300 block", htmlFor: "firstName", children: t("fName") }), (0, jsx_runtime_1.jsx)("input", Object.assign({}, register("firstName"), { type: "text", name: "firstName", className: `text-black bg-gray-100 py-3 rounded h-10 w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm ${errors.firstName && "border-red-600 border-1 border"}` })), errors.firstName && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-600 text-xs pt-1", children: errors.firstName.message }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-4", children: [(0, jsx_runtime_1.jsx)("label", { className: "text-xs text-gray-300 block", htmlFor: "lastName", children: t("lName") }), (0, jsx_runtime_1.jsx)("input", Object.assign({}, register("lastName"), { type: "text", name: "lastName", className: `text-black bg-gray-100 py-3 rounded h-10 w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm ${errors.lastName && "border-red-600 border-1 border"}` })), errors.lastName && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-600 text-xs pt-1", children: errors.lastName.message }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-4", children: [(0, jsx_runtime_1.jsx)("label", { className: "text-xs text-gray-300 block", htmlFor: "email", children: t("email") }), (0, jsx_runtime_1.jsx)("input", Object.assign({}, register("email"), { type: "email", name: "email", className: `text-black bg-gray-100 py-3 rounded h-10 w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm ${errors.email && "border-red-600 border-1 border"}` })), errors.email && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-600 text-xs pt-1", children: errors.email.message }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "grid grid-cols-3 gap-x-5 mb-4", children: [(0, jsx_runtime_1.jsxs)("div", { className: "col-span-2", children: [(0, jsx_runtime_1.jsx)("label", { className: "text-xs text-gray-300 block", htmlFor: "street", children: t("street") }), (0, jsx_runtime_1.jsx)("input", Object.assign({}, register("street"), { type: "text", name: "street", className: `text-black bg-gray-100 py-3 rounded h-10 w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm ${errors.street && "border-red-600 border-1 border"}` })), errors.street && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-600 text-xs pt-1", children: errors.street.message }))] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { className: "text-xs text-gray-300 block", htmlFor: "streetNo", children: t("streetNo") }), (0, jsx_runtime_1.jsx)("input", Object.assign({}, register("streetNo"), { type: "text", name: "streetNo", className: `text-black bg-gray-100 py-3 rounded h-10 w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm ${errors.streetNo && "border-red-600 border-1 border"}` })), errors.streetNo && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-600 text-xs pt-1", children: errors.streetNo.message }))] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-4", children: [(0, jsx_runtime_1.jsx)("label", { className: "text-xs text-gray-300 block", htmlFor: "address", children: t("address") }), (0, jsx_runtime_1.jsx)("input", Object.assign({}, register("address"), { type: "text", name: "address", className: `text-black bg-gray-100 py-3 rounded h-10 w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm ${errors.address && "border-red-600 border-1 border"}` })), errors.address && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-600 text-xs pt-1", children: errors.address.message }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-4", children: [(0, jsx_runtime_1.jsx)("label", { className: "text-xs text-gray-500 block", htmlFor: "plz", children: t("PLZ") }), (0, jsx_runtime_1.jsx)("input", Object.assign({}, register("plz"), { type: "text", name: "plz", className: `text-black bg-gray-100 py-3 rounded h-10 w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm ${errors.plz && "border-red-600 border-1 border"}` })), errors.plz && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-600 text-xs pt-1", children: errors.plz.message }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-4", children: [(0, jsx_runtime_1.jsx)("label", { className: "text-xs text-gray-400 block", htmlFor: "location", children: t("country") }), (0, jsx_runtime_1.jsx)("input", Object.assign({}, register("location"), { type: "text", name: "location", className: `text-black bg-gray-100 py-3 rounded h-10 w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm ${errors.location && "border-red-600 border-1 border"}` })), errors.location && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-600 text-xs pt-1", children: errors.location.message }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-4", children: [(0, jsx_runtime_1.jsx)("label", { className: "text-xs text-gray-300 block", htmlFor: "plz", children: t("phone") }), (0, jsx_runtime_1.jsx)("input", Object.assign({}, register("phone"), { type: "tel", name: "phone", className: `text-black bg-gray-100 py-3 rounded h-10 w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm ${errors.phone && "border-red-600 border-1 border"}` })), errors.phone && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-600 text-xs pt-1", children: errors.phone.message }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-4", children: [(0, jsx_runtime_1.jsx)("label", { className: "text-xs text-gray-300 block", htmlFor: "plz", children: t("referral") }), (0, jsx_runtime_1.jsx)("input", Object.assign({}, register("referral"), { type: "tel", name: "referral", className: `text-black bg-gray-100 py-3 rounded h-10 w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-300 font-poppins text-sm` }))] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex gap-x-4 mt-2", children: [(0, jsx_runtime_1.jsx)("input", { type: "checkbox", name: "save", className: "w-4 h-4", onChange: () => setCheckbox(!checkbox) }), (0, jsx_runtime_1.jsx)("label", { htmlFor: "save", className: "text-white text-xs", children: t("saveInfo") })] }), (0, jsx_runtime_1.jsx)("div", { className: "my-8", children: (0, jsx_runtime_1.jsx)(Button_1.default, { label: t("order"), loader: loader }) })] })] })] }) })] }));
};
exports.default = WalletOrder;
