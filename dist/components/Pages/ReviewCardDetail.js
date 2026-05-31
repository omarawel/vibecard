"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Navbar_1 = __importDefault(require("../Navbar/Navbar"));
const react_router_dom_1 = require("react-router-dom");
const useDocumentTitle_1 = __importDefault(require("../../hooks/useDocumentTitle"));
const Footer_1 = __importDefault(require("../Footer/Footer"));
const react_1 = require("react");
const axios_1 = __importDefault(require("axios"));
const request_1 = require("@/services/request");
const Loading_1 = __importDefault(require("../Loading/Loading"));
const WalletOrder_1 = __importDefault(require("../Order/WalletOrder"));
const FAQ_1 = __importDefault(require("../Home/FAQ"));
const assets_1 = require("@/assets");
const Cart_1 = __importDefault(require("../Cart/Cart"));
const react_i18next_1 = require("react-i18next");
const WalletCards_1 = __importDefault(require("../Wallet/WalletCards"));
const ReviewCardDetail = () => {
    const [title] = (0, react_1.useState)("Order Review Card");
    (0, useDocumentTitle_1.default)(title);
    const { t, i18n } = (0, react_i18next_1.useTranslation)();
    // Scroll to top
    (0, react_1.useEffect)(() => {
        window.scrollTo(0, 0);
    }, []);
    const { id } = (0, react_router_dom_1.useParams)();
    const [order, setOrder] = (0, react_1.useState)(false);
    const [reviewCard, setReviewCard] = (0, react_1.useState)();
    const [quantity, setQuantity] = (0, react_1.useState)(1);
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [beforeOrderMsg, setBeforeOrderMsg] = (0, react_1.useState)(false);
    const [productNotFound, setProductNotFound] = (0, react_1.useState)(false);
    const [reviewCardLink, setReviewCardLink] = (0, react_1.useState)("");
    const [reviewCardLinkError, setReviewCardLinkError] = (0, react_1.useState)(false);
    // const addToCart = useCartStore((state) => state.addToCart);
    (0, react_1.useEffect)(() => {
        axios_1.default
            .get(`${request_1.baseUrl}/api/v1/products/wallet/${id}`, {
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
            setReviewCard(response.data.wallet);
            setLoading(false);
        })
            .catch(() => {
            setLoading(false);
            setProductNotFound(true);
        });
    }, [id]);
    const handleMinus = () => {
        if (quantity === 1)
            return;
        setQuantity(quantity - 1);
    };
    const handleOrder = () => {
        if (reviewCardLink.length < 4) {
            setReviewCardLinkError(true);
            return;
        }
        setReviewCardLinkError(false);
        setOrder(true);
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Cart_1.default, {}), order && ((0, jsx_runtime_1.jsx)(WalletOrder_1.default, { id: id ? id : "", img: reviewCard ? reviewCard.image : "", quantity: quantity, hideModal: () => setOrder(false), reviewCardLink: reviewCardLink })), beforeOrderMsg && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { className: "overlay top-0 z-[55]" }), (0, jsx_runtime_1.jsx)("div", { className: "fixed top-0 left-0 flex z-[60] justify-center items-center h-[100dvh] w-full lg:px-0 px-3", children: (0, jsx_runtime_1.jsxs)("div", { className: "lg:w-[35%] w-full hero-bg rounded p-6 secondary-bg shadow shadow-zinc-900", children: [(0, jsx_runtime_1.jsx)("p", { className: "chakra mb-5 text-gray-200 text-xl", children: t("notice") }), (0, jsx_runtime_1.jsx)("p", { className: "font-poppins text-white text-sm", children: t("before-order-msg") }), (0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between gap-x-4 mt-6", children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/register", children: (0, jsx_runtime_1.jsx)("p", { className: `shadow-xl shadow-zinc-900 bg-white text-center pt-3 text-sm rounded h-11 lg:mb-0 mb-2 w-44 font-poppins font-bold`, children: t("create-account") }) }), (0, jsx_runtime_1.jsx)("button", { onClick: () => {
                                                setBeforeOrderMsg(false);
                                                setOrder(true);
                                            }, className: "btn-bg py-2 lg:text-center rounded shadow-md shadow-zinc-950 hover:shadow-none transition ease-in-out delay-200 text-center w-full font-poppins text-white font-bold", children: t("order-without-account") })] })] }) })] })), loading && (0, jsx_runtime_1.jsx)(Loading_1.default, {}), (0, jsx_runtime_1.jsx)(Navbar_1.default, {}), (0, jsx_runtime_1.jsx)("div", { className: "lg:px-0 px-2 lg:mt-32 mt-20 lg:mx-36", children: (0, jsx_runtime_1.jsx)("div", { className: "lg:container mx-auto lg:mt-10 mt-4 lg:secondary-bg rounded overflow-hidden", children: productNotFound ? ((0, jsx_runtime_1.jsxs)("div", { className: "bg-white rounded-xl p-8 my-10", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-2xl font-bold font-poppins", children: t("product-not-found") }), (0, jsx_runtime_1.jsx)("p", { className: "mt-2\r\n              mb-4 text-gray-500 font-poppins", children: t("product-not-found-2") }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/all-products", className: "font-poppins bg-blue-400 text-xs rounded shadow shadow-zinc-900 py-2 px-3 text-white active:shadow-none", children: t("back-to-product-page") })] })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { className: "lg:grid grid-cols-2 justify-between", children: [(0, jsx_runtime_1.jsx)("div", { className: "lg:hidden block rounded-xl lg:py-6 mt-5", children: (0, jsx_runtime_1.jsx)("p", { className: "lg:text-4xl text-2xl text-white font-extrabold", children: t("review-card-title") }) }), (0, jsx_runtime_1.jsxs)("div", { className: "pt-8", children: [id === "hwzn1lojc84rv" && reviewCard && ((0, jsx_runtime_1.jsx)(WalletCards_1.default, { images: [
                                                    reviewCard.image,
                                                    assets_1.review1,
                                                    assets_1.review2,
                                                    assets_1.review3,
                                                    assets_1.review4,
                                                ] })), id === "om62fnse3carv" && reviewCard && ((0, jsx_runtime_1.jsx)(WalletCards_1.default, { images: [
                                                    reviewCard.image,
                                                    assets_1.review1,
                                                    assets_1.review2,
                                                    assets_1.review3,
                                                    assets_1.review4,
                                                ] }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "px-2 main-bg lg:ps-10", children: [(0, jsx_runtime_1.jsx)("div", { className: "lg:block hidden rounded-xl lg:py-6", children: (0, jsx_runtime_1.jsx)("p", { className: "lg:text-3xl text-2xl text-white font-extrabold", children: t("review-card-title") }) }), (0, jsx_runtime_1.jsxs)("p", { className: "text-white  font-poppins font-bold text-xl mt-5", children: [t("price"), " \u20AC", reviewCard === null || reviewCard === void 0 ? void 0 : reviewCard.price] }), (0, jsx_runtime_1.jsxs)("p", { className: "text-lg mt-5 mb-4 text-gray-400 font-poppins font-bold", children: [t("size"), " ", (0, jsx_runtime_1.jsx)("span", { className: "text-sm font-light font-poppins text-white", children: reviewCard === null || reviewCard === void 0 ? void 0 : reviewCard.size })] }), (0, jsx_runtime_1.jsxs)("p", { className: "mt5 mb-4 text-gray-400", children: [" ", t("quantity")] }), (0, jsx_runtime_1.jsxs)("div", { className: "grid grid-cols-5 border border-gray-800 rounded-xl overflow-hidden lg:w-auto w-full", children: [(0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("button", { onClick: () => handleMinus(), className: "bi-dash bg-black w-full h-full text-white text-2xl" }) }), (0, jsx_runtime_1.jsx)("div", { className: "col-span-3", children: (0, jsx_runtime_1.jsx)("input", { type: "number", className: "h-14 border w-full text-center chakra text-3xl text-black focus:outline-none", value: quantity, readOnly: true, onChange: (e) => setQuantity(Number(e.currentTarget.value)) }) }), (0, jsx_runtime_1.jsx)("div", { className: "text-center w-full", children: (0, jsx_runtime_1.jsx)("button", { onClick: () => setQuantity(quantity + 1), className: "bi-plus-lg bg-black w-full h-full text-white text-2xl" }) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "mt-6", children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "review-link", className: "block mb-2 text-gray-400 font-poppins text-sm", children: t("review-card-link") }), (0, jsx_runtime_1.jsx)("input", { type: "url", className: "font-poppins w-full rounded h-12 shadow focus:outline-none px-2", value: reviewCardLink, onChange: (e) => setReviewCardLink(e.currentTarget.value) }), reviewCardLinkError && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-500 text-xs mt-1 font-poppins", children: t("review-card-link-req") }))] }), (0, jsx_runtime_1.jsx)("div", { className: "lg:flex justify-between gap-x-10 w-full mt-5", children: (0, jsx_runtime_1.jsx)("div", { className: "w-full lg:mb-0 mb-5", children: (0, jsx_runtime_1.jsx)("button", { onClick: () => handleOrder(), className: "btn-bg w-full shadow text-white font-bold rounded", children: t("order") }) }) })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "px-3", children: [(0, jsx_runtime_1.jsx)("p", { className: "lg:mt-20 mt-10 mb-4 text-white text-xl font-poppins font-bold", children: t("description") }), i18n.language === "de" ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("p", { className: "mt-5 text-gray-300 font-poppins leading-relaxed text-", children: "NFC-Bewertungskarten \u2013 Kundenfeedback vereinfachen" }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-300 font-poppins leading-relaxed text-", children: "Steigern Sie die Onlinepr\u00E4senz Ihres Unternehmens mit eleganten NFC-Bewertungskarten. Mit nur einem Fingertipp k\u00F6nnen Ihre Kunden sofort eine Google-Bewertung hinterlassen \u2013 intuitiv, schnell und unkompliziert." }), (0, jsx_runtime_1.jsx)("p", { className: "my-3 text-gray-100 font-poppins leading-relaxed text-", children: "Vorteile:" }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-300 font-poppins leading-relaxed text-", children: "Mehr Bewertungen: Vereinfachen Sie den Prozess, um mehr positives Feedback zu erhalten." }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-300 font-poppins leading-relaxed text-", children: "Wasserfest, langlebig und perfekt f\u00FCr Theken, Tische oder Kassenbereiche." }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-300 font-poppins leading-relaxed text-", children: "Vielseitig einsetzbar: Ideal f\u00FCr Restaurants, Gesch\u00E4fte, Salons und andere lokale Unternehmen." }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-300 font-poppins leading-relaxed text-", children: "Bringen Sie Ihr Marketing auf die n\u00E4chste Ebene und lassen Sie Ihre Kunden m\u00FChelos Bewertungen hinterlassen!" })] })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("p", { className: "mt-5 text-gray-300 font-poppins leading-relaxed text-", children: "NFC Review Sticker \u2013 Simplify Customer Feedback" }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-300 font-poppins leading-relaxed text-", children: "Boost your business's online presence with sleek NFC review cards. With just one tap, your customers can leave a Google review instantly \u2013 intuitive, fast, and hassle-free." }), (0, jsx_runtime_1.jsx)("p", { className: "my-3 text-gray-100 font-poppins leading-relaxed text-", children: "Benefits:" }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-300 font-poppins leading-relaxed text-", children: "Increased Reviews: Simplify the process to encourage more positive feedback." }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-300 font-poppins leading-relaxed text-", children: "Waterproof, long-lasting, and perfect for counters, tables, or checkout areas." }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-300 font-poppins leading-relaxed text-", children: "Versatile Use: Ideal for restaurants, shops, salons, and other local businesses." }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-300 font-poppins leading-relaxed text-", children: "Take your marketing to the next level and let your customers leave reviews effortlessly!" })] }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "px-4 mt-10", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-teal-500 text-2xl", children: "FAQ" }), (0, jsx_runtime_1.jsx)("div", { className: "mt-8 flex justify-center", children: (0, jsx_runtime_1.jsx)("div", { className: "w-full", children: (0, jsx_runtime_1.jsx)(FAQ_1.default, {}) }) })] })] })) }) }), (0, jsx_runtime_1.jsx)(Footer_1.default, {})] }));
};
exports.default = ReviewCardDetail;
