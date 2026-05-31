"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const assets_1 = require("@/assets");
const request_1 = require("@/services/request");
const axios_1 = __importDefault(require("axios"));
const react_i18next_1 = require("react-i18next");
const react_router_dom_1 = require("react-router-dom");
const vcards_js_1 = __importDefault(require("vcards-js"));
const BottomContent = ({ styles, data, capture }) => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const generateVCard = () => {
        const vCard = (0, vcards_js_1.default)();
        vCard.firstName = data.full_name;
        vCard.organization = data.company_name;
        vCard.title = data.job_title;
        vCard.email = data.email;
        vCard.namePrefix = data.pronouns;
        vCard.cellPhone = data.phone;
        vCard.note = data.bio;
        vCard.workAddress.countryRegion = data.location;
        // Generate vCard as a string
        const vCardString = vCard.getFormattedString();
        // Create a blob from the vCard string
        const blob = new Blob([vCardString], { type: "text/vcard" });
        const url = URL.createObjectURL(blob);
        // Create a link to download the vCard
        const a = document.createElement("a");
        a.href = url;
        a.download = `${data.full_name}.vcf`;
        a.click();
        // Clean up
        URL.revokeObjectURL(url);
    };
    //  Social Media
    const handleSocialMedia = (clickedIcon) => {
        axios_1.default
            .post(`${request_1.baseUrl}/api/v1/cards/click-count?card_url=${data.card_url}&account_type=${clickedIcon.toLowerCase()}`, {}, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        })
            .then(() => { })
            .catch((error) => {
            console.log(error);
        });
    };
    //  Contact
    const handleContact = (phone) => {
        if (phone) {
            navigator.clipboard.writeText(`${phone}`);
        }
        axios_1.default
            .post(`${request_1.baseUrl}/api/v1/cards/click-count?card_url=${data.card_url}&account_type=contacts`, {}, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        })
            .then(() => { })
            .catch((error) => {
            console.log(error);
        });
    };
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("div", { children: [styles.contacts.length > 0 && ((0, jsx_runtime_1.jsx)("div", { className: `lg:my-2 my-5 ${styles.contacts.length > 0
                        ? `grid ${styles.contacts.length + 2 <= 3
                            ? "grid-cols-3"
                            : "grid-cols-5"}  gap-5 my-5`
                        : "invisible"}`, children: styles.contacts.map((c) => ((0, jsx_runtime_1.jsx)("div", { className: "my-2", children: c.icon === "bi-envelope-fill" ? ((0, jsx_runtime_1.jsx)("a", { onClick: () => handleContact(), href: `mailto:${c.link}`, className: "text-3xl text-center rounded-lg shadow-inner bi-envelope-fill text-white" })) : c.icon === "bi-telephone-fill" ? ((0, jsx_runtime_1.jsx)("p", { onClick: () => handleContact(c.link), className: "text-3xl text-center rounded-lg shadow-inner bi-telephone-fill text-green-600 cursor-pointer" })) : ((0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { onClick: () => handleContact(), to: `${c.link}`, className: `${c.icon} text-3xl text-center rounded-lg shadow-inner`, style: {
                                color: c.color.replace("bg", "text"),
                            } })) }, c.link))) })), styles.socialMedia.length > 0 && ((0, jsx_runtime_1.jsx)("div", { className: `lg:mb-0 mb-5 ${styles.socialMedia.length > 0
                        ? `grid ${styles.socialMedia.length <= 3
                            ? "grid-cols-3"
                            : "grid-cols-4"}  gap-3`
                        : "invisible"}`, children: styles.socialMedia.map((media) => ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: media.icon === "trustpilot" ? ((0, jsx_runtime_1.jsx)("a", { onClick: () => handleSocialMedia(media.label), href: media.link.startsWith("http")
                                ? media.link
                                : `https://${media.link}`, target: "_blank", className: `flex rounded-md items-center justify-center shadow shadow-zinc-900 h-[52px]`, style: {
                                backgroundColor: media.color,
                            }, children: (0, jsx_runtime_1.jsx)("img", { src: assets_1.trustpilot, alt: "Trust Pilot", className: "w-8 h-8 me-0 pe-0" }) })) : media.icon === "deezer" ? ((0, jsx_runtime_1.jsx)("a", { onClick: () => handleSocialMedia(media.label), href: media.link.startsWith("http")
                                ? media.link
                                : `https://${media.link}`, target: "_blank", className: `flex rounded-md items-center justify-center shadow shadow-zinc-900 h-[52px]`, style: {
                                backgroundColor: media.color,
                            }, children: (0, jsx_runtime_1.jsx)("img", { src: assets_1.deezer, alt: "Deezer", className: "w-8 h-8 me-0 pe-0" }) }, media.icon)) : media.icon === "calendly" ? ((0, jsx_runtime_1.jsx)("a", { onClick: () => handleSocialMedia(media.label), href: media.link.startsWith("http")
                                ? media.link
                                : `https://${media.link}`, target: "_blank", className: "flex rounded-md items-center justify-center shadow shadow-zinc-900 h-[52px]", style: {
                                backgroundColor: media.color,
                            }, children: (0, jsx_runtime_1.jsx)("img", { src: assets_1.calendly, alt: "Cacalendly", className: "w-8 h-8 me-0 pe-0" }) }, media.icon)) : ((0, jsx_runtime_1.jsx)("a", { onClick: () => handleSocialMedia(media.label), title: media.label, href: media.link.startsWith("http")
                                ? media.link
                                : `https://${media.link}`, target: "_blank", className: `flex justify-center items-center w-full rounded-md shadow shadow-zinc-900 h-[52px] ${media.icon} text-white text-2xl cursor-pointer`, style: { backgroundColor: media.color } }, media.icon)) }))) })), (0, jsx_runtime_1.jsx)("button", { className: `w-full rounded-lg py-4 mb-8 mt-5 shadow-md font-poppins font-extrabold shadow-zinc-950`, onClick: () => {
                        generateVCard();
                        capture();
                    }, style: {
                        backgroundColor: styles.button.bg_color,
                        color: styles.button.text_color,
                    }, children: t("saveContact") })] }) }));
};
exports.default = BottomContent;
