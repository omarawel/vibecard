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
const FAQ_1 = __importDefault(require("../Home/FAQ"));
const assets_1 = require("@/assets");
const Cart_1 = __importDefault(require("../Cart/Cart"));
const react_i18next_1 = require("react-i18next");
const useUserData_1 = __importDefault(require("@/store/useUserData"));
const ProductDetailCard_1 = __importDefault(require("../Product/ProductDetailCard"));
const ProductDetail = () => {
    const [title] = (0, react_1.useState)("Product");
    (0, useDocumentTitle_1.default)(title);
    const { t } = (0, react_i18next_1.useTranslation)();
    const { user } = (0, useUserData_1.default)();
    // Scroll to top
    (0, react_1.useEffect)(() => {
        window.scrollTo(0, 0);
    }, []);
    const navigate = (0, react_router_dom_1.useNavigate)();
    const { id } = (0, react_router_dom_1.useParams)();
    const [orderError, setOrderError] = (0, react_1.useState)(false);
    const [type, setType] = (0, react_1.useState)("");
    const [quantity, setQuantity] = (0, react_1.useState)(1);
    const [backLogo, setBackLogo] = (0, react_1.useState)(true);
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [beforeOrderMsg, setBeforeOrderMsg] = (0, react_1.useState)(false);
    const [cards, setCards] = (0, react_1.useState)();
    const [availableCards, setAvailableCards] = (0, react_1.useState)([]);
    const [productNotFound, setProductNotFound] = (0, react_1.useState)(false);
    // Detect product
    (0, react_1.useEffect)(() => {
        if (id === "business-card" ||
            id === "card-social-media" ||
            id === "card-google-review") {
            setProductNotFound(false);
        }
        else {
            setProductNotFound(true);
        }
    }, [id]);
    (0, react_1.useEffect)(() => {
        axios_1.default
            .get(`${request_1.baseUrl}/api/v1/dashboard/card-material-pricing`, {
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
            setCards(response.data);
            axios_1.default
                .get(`${request_1.baseUrl}/api/v1/products/available-materials`, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((response) => {
                setLoading(false);
                setAvailableCards(response.data.materials);
            })
                .catch((error) => {
                console.log(error);
            });
        })
            .catch((error) => {
            console.log(error);
        });
    }, []);
    const handleMinus = () => {
        if (quantity === 1)
            return;
        setQuantity(quantity - 1);
    };
    const handleOrder = () => {
        if (quantity < 1) {
            return;
        }
        if (type === "") {
            setOrderError(true);
            setBeforeOrderMsg(false);
            return;
        }
        else {
            const productCardInfo = {
                quantity: quantity,
                cardType: type,
                vibecardLogo: backLogo,
            };
            localStorage.setItem("product", JSON.stringify(productCardInfo));
            navigate(`/card-design`);
        }
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [loading && (0, jsx_runtime_1.jsx)(Loading_1.default, {}), beforeOrderMsg && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { className: "overlay top-0 z-[55]" }), (0, jsx_runtime_1.jsx)("div", { className: "fixed top-0 left-0 flex z-[60] justify-center items-center h-[100dvh] w-full lg:px-0 px-3", children: (0, jsx_runtime_1.jsxs)("div", { className: "lg:w-[35%] w-full hero-bg rounded p-6 secondary-bg shadow shadow-zinc-900", children: [(0, jsx_runtime_1.jsx)("p", { className: "chakra mb-5 text-gray-200 text-xl", children: t("notice") }), (0, jsx_runtime_1.jsx)("p", { className: "font-poppins text-white text-sm", children: t("before-order-msg") }), (0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between gap-x-4 mt-6", children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/register", children: (0, jsx_runtime_1.jsx)("p", { className: `shadow-xl shadow-zinc-900 bg-white text-center pt-3 text-sm rounded h-11 lg:mb-0 mb-2 w-44 font-poppins font-bold`, children: t("create-account") }) }), (0, jsx_runtime_1.jsx)("button", { onClick: () => handleOrder(), className: "btn-bg py-2 lg:text-center rounded shadow-md shadow-zinc-950 hover:shadow-none transition ease-in-out delay-200 text-center w-full font-poppins text-white font-bold", children: t("order-without-account") })] })] }) })] })), (0, jsx_runtime_1.jsx)(Navbar_1.default, {}), (0, jsx_runtime_1.jsx)(Cart_1.default, {}), (0, jsx_runtime_1.jsx)("div", { className: "lg:px-0 px-2 lg:mt-32 mt-20 lg:mx-36", children: (0, jsx_runtime_1.jsx)("div", { className: "lg:container mx-auto lg:mt-8 mt-4 lg:secondary-bg rounded overflow-hidden", children: productNotFound ? ((0, jsx_runtime_1.jsxs)("div", { className: "bg-white rounded-xl p-8 my-10", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-2xl font-bold font-poppins", children: t("product-not-found") }), (0, jsx_runtime_1.jsx)("p", { className: "mt-2\r\n            mb-4 text-gray-500 font-poppins", children: t("product-not-found-2") }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/all-products", className: "font-poppins bg-blue-400 text-xs rounded shadow shadow-zinc-900 py-2 px-3 text-white active:shadow-none", children: t("back-to-product-page") })] })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { className: "lg:grid grid-cols-2", children: [(0, jsx_runtime_1.jsxs)("div", { className: "lg:hidden block my-6", children: [(0, jsx_runtime_1.jsxs)("p", { className: "lg:text-4xl text-2xl text-white font-extrabold font-poppins", children: ["Vibecard ", t("cardTitle")] }), (0, jsx_runtime_1.jsx)("p", { className: "mt-3 text-sm text-gray-300 font-poppins", children: t("cardDesc") })] }), (0, jsx_runtime_1.jsxs)("div", { className: "lg:mt-10 lg:mx-0 mx-1 lg:pb-10 lg:px-10 md:px-10 px-0", children: [id === "business-card" && ((0, jsx_runtime_1.jsx)(ProductDetailCard_1.default, { images: [assets_1.card1, assets_1.card2, assets_1.card3, assets_1.card6] })), id === "card-social-media" && ((0, jsx_runtime_1.jsx)(ProductDetailCard_1.default, { images: [assets_1.ig, assets_1.fb, assets_1.ln, assets_1.tk] })), id === "card-google-review" && ((0, jsx_runtime_1.jsx)(ProductDetailCard_1.default, { images: [assets_1.g1, assets_1.g2, assets_1.g3, assets_1.g4, assets_1.g5] }))] }), (0, jsx_runtime_1.jsxs)("div", { className: "px-2 main-bg lg:ps-10", children: [(0, jsx_runtime_1.jsxs)("div", { className: "lg:mt-4 rounded-xl lg:py-5", children: [(0, jsx_runtime_1.jsxs)("div", { className: "lg:block hidden", children: [(0, jsx_runtime_1.jsxs)("p", { className: "lg:text-3xl text-2xl text-white font-extrabold font-poppins", children: ["Vibecard ", t("cardTitle")] }), (0, jsx_runtime_1.jsx)("p", { className: "mt-4 text-md text-gray-400 font-poppins", children: t("cardDesc") })] }), (0, jsx_runtime_1.jsx)("p", { className: "text-white mt-5 lg:text-md text-sm font-poppins", children: t("chooseCard") }), (0, jsx_runtime_1.jsxs)("div", { className: "lg:flex justify-between gap-x-5 mt-5", children: [availableCards.includes("recycled_paper") && ((0, jsx_runtime_1.jsxs)("p", { onClick: () => setType("recycled_paper"), className: `shadow-xl shadow-zinc-900 ${type === "recycled_paper"
                                                                    ? "btn-bg shadow-none px-2 text-white text-sm"
                                                                    : "bg-white"} w-full text-center pt-3 rounded h-12 lg:mb-0 mb-2 font-poppins cursor-pointer text-sm font-bold`, children: ["PVC \u20AC", cards === null || cards === void 0 ? void 0 : cards.recycled_paper.price] })), availableCards.includes("bamboo") && ((0, jsx_runtime_1.jsxs)("p", { onClick: () => setType("bamboo"), className: `shadow-xl shadow-zinc-900 ${type === "bamboo"
                                                                    ? "btn-bg shadow-none px-2 text-white"
                                                                    : "bg-white"} w-full text-center pt-3 rounded h-12 lg:mb-0 mb-2 font-poppins cursor-pointer text-sm font-bold`, children: ["Bamboo \u20AC", cards === null || cards === void 0 ? void 0 : cards.bamboo.price] })), availableCards.includes("metal") && ((0, jsx_runtime_1.jsxs)("p", { onClick: () => setType("metal"), className: `shadow-xl shadow-zinc-900 ${type === "metal"
                                                                    ? "btn-bg shadow-none px-2 text-white"
                                                                    : "bg-white"} w-full text-center pt-3 rounded h-12 lg:mb-0 mb-2 font-poppins cursor-pointer text-sm font-bold`, children: ["Metal \u20AC", cards === null || cards === void 0 ? void 0 : cards.metal.price] }))] }), (0, jsx_runtime_1.jsxs)("p", { className: "lg:mt-10 mt-7 lg:text-md text-sm text-gray-300 font-poppins", children: [t("styles"), " :", (0, jsx_runtime_1.jsx)("span", { className: "mx-1 text-white font-poppins", children: t("styleDesc") })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex justify-start gap-x-6 mt-4", children: [(0, jsx_runtime_1.jsx)("p", { onClick: () => setBackLogo(true), className: `shadow-xl shadow-zinc-900 ${backLogo ? "btn-bg shadow-none px-0" : "bg-white"} text-center pt-3 text-sm rounded h-11 lg:mb-0 mb-2 w-20 font-poppins font-bold`, children: t("yes") }), (0, jsx_runtime_1.jsx)("p", { onClick: () => setBackLogo(false), className: `shadow-xl shadow-zinc-900 ${!backLogo ? "btn-bg shadow-none px-0" : "bg-white"} text-center pt-3 text-sm rounded h-11 lg:mb-0 mb-2 w-20 font-poppins font-bold`, children: t("no") })] }), (0, jsx_runtime_1.jsxs)("p", { className: "lg:mt-10 mt-7 lg:text-md text-sm text-gray-300 font-poppins", children: [t("qrCode"), " :", (0, jsx_runtime_1.jsxs)("span", { className: "mx-1 text-white font-poppins", children: [t("qrNote2"), " ", (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/dashboard", className: "text-blue-500", children: t("qrNote3") })] })] })] }), (0, jsx_runtime_1.jsxs)("p", { className: "mt-5 mb-4 text-white", children: [" ", t("quantity")] }), (0, jsx_runtime_1.jsxs)("div", { className: "grid grid-cols-5 border border-gray-400 rounded-xl me-44 overflow-hidden lg:w-auto w-full", children: [(0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("button", { onClick: () => handleMinus(), className: "bi-dash bg-black w-full h-full text-white text-3xl" }) }), (0, jsx_runtime_1.jsx)("div", { className: "col-span-3", children: (0, jsx_runtime_1.jsx)("input", { type: "number", className: "h-14 border w-full text-center chakra text-3xl text-black focus:outline-none", value: quantity, onChange: (e) => setQuantity(Number(e.currentTarget.value)), min: 1, readOnly: true }) }), (0, jsx_runtime_1.jsx)("div", { className: "text-center w-full", children: (0, jsx_runtime_1.jsx)("button", { onClick: () => setQuantity(quantity + 1), className: "bi-plus-lg bg-black w-full h-full text-white text-2xl" }) })] }), orderError && ((0, jsx_runtime_1.jsx)("p", { className: "mb-3 text-red-500 text-sm text-start pt-5", children: t("designError") })), (0, jsx_runtime_1.jsx)("div", { className: "lg:flex justify-between gap-x-10 w-full mt-8", children: user ? ((0, jsx_runtime_1.jsx)("div", { className: "w-full lg:mb-0 mb-5", children: (0, jsx_runtime_1.jsxs)("button", { onClick: () => handleOrder(), className: "btn-bg py-3 lg:text-center rounded shadow-md shadow-zinc-950 hover:shadow-none transition ease-in-out delay-200 text-center w-full font-poppins text-white font-bold", children: [(0, jsx_runtime_1.jsx)("span", { className: "bi-palette-fill me-2" }), t("designBtn")] }) })) : ((0, jsx_runtime_1.jsx)("div", { className: "w-full lg:mb-0 mb-5", children: (0, jsx_runtime_1.jsxs)("button", { onClick: () => setBeforeOrderMsg(true), className: "btn-bg py-3 lg:text-center rounded shadow-md shadow-zinc-950 hover:shadow-none transition ease-in-out delay-200 text-center w-full font-poppins text-white font-bold", children: [(0, jsx_runtime_1.jsx)("span", { className: "bi-palette-fill me-2" }), t("designBtn")] }) })) })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "px-4", children: [(0, jsx_runtime_1.jsx)("p", { className: "lg:mt-20 mt-10 mb-4 text-white text-xl font-poppins font-bold", children: t("description") }), (0, jsx_runtime_1.jsxs)("p", { className: "first-letter:uppercase text-md text-gray-200  mt-4 font-poppins", children: [" ", t("PVC"), " NFC ", t("businessCard"), " "] }), (0, jsx_runtime_1.jsx)("p", { className: "font-poppins text-gray-400 mt-2", children: t("pvcDescription") }), (0, jsx_runtime_1.jsxs)("p", { className: "first-letter:uppercase text-md text-gray-200  mt-6 font-poppins", children: [" ", t("bamboo"), " NFC ", t("businessCard"), " "] }), (0, jsx_runtime_1.jsx)("p", { className: "font-poppins text-gray-400 mt-2", children: t("bambooDescription") }), (0, jsx_runtime_1.jsxs)("p", { className: "first-letter:uppercase text-md text-gray-200 mt-6 font-poppins", children: [" ", t("metal"), " NFC ", t("businessCard"), " "] }), (0, jsx_runtime_1.jsx)("p", { className: "font-poppins text-gray-400 mt-2", children: t("metalDescription") })] }), (0, jsx_runtime_1.jsxs)("div", { className: "px-4 mt-10", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-teal-500 text-2xl", children: "FAQ" }), (0, jsx_runtime_1.jsx)("div", { className: "mt-8 flex justify-center", children: (0, jsx_runtime_1.jsx)("div", { className: "w-full", children: (0, jsx_runtime_1.jsx)(FAQ_1.default, {}) }) })] })] })) }) }), (0, jsx_runtime_1.jsx)(Footer_1.default, {})] }));
};
exports.default = ProductDetail;
