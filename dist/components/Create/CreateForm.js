"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const InputImages_1 = __importDefault(require("./InputImages"));
const useContentStore_1 = require("../../store/useContentStore");
const zod_1 = require("zod");
const react_hook_form_1 = require("react-hook-form");
const zod_2 = require("@hookform/resolvers/zod");
const useCardData_1 = require("../../store/useCardData");
const Loader_1 = __importDefault(require("../Loader/Loader"));
const useTextColorStore_1 = require("../../store/useTextColorStore");
const useCardColorStore_1 = require("../../store/useCardColorStore");
const useCoverColorStore_1 = require("../../store/useCoverColorStore");
const axios_1 = __importDefault(require("axios"));
const request_1 = require("../../services/request");
const Modal_1 = __importDefault(require("../Modal/Modal"));
const i18next_1 = require("i18next");
const useUserData_1 = __importDefault(require("@/store/useUserData"));
const useLayoutStore_1 = require("@/store/useLayoutStore");
// Zod
const schema = zod_1.z.object({
    name: zod_1.z.string().min(3, { message: "Name required" }),
    company: zod_1.z.string().min(1, { message: "Company required" }),
    email: zod_1.z.string().email({ message: "Valid email address required" }),
    phone: zod_1.z.string().min(6, { message: "Phone number required" }),
    job: zod_1.z.string().min(3, { message: "Job title required" }),
    location: zod_1.z.string().min(3, { message: "Location required" }),
});
const CreateForm = ({ layout }) => {
    const { plan } = (0, useUserData_1.default)();
    const { watermark } = (0, useLayoutStore_1.useLayoutStore)();
    // Zustand
    const { contact, updateContacts, socialMedia } = (0, useContentStore_1.useContentStore)();
    const { button, company, jobTitle, location, name, pronoun, tagLine } = (0, useTextColorStore_1.useTextColorStore)();
    const { cardColorBg } = (0, useCardColorStore_1.useCardColorStore)();
    const { coverColorBg } = (0, useCoverColorStore_1.useCoverColorStore)();
    const { setCardCompany, setPreview, setCardEmail, setCardJob, setCardLocation, setCardName, setCardPhone, setCardPronoun, setCardTagLine, } = (0, useCardData_1.useCardData)();
    // Form Hook
    const { register, handleSubmit, formState: { errors }, } = (0, react_hook_form_1.useForm)({ resolver: (0, zod_2.zodResolver)(schema) });
    //   States
    const [previews, setPreviews] = (0, react_1.useState)({
        profile: null,
        cover: null,
        logo: null,
    });
    const [pictures, setPictures] = (0, react_1.useState)({
        profile: null,
        cover: null,
        logo: null,
    });
    const [fullName, setFullName] = (0, react_1.useState)("");
    const [email, setEmail] = (0, react_1.useState)("");
    const [phone, setPhone] = (0, react_1.useState)("");
    const [userLocation, setUserLocation] = (0, react_1.useState)("");
    const [bio, setBio] = (0, react_1.useState)("");
    const [job, setJob] = (0, react_1.useState)("");
    const [userCompany, setUserCompany] = (0, react_1.useState)("");
    const [userPronoun, setUserPronoun] = (0, react_1.useState)("");
    const [pronounError, setPronounError] = (0, react_1.useState)(false);
    const [profilePhotoError, setProfilePhotoError] = (0, react_1.useState)(false);
    const [loader, setLoader] = (0, react_1.useState)(false);
    const [modal, setModal] = (0, react_1.useState)(false);
    const [cardLink, setCardLink] = (0, react_1.useState)("");
    //   Preview Images
    const handlePreviewChange = (type, preview) => {
        setPreviews((prevPreviews) => (Object.assign(Object.assign({}, prevPreviews), { [type]: preview })));
        setPreview(type, preview);
    };
    // Image Files
    const handleFile = (type, file) => {
        setPictures((prevPreviews) => (Object.assign(Object.assign({}, prevPreviews), { [type]: file })));
    };
    // Cover picture tracker
    const [coverBg, setCoverBg] = (0, react_1.useState)(true);
    (0, react_1.useEffect)(() => {
        if (coverColorBg !== "") {
            setCoverBg(false);
            setPreview("cover", null);
        }
        else {
            setCoverBg(true);
        }
    }, [coverColorBg]);
    //   Icon Update
    function updateIcons(val, icons, IconColor) {
        const iconExists = contact.some((c) => c.icon == icons);
        if (val !== "") {
            if (iconExists) {
                updateContacts(contact.map((c) => (c.icon == icons ? Object.assign(Object.assign({}, c), { link: val }) : c)));
            }
            else {
                updateContacts([
                    ...contact,
                    {
                        link: val,
                        color: IconColor,
                        icon: icons,
                    },
                ]);
            }
        }
        else {
            const filtered = contact.filter((c) => c.icon !== icons);
            updateContacts(filtered);
        }
    }
    // Email
    const handleEmail = (val) => {
        setEmail(val);
        if (val !== "") {
            setCardEmail(val);
            updateIcons(val, "bi-envelope-fill", "bg-sky-900");
        }
    };
    // Phone
    const handlePhone = (val) => {
        setPhone(val);
        if (val !== "") {
            setCardPhone(val);
            updateIcons(val, "bi-telephone-fill", "#22c55e");
        }
    };
    // OnFormSubmit
    const onSubmit = (data) => __awaiter(void 0, void 0, void 0, function* () {
        // Reset errors and loader state
        setPronounError(false);
        setProfilePhotoError(false);
        // Validate required fields
        if (!userPronoun) {
            setPronounError(true);
            return;
        }
        if (!previews.profile) {
            setProfilePhotoError(true);
            return;
        }
        setLoader(true);
        // Define card styles
        const cardStyles = {
            // TEXT
            pronoun: {
                font_size: pronoun.size,
                font_style: pronoun.font,
                font_color: pronoun.color,
            },
            jobTitle: {
                font_size: jobTitle.size,
                font_style: jobTitle.font,
                font_color: jobTitle.color,
            },
            bio: {
                font_size: tagLine.size,
                font_style: tagLine.font,
                font_color: tagLine.color,
            },
            company: {
                font_size: company.size,
                font_style: company.font,
                font_color: company.color,
            },
            location: {
                font_size: location.size,
                font_style: location.font,
                font_color: location.color,
            },
            name: {
                font_size: name.size,
                font_style: name.font,
                font_color: name.color,
            },
            button: {
                text_color: button.font,
                bg_color: button.color,
            },
            // Card BG
            cardBg: { bg_color: cardColorBg },
            // Cover BG
            coverBG: { bg_color: coverColorBg },
            // Contact
            contacts: contact,
            // Social Media
            socialMedia: socialMedia,
        };
        // Prepare form data
        const formData = new FormData();
        if (pictures.profile)
            formData.append("main_picture", pictures.profile);
        if (pictures.cover)
            formData.append("covor_picture", pictures.cover);
        if (pictures.logo)
            formData.append("company_logo", pictures.logo);
        formData.append("pronouns", userPronoun);
        formData.append("full_name", data.name);
        formData.append("email", data.email);
        formData.append("phone", data.phone);
        formData.append("location", data.location);
        formData.append("job_title", data.job);
        formData.append("bio", bio);
        formData.append("company_name", data.company);
        formData.append("card_layout", layout);
        formData.append("card_type", "business");
        formData.append("card_style_schema", JSON.stringify(cardStyles));
        formData.append("watermark", plan === "proPLus" ? `${watermark}` : "false");
        try {
            const response = yield axios_1.default.post(`${request_1.baseUrl}/api/v1/cards/create`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                withCredentials: true,
            });
            // console.log(response);
            setModal(true);
            setCardLink(response.data.card_url);
        }
        catch (error) {
            console.error(error);
        }
        finally {
            setLoader(false);
        }
    });
    return ((0, jsx_runtime_1.jsxs)("div", { className: "relative lg:px-5", children: [modal && (0, jsx_runtime_1.jsx)(Modal_1.default, { link: cardLink }), (0, jsx_runtime_1.jsx)("p", { className: "mb-4", children: (0, i18next_1.t)("dashBtn") }), (0, jsx_runtime_1.jsxs)("form", { className: "lg:px-8 lg:py-6 pb-5 mt-5 lg:mb-0 px-1 pt-10 shadow lg:shadow-zinc-400 rounded-xl secondary-bg lg:overflow-auto lg:h-[82vh] h-auto overflow-y-scroll border border-gray-700 mb-14", children: [(0, jsx_runtime_1.jsxs)("div", { className: "lg:flex justify-between flex-shrink-0 grid grid-cols-3 gap-1 lg:px-0 px-1", children: [(0, jsx_runtime_1.jsx)(InputImages_1.default, { title: "profilePic", type: "profile", onPreviewChange: handlePreviewChange, onHandleFile: handleFile, error: profilePhotoError }), (0, jsx_runtime_1.jsx)(InputImages_1.default, { title: "coverPic", type: "cover", onPreviewChange: handlePreviewChange, onHandleFile: handleFile, coverBg: coverBg }), (0, jsx_runtime_1.jsx)(InputImages_1.default, { title: "logo", type: "logo", onPreviewChange: handlePreviewChange, onHandleFile: handleFile })] }), (0, jsx_runtime_1.jsxs)("div", { className: "grid grid-cols-2 lg:gap-x-8 gap-x-3 mt-2 lg:p-4 lg:px-0 px-2", children: [(0, jsx_runtime_1.jsxs)("div", { className: "mb-4", children: [(0, jsx_runtime_1.jsxs)("label", { className: "text-xs text-gray-400 block", htmlFor: "pronoun", children: [(0, i18next_1.t)("pronoun"), " ", (0, jsx_runtime_1.jsx)("span", { className: "text-red-700 text-2xl", children: "*" }), " "] }), (0, jsx_runtime_1.jsxs)("select", { name: "pronoun", className: "bg-transparent secondary-bg border border-gray-600 text-white py-3 rounded-lg focus:outline-none w-full mt-1 block shadow-sm shadow-zinc-400 font-poppins text-sm px-3", onChange: (event) => {
                                            setUserPronoun(event.currentTarget.value);
                                            setCardPronoun(event.currentTarget.value);
                                        }, defaultValue: userPronoun, children: [(0, jsx_runtime_1.jsx)("option", { value: "", hidden: true }), (0, jsx_runtime_1.jsx)("option", { value: (0, i18next_1.t)("mr"), children: (0, i18next_1.t)("mr") }), (0, jsx_runtime_1.jsx)("option", { value: (0, i18next_1.t)("mrs"), children: (0, i18next_1.t)("mrs") }), (0, jsx_runtime_1.jsx)("option", { value: (0, i18next_1.t)("professor"), children: (0, i18next_1.t)("professor") }), (0, jsx_runtime_1.jsx)("option", { value: (0, i18next_1.t)("dr"), children: (0, i18next_1.t)("dr") })] }), pronounError && ((0, jsx_runtime_1.jsxs)("p", { className: "text-red-600 text-xs pt-1", children: [(0, i18next_1.t)("pronoun"), " ", (0, i18next_1.t)("required"), "."] }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-3", children: [(0, jsx_runtime_1.jsxs)("label", { className: "text-xs text-gray-400 block", htmlFor: "name", children: ["Name", (0, jsx_runtime_1.jsx)("span", { className: "text-red-700 text-2xl", children: "*" })] }), (0, jsx_runtime_1.jsx)("input", Object.assign({}, register("name"), { type: "text", name: "name", className: `bg-transparent border border-gray-600 text-white py-3 rounded-md focus:outline-none w-full mt-1 block shadow-sm shadow-zinc-400 font-poppins text-sm px-3 ${errors.name && "border-red-600 border-1 border"}`, onChange: (e) => {
                                            setFullName(e.currentTarget.value);
                                            setCardName(e.currentTarget.value);
                                        }, value: fullName, autoComplete: "off" })), errors.name && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-600 text-xs pt-1", children: errors.name.message }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-3", children: [(0, jsx_runtime_1.jsxs)("label", { className: "text-xs text-gray-400 block", htmlFor: "email", children: [(0, i18next_1.t)("email"), (0, jsx_runtime_1.jsx)("span", { className: "text-red-700 text-2xl", children: "*" })] }), (0, jsx_runtime_1.jsx)("input", Object.assign({}, register("email"), { type: "email", name: "email", className: `bg-transparent border border-gray-600 text-white py-3 rounded-md focus:outline-none w-full mt-1 block shadow-sm shadow-zinc-400 font-poppins text-sm px-3 ${errors.email && "border-red-600 border-1 border"}`, onChange: (e) => handleEmail(e.currentTarget.value), value: email, autoComplete: "off" })), errors.email && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-600 text-xs pt-1", children: errors.email.message }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-3", children: [(0, jsx_runtime_1.jsxs)("label", { className: "text-xs text-gray-400 block", htmlFor: "phone", children: [(0, i18next_1.t)("phone"), (0, jsx_runtime_1.jsx)("span", { className: "text-red-700 text-2xl", children: "*" })] }), (0, jsx_runtime_1.jsx)("input", Object.assign({}, register("phone"), { type: "text", name: "phone", className: `bg-transparent border border-gray-600 text-white py-3 rounded-md focus:outline-none w-full mt-1 block shadow-sm shadow-zinc-400 font-poppins text-sm px-3 ${errors.phone && "border-red-600 border-1 border"}`, onChange: (e) => handlePhone(e.currentTarget.value), value: phone, autoComplete: "off" })), errors.phone && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-600 text-xs pt-1", children: errors.phone.message }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-3", children: [(0, jsx_runtime_1.jsxs)("label", { className: "text-xs text-gray-400 block", htmlFor: "job-title", children: [(0, i18next_1.t)("jobTitle"), (0, jsx_runtime_1.jsx)("span", { className: "text-red-700 text-2xl", children: "*" })] }), (0, jsx_runtime_1.jsx)("input", Object.assign({}, register("job"), { type: "text", name: "job", className: `bg-transparent border border-gray-600 text-white py-3 rounded-md focus:outline-none w-full mt-1 block shadow-sm shadow-zinc-400 font-poppins text-sm px-3 ${errors.job && "border-red-600 border-1 border"}`, onChange: (e) => {
                                            setJob(e.currentTarget.value);
                                            setCardJob(e.currentTarget.value);
                                        }, value: job, autoComplete: "off" })), errors.job && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-600 text-xs pt-1", children: errors.job.message }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-3", children: [(0, jsx_runtime_1.jsxs)("label", { className: "text-xs text-gray-400 block", htmlFor: "location", children: [(0, i18next_1.t)("location"), (0, jsx_runtime_1.jsx)("span", { className: "text-red-700 text-2xl", children: "*" })] }), (0, jsx_runtime_1.jsx)("input", Object.assign({}, register("location"), { type: "text", name: "location", className: `bg-transparent border border-gray-600 text-white py-3 rounded-md focus:outline-none w-full mt-1 block shadow-sm shadow-zinc-400 font-poppins text-sm px-3 ${errors.location && "border-red-600 border-1 border"}`, onChange: (e) => {
                                            setUserLocation(e.currentTarget.value);
                                            setCardLocation(e.currentTarget.value);
                                        }, value: userLocation, autoComplete: "off" })), errors.location && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-600 text-xs pt-1", children: errors.location.message }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-3", children: [(0, jsx_runtime_1.jsxs)("label", { className: "text-xs text-gray-400 block", htmlFor: "company", children: [(0, i18next_1.t)("company"), (0, jsx_runtime_1.jsx)("span", { className: "text-red-700 text-2xl", children: "*" })] }), (0, jsx_runtime_1.jsx)("input", Object.assign({}, register("company"), { type: "text", name: "company", className: `bg-transparent border border-gray-600 text-white py-3 rounded-md focus:outline-none w-full mt-1 block shadow-sm shadow-zinc-400 font-poppins text-sm px-3 ${errors.company && "border-red-600 border-1 border"}`, onChange: (e) => {
                                            setUserCompany(e.currentTarget.value);
                                            setCardCompany(e.currentTarget.value);
                                        }, value: userCompany, autoComplete: "off" })), errors.company && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-600 text-xs pt-1", children: errors.company.message }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-3", children: [(0, jsx_runtime_1.jsxs)("label", { className: "text-xs text-gray-400 block", htmlFor: "tag-line", children: [(0, i18next_1.t)("bio"), (0, jsx_runtime_1.jsx)("span", { className: "text-transparent text-2xl", children: "*" })] }), (0, jsx_runtime_1.jsx)("input", { type: "text", name: "tag-line", className: `bg-transparent border border-gray-600 text-white py-3 rounded-md focus:outline-none w-full mt-1 block shadow-sm shadow-zinc-400 font-poppins text-sm px-3`, onChange: (e) => {
                                            setBio(e.currentTarget.value);
                                            setCardTagLine(e.currentTarget.value);
                                        }, value: bio, autoComplete: "off" })] })] }), (0, jsx_runtime_1.jsx)("div", { className: `flex justify-end secondary-bg lg:mt-0 mt-4`, children: (0, jsx_runtime_1.jsx)("button", { onClick: handleSubmit(onSubmit), type: "submit", className: "btn-bg shadow-md active:shadow-none shadow-gray-900 text-white rounded lg:px-16 lg:py-3 py-3  lg:w-auto w-full lg:mx-0 mx-2", children: loader ? (0, jsx_runtime_1.jsx)(Loader_1.default, {}) : (0, i18next_1.t)("Create") }) })] })] }));
};
exports.default = CreateForm;
