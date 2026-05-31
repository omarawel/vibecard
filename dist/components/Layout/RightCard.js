"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const assets_1 = require("../../assets");
const useCoverColorStore_1 = require("../../store/useCoverColorStore");
const useCardColorStore_1 = require("../../store/useCardColorStore");
const useTextColorStore_1 = require("../../store/useTextColorStore");
const useContentStore_1 = require("../../store/useContentStore");
const Button_1 = __importDefault(require("./Button"));
const Contacts_1 = __importDefault(require("./Contacts"));
const SocialMedia_1 = __importDefault(require("./SocialMedia"));
const useCardData_1 = require("../../store/useCardData");
const Watermark_1 = __importDefault(require("../Watermark/Watermark"));
const RightCard = ({ watermark }) => {
    const { coverColorBg } = (0, useCoverColorStore_1.useCoverColorStore)();
    const { cardColorBg } = (0, useCardColorStore_1.useCardColorStore)();
    const { company, jobTitle, location, name, pronoun, tagLine } = (0, useTextColorStore_1.useTextColorStore)();
    const { socialMedia, contact } = (0, useContentStore_1.useContentStore)();
    const { companyVal, jobTitleVal, tagLineVal, locationVal, nameVal, preview, pronounVal, } = (0, useCardData_1.useCardData)();
    return ((0, jsx_runtime_1.jsxs)("div", { className: `relative rounded-2xl w-full overflow-hidden shadow-lg shadow-zinc-800 lg:mb-0 mb-10 border-gray-700`, style: { backgroundColor: cardColorBg }, children: [!watermark && (0, jsx_runtime_1.jsx)(Watermark_1.default, {}), (0, jsx_runtime_1.jsxs)("div", { className: `lg:h-24 h-32 relative flex justify-between z-0 ${coverColorBg !== ""
                    ? coverColorBg === "gradient-cover" && coverColorBg
                    : ""}`, style: {
                    backgroundColor: coverColorBg !== "gradient-cover" ? coverColorBg : "",
                }, children: [coverColorBg === "" && preview.cover && ((0, jsx_runtime_1.jsx)("img", { src: preview.cover, alt: "cover", className: "w-full object-cover\r\n            " })), (0, jsx_runtime_1.jsx)("div", { className: "absolute lg:top-10 top-16 right-2 lg:w-20 lg:h-20 w-24 h-24 border-[4px] rounded-full border-white overflow-hidden", children: (0, jsx_runtime_1.jsx)("img", { src: (preview === null || preview === void 0 ? void 0 : preview.profile) ? preview.profile : assets_1.userPic, alt: "user", className: "" }) }), (0, jsx_runtime_1.jsx)("div", { className: "content-center", children: (0, jsx_runtime_1.jsxs)("p", { className: `absolute left-0 w-48 text-center overflow-hidden text-ellipsis text-nowrap ${name.font + " " + name.size} ${preview.cover && "glass-effect text-shadow"} `, style: { color: name.color }, children: [(0, jsx_runtime_1.jsxs)("span", { className: ` ${pronoun.font + " " + pronoun.size}`, style: { color: pronoun.color }, children: [pronounVal && "(" + pronounVal + ")", " "] }), nameVal && nameVal] }) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "px-4 mt-10 text-white", children: [(0, jsx_runtime_1.jsxs)("div", { className: "relative", children: [preview.logo && ((0, jsx_runtime_1.jsx)("img", { src: preview === null || preview === void 0 ? void 0 : preview.logo, alt: "Cover", className: "absolute left-0 -top-6 w-14 h-14 rounded-full border-2 bg-white" })), (0, jsx_runtime_1.jsx)("p", { className: `${jobTitle.font + " " + jobTitle.size} mb-1 overflow-hidden text-ellipsis text-nowrap first-letter:uppercase text-end lg:mt-0 mt-4 ${!jobTitleVal && "invisible"} `, style: { color: jobTitle.color }, children: jobTitleVal && jobTitleVal }), (0, jsx_runtime_1.jsx)("p", { className: `${!companyVal && "invisible"} ${company.font + " " + company.size} text-end`, style: { color: company.color }, children: companyVal && "At " + companyVal }), (0, jsx_runtime_1.jsx)("p", { className: `mt-3 overflow-hidden text-ellipsis text-nowrap first-letter:uppercase text-end ${!tagLineVal && "invisible"} ${tagLine.font + " " + tagLine.size}`, style: { color: tagLine.color }, children: tagLineVal && tagLineVal }), (0, jsx_runtime_1.jsxs)("p", { className: `${location.font + " " + location.size} my-2 text-end ${!locationVal && "invisible"}`, style: { color: location.color }, children: [(0, jsx_runtime_1.jsx)("span", { className: "bi-geo-alt-fill me-2", style: { color: location.color } }), locationVal && locationVal] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "px-2", children: [contact.length > 0 && (0, jsx_runtime_1.jsx)(Contacts_1.default, {}), socialMedia.length > 0 && (0, jsx_runtime_1.jsx)(SocialMedia_1.default, {}), (0, jsx_runtime_1.jsx)(Button_1.default, {})] })] })] }));
};
exports.default = RightCard;
