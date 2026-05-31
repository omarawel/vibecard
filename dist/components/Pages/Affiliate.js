"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const AffiliateNavbar_1 = __importDefault(require("../Ambassador/AffiliateNavbar"));
const AffiliateFooter_1 = __importDefault(require("../Ambassador/AffiliateFooter"));
const useAmbassador_1 = __importDefault(require("@/store/useAmbassador"));
const react_i18next_1 = require("react-i18next");
const axios_1 = __importDefault(require("axios"));
const request_1 = require("@/services/request");
const Affiliate = () => {
    const { t } = (0, react_i18next_1.useTranslation)();
    const [me, setMe] = (0, react_1.useState)(null);
    const [aboveMe, setAboveMe] = (0, react_1.useState)([]);
    const [topEarners, setTopEarners] = (0, react_1.useState)([]);
    // Scroll to top
    (0, react_1.useEffect)(() => {
        window.scrollTo(0, 0);
    }, []);
    const { firstName, lastName, earning, referral_code, conversions, orders, referrals, sales, } = (0, useAmbassador_1.default)();
    (0, react_1.useEffect)(() => {
        axios_1.default
            .get(`${request_1.baseUrl}/api/v1/ambassador/stats`, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        })
            .then((response) => {
            setMe(response.data.me);
            setAboveMe(response.data.users_above);
            setTopEarners(response.data.top_earners);
        })
            .catch((error) => {
            console.log(error);
        });
    }, []);
    const [copied, setCopied] = (0, react_1.useState)(false);
    // Copy to clipboard
    const copyToClipboard = (referral_code) => {
        navigator.clipboard
            .writeText(referral_code)
            .then(() => {
            setCopied(true); // Set copied to true
            setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
        })
            .catch((err) => {
            console.error("Failed to copy: ", err);
        });
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { className: "lg:container mx-auto px-2", children: [(0, jsx_runtime_1.jsx)(AffiliateNavbar_1.default, {}), (0, jsx_runtime_1.jsxs)("div", { className: "mt-10", children: [(0, jsx_runtime_1.jsxs)("p", { className: "text-xl text-white font-poppins", children: [t("welcomeAffiliate"), " ", (0, jsx_runtime_1.jsx)("span", { className: "text-teal-500", children: firstName + " " + lastName }), "."] }), (0, jsx_runtime_1.jsxs)("div", { className: "text-white mt-5", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-xl mb-2 font-poppins", children: t("referralLink") }), (0, jsx_runtime_1.jsx)("p", { className: "mb-1 text-gray-400 font-poppins", children: t("referFriends") }), (0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between border border-gray-300 rounded-xl shadow-sm p-4 my-5 lg:w-[50%]", children: [(0, jsx_runtime_1.jsx)("p", { className: "px-4 rounded lg:w-full overflow-hidden text-teal-500 text-ellipsis ", children: referral_code }), (0, jsx_runtime_1.jsxs)("button", { onClick: () => referral_code && copyToClipboard(referral_code), className: `text-sm flex items-center justify-center lg:w-full ${copied ? "text-green-500" : "text-blue-500"}`, children: [(0, jsx_runtime_1.jsx)("span", { className: `mx-1 ${copied ? "bi-check-lg" : "bi-copy"}` }), " ", copied ? "Copied" : "Copy Referral"] })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "mt-5 text-white", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-2xl text-white font-poppins", children: t("commission") }), (0, jsx_runtime_1.jsx)("p", { className: "font-poppins lg:text-md text-sm text-gray-300 mt-1", children: t("commissionNote") })] }), (0, jsx_runtime_1.jsxs)("div", { className: "grid lg:grid-cols-3 grid-cols-2 mt-6 lg:gap-x-10 gap-x-3", children: [(0, jsx_runtime_1.jsxs)("div", { className: "border mb-5 border-gray-700 rounded px-4 py-5 text-white secondary-bg", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-2xl", children: referrals }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-500 text-sm", children: t("referrals") })] }), (0, jsx_runtime_1.jsxs)("div", { className: "border mb-5 border-gray-700 rounded px-4 py-5 text-white secondary-bg", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-2xl", children: orders }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-500 text-sm", children: t("orders") })] }), (0, jsx_runtime_1.jsxs)("div", { className: "border mb-5 border-gray-700 rounded px-4 py-5 text-white secondary-bg", children: [(0, jsx_runtime_1.jsxs)("h1", { className: "text-2xl", children: [conversions, "%"] }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-500 text-sm", children: t("conversations") })] }), (0, jsx_runtime_1.jsxs)("div", { className: "border mb-5 border-gray-700 rounded px-4 py-5 text-white secondary-bg", children: [(0, jsx_runtime_1.jsxs)("h1", { className: "text-2xl", children: ["\u20AC", sales] }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-500 text-sm", children: t("sales") })] }), (0, jsx_runtime_1.jsxs)("div", { className: "border mb-5 border-gray-700 rounded px-4 py-5 text-white secondary-bg", children: [(0, jsx_runtime_1.jsxs)("h1", { className: "text-2xl", children: ["\u20AC", earning] }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-500 text-sm", children: t("earn") })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "grid lg:grid-cols-3 grid-cols-1 lg:gap-x-10", children: [(0, jsx_runtime_1.jsxs)("div", { className: "lg:mt-0 mt-5 border border-gray-700 rounded text-white secondary-bg", children: [(0, jsx_runtime_1.jsxs)("div", { className: "p-5 pb-7 border-b border-gray-700", children: [(0, jsx_runtime_1.jsxs)("h1", { className: "text-sm", children: [t("rank"), " ", me === null || me === void 0 ? void 0 : me.name] }), (0, jsx_runtime_1.jsx)("h1", { className: "text-3xl", children: me === null || me === void 0 ? void 0 : me.rank })] }), aboveMe.length > 0 &&
                                                aboveMe.map((above) => ((0, jsx_runtime_1.jsxs)("div", { className: "flex border-b border-gray-700 pb-1 justify-between px-4 mt-2 text-gray-400", children: [(0, jsx_runtime_1.jsxs)("p", { className: "font-poppins", children: ["# ", above.rank, " ", above.name] }), (0, jsx_runtime_1.jsxs)("p", { className: "font-poppins", children: ["\u20AC", above.earning] })] })))] }), (0, jsx_runtime_1.jsx)("div", { className: "lg:mt-0 mt-5 border border-gray-700 rounded text-white secondary-bg py-3 px-5", children: topEarners.length > 0 &&
                                            topEarners.map((top) => ((0, jsx_runtime_1.jsxs)("div", { className: "flex pt-3 border-b border-gray-700 pb-2", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-poppins", children: top.rank }), (0, jsx_runtime_1.jsxs)("p", { className: "ms-5 bi-person-fill", children: [" ", top.name] })] }))) }), (0, jsx_runtime_1.jsx)("div", { className: "lg:mt-0 mt-5 border border-gray-700 rounded text-white secondary-bg py-3 px-5", children: (0, jsx_runtime_1.jsx)("div", { className: "flex justify-center items-center h-full", children: (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("p", { children: t("productSold") }), (0, jsx_runtime_1.jsx)("h1", { className: "text-8xl mt-5", children: orders })] }) }) })] })] })] }), (0, jsx_runtime_1.jsx)(AffiliateFooter_1.default, {})] }));
};
exports.default = Affiliate;
