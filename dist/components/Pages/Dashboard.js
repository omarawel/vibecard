"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const axios_1 = __importDefault(require("axios"));
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const request_1 = require("../../services/request");
const useUserData_1 = __importDefault(require("../../store/useUserData"));
const Navbar_1 = __importDefault(require("../Navbar/Navbar"));
const useDocumentTitle_1 = __importDefault(require("../../hooks/useDocumentTitle"));
const Loader_1 = __importDefault(require("../Loader/Loader"));
const ShareComponent_1 = __importDefault(require("../Share/ShareComponent"));
const useSubscription_1 = __importDefault(require("@/hooks/useSubscription"));
const react_i18next_1 = require("react-i18next");
const assets_1 = require("@/assets");
const Dashboard = () => {
    const [title] = (0, react_1.useState)("Dashboard");
    (0, useDocumentTitle_1.default)(title);
    const { t, i18n } = (0, react_i18next_1.useTranslation)();
    // Scroll to top
    (0, react_1.useEffect)(() => {
        window.scrollTo(0, 0);
    }, []);
    const { quota } = (0, useSubscription_1.default)();
    const [deleteCard, setDeleteCard] = (0, react_1.useState)(false);
    const [deletedCardUrl, setDeletedCardUrl] = (0, react_1.useState)("");
    const [loader, setLoader] = (0, react_1.useState)(false);
    const [deleteConfirmed, setDeleteConfirmed] = (0, react_1.useState)(false);
    const { user } = (0, useUserData_1.default)();
    const [links, setLinks] = (0, react_1.useState)([]);
    const [copiedUrls, setCopiedUrls] = (0, react_1.useState)([]);
    const [cardUrl, setCardUrl] = (0, react_1.useState)("");
    const [viewShare, setViewShare] = (0, react_1.useState)(false);
    // Get Cards
    (0, react_1.useEffect)(() => {
        axios_1.default
            .get(`${request_1.baseUrl}/api/v1/cards/my-cards`, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            withCredentials: true,
        })
            .then((response) => {
            const cards = response.data.map((card) => ({
                card_url: card.card_url,
                job_title: card.job_title,
                full_name: card.full_name,
                main_picture: card.main_picture,
                pronouns: card.pronouns,
                company_name: card.company_name,
            }));
            setLinks(cards);
        })
            .catch((err) => {
            console.log(err);
        });
    }, []);
    // Handle Copy
    const handleCopy = (card_url) => {
        navigator.clipboard
            .writeText(`http://vibecard.de/card/${card_url}`)
            .then(() => {
            setCopiedUrls((prev) => [...prev, card_url]);
            setTimeout(() => {
                setCopiedUrls((prev) => prev.filter((url) => url !== card_url));
            }, 10000);
        });
    };
    // Handle Delete
    const handleDelete = () => {
        setLoader(true);
        axios_1.default
            .get(`${request_1.baseUrl}/api/v1/cards/delete/${deletedCardUrl}`, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            withCredentials: true,
        })
            .then(() => {
            setDeleteConfirmed(true);
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        })
            .catch((err) => {
            setLoader(false);
            console.log(err);
        });
    };
    // Handle Subscription
    const handleManageSubscription = () => {
        axios_1.default
            .get(`${request_1.baseUrl}/api/v1/payment/manage-subscription`, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        })
            .then((response) => {
            window.location.href = response.data;
        })
            .catch((error) => {
            console.log(error);
        });
    };
    // Add to Google Wallet
    const handleGoogleWallet = (cardLink) => {
        axios_1.default
            .post(`${request_1.baseUrl}/api/v1/cards/add-to-g-wallet?card_id=${cardLink}`, {}, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        })
            .then((response) => {
            window.location.href = response.data.link;
        })
            .catch((error) => {
            console.log(error);
        });
    };
    // Share infos
    const shareTitle = "Vibecard Digital Business Card";
    const description = "Check out my new digital business card created with Vibecard!";
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [deleteCard && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { className: "overlay top-0 z-[55]" }), (0, jsx_runtime_1.jsx)("div", { className: "fixed top-0 left-0 flex z-[60] justify-center items-center h-[100dvh] w-full lg:px-0 px-3", children: (0, jsx_runtime_1.jsx)("div", { className: "lg:w-[35%] w-full hero-bg rounded px-5 py-6 secondary-bg shadow shadow-zinc-900", children: !deleteConfirmed ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-red-500 text-xl", children: t("delete-card") }), (0, jsx_runtime_1.jsx)("button", { onClick: () => setDeleteCard(false), className: "text-right bi-x-lg text-red-500" })] }), (0, jsx_runtime_1.jsx)("p", { className: "text-sm  text-white my-5", children: t("are-u-sure") }), (0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between gap-x-10", children: [(0, jsx_runtime_1.jsx)("button", { onClick: () => setDeleteCard(false), className: "w-full bg-sky-600 rounded text-white shadow-none h-12", children: t("cancel") }), (0, jsx_runtime_1.jsx)("button", { onClick: () => handleDelete(), className: "w-full bg-red-500 rounded text-white shadow-none h-12", children: loader ? ((0, jsx_runtime_1.jsx)(Loader_1.default, {})) : ((0, jsx_runtime_1.jsxs)("p", { children: [t("delete"), (0, jsx_runtime_1.jsx)("span", { className: "bi-trash-fill ms-3" })] })) })] })] })) : ((0, jsx_runtime_1.jsxs)("div", { className: "text-center mt-4", children: [(0, jsx_runtime_1.jsx)("p", { className: "bi-check-circle-fill text-green-500 text-4xl" }), (0, jsx_runtime_1.jsx)("p", { className: "text-white mt-5 text-xl chakra", children: t("delete-success") })] })) }) })] })), (0, jsx_runtime_1.jsx)(Navbar_1.default, {}), (0, jsx_runtime_1.jsx)("div", { className: "h-[100vh]", children: (0, jsx_runtime_1.jsx)("div", { className: "lg:container mx-auto px-3 lg:mt-24 mt-20", children: (0, jsx_runtime_1.jsx)("div", { className: "flex justify-center lg:mt-20 mt-10 lg:shadow lg:pb-20 lg:rounded", children: (0, jsx_runtime_1.jsxs)("div", { className: "lg:grid grid-cols-10 gap-", children: [(0, jsx_runtime_1.jsx)("div", { className: "lg:col-span-6 lg:px-1 md:p-9 py-5 px-2 ", children: (0, jsx_runtime_1.jsxs)("div", { className: "content-center text-white", children: [(0, jsx_runtime_1.jsxs)("h1", { className: "lg:text-4xl text-2xl", children: [t("welcome"), " ", (0, jsx_runtime_1.jsx)("span", { className: "text-teal-400", children: user })] }), (0, jsx_runtime_1.jsx)("p", { className: "lg:mb-0 lg:text-3xl text-lg mt-10 mb-5 font-poppins", children: t("dashboardDesc") }), (0, jsx_runtime_1.jsxs)("div", { className: "lg:flex gap-x-6", children: [(0, jsx_runtime_1.jsx)("button", { onClick: () => handleManageSubscription(), className: "font-poppins btn-bg shadow rounded lg:w-72 w-full mt-3 lg:mb-0 mb-5", children: t("dashBtn2") }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/my-orders", className: "font-poppins btn-bg shadow rounded lg:w-72 w-full mt-3 lg:mb-0 mb-5", children: t("dashBtn3") })] }), links.length > 0 && ((0, jsx_runtime_1.jsxs)("div", { className: "mt-10 shadow", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-2xl mb-4 py-5 font-poppins", children: t("previousCard") }), links.map((link) => ((0, jsx_runtime_1.jsx)("div", { className: "flex justify-between bg-white mb-5 rounded-xl shadow border-gradient-2 border shadow-zinc-900 pt-3", children: (0, jsx_runtime_1.jsxs)("div", { className: "relative grid lg:grid-cols-12 grid-cols-2 lg:gap-2 gap-y-7 justify-between w-full text-white lg:p-5 py-3 ps-5 mb-4 shadow-zinc-900", children: [viewShare && cardUrl === link.card_url && ((0, jsx_runtime_1.jsxs)("div", { className: "absolute lg:right-32 right-0 lg:px-0 px-5 z-50 top-10 lg:-top-20 secondary-bg border-gradient py-1 space-x-2", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between px-5 mt-2 mb-4", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-sm", children: "Share your card" }), (0, jsx_runtime_1.jsx)("button", { onClick: () => setViewShare(false), className: "bi-x text-xl text-red-400" })] }), (0, jsx_runtime_1.jsx)("div", { className: "space-x-3 flex mb-3", children: (0, jsx_runtime_1.jsx)(ShareComponent_1.default, { url: `http://vibecard.de/card/${link.card_url}`, title: shareTitle, description: description }) })] })), (0, jsx_runtime_1.jsx)("div", { className: "w-full lg:col-span-4 col-span-2", children: (0, jsx_runtime_1.jsxs)("div", { className: "lg:flex lg:border-r border-gray-700 lg:mb-0 mb-4", children: [(0, jsx_runtime_1.jsx)("img", { src: link.main_picture, alt: "Card Image", className: "rounded-full lg:w-14 w-14 h-14 object-cover border-gradient" }), (0, jsx_runtime_1.jsxs)("div", { className: "content-center lg:ms-3 text-black", children: [(0, jsx_runtime_1.jsxs)("p", { className: "font-poppins font-extrabold", children: [link.pronouns, " ", link.full_name] }), (0, jsx_runtime_1.jsxs)("p", { className: "text-xs font-poppins", children: [t("job"), ":", link.job_title] }), (0, jsx_runtime_1.jsxs)("p", { className: "font-poppins text-xs", children: [t("worksAt"), " : ", link.company_name] })] })] }) }), (0, jsx_runtime_1.jsx)("div", { className: "w-full lg:col-span-2 lg:text-center text-black", children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Link, { to: `/card/${link.card_url}`, className: "block hover:text-gray-400 font-poppins", children: [t("view") + " ", (0, jsx_runtime_1.jsx)("span", { className: "bi-arrow-up-right text-sky-900 ms-1" })] }) }), (0, jsx_runtime_1.jsx)("div", { className: "w-full lg:col-span-2 lg:text-center text-black", children: (0, jsx_runtime_1.jsxs)("button", { onClick: () => handleCopy(link.card_url), className: `font-poppins`, children: [(0, jsx_runtime_1.jsx)("span", { className: "bi-clipboard me-2" }), copiedUrls.includes(link.card_url)
                                                                                ? t("copied")
                                                                                : t("copy")] }) }), (0, jsx_runtime_1.jsx)("div", { className: "w-full lg:col-span-2 lg:text-center text-black", children: (0, jsx_runtime_1.jsxs)("button", { onClick: () => {
                                                                            setViewShare(true);
                                                                            setCardUrl(link.card_url);
                                                                        }, className: `font-poppins`, children: [(0, jsx_runtime_1.jsx)("span", { className: "bi-share-fill me-2" }), t("share")] }) }), (0, jsx_runtime_1.jsx)("div", { className: "w-full lg:col-span-2 lg:text-center text-black", children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Link, { to: `/create?edit=${link.card_url}`, className: "block font-poppins mb-2 hover:text-gray-400", children: [(0, jsx_runtime_1.jsx)("span", { className: "bi-pen-fill text-green-600" }), " ", t("edit")] }) }), (0, jsx_runtime_1.jsx)("div", { className: "lg:col-span-4 lg:block hidden" }), (0, jsx_runtime_1.jsx)("div", { className: "w-full lg:col-span-2 lg:text-center", children: (0, jsx_runtime_1.jsxs)("button", { onClick: () => {
                                                                            setDeletedCardUrl(link.card_url);
                                                                            setDeleteCard(true);
                                                                        }, className: "rounded-lg font-poppins hover:text-gray-400 text-black", children: [(0, jsx_runtime_1.jsx)("span", { className: "bi-trash-fill text-red-600" }), " ", t("delete")] }) }), (0, jsx_runtime_1.jsx)("div", { className: "lg:col-span-4 text-center col-span-2", children: (0, jsx_runtime_1.jsxs)("button", { onClick: () => handleGoogleWallet(link.card_url), className: "flex justify-center gap-x-2 lg:ps-4", children: [i18n.language !== "de" && ((0, jsx_runtime_1.jsx)("img", { src: assets_1.enGW, alt: "Google Wallet", className: "w-52" })), i18n.language === "de" && ((0, jsx_runtime_1.jsx)("img", { src: assets_1.deGW, alt: "Google Wallet", className: "lg:w-auto w-72" }))] }) })] }) }, link.card_url)))] }))] }) }), (0, jsx_runtime_1.jsx)("div", { className: "lg:col-span-4 mb-5", children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: quota ? "/create" : "/pricing", children: (0, jsx_runtime_1.jsxs)("div", { className: "flex justify-center mx-2 gap-x-10 btn-bg px-0 lg:mx-10 py-20 lg:mt-14 shadow-none", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-center bi-plus-lg mb-8  bg-white w-10 h-10 rounded-full pt-2 text-black shadow-lg" }), (0, jsx_runtime_1.jsx)("p", { className: "text-white font-poppins mt-2", children: t("dashBtn") })] }) }) })] }) }) }) })] }));
};
exports.default = Dashboard;
