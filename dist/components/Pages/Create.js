"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const react_1 = require("react");
const DefaultCard_1 = __importDefault(require("../Layout/DefaultCard"));
const CenteredCard_1 = __importDefault(require("../Layout/CenteredCard"));
const RightCard_1 = __importDefault(require("../Layout/RightCard"));
const SmallDeviceSidebar_1 = __importDefault(require("../Create/SmallDeviceSidebar"));
const Sidebar_1 = __importDefault(require("../Create/Sidebar"));
const Colors_1 = __importDefault(require("../Create/Sidebar/Colors"));
const Texts_1 = __importDefault(require("../Create/Sidebar/Texts"));
const Content_1 = __importDefault(require("../Create/Sidebar/Content"));
const Layout_1 = __importDefault(require("../Create/Sidebar/Layout"));
const assets_1 = require("../../assets");
const Navbar_1 = __importDefault(require("../Navbar/Navbar"));
const useDocumentTitle_1 = __importDefault(require("../../hooks/useDocumentTitle"));
const request_1 = require("@/services/request");
const axios_1 = __importDefault(require("axios"));
const useCardData_1 = require("../../store/useCardData");
const useUserData_1 = __importDefault(require("../../store/useUserData"));
const useContentStore_1 = require("@/store/useContentStore");
const useTextColorStore_1 = require("@/store/useTextColorStore");
const useLayoutStore_1 = require("../../store/useLayoutStore");
const useCoverColorStore_1 = require("@/store/useCoverColorStore");
const useCardColorStore_1 = require("@/store/useCardColorStore");
const EditForm_1 = __importDefault(require("../Create/EditForm"));
const CreateForm_1 = __importDefault(require("../Create/CreateForm"));
const Loading_1 = __importDefault(require("../Loading/Loading"));
const react_i18next_1 = require("react-i18next");
const Create = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const { t } = (0, react_i18next_1.useTranslation)();
    // Scroll to top
    (0, react_1.useEffect)(() => {
        window.scrollTo(0, 0);
    }, []);
    const [loading, setLoading] = (0, react_1.useState)(false);
    const location = (0, react_router_dom_1.useLocation)();
    const searchParams = new URLSearchParams(location.search);
    const editedUrl = searchParams.get("edit");
    const [title] = (0, react_1.useState)(`${editedUrl ? "Edit" : "Create"} Card`);
    (0, useDocumentTitle_1.default)(title);
    // Subscription
    (0, react_1.useEffect)(() => {
        if (!editedUrl) {
            axios_1.default
                .get(`${request_1.baseUrl}/api/v1/auth/can-create-card`, {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            })
                .then(() => {
                setLoading(false);
            })
                .catch(() => {
                navigate("/pricing");
            });
        }
    }, []);
    // Reload
    (0, react_1.useEffect)(() => {
        const handleBeforeUnload = (event) => {
            const message = "Are you sure you want to leave? Your changes might not be saved.";
            event.returnValue = message; // Standard for most browsers
            return message; // For some older browsers
        };
        const handlePopState = () => {
            // Logic for detecting navigation
            const confirmNavigation = window.confirm("Are you sure you want to leave this page? Your changes might not be saved.");
            if (!confirmNavigation) {
                // Prevent the navigation by pushing a new state
                window.history.pushState(null, "", window.location.href);
            }
        };
        // Add event listeners
        window.addEventListener("beforeunload", handleBeforeUnload);
        window.addEventListener("popstate", handlePopState);
        // Cleanup event listeners on component unmount
        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
            window.removeEventListener("popstate", handlePopState);
        };
    }, []);
    // Store
    const { preview, setCardCompany, setCardEmail, setCardJob, setCardLocation, setCardName, setPreview, setCardTagLine, setCardPronoun, setCardPhone, } = (0, useCardData_1.useCardData)();
    const { updateContacts, updateCoverLogo, updateSocialMedia } = (0, useContentStore_1.useContentStore)();
    const { updateColor, updateFont, updateSize } = (0, useTextColorStore_1.useTextColorStore)();
    const { updateLayout } = (0, useLayoutStore_1.useLayoutStore)();
    const { updateCoverColor } = (0, useCoverColorStore_1.useCoverColorStore)();
    const { updateCardColor } = (0, useCardColorStore_1.useCardColorStore)();
    (0, react_1.useEffect)(() => {
        if (editedUrl) {
            setLoading(true);
            axios_1.default
                .get(`${request_1.baseUrl}/api/v1/cards/card/${editedUrl}`)
                .then((response) => {
                const data = response.data;
                // Parse the styles JSON string
                let styles;
                if (typeof data.styles === "string") {
                    try {
                        styles = JSON.parse(data.styles);
                    }
                    catch (e) {
                        return;
                    }
                }
                // Layout
                updateLayout(data.card_layout);
                // Cards
                setCardName(data.full_name);
                setCardPronoun(data.pronouns);
                setCardCompany(data.company_name);
                setCardEmail(data.email);
                setCardJob(data.job_title);
                setCardLocation(data.location);
                setCardPhone(data.phone);
                setCardTagLine(data.bio);
                setPreview("cover", data.covor_picture);
                setPreview("logo", data.company_logo);
                setPreview("profile", data.main_picture);
                updateContacts(styles.contacts.map((c) => ({
                    link: c.link,
                    icon: c.icon,
                    color: c.color,
                })));
                // Social Media
                updateSocialMedia(styles.socialMedia.map((c) => ({
                    link: c.link,
                    icon: c.icon,
                    color: c.color,
                })));
                //  Company Logo
                if (data.company_logo !== "" || null) {
                    updateCoverLogo(true);
                }
                // Card BG and Cover
                // updateCoverColor(data.covor_picture ? "" : styles.coverBG.bg_color);
                updateCoverColor(styles.coverBG.bg_color);
                updateCardColor(styles.cardBg.bg_color);
                // Font Color
                updateColor("tagLine", styles.bio.font_color);
                updateColor("company", styles.company.font_color);
                updateColor("jobTitle", styles.jobTitle.font_color);
                updateColor("name", styles.name.font_color);
                updateColor("pronoun", styles.pronoun.font_color);
                updateColor("location", styles.location.font_color);
                updateColor("button", styles.button.bg_color);
                // Font Style
                updateFont("tagLine", styles.bio.font_style);
                updateFont("company", styles.company.font_style);
                updateFont("jobTitle", styles.jobTitle.font_style);
                updateFont("name", styles.name.font_style);
                updateFont("pronoun", styles.pronoun.font_style);
                updateFont("location", styles.location.font_style);
                updateFont("button", styles.button.text_color);
                // Font Size
                updateSize("tagLine", styles.bio.font_size);
                updateSize("company", styles.company.font_size);
                updateSize("jobTitle", styles.jobTitle.font_size);
                updateSize("name", styles.name.font_size);
                updateSize("pronoun", styles.pronoun.font_size);
                updateSize("location", styles.location.font_size);
                setLoading(false);
            })
                .catch((err) => {
                console.log(err);
            });
        }
        else {
            // Layout
            updateLayout("default");
            // Cards
            setCardName(null);
            setCardPronoun(null);
            setCardCompany(null);
            setCardEmail(null);
            setCardJob(null);
            setCardLocation(null);
            setCardPhone(null);
            setCardTagLine(null);
            setPreview("cover", null);
            setPreview("logo", null);
            setPreview("profile", null);
            // Contacts
            updateContacts([
                {
                    link: "",
                    icon: "bi-envelope-fill",
                    color: "#ffffff",
                },
                {
                    link: "",
                    icon: "bi-telephone-fill",
                    color: "#22c55e",
                },
            ]);
            // Social Media
            updateSocialMedia([]);
            updateColor("tagLine", "#9ca3af");
            updateColor("company", "#9ca3af");
            updateColor("jobTitle", "#2dd4bf");
            updateColor("name", "#ffffff");
            updateColor("pronoun", "#9ca3af");
            updateColor("location", "#9ca3af");
            updateColor("button", "#14b8a6");
            // Font Style
            updateFont("tagLine", "ubuntu");
            updateFont("company", "metamorphous");
            updateFont("jobTitle", "syne");
            updateFont("name", "font-poppins");
            updateFont("pronoun", "font-monospace");
            updateFont("location", "roboto");
            updateFont("button", "#000000");
            // Card BG and Cover
            updateCoverColor("gradient-cover");
            updateCardColor("#222222");
            // Font Size
            updateSize("tagLine", "text-sm");
            updateSize("company", "text-sm");
            updateSize("jobTitle", "text-lg");
            updateSize("name", "text-xl");
            updateSize("pronoun", "text-sm");
            updateSize("location", "text-sm");
            updateSize("button", "");
        }
    }, []);
    const { layout, watermark, updateWatermark } = (0, useLayoutStore_1.useLayoutStore)();
    const { user, plan } = (0, useUserData_1.default)();
    // States
    const [modal, setModal] = (0, react_1.useState)(false);
    const [activeModal, setActiveModal] = (0, react_1.useState)("");
    const [previewCard, setPreviewCard] = (0, react_1.useState)(false);
    const [removeWatermark, setRemoveWatermark] = (0, react_1.useState)(false);
    // Sidebar Small Device
    const handleModal = (value) => {
        if (value === activeModal) {
            setModal(false);
            setActiveModal("");
        }
        else {
            setModal(true);
            setActiveModal(value);
        }
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [loading && (0, jsx_runtime_1.jsx)(Loading_1.default, {}), (0, jsx_runtime_1.jsxs)("div", { className: "text-white relative lg:h-auto h-[100dvh]", children: [(0, jsx_runtime_1.jsx)("div", { className: "lg:hidden", children: (0, jsx_runtime_1.jsx)(Navbar_1.default, {}) }), (0, jsx_runtime_1.jsxs)("div", { className: "lg:grid lg:grid-cols-9 lg:mt-0 mt-8", children: [(0, jsx_runtime_1.jsx)("div", { className: "lg:block hidden col-span-2 sticky top-0 h-[100dvh]", children: (0, jsx_runtime_1.jsx)(Sidebar_1.default, {}) }), (0, jsx_runtime_1.jsx)("div", { className: "absolute lg:block hidden w-full", children: (0, jsx_runtime_1.jsx)("div", { className: "grid grid-cols-9", children: (0, jsx_runtime_1.jsx)("div", { className: "col-start-3 col-span-7 nav-bg shadow shadow-gray-800 secondary-bg", children: (0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between px-5 text-white", children: [(0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/", children: (0, jsx_runtime_1.jsx)("p", { className: "text-3xl ps-3 logo-font text-white py-3", children: "vibecard" }) }) }), (0, jsx_runtime_1.jsxs)("div", { className: "mt-4 flex me-4", children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/dashboard", className: "me-16 font-poppins", children: t("nav4") }), plan !== "free" ? ((0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/insights", className: "me-16 font-poppins", children: t("nav7") })) : ((0, jsx_runtime_1.jsxs)("div", { className: "relative", children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/pricing", className: "me-16 font-poppins", children: t("nav7") }), (0, jsx_runtime_1.jsx)("p", { className: "absolute -top-3 right-10 bg-blue-500 rounded-full text-center h-4 text-[10px] w-10 pt-[1px] font-poppins shadow-inner shadow-red-950", children: "Pro +" })] })), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/setting", className: "me-5 font-poppins", children: t("nav6") }), (0, jsx_runtime_1.jsxs)("div", { className: "flex ms-10", children: [(0, jsx_runtime_1.jsx)("img", { src: preview.profile ? preview.profile : assets_1.userPic, alt: "user", className: "w-8 h-8 overflow-hidden rounded-full" }), (0, jsx_runtime_1.jsx)("p", { className: "ms-3 text-teal-400 font-poppins font-bold mt-1 text-ellipsis text-nowrap overflow-hidden", children: user })] })] })] }) }) }) }), (0, jsx_runtime_1.jsx)("div", { onClick: () => setPreviewCard(!previewCard), className: `lg:hidden fixed bottom-20 right-2 text-white px-2 py-1 z-40`, children: (0, jsx_runtime_1.jsx)("p", { className: `${previewCard ? "bi-eye-slash-fill" : "bi-eye-fill"} text-xl` }) }), (0, jsx_runtime_1.jsx)("div", { className: `block ${previewCard && "hidden"} col-span-5 w-full lg:p-3 p-1 lg:mt-20 lg:pt-0 pt-2`, children: editedUrl ? ((0, jsx_runtime_1.jsx)(EditForm_1.default, { layout: layout })) : ((0, jsx_runtime_1.jsx)(CreateForm_1.default, { layout: layout })) }), (0, jsx_runtime_1.jsx)("div", { className: `lg:flex  ${!previewCard && "hidden"} lg:col-span-2 lg:pe-5 lg:pt-0 lg:pb-0 pt-5 lg:h-auto pb-10 px-3 h-[95vh] overflow-scroll lg:mt-20`, children: (0, jsx_runtime_1.jsxs)("div", { className: "content-center w-full", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between", children: [(0, jsx_runtime_1.jsx)("p", { className: "mb-4 font-poppins", children: t("cardPreview") }), plan === "proPlus" ? ((0, jsx_runtime_1.jsx)("div", { className: "relative flex gap-x-1", children: (0, jsx_runtime_1.jsxs)("div", { className: "toggle-switch", children: [(0, jsx_runtime_1.jsx)("input", { onChange: () => {
                                                                    setRemoveWatermark(!removeWatermark);
                                                                    updateWatermark(!watermark);
                                                                }, className: "toggle-input", id: "toggle", type: "checkbox" }), (0, jsx_runtime_1.jsx)("label", { className: "toggle-label", htmlFor: "toggle" })] }) })) : ((0, jsx_runtime_1.jsxs)("div", { className: "relative flex gap-x-1", children: [(0, jsx_runtime_1.jsxs)("div", { className: "toggle-switch", children: [(0, jsx_runtime_1.jsx)("input", { className: "toggle-input", id: "toggle", type: "checkbox", disabled: true }), (0, jsx_runtime_1.jsx)("label", { className: "toggle-label", htmlFor: "toggle" })] }), (0, jsx_runtime_1.jsx)("p", { className: "bg-blue-500 rounded-full text-center h-5 text-xs w-14 pt-[1px] font-poppins shadow-inner shadow-red-950", children: "Pro +" }), (0, jsx_runtime_1.jsx)("p", { className: "absolute -top-5  right-0 text-xs font-poppins text-gray-400", children: "Remove watermark" })] }))] }), layout === "default" && ((0, jsx_runtime_1.jsx)(DefaultCard_1.default, { watermark: removeWatermark })), layout === "center" && ((0, jsx_runtime_1.jsx)(CenteredCard_1.default, { watermark: removeWatermark })), layout === "right" && (0, jsx_runtime_1.jsx)(RightCard_1.default, { watermark: removeWatermark })] }) })] }), modal && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { className: "overlay z-50", onClick: () => {
                                    setModal(false);
                                    setActiveModal("");
                                } }), (0, jsx_runtime_1.jsxs)("div", { className: "z-50 secondary-bg h-[95dvh] fixed bottom-4 w-full rounded-t-3xl text-white pb-10 animate__animated animate__fadeInUp", children: [modal && activeModal === "colors" && ((0, jsx_runtime_1.jsx)("div", { className: "p-5", children: (0, jsx_runtime_1.jsx)(Colors_1.default, { onClose: () => {
                                                setModal(false);
                                                setActiveModal("");
                                            } }) })), modal && activeModal === "text" && ((0, jsx_runtime_1.jsx)("div", { className: "p-5", children: (0, jsx_runtime_1.jsx)(Texts_1.default, { onClose: () => {
                                                setModal(false);
                                                setActiveModal("");
                                            } }) })), modal && activeModal === "content" && ((0, jsx_runtime_1.jsx)("div", { className: "p-5", children: (0, jsx_runtime_1.jsx)(Content_1.default, { onClose: () => {
                                                setModal(false);
                                                setActiveModal("");
                                            } }) })), modal && activeModal === "layout" && ((0, jsx_runtime_1.jsx)("div", { className: "p-5", children: (0, jsx_runtime_1.jsx)(Layout_1.default, { onClose: () => {
                                                setModal(false);
                                                setActiveModal("");
                                            } }) }))] })] })), !previewCard && ((0, jsx_runtime_1.jsx)("div", { className: "lg:hidden fixed -bottom-1 w-full z-50 border-t border-gray-600", children: (0, jsx_runtime_1.jsx)(SmallDeviceSidebar_1.default, { active: activeModal, handleClick: (value) => handleModal(value) }) }))] })] }));
};
exports.default = Create;
