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
const useProduct_1 = __importDefault(require("@/store/useProduct"));
const axios_1 = __importDefault(require("axios"));
const request_1 = require("@/services/request");
const html2canvas_1 = __importDefault(require("html2canvas"));
const react_router_dom_1 = require("react-router-dom");
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
const CardOrder = ({ closeOrder, frontFile, backFile, view }) => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const { t } = (0, react_i18next_1.useTranslation)();
    const { register, handleSubmit, setValue, formState: { errors }, } = (0, react_hook_form_1.useForm)({
        resolver: (0, zod_2.zodResolver)(schema),
    });
    const captureRef = (0, react_1.useRef)(null);
    const { back, front, orientation } = (0, useProduct_1.default)();
    (0, react_1.useEffect)(() => {
        let frontImageUrl = null;
        let backImageUrl = null;
        if (front.image) {
            frontImageUrl = URL.createObjectURL(front.image);
            setFrontImage(frontImageUrl);
        }
        if (back.image) {
            backImageUrl = URL.createObjectURL(back.image);
            setBackImage(backImageUrl);
        }
        // Clean up the object URLs when the component unmounts or images change
        return () => {
            if (frontImageUrl) {
                URL.revokeObjectURL(frontImageUrl);
            }
            if (backImageUrl) {
                URL.revokeObjectURL(backImageUrl);
            }
        };
    }, [front, back]);
    const [checkbox, setCheckbox] = (0, react_1.useState)(false);
    const [frontImage, setFrontImage] = (0, react_1.useState)(null);
    const [backImage, setBackImage] = (0, react_1.useState)(null);
    const [loader, setLoader] = (0, react_1.useState)(false);
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
        setLoader(true);
        const productsInfo = localStorage.getItem("product");
        const product = productsInfo
            ? JSON.parse(productsInfo)
            : null;
        if (product) {
            const frontDesign = {
                bgColor: front.bgColor,
                fontStyle: front.fontStyle,
                text: front.text,
                textPosition: front.textPosition,
                textSize: front.textSize,
                imageSize: front.imageSize,
                imagePosition: front.imagePosition,
                pickedBg: front.pickedBg,
                color: front.color,
                extraText: front.extraText,
                extraTextColor: front.extraTextColor,
                extraFont: front.extraTextFontSize,
                extraFontStyle: front.extraTextFontStyle,
                extraTextPosition: front.extraTextPosition,
            };
            const backDesign = {
                bgColor: back.bgColor,
                fontStyle: back.fontStyle,
                text: back.text,
                textPosition: back.textPosition,
                textSize: back.textSize,
                imageSize: back.imageSize,
                imagePosition: back.imagePosition,
                pickedBg: back.pickedBg,
                color: back.color,
                extraText: back.extraText,
                extraTextColor: back.extraTextColor,
                extraFont: back.extraTextFontSize,
                extraFontStyle: back.extraTextFontStyle,
                extraTextPosition: back.extraTextPosition,
            };
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
            };
            const formData = new FormData();
            if (captureRef.current) {
                (0, html2canvas_1.default)(captureRef.current, {
                    scale: window.devicePixelRatio,
                    useCORS: true,
                    backgroundColor: null,
                }).then((canvas) => {
                    // Convert canvas to Blob
                    canvas.toBlob((blob) => {
                        if (blob) {
                            // Append the captured image blob to the FormData
                            formData.append("card_img", blob, "capture.png");
                            // Continue appending other form data
                            frontFile && formData.append("front_image", frontFile);
                            backFile && formData.append("back_image", backFile);
                            formData.append("front_style", JSON.stringify(frontDesign));
                            formData.append("back_style", JSON.stringify(backDesign));
                            formData.append("orientation", orientation);
                            formData.append("save_info", checkbox.toString());
                            formData.append("quantity", product.quantity.toString());
                            formData.append("vibecardLogo", product.vibecardLogo.toString());
                            formData.append("order_metadata", JSON.stringify(deliveryData));
                            formData.append("card_type", product.cardType);
                            formData.append("referral_code", data.referral ? data.referral : "");
                            // Log all form data entries
                            // for (const [key, value] of formData.entries()) {
                            //   console.log(key, value);
                            // }
                            // Send the form data to the server
                            axios_1.default
                                .post(`${request_1.baseUrl}/api/v1/products/purchase-product`, formData, {
                                headers: {
                                    "Content-Type": "multipart/form-data",
                                },
                                withCredentials: true,
                            })
                                .then((response) => {
                                window.location.href = response.data.checkout_url;
                                localStorage.clear();
                            })
                                .catch((error) => {
                                setLoader(false);
                                console.log(error);
                            });
                        }
                    }, "image/png");
                });
            }
        }
        else {
            navigate("/products");
        }
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { className: "overlay z-40" }), (0, jsx_runtime_1.jsxs)("div", { className: "fixed z-[100] top-0 lg:grid grid-cols-2 secondary-bg h-[100dvh] w-full lg:overflow-auto overflow-y-scroll", children: [(0, jsx_runtime_1.jsx)("p", { onClick: () => closeOrder(), className: "absolute z-50 cursor-pointer bi-x-lg right-4 top-2 font-bold text-red-700 text-xl" }), (0, jsx_runtime_1.jsx)("div", { className: "lg:mt-24 mt-10", children: (0, jsx_runtime_1.jsx)("div", { className: `lg:fixed lg:w-[45%] w-[100%] h-auto rounded-lg lg:overflow-auto overflow-y-scroll`, children: (0, jsx_runtime_1.jsxs)("div", { ref: captureRef, className: `${view
                                    ? " lg:flex gap-x-5 h-full items-center lg:my-0 my-14 lg:px-16 lg:ms-0 lg:w-full w-[50%] lg:m-0 m-auto"
                                    : "lg:px-20 px-2"}`, children: [(0, jsx_runtime_1.jsx)("div", { className: `relative rounded-md  ${view
                                            ? " lg:h-[400px] lg:w-full w-48 h-[30vh]"
                                            : "lg:h-[280px] h-[30vh] w-full"}  mb-5 shadow-md shadow-zinc-800 overflow-hidden ${front.pickedBg === "#ffffff" ? front.bgColor : ""}`, style: {
                                            backgroundColor: front.pickedBg === "#ffffff" ? "" : front.pickedBg,
                                        }, children: (0, jsx_runtime_1.jsxs)("div", { className: `flex justify-center items-center h-full overflow-hidden`, children: [frontImage && ((0, jsx_runtime_1.jsx)("div", { className: `absolute`, style: {
                                                        transform: `translate(${front.imagePosition.x}px, ${front.imagePosition.y}px)`,
                                                    }, children: (0, jsx_runtime_1.jsx)("img", { src: frontImage, alt: "user", className: `h-${front.imageSize} w-${front.imageSize} object-cover`, style: {
                                                            rotate: `${front.rotation}deg`,
                                                        } }) })), front.text !== "" && ((0, jsx_runtime_1.jsx)("div", { className: `absolute ${view ? "top-3" : "top-3"} `, style: {
                                                        transform: `translate(${front.textPosition.x}px, ${front.textPosition.y}px)`,
                                                    }, children: (0, jsx_runtime_1.jsx)("p", { className: `${front.fontStyle} text-${front.textSize}`, style: {
                                                            color: front.color,
                                                        }, children: front.text }) })), front.extraText !== "" && ((0, jsx_runtime_1.jsx)("div", { className: "absolute bottom-5", style: {
                                                        transform: `translate(${front.extraTextPosition.x}px, ${front.extraTextPosition.y}px)`,
                                                    }, children: (0, jsx_runtime_1.jsx)("p", { className: `${front.extraTextFontStyle} text-${front.extraTextFontSize}`, style: {
                                                            color: front.extraTextColor,
                                                        }, children: front.extraText }) }))] }) }), (0, jsx_runtime_1.jsx)("div", { className: `relative rounded-md ${view
                                            ? " lg:h-[400px] lg:w-full w-48 h-[30vh]"
                                            : "lg:h-[280px] h-[30vh] w-full"} lg:mb-5 shadow-md shadow-zinc-800 overflow-hidden ${back.pickedBg === "#ffffff" ? back.bgColor : ""}`, style: {
                                            backgroundColor: back.pickedBg === "#ffffff" ? "" : back.pickedBg,
                                            margin: "",
                                        }, children: (0, jsx_runtime_1.jsxs)("div", { className: `flex justify-center items-center h-full overflow-hidden`, children: [backImage && ((0, jsx_runtime_1.jsx)("div", { className: `absolute`, style: {
                                                        transform: `translate(${back.imagePosition.x}px, ${back.imagePosition.y}px)`,
                                                    }, children: (0, jsx_runtime_1.jsx)("img", { src: backImage, alt: "user", className: `h-${back.imageSize} w-${back.imageSize} object-cover`, style: {
                                                            rotate: `${back.rotation}deg`,
                                                        } }) })), back.text !== "" && ((0, jsx_runtime_1.jsx)("div", { className: "absolute top-3", style: {
                                                        transform: `translate(${back.textPosition.x}px, ${back.textPosition.y}px)`,
                                                    }, children: (0, jsx_runtime_1.jsx)("p", { className: `${back.fontStyle} text-${back.textSize}`, style: {
                                                            color: back.color,
                                                        }, children: back.text }) })), back.extraText !== "" && ((0, jsx_runtime_1.jsx)("div", { className: "absolute bottom-5", style: {
                                                        transform: `translate(${back.extraTextPosition.x}px, ${back.extraTextPosition.y}px)`,
                                                    }, children: (0, jsx_runtime_1.jsx)("p", { className: `${back.extraTextFontStyle} text-${back.extraTextFontSize}`, style: {
                                                            color: back.extraTextColor,
                                                        }, children: back.extraText }) }))] }) })] }) }) }), (0, jsx_runtime_1.jsx)("div", { className: "relative bg-white rounded shadow-lg shadow-zinc-950 lg:p-10 mx-2 lg:my-0 my-10", children: (0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit(onSubmit), className: "lg:px-5 px-6 py-5", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-2xl mb-10 font-poppins text-black", children: t("deliveryInfo") }), (0, jsx_runtime_1.jsxs)("div", { className: "lg:grid grid-cols-2 gap-x-8", children: [(0, jsx_runtime_1.jsxs)("div", { className: "mb-5", children: [(0, jsx_runtime_1.jsx)("label", { className: "text-sm text-gray-500 block", htmlFor: "firstName", children: t("fName") }), (0, jsx_runtime_1.jsx)("input", Object.assign({}, register("firstName"), { type: "text", className: `text-black bg-gray-300 py-3 rounded h-12 w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-900 font-poppins text-sm ${errors.firstName && "border-red-600 border-1 border"}` })), errors.firstName && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-600 text-xs pt-1", children: errors.firstName.message }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-5", children: [(0, jsx_runtime_1.jsx)("label", { className: "text-sm text-gray-500 block", htmlFor: "lastName", children: t("lName") }), (0, jsx_runtime_1.jsx)("input", Object.assign({}, register("lastName"), { type: "text", className: `text-black bg-gray-300 py-3 rounded h-11 w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-900 font-poppins text-sm ${errors.lastName && "border-red-600 border-1 border"}` })), errors.lastName && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-600 text-xs pt-1", children: errors.lastName.message }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-5", children: [(0, jsx_runtime_1.jsx)("label", { className: "text-sm text-gray-500 block", htmlFor: "email", children: t("email") }), (0, jsx_runtime_1.jsx)("input", Object.assign({}, register("email"), { type: "email", className: `text-black bg-gray-300 py-3 rounded h-11 w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-900 font-poppins text-sm ${errors.email && "border-red-600 border-1 border"}` })), errors.email && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-600 text-xs pt-1", children: errors.email.message }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "grid grid-cols-3 gap-x-5 mb-5", children: [(0, jsx_runtime_1.jsxs)("div", { className: "col-span-2", children: [(0, jsx_runtime_1.jsx)("label", { className: "text-sm text-gray-500 block", htmlFor: "street", children: t("street") }), (0, jsx_runtime_1.jsx)("input", Object.assign({}, register("street"), { type: "text", className: `text-black bg-gray-300 py-3 rounded h-11 w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-900 font-poppins text-sm ${errors.street && "border-red-600 border-1 border"}` })), errors.street && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-600 text-xs pt-1", children: errors.street.message }))] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { className: "text-sm text-gray-500 block", htmlFor: "streetNo", children: "StreetNo" }), (0, jsx_runtime_1.jsx)("input", Object.assign({}, register("streetNo"), { type: "text", className: `text-black bg-gray-300 py-3 rounded h-11 w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-900 font-poppins text-sm ${errors.streetNo && "border-red-600 border-1 border"}` })), errors.streetNo && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-600 text-xs pt-1", children: errors.streetNo.message }))] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-5", children: [(0, jsx_runtime_1.jsx)("label", { className: "text-sm text-gray-500 block", htmlFor: "address", children: t("address") }), (0, jsx_runtime_1.jsx)("input", Object.assign({}, register("address"), { type: "text", className: `text-black bg-gray-300 py-3 rounded h-11 w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-900 font-poppins text-sm ${errors.address && "border-red-600 border-1 border"}` })), errors.address && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-600 text-xs pt-1", children: errors.address.message }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-5", children: [(0, jsx_runtime_1.jsx)("label", { className: "text-sm text-gray-500 block", htmlFor: "plz", children: t("PLZ") }), (0, jsx_runtime_1.jsx)("input", Object.assign({}, register("plz"), { type: "text", className: `text-black bg-gray-300 py-3 rounded h-11 w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-900 font-poppins text-sm ${errors.plz && "border-red-600 border-1 border"}` })), errors.plz && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-600 text-xs pt-1", children: errors.plz.message }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-5", children: [(0, jsx_runtime_1.jsx)("label", { className: "text-sm text-gray-500 block", htmlFor: "location", children: t("country") }), (0, jsx_runtime_1.jsx)("input", Object.assign({}, register("location"), { type: "text", className: `text-black bg-gray-300 py-3 rounded h-11 w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-900 font-poppins text-sm ${errors.location && "border-red-600 border-1 border"}` })), errors.location && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-600 text-xs pt-1", children: errors.location.message }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-5", children: [(0, jsx_runtime_1.jsx)("label", { className: "text-sm text-gray-500 block", htmlFor: "phone", children: t("phone") }), (0, jsx_runtime_1.jsx)("input", Object.assign({}, register("phone"), { type: "tel", className: `text-black bg-gray-300 py-3 rounded h-11 w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-900 font-poppins text-sm ${errors.phone && "border-red-600 border-1 border"}` })), errors.phone && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-600 text-xs pt-1", children: errors.phone.message }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-5", children: [(0, jsx_runtime_1.jsx)("label", { className: "text-sm text-gray-500 block", htmlFor: "referral", children: t("referral") }), (0, jsx_runtime_1.jsx)("input", Object.assign({}, register("referral"), { type: "tel", className: "text-black bg-gray-300 py-3 rounded h-11 w-full focus:outline-none px-5 mt-1 block shadow-sm shadow-gray-900 font-poppins text-sm" }))] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex gap-x-4 mt-2", children: [(0, jsx_runtime_1.jsx)("input", { type: "checkbox", name: "save", className: "w-4 h-4", onChange: () => setCheckbox(!checkbox) }), (0, jsx_runtime_1.jsx)("label", { htmlFor: "save", className: "text-black text-sm", children: t("saveInfo") })] }), (0, jsx_runtime_1.jsx)("div", { className: "lg:mt-16 mt-8", children: (0, jsx_runtime_1.jsx)(Button_1.default, { label: t("order"), loader: loader }) })] }) })] })] }));
};
exports.default = CardOrder;
