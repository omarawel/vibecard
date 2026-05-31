"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const contents_1 = require("../../../services/contents");
const useContentStore_1 = require("../../../store/useContentStore");
const ContentItems_1 = __importDefault(require("./ContentItems"));
const i18next_1 = require("i18next");
const Content = ({ onClose }) => {
    const { socialMedia, updateSocialMedia, contact, updateContacts } = (0, useContentStore_1.useContentStore)();
    const [activeMedias, setActiveMedias] = (0, react_1.useState)([""]);
    const [contactsIcons, setContactsIcons] = (0, react_1.useState)([""]);
    const [error, setError] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        if (socialMedia.length > 0) {
            const icons = socialMedia.map((item) => item.icon);
            setActiveMedias(icons);
        }
        if (contents_1.contactContents.length > 0) {
            const contacts = contact.map((contact) => contact.icon);
            setContactsIcons(contacts);
        }
    }, [socialMedia, contact]);
    // Social Medias
    const [socialMediaId, setSocialMediaId] = (0, react_1.useState)(0);
    const [socialMediaLink, setSocialMediaLink] = (0, react_1.useState)("");
    // Contacts
    const [contactId, setContactId] = (0, react_1.useState)(0);
    const [contactAddress, setContactAddress] = (0, react_1.useState)("");
    // Social Media
    const handleSocialUpdate = (socialInfo) => {
        if (socialMediaLink !== "") {
            setSocialMediaId(0);
            const iconExists = socialMedia.some((media) => media.icon == socialInfo.icon);
            if (iconExists) {
                updateSocialMedia(socialMedia.map((media) => media.icon == socialInfo.icon
                    ? Object.assign(Object.assign({}, media), { link: socialMediaLink, label: socialInfo.label }) : media));
            }
            else {
                updateSocialMedia([
                    ...socialMedia,
                    {
                        link: socialMediaLink,
                        color: socialInfo.color.replace("text", "bg").toString(),
                        icon: socialInfo.icon,
                        label: socialInfo.label,
                    },
                ]);
            }
        }
        else {
            setError(true);
        }
    };
    function handleSocialDelete(iconToDelete) {
        const filtered = socialMedia.filter((media) => media.icon !== iconToDelete);
        const linkFilter = activeMedias.filter((media) => media !== iconToDelete);
        setActiveMedias(linkFilter);
        updateSocialMedia(filtered);
        setSocialMediaId(0);
        setError(false);
    }
    // Contact
    const handleContactUpdate = (socialInfo) => {
        if (contactAddress !== "") {
            setContactId(0);
            const iconExists = contact.some((c) => c.icon == socialInfo.icon);
            if (iconExists) {
                updateContacts(contact.map((c) => c.icon == socialInfo.icon ? Object.assign(Object.assign({}, c), { link: contactAddress }) : c));
            }
            else {
                updateContacts([
                    ...contact,
                    {
                        link: contactAddress,
                        color: socialInfo.color.replace("text", "bg").toString(),
                        icon: socialInfo.icon,
                    },
                ]);
            }
        }
        else {
            setError(true);
        }
    };
    function handleContactDelete(iconToDelete) {
        const filtered = contact.filter((c) => c.icon !== iconToDelete);
        const contactFilter = contactsIcons.filter((c) => c !== iconToDelete);
        setContactsIcons(contactFilter);
        updateContacts(filtered);
        setContactId(0);
        setError(false);
    }
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between", children: [(0, jsx_runtime_1.jsx)("p", { className: "chakra text-white mb-4", children: (0, i18next_1.t)("content") }), (0, jsx_runtime_1.jsx)("button", { onClick: onClose, className: "lg:hidden block bi-x-lg mb-5" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "bg-white rounded p-2 mb-5 lg:overflow-hidden lg:h-auto h-[75dvh] overflow-y-scroll lg:pb-0 pb-5", children: [(0, jsx_runtime_1.jsx)("p", { className: "chakra mb-3 text-black", children: (0, i18next_1.t)("contact") }), (0, jsx_runtime_1.jsx)(ContentItems_1.default, { item: "contact", contents: contents_1.contactContents, id: contactId, error: error, selectedContents: contactsIcons, deleteItem: (iconName) => handleContactDelete(iconName), update: (content) => handleContactUpdate(content), setId: (value) => setContactId(value), onError: (error) => setError(error), onLink: (value) => setContactAddress(value) }), (0, jsx_runtime_1.jsx)("p", { className: "chakra mt-5 mb-3 text-black", children: (0, i18next_1.t)("socialMedia") }), (0, jsx_runtime_1.jsx)(ContentItems_1.default, { item: "media", contents: contents_1.socialMedias, id: socialMediaId, error: error, selectedContents: activeMedias, deleteItem: (iconName) => handleSocialDelete(iconName), update: (content) => handleSocialUpdate(content), setId: (value) => setSocialMediaId(value), onError: (error) => setError(error), onLink: (value) => setSocialMediaLink(value) })] })] }));
};
exports.default = Content;
