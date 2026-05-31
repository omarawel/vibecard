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
const useCardData_1 = require("../../store/useCardData");
const Loader_1 = __importDefault(require("../Loader/Loader"));
const useTextColorStore_1 = require("../../store/useTextColorStore");
const useCardColorStore_1 = require("../../store/useCardColorStore");
const useCoverColorStore_1 = require("../../store/useCoverColorStore");
const axios_1 = __importDefault(require("axios"));
const request_1 = require("../../services/request");
const react_router_dom_1 = require("react-router-dom");
const react_i18next_1 = require("react-i18next");
const useUserData_1 = __importDefault(require("@/store/useUserData"));
const useLayoutStore_1 = require("@/store/useLayoutStore");
const EditForm = ({ layout }) => {
    const pageLocation = (0, react_router_dom_1.useLocation)();
    const searchParams = new URLSearchParams(pageLocation.search);
    const editedUrl = searchParams.get("edit");
    const { t } = (0, react_i18next_1.useTranslation)();
    const { plan } = (0, useUserData_1.default)();
    const { watermark } = (0, useLayoutStore_1.useLayoutStore)();
    const [popUp, setPopUp] = (0, react_1.useState)(true);
    const [cardEdited, setCardEdited] = (0, react_1.useState)(false);
    // Form
    const [fullName, setFullName] = (0, react_1.useState)("");
    const [email, setEmail] = (0, react_1.useState)("");
    const [phone, setPhone] = (0, react_1.useState)("");
    const [userLocation, setUserLocation] = (0, react_1.useState)("");
    const [bio, setBio] = (0, react_1.useState)("");
    const [job, setJob] = (0, react_1.useState)("");
    const [userCompany, setUserCompany] = (0, react_1.useState)("");
    const [userPronoun, setUserPronoun] = (0, react_1.useState)("");
    const [loader, setLoader] = (0, react_1.useState)(false);
    // Zustand
    const { contact, updateContacts, socialMedia } = (0, useContentStore_1.useContentStore)();
    const { button, company, jobTitle, location, name, pronoun, tagLine } = (0, useTextColorStore_1.useTextColorStore)();
    const { cardColorBg } = (0, useCardColorStore_1.useCardColorStore)();
    const { coverColorBg } = (0, useCoverColorStore_1.useCoverColorStore)();
    const { companyVal, emailVal, jobTitleVal, locationVal, nameVal, phoneVal, pronounVal, tagLineVal, setCardCompany, setPreview, setCardEmail, setCardJob, setCardLocation, setCardName, setCardPhone, setCardPronoun, setCardTagLine, } = (0, useCardData_1.useCardData)();
    (0, react_1.useEffect)(() => {
        emailVal && setEmail(emailVal);
    }, [emailVal]);
    //   States
    const [, setPreviews] = (0, react_1.useState)({
        profile: null,
        cover: null,
        logo: null,
    });
    const [pictures, setPictures] = (0, react_1.useState)({
        profile: null,
        cover: null,
        logo: null,
    });
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
        setCardEmail(val);
        if (val !== "") {
            setEmail(val);
            updateIcons(val, "bi-envelope-fill", "bg-sky-900");
        }
    };
    // Phone
    const handlePhone = (val) => {
        setCardPhone(val);
        if (val !== "") {
            setPhone(val);
            updateIcons(val, "bi-telephone-fill", "#22c55e");
        }
    };
    //   Form Errors
    const [fullNameError, setFullNameError] = (0, react_1.useState)(false);
    const [companyError, setCompanyError] = (0, react_1.useState)(false);
    const [phoneError, setPhoneError] = (0, react_1.useState)(false);
    const [locationError, setLocationError] = (0, react_1.useState)(false);
    const [jobError, setJobError] = (0, react_1.useState)(false);
    const [emailError, setEmailError] = (0, react_1.useState)(false);
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // OnFormSubmit
    const handleFormSubmit = (event) => __awaiter(void 0, void 0, void 0, function* () {
        event.preventDefault();
        setLoader(true);
        // Validate Inputs
        if (fullName !== "" && fullName.length < 3) {
            setFullNameError(true);
            setLoader(false);
            return;
        }
        else {
            setFullNameError(false);
        }
        if (userCompany !== "" && userCompany.length < 1) {
            setCompanyError(true);
            setLoader(false);
            return;
        }
        else {
            setCompanyError(false);
        }
        if (phone !== "" && phone.length < 6) {
            setPhoneError(true);
            setLoader(false);
            return;
        }
        else {
            setPhoneError(false);
        }
        if (userLocation !== "" && userLocation.length < 3) {
            setLocationError(true);
            setLoader(false);
            return;
        }
        else {
            setLocationError(false);
        }
        if (job !== "" && job.length < 3) {
            setJobError(true);
            setLoader(false);
            return;
        }
        else {
            setJobError(false);
        }
        // If email does not match the regex, set error to true
        if (emailVal) {
            setEmail(emailVal);
            if (!emailRegex.test(email)) {
                setEmailError(true);
                setLoader(false);
                return;
            }
            else {
                setEmailError(false);
            }
        }
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
        if (pictures.cover) {
            formData.append("covor_picture", pictures.cover);
        }
        if (pictures.logo)
            formData.append("company_logo", pictures.logo);
        formData.append("pronouns", userPronoun);
        formData.append("full_name", fullName);
        formData.append("email", email);
        formData.append("phone", phone);
        formData.append("location", userLocation);
        formData.append("job_title", job);
        formData.append("bio", bio);
        formData.append("company_name", userCompany);
        formData.append("card_layout", layout);
        formData.append("card_type", "business");
        formData.append("card_style_schema", JSON.stringify(cardStyles));
        formData.append("watermark", plan === "proPLus" ? `${watermark}` : "false");
        const formDataObject = {};
        formData.forEach((value, key) => {
            if (value instanceof File) {
                formDataObject[key] = {
                    name: value.name,
                    type: value.type,
                    size: value.size,
                };
            }
            else {
                formDataObject[key] = value;
            }
        });
        try {
            yield axios_1.default.put(`${request_1.baseUrl}/api/v1/cards/edit/${editedUrl}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                withCredentials: true,
            });
            setCardEdited(true);
        }
        catch (error) {
            console.error(error);
        }
        finally {
            setLoader(false);
        }
    });
    return ((0, jsx_runtime_1.jsxs)("div", { className: "relative lg:px-5", children: [popUp && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { className: "overlay top-0 z-50" }), (0, jsx_runtime_1.jsx)("div", { className: "fixed top-0 left-0 flex z-50 justify-center items-center h-[100dvh] w-full lg:px-0 px-3", children: (0, jsx_runtime_1.jsxs)("div", { className: "lg:w-[35%] w-full hero-bg rounded px-5 py-6 secondary-bg shadow shadow-zinc-900", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between mb-5", children: [(0, jsx_runtime_1.jsxs)("h1", { className: "text-white text-xl chakra", children: [t("notice"), ":"] }), (0, jsx_runtime_1.jsx)("p", { onClick: () => setPopUp(false), className: "bi-x-lg text-red-500 cursor-pointer" })] }), (0, jsx_runtime_1.jsx)("p", { className: "my-3 text-sm text-white font-poppins", children: t("editPopUp") })] }) })] })), cardEdited && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { className: "overlay w-full z-50" }), (0, jsx_runtime_1.jsx)("div", { className: "flex justify-center align-center", children: (0, jsx_runtime_1.jsx)("div", { className: "absolute lg:top-40 top-28 z-50 lg:w-[60%] secondary-bg rounded-xl border-gradient-2", children: (0, jsx_runtime_1.jsxs)("div", { className: "p-8", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-lg font-poppins text-gray-300 my-5", children: t("editSuccess") }), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Link, { to: "/dashboard", className: "btn-bg shadow-none py-3 text-sm", children: ["Go to ", t("nav4")] })] }) }) })] })), (0, jsx_runtime_1.jsx)("p", { className: "mb-4", children: t("dashBtn") }), (0, jsx_runtime_1.jsxs)("form", { onSubmit: handleFormSubmit, className: "lg:px-8 lg:py-6 pb-5 mt-5 lg:mb-0 px-1 pt-10 shadow lg:shadow-zinc-400 rounded-xl secondary-bg lg:overflow-auto lg:h-[82vh] h-auto overflow-y-scroll border border-gray-700 mb-14", children: [(0, jsx_runtime_1.jsxs)("div", { className: "lg:flex justify-between flex-shrink-0 grid grid-cols-3 gap-1 lg:px-0 px-1", children: [(0, jsx_runtime_1.jsx)(InputImages_1.default, { title: "profilePic", type: "profile", onPreviewChange: handlePreviewChange, onHandleFile: handleFile }), (0, jsx_runtime_1.jsx)(InputImages_1.default, { title: "coverPic", type: "cover", onPreviewChange: handlePreviewChange, onHandleFile: handleFile, coverBg: coverBg }), (0, jsx_runtime_1.jsx)(InputImages_1.default, { title: "logo", type: "logo", onPreviewChange: handlePreviewChange, onHandleFile: handleFile })] }), (0, jsx_runtime_1.jsxs)("div", { className: "grid grid-cols-2 lg:gap-x-8 gap-x-3 mt-2 lg:p-4 lg:px-0 px-2", children: [(0, jsx_runtime_1.jsxs)("div", { className: "mb-4", children: [(0, jsx_runtime_1.jsxs)("label", { className: "lg:text-xs text-xs text-gray-400 block", htmlFor: "pronoun", children: [t("pronoun"), " ", (0, jsx_runtime_1.jsx)("span", { className: "text-red-700 text-2xl", children: "*" }), " "] }), (0, jsx_runtime_1.jsxs)("select", { name: "pronoun", className: "bg-transparent secondary-bg border border-gray-600 text-white py-3 rounded-lg focus:outline-none w-full mt-1 block shadow-sm shadow-zinc-400 font-poppins text-sm px-3", onChange: (event) => {
                                            setUserPronoun(event.currentTarget.value);
                                            setCardPronoun(event.currentTarget.value);
                                        }, defaultValue: pronounVal !== null ? pronounVal : userPronoun, children: [(0, jsx_runtime_1.jsx)("option", { value: "", hidden: true }), (0, jsx_runtime_1.jsx)("option", { value: "Mr", children: "Mr" }), (0, jsx_runtime_1.jsx)("option", { value: "Mrs", children: "Mrs" }), (0, jsx_runtime_1.jsx)("option", { value: "Prof", children: "Professor" }), (0, jsx_runtime_1.jsx)("option", { value: "Dr", children: "Dr" })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-3", children: [(0, jsx_runtime_1.jsxs)("label", { className: "lg:text-xs text-xs text-gray-400 block", htmlFor: "name", children: ["Name", (0, jsx_runtime_1.jsx)("span", { className: "text-red-700 text-2xl", children: "*" })] }), (0, jsx_runtime_1.jsx)("input", { type: "text", name: "name", className: `bg-transparent border border-gray-600 text-white py-3 rounded-md focus:outline-none w-full mt-1 block shadow-sm shadow-zinc-400 font-poppins text-sm px-3`, onChange: (e) => {
                                            setFullName(e.currentTarget.value);
                                            setCardName(e.currentTarget.value);
                                        }, value: nameVal !== null ? nameVal : fullName }), fullNameError && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-600 text-xs pt-1", children: "Name must be greater than 3 chars." }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-3", children: [(0, jsx_runtime_1.jsxs)("label", { className: "lg:text-xs text-xs text-gray-400 block", htmlFor: "email", children: [t("email"), (0, jsx_runtime_1.jsx)("span", { className: "text-red-700 text-2xl", children: "*" })] }), (0, jsx_runtime_1.jsx)("input", { type: "email", name: "email", className: `bg-transparent border border-gray-600 text-white py-3 rounded-md focus:outline-none w-full mt-1 block shadow-sm shadow-zinc-400 font-poppins text-sm px-3`, onChange: (e) => handleEmail(e.currentTarget.value), value: emailVal !== null ? emailVal : email }), emailError && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-600 text-xs pt-1", children: "Email must be a valid address." }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-3", children: [(0, jsx_runtime_1.jsxs)("label", { className: "lg:text-xs text-xs text-gray-400 block", htmlFor: "phone", children: [t("phone"), (0, jsx_runtime_1.jsx)("span", { className: "text-red-700 text-2xl", children: "*" })] }), (0, jsx_runtime_1.jsx)("input", { type: "tel", name: "phone", className: `bg-transparent border border-gray-600 text-white py-3 rounded-md focus:outline-none w-full mt-1 block shadow-sm shadow-zinc-400 font-poppins text-sm px-3`, onChange: (e) => handlePhone(e.currentTarget.value), value: phoneVal !== null ? phoneVal : phone }), phoneError && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-600 text-xs pt-1", children: "Phone must be at least 10 chars." }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-3", children: [(0, jsx_runtime_1.jsxs)("label", { className: "lg:text-xs text-xs text-gray-400 block", htmlFor: "job-title", children: [t("jobTitle"), (0, jsx_runtime_1.jsx)("span", { className: "text-red-700 text-2xl", children: "*" })] }), (0, jsx_runtime_1.jsx)("input", { type: "text", name: "job", className: `bg-transparent border border-gray-600 text-white py-3 rounded-md focus:outline-none w-full mt-1 block shadow-sm shadow-zinc-400 font-poppins text-sm px-3`, onChange: (e) => {
                                            setJob(e.currentTarget.value);
                                            setCardJob(e.currentTarget.value);
                                        }, value: jobTitleVal !== null ? jobTitleVal : job }), jobError && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-600 text-xs pt-1", children: "Job title must be greater than 3 chars." }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-3", children: [(0, jsx_runtime_1.jsxs)("label", { className: "lg:text-xs text-xs text-gray-400 block", htmlFor: "location", children: [t("location"), (0, jsx_runtime_1.jsx)("span", { className: "text-red-700 text-2xl", children: "*" })] }), (0, jsx_runtime_1.jsx)("input", { type: "text", name: "location", className: `bg-transparent border border-gray-600 text-white py-3 rounded-md focus:outline-none w-full mt-1 block shadow-sm shadow-zinc-400 font-poppins text-sm px-3`, onChange: (e) => {
                                            setUserLocation(e.currentTarget.value);
                                            setCardLocation(e.currentTarget.value);
                                        }, value: locationVal !== null ? locationVal : userLocation }), locationError && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-600 text-xs pt-1", children: "Location must be greater than 3 chars." }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-3", children: [(0, jsx_runtime_1.jsxs)("label", { className: "lg:text-xs text-xs text-gray-400 block", htmlFor: "company", children: [t("company"), (0, jsx_runtime_1.jsx)("span", { className: "text-red-700 text-2xl", children: "*" })] }), (0, jsx_runtime_1.jsx)("input", { type: "text", name: "company", className: `bg-transparent border border-gray-600 text-white py-3 rounded-md focus:outline-none w-full mt-1 block shadow-sm shadow-zinc-400 font-poppins text-sm px-3`, onChange: (e) => {
                                            setUserCompany(e.currentTarget.value);
                                            setCardCompany(e.currentTarget.value);
                                        }, value: companyVal !== null ? companyVal : userCompany }), companyError && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-600 text-xs pt-1", children: "Company name must be at least 1 chars." }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-3", children: [(0, jsx_runtime_1.jsxs)("label", { className: "lg:text-xs text-xs text-gray-400 block", htmlFor: "tag-line", children: [t("bio"), (0, jsx_runtime_1.jsx)("span", { className: "text-transparent text-2xl", children: "*" })] }), (0, jsx_runtime_1.jsx)("input", { type: "text", name: "tag-line", className: `bg-transparent border border-gray-600 text-white py-3 rounded-md focus:outline-none w-full mt-1 block shadow-sm shadow-zinc-400 font-poppins text-sm px-3`, onChange: (e) => {
                                            setBio(e.currentTarget.value);
                                            setCardTagLine(e.currentTarget.value);
                                        }, value: tagLineVal !== null ? tagLineVal : bio })] })] }), (0, jsx_runtime_1.jsx)("div", { className: `flex justify-end  secondary-bg lg:mt-0 mt-4`, children: (0, jsx_runtime_1.jsx)("button", { type: "submit", className: "btn-bg shadow-md active:shadow-none shadow-gray-900 text-white rounded lg:px-16 lg:py-3 py-3  lg:w-auto w-full lg:mx-0 mx-2", children: loader ? (0, jsx_runtime_1.jsx)(Loader_1.default, {}) : t("update") }) })] })] }));
};
exports.default = EditForm;
