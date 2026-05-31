"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
const Navbar_1 = __importDefault(require("../Navbar/Navbar"));
const react_1 = require("react");
const useDocumentTitle_1 = __importDefault(require("../../hooks/useDocumentTitle"));
const Chart_1 = __importDefault(require("../Insights/Chart"));
const Cards_1 = __importDefault(require("../Insights/Cards"));
const useInsightStore_1 = require("@/store/useInsightStore");
const axios_1 = __importDefault(require("axios"));
const request_1 = require("@/services/request");
const History_1 = __importDefault(require("../Insights/History"));
const DatePicker_1 = __importDefault(require("../Insights/DatePicker"));
const LinkTaps_1 = __importDefault(require("../Insights/LinkTaps"));
const React = __importStar(require("react"));
const date_fns_1 = require("date-fns");
const filter_1 = __importDefault(require("@/services/filter"));
const useUserData_1 = __importDefault(require("@/store/useUserData"));
const react_router_dom_1 = require("react-router-dom");
const react_i18next_1 = require("react-i18next");
const Insights = () => {
    const [title] = (0, react_1.useState)("Insight");
    (0, useDocumentTitle_1.default)(title);
    const { t } = (0, react_i18next_1.useTranslation)();
    // Scroll to top
    (0, react_1.useEffect)(() => {
        window.scrollTo(0, 0);
    }, []);
    const { plan } = (0, useUserData_1.default)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    (0, react_1.useEffect)(() => {
        if (plan && plan === "free") {
            navigate("/pricing");
        }
    }, []);
    const [fileType, setFileType] = (0, react_1.useState)("csv");
    const [fileTypeClicked, setFileTypeClicked] = (0, react_1.useState)(false);
    // Zustand
    const { activeCard } = (0, useInsightStore_1.useInsightStore)();
    // Insight
    const [cardInsight, setCardInsight] = (0, react_1.useState)([]);
    const [totalContact, setTotalContact] = (0, react_1.useState)(0);
    const [totalCardView, setTotalCardView] = (0, react_1.useState)(0);
    const [totalSocialMedia, setTotalSocialMedia] = (0, react_1.useState)(0);
    const [downloadLink, setDownloadLink] = (0, react_1.useState)("");
    const [viewCardData, setViewCardData] = (0, react_1.useState)("today");
    const [dropdown, setDropdown] = (0, react_1.useState)(false);
    // Custom Date
    const [date, setDate] = React.useState({
        from: new Date(),
        to: (0, date_fns_1.addDays)(new Date(), 20),
    });
    const formatDate = (date) => {
        return date.toLocaleDateString("en-CA");
    };
    (0, react_1.useEffect)(() => {
        const fetchData = () => __awaiter(void 0, void 0, void 0, function* () {
            if (viewCardData === "custom") {
                // alert("custom");
                try {
                    const response = yield axios_1.default.get(`${request_1.baseUrl}/api/v1/cards/insights?card_url=${activeCard}&filter=custom&is_card_view=false&cstart_date=${(date === null || date === void 0 ? void 0 : date.from) ? formatDate(date.from) : ""}&cend_date=${(date === null || date === void 0 ? void 0 : date.to) ? formatDate(date.to) : ""}`, {
                        headers: {
                            "Content-Type": "application/json",
                        },
                        withCredentials: true,
                    });
                    // Card View
                    const totalCardViewSum = response.data
                        .filter((card) => card.social_media_name === "card_view")
                        .reduce((sum, card) => sum + card.clicked_value, 0);
                    setTotalCardView(totalCardViewSum);
                    // // Contacts
                    const totalContactSum = response.data
                        .filter((card) => card.social_media_name === "contacts")
                        .reduce((sum, card) => sum + card.clicked_value, 0);
                    setTotalContact(totalContactSum);
                    // Social Media
                    const totalSocialMediaSum = response.data
                        .filter((card) => card.social_media_name !== "contacts" &&
                        card.social_media_name !== "card_view")
                        .reduce((sum, card) => sum + card.clicked_value, 0);
                    setTotalSocialMedia(totalSocialMediaSum);
                }
                catch (error) {
                    console.error("Error fetching data:", error);
                }
            }
            else {
                try {
                    const response = yield axios_1.default.get(`${request_1.baseUrl}/api/v1/cards/insights?card_url=${activeCard}&filter=${viewCardData}&view_card=false`, {
                        headers: {
                            "Content-Type": "application/json",
                        },
                        withCredentials: true,
                    });
                    // Card Views
                    setCardInsight(response.data);
                    const totalCardViewSum = response.data
                        .filter((card) => card.social_media_name === "card_view")
                        .reduce((sum, card) => sum + card.clicked_value, 0);
                    setTotalCardView(totalCardViewSum);
                    // Contacts
                    const totalContactSum = response.data
                        .filter((card) => card.social_media_name === "contacts")
                        .reduce((sum, card) => sum + card.clicked_value, 0);
                    setTotalContact(totalContactSum);
                    // Total Social Media
                    const totalSocialMediaSum = response.data
                        .filter((card) => card.social_media_name !== "contacts" &&
                        card.social_media_name !== "card_view")
                        .reduce((sum, card) => sum + card.clicked_value, 0);
                    setTotalSocialMedia(totalSocialMediaSum);
                }
                catch (error) {
                    console.error("Error fetching data:", error);
                }
            }
        });
        if (activeCard) {
            fetchData();
        }
    }, [activeCard, viewCardData]);
    const handleCustom = () => {
        setViewCardData("custom");
    };
    // Export
    (0, react_1.useEffect)(() => {
        if (activeCard) {
            axios_1.default
                .get(`${request_1.baseUrl}/api/v1/cards/export-insights/${activeCard}?file_format=${fileType}`, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((response) => {
                setDownloadLink(response.data.url);
            })
                .catch((error) => {
                console.log(error);
            });
        }
    }, [activeCard, fileType]);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Navbar_1.default, {}), (0, jsx_runtime_1.jsx)("div", { className: "lg:container mx-auto lg:px-0 px-3 lg:mt-32 mt-24", children: (0, jsx_runtime_1.jsxs)("div", { className: "lg:grid grid-cols-5 gap-x-14 rounded", children: [(0, jsx_runtime_1.jsx)("div", { className: "col-span-2 lg:mb-0 mb-10", children: (0, jsx_runtime_1.jsx)(Cards_1.default, {}) }), (0, jsx_runtime_1.jsxs)("div", { className: "col-span-3", children: [(0, jsx_runtime_1.jsxs)("div", { className: "lg:flex justify-between mb-5", children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex gap-x-4", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-white text-sm mb-2 font-poppins", children: t("fetchByCalendar") }), plan !== "proPlus" && ((0, jsx_runtime_1.jsx)("p", { className: "font-poppins bg-blue-500 text-white rounded-full w-20 text-center h-5 text-sm shadow-inner shadow-red-950", children: "Pro+" }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "lg:flex", children: [(0, jsx_runtime_1.jsx)(DatePicker_1.default, { date: date, setDate: setDate }), plan === "proPlus" ? ((0, jsx_runtime_1.jsxs)("button", { onClick: () => handleCustom(), className: "lg:ms-2 lg:mt-0 mt-3 btn-bg shadow-none py-2 rounded text-white text-sm", children: [t("fetch"), "s"] })) : ((0, jsx_runtime_1.jsx)("button", { disabled: true, className: "lg:ms-2 lg:mt-0 mt-3 btn-bg shadow-none py-2 rounded text-white text-sm cursor-not-allowed", children: t("fetch") }))] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "relative lg:mt-0 mt-5", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex gap-x-3", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-white text-sm mb-2", children: t("filter") }), plan !== "proPlus" && ((0, jsx_runtime_1.jsx)("p", { className: "font-poppins bg-blue-500 text-white rounded-full w-20 text-center h-5 text-sm shadow-inner shadow-red-950", children: "Pro+" }))] }), plan === "proPlus" ? ((0, jsx_runtime_1.jsxs)("div", { onClick: () => setDropdown(!dropdown), className: "flex justify-between bg-white border rounded-md w-36 text-center pt-2 pb-1 cursor-pointer px-2", children: [(0, jsx_runtime_1.jsx)("p", { className: "first-letter:uppercase text-sm text-gray-700", children: filter_1.default.map((f) => f.filterBy === viewCardData && f.name) }), (0, jsx_runtime_1.jsx)("p", { className: `${dropdown ? "bi-caret-up-fill" : "bi-caret-down-fill"} text-gray-700` })] })) : ((0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between bg-white border rounded-md w-36 text-center pt-2 pb-1 px-2 cursor-not-allowed", children: [(0, jsx_runtime_1.jsx)("p", { className: "first-letter:uppercase text-sm text-gray-700", children: "Today" }), (0, jsx_runtime_1.jsx)("p", { className: `${dropdown ? "bi-caret-up-fill" : "bi-caret-down-fill"} text-gray-700` })] })), dropdown && ((0, jsx_runtime_1.jsx)("div", { className: "absolute z-50 space-y-1 bg-gray-100 border border-gray-400 rounded w-36 py-3 text-sm ps-2 mt-2 text-gray-900", children: filter_1.default.map((f) => ((0, jsx_runtime_1.jsx)("p", { onClick: () => {
                                                            setViewCardData(f.filterBy);
                                                            setDropdown(false);
                                                        }, className: "cursor-pointer hover:text-teal-600", children: t(f.name) }, f.id))) }))] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-5", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-white mb-2 text-sm", children: "Export insights" }), plan !== "proPlus" && ((0, jsx_runtime_1.jsx)("p", { className: "ms-5 font-poppins bg-blue-500 text-white rounded-full w-20 text-center h-5 text-sm shadow-inner shadow-red-950", children: "Pro+" }))] }), (0, jsx_runtime_1.jsx)("div", { className: "", children: plan === "proPlus" ? ((0, jsx_runtime_1.jsxs)("div", { className: "flex gap-x-3", children: [(0, jsx_runtime_1.jsx)("p", { className: "btn-bg p-0 mb-3 shadow-none rounded text-white w-40 py-2", children: (0, jsx_runtime_1.jsxs)("a", { href: `https://api.vibecard.de/api/${downloadLink}`, download: `Insights.${fileType}`, children: ["Export ", (0, jsx_runtime_1.jsx)("span", { className: "bi-download ms-3" })] }) }), (0, jsx_runtime_1.jsxs)("div", { className: "relative bg-white rounded py-2 h-10 px-4", children: [(0, jsx_runtime_1.jsxs)("p", { onClick: () => setFileTypeClicked(!fileTypeClicked), className: "cursor-pointer uppercase", children: [fileType, " ", (0, jsx_runtime_1.jsx)("span", { className: "bi-caret-down-fill text-xs ms-2" })] }), fileTypeClicked && ((0, jsx_runtime_1.jsxs)("div", { className: "bg-white absolute w-full mt-1 left-0 p-1 border rounded shadow", children: [(0, jsx_runtime_1.jsx)("p", { onClick: () => {
                                                                            setFileType("csv");
                                                                            setFileTypeClicked(false);
                                                                        }, className: "cursor-pointer uppercase", children: "csv" }), (0, jsx_runtime_1.jsx)("p", { onClick: () => {
                                                                            setFileType("pdf");
                                                                            setFileTypeClicked(false);
                                                                        }, className: "cursor-pointer uppercase", children: "pdf" })] }))] })] })) : ((0, jsx_runtime_1.jsx)("p", { className: "btn-bg p-0 mb-3 shadow-none rounded text-white w-40 py-2 cursor-not-allowed", children: (0, jsx_runtime_1.jsxs)("a", { className: "cursor-not-allowed", children: ["Export ", (0, jsx_runtime_1.jsx)("span", { className: "bi-download ms-3" })] }) })) })] }), (0, jsx_runtime_1.jsx)(History_1.default, { contact: totalContact, social: totalSocialMedia, view: totalCardView }), (0, jsx_runtime_1.jsx)("div", { className: "border-gradient rounded-lg my-2", children: (0, jsx_runtime_1.jsx)(Chart_1.default, { cardChartData: viewCardData, contact: totalContact, social: totalSocialMedia, view: totalCardView }) }), activeCard && ((0, jsx_runtime_1.jsx)(LinkTaps_1.default, { cardUrl: activeCard, socialMedia: cardInsight }))] })] }) })] }));
};
exports.default = Insights;
