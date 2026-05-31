"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const Navbar_1 = __importDefault(require("../Navbar/Navbar"));
const Footer_1 = __importDefault(require("../Footer/Footer"));
const react_1 = require("react");
const useDocumentTitle_1 = __importDefault(require("../../hooks/useDocumentTitle"));
const pricing_1 = require("@/services/pricing");
const axios_1 = __importDefault(require("axios"));
const request_1 = require("@/services/request");
const Loading_1 = __importDefault(require("../Loading/Loading"));
const useSubscription_1 = __importDefault(require("@/hooks/useSubscription"));
const useUserData_1 = __importDefault(require("@/store/useUserData"));
const react_i18next_1 = require("react-i18next");
const Loader_1 = __importDefault(require("../Loader/Loader"));
const Pricing = () => {
    const [title] = (0, react_1.useState)("Pricing");
    (0, useDocumentTitle_1.default)(title);
    const { user } = (0, useUserData_1.default)();
    const { t } = (0, react_i18next_1.useTranslation)();
    // Scroll to top
    (0, react_1.useEffect)(() => {
        window.scrollTo(0, 0);
    }, []);
    const { quota } = (0, useSubscription_1.default)();
    const { plan, isAuthenticated } = (0, useUserData_1.default)();
    const [subscription, setSubscription] = (0, react_1.useState)();
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [changeFor, setChangeFor] = (0, react_1.useState)("");
    const [changeSuccess, setChangeSuccess] = (0, react_1.useState)(false);
    const [loader, setLoader] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        axios_1.default
            .get(`${request_1.baseUrl}/api/v1/dashboard/subscription-plan`, {
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
            setSubscription(response.data);
            setLoading(false);
        })
            .catch((error) => {
            console.log(error);
        });
    }, []);
    // Handle new subscription
    const handleSubscribe = (id) => {
        if (!isAuthenticated) {
            window.location.href = "/login";
            return;
        }
        const subscriptionPlan = plan && plan === "free" ? false : true;
        axios_1.default
            .post(`${request_1.baseUrl}/api/v1/payment/subscribe?price_id=${id}&change_plan=${subscriptionPlan}`, {}, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        })
            .then((response) => {
            window.location.href = response.data.url;
        })
            .catch((error) => {
            console.log(error);
        });
    };
    // Handle Change Subscription
    const handleChangeSubscription = (id) => {
        if (!isAuthenticated) {
            window.location.href = "/login";
            return;
        }
        setLoader(true);
        const subscriptionPlan = plan && plan === "free" ? false : true;
        axios_1.default
            .post(`${request_1.baseUrl}/api/v1/payment/subscribe?price_id=${id}&change_plan=${subscriptionPlan}`, {}, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        })
            .then(() => {
            setChangeSuccess(true);
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        })
            .catch((error) => {
            console.log(error);
        });
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [loading && (0, jsx_runtime_1.jsx)(Loading_1.default, {}), changeFor !== "" && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { className: "overlay top-0 z-[55]" }), (0, jsx_runtime_1.jsx)("div", { className: "fixed top-0 left-0 flex z-[60] justify-center items-center h-[100dvh] w-full lg:px-0 px-3", children: (0, jsx_runtime_1.jsx)("div", { className: "lg:w-[35%] w-full hero-bg rounded px-5 py-6 secondary-bg shadow shadow-zinc-900", children: !changeSuccess ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-gray-300 text-xl", children: t("change-plan") }), (0, jsx_runtime_1.jsx)("button", { onClick: () => setChangeFor(""), className: "text-right bi-x-lg text-red-500" })] }), (0, jsx_runtime_1.jsx)("p", { className: "text-sm  text-white my-5", children: t("change-msg") }), (0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between gap-x-10", children: [(0, jsx_runtime_1.jsx)("button", { onClick: () => setChangeFor(""), className: "w-full bg-sky-600 rounded text-white shadow-none h-12", children: t("cancel") }), (0, jsx_runtime_1.jsx)("button", { onClick: () => handleChangeSubscription(changeFor && changeFor === "proPlus"
                                                    ? subscription
                                                        ? subscription.pro.price_id
                                                        : ""
                                                    : subscription
                                                        ? subscription.proPlus.price_id
                                                        : ""), className: "w-full bg-green-500 rounded text-white shadow-none h-12", children: loader ? ((0, jsx_runtime_1.jsx)(Loader_1.default, {})) : ((0, jsx_runtime_1.jsxs)("p", { children: [t("change"), (0, jsx_runtime_1.jsx)("span", { className: "bi-trash-fill ms-3" })] })) })] })] })) : ((0, jsx_runtime_1.jsxs)("div", { className: "text-center mt-4", children: [(0, jsx_runtime_1.jsx)("p", { className: "bi-check-circle-fill text-green-500 text-4xl" }), (0, jsx_runtime_1.jsx)("p", { className: "text-white mt-5 chakra", children: t("change-success") })] })) }) })] })), (0, jsx_runtime_1.jsx)(Navbar_1.default, {}), (0, jsx_runtime_1.jsxs)("div", { className: "lg:container mx-auto lg:mt-36 mt-28 px-2", children: [(0, jsx_runtime_1.jsx)("h1", { className: "lg:text-4xl text-2xl lg:text-center font-extrabold text-white ps-2", children: t("pricingNote") }), (0, jsx_runtime_1.jsxs)("div", { className: "grid lg:grid-cols-3 md:grid-cols-2 gap-x-5 lg:my-29 md:my-20 my-10 lg:px-20 px-2", children: [(0, jsx_runtime_1.jsxs)("div", { className: "border border-gray-600 rounded-xl lg:px-10 px-5 lg:mb-0 mb-4 py-6 text-white", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-2xl font-extrabold mb-5", children: t("basic") }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-500", children: t("freePlanNote") }), (0, jsx_runtime_1.jsxs)("div", { className: "py-10 text-center", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-2xl font-extrabold my-4", children: t("free") }), plan !== "free" ? ((0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: !user ? "/login" : quota ? "/create" : "/dashboard", className: "text-center py-3 btn-bg shadow shadow-zinc-900 text-white rounded chakra", children: t("createNow") })) : plan === "free" && quota ? ((0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: !user ? "/login" : "/create", className: "text-center py-3 btn-bg shadow shadow-zinc-900 text-white rounded chakra", children: t("createNow") })) : ((0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: !user ? "/login" : "/dashboard", className: "text-center py-3 btn-bg shadow shadow-zinc-900 text-white rounded chakra", children: t("createNow") }))] }), pricing_1.free.map((f) => ((0, jsx_runtime_1.jsxs)("div", { className: "flex gap-x-2", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-center text-lg bi-check-circle-fill text-white rounded-full" }), " ", (0, jsx_runtime_1.jsx)("p", { className: "mb-3 lg:text-md text-sm pt-1", children: t(f.feature) })] }, f.id)))] }), (0, jsx_runtime_1.jsxs)("div", { className: "relative", children: [(0, jsx_runtime_1.jsx)("div", { className: "absolute lg:-top-10 h-40 bg-teal-500 rounded-t-xl text-white uppercase", children: (0, jsx_runtime_1.jsx)("p", { className: "pt-3 px-5 text-sm text-black", children: t("popular") }) }), (0, jsx_runtime_1.jsxs)("div", { className: "relative z-10 border-2 border-teal-500 rounded-xl lg:px-10 px-5 lg:mb-0 lg:mt-0 mt-14 mb-4 py-6 text-white secondary-bg", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-2xl font-extrabold mb-5", children: t("pro") }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-500", children: t("proPlanNote") }), (0, jsx_runtime_1.jsxs)("div", { className: "py-10 text-center my-4 w-full", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex justify-center gap-x-10 mb-4", children: [(0, jsx_runtime_1.jsxs)("h1", { className: "text-2xl font-extrabold ", children: ["\u20AC", subscription === null || subscription === void 0 ? void 0 : subscription.pro.price] }), (0, jsx_runtime_1.jsx)("p", { className: "text-sm chakra py-2", children: t("perMonth") })] }), plan === "pro" && ((0, jsx_runtime_1.jsx)("button", { className: "text-center w-full bg-gray-500  cursor-not-allowed py-3 px-10 shadow shadow-zinc-900 text-gray-300 rounded chakra", children: t("already-in-this-plan") })), plan === "proPlus" && ((0, jsx_runtime_1.jsx)("button", { onClick: () => setChangeFor("proPlus"), className: "text-center w-full py-3 btn-bg shadow shadow-zinc-900 text-white rounded chakra", children: t("change-to-this-plan") })), plan === "free" && ((0, jsx_runtime_1.jsx)("button", { onClick: () => handleSubscribe(subscription ? subscription.pro.price_id : ""), className: "text-center w-full py-3 btn-bg shadow shadow-zinc-900 text-white rounded chakra", children: t("subscribe") }))] }), (0, jsx_runtime_1.jsx)("p", { className: "mb-3 text-teal-500", children: t("proPlan") }), pricing_1.pro.map((p) => ((0, jsx_runtime_1.jsxs)("div", { className: "flex gap-x-2", children: [(0, jsx_runtime_1.jsx)("p", { className: "h-5 w-5 text-center text-lg bi-check-circle-fill text-teal-500 rounded-full" }), " ", (0, jsx_runtime_1.jsx)("p", { className: "mb-3 lg:text-md text-sm pt-1", children: t(p.feature) })] }, p.id)))] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "border border-gray-600 rounded-xl lg:px-10 px-5 lg:mb-0 mb-4 py-6 text-white", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-2xl font-extrabold mb-5", children: t("proPlus") }), (0, jsx_runtime_1.jsx)("p", { className: "chakra text-gray-600", children: t("proPlusPlanNote") }), (0, jsx_runtime_1.jsxs)("div", { className: "py-10 text-center my-4", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex justify-center gap-x-10 mb-4", children: [(0, jsx_runtime_1.jsxs)("h1", { className: "text-2xl font-extrabold ", children: ["\u20AC", subscription === null || subscription === void 0 ? void 0 : subscription.proPlus.price] }), (0, jsx_runtime_1.jsx)("p", { className: "text-sm chakra py-2", children: t("perMonth") })] }), plan === "proPlus" && ((0, jsx_runtime_1.jsx)("button", { className: "text-center w-full bg-gray-500  cursor-not-allowed py-3 px-10 shadow shadow-zinc-900 text-gray-300 rounded chakra", children: t("already-in-this-plan") })), plan === "free" && ((0, jsx_runtime_1.jsx)("button", { onClick: () => handleSubscribe(subscription ? subscription.proPlus.price_id : ""), className: "text-center w-full btn-bg py-3 px-10 shadow shadow-zinc-900 text-white rounded chakra", children: t("subscribe") })), plan === "pro" && ((0, jsx_runtime_1.jsx)("button", { onClick: () => setChangeFor("pro"), className: "text-center w-full btn-bg py-3 px-10 shadow shadow-zinc-900 text-white rounded chakra", children: t("change-to-this-plan") }))] }), (0, jsx_runtime_1.jsx)("p", { className: "mb-3 text-indigo-500", children: t("proPlan") }), pricing_1.proPlus.map((pp) => ((0, jsx_runtime_1.jsxs)("div", { className: "flex gap-x-2", children: [(0, jsx_runtime_1.jsx)("p", { className: "h-5 w-5 text-center text-lg bi-check-circle-fill text-indigo-500 rounded-full" }), " ", (0, jsx_runtime_1.jsx)("p", { className: "mb-3 lg:text-md text-sm pt-1", children: t(pp.feature) })] }, pp.id)))] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "grid grid-cols-4 border-b border-gray-600 text-white pb-5 mb-10 lg:mx-10 mx-2", children: [(0, jsx_runtime_1.jsx)("div", {}), (0, jsx_runtime_1.jsx)("div", { className: "text-center", children: (0, jsx_runtime_1.jsx)("p", { className: "lg:text-2xl text-sm font-extrabold", children: t("free") }) }), (0, jsx_runtime_1.jsxs)("div", { className: "text-center", children: [(0, jsx_runtime_1.jsx)("p", { className: "lg:text-2xl text-sm font-extrabold text-teal-500", children: t("pro") }), (0, jsx_runtime_1.jsxs)("p", { className: "lg:text-md text-xs text-gray-400 font-poppins", children: ["\u20AC", subscription === null || subscription === void 0 ? void 0 : subscription.pro.price] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "text-center", children: [(0, jsx_runtime_1.jsx)("p", { className: "lg:text-2xl text-sm font-extrabold text-violet-500", children: t("proPlus") }), (0, jsx_runtime_1.jsxs)("p", { className: "lg:text-md text-xs text-gray-400 font-poppins", children: ["\u20AC", subscription === null || subscription === void 0 ? void 0 : subscription.proPlus.price] })] })] }), pricing_1.pricingInfo.map((pi) => ((0, jsx_runtime_1.jsxs)("div", { className: "grid grid-cols-4 text-white mb-10 lg:px-10 px-2", children: [(0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("p", { className: "lg:text-lg text-xs", children: t(pi.title) }) }), (0, jsx_runtime_1.jsxs)("div", { className: "grid grid-cols-2 w-16 lg:ms-32 md:ms-20 ms-10 text-white", children: [(0, jsx_runtime_1.jsx)("p", { className: `${pi.value1.icon} lg:text-2xl text-sm`, children: " " }), (0, jsx_runtime_1.jsxs)("p", { className: "lg:text-lg text-sm font-poppins", children: [pi.value1.value !== 0 && pi.value1.value, " "] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "grid grid-cols-2 text-teal-500 w-16 lg:ms-32 md:ms-20 ms-10 ", children: [(0, jsx_runtime_1.jsx)("p", { className: `${pi.value2.icon} lg:text-2xl text-sm`, children: " " }), (0, jsx_runtime_1.jsxs)("p", { className: "lg:text-lg text-sm font-poppins", children: [pi.value2.value !== 0 && pi.value2.value, " "] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "grid grid-cols-2 text-violet-500 w-16 lg:ms-32 md:ms-20 ms-10", children: [(0, jsx_runtime_1.jsx)("p", { className: `${pi.value3.icon} lg:text-2xl text-sm`, children: " " }), (0, jsx_runtime_1.jsxs)("p", { className: "lg:text-lg text-sm font-poppins", children: [pi.value3.value !== 0 && pi.value3.value, " "] })] })] }, pi.id)))] }), (0, jsx_runtime_1.jsx)(Footer_1.default, {})] }));
};
exports.default = Pricing;
