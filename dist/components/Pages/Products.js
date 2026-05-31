"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Navbar_1 = __importDefault(require("../Navbar/Navbar"));
const Footer_1 = __importDefault(require("../Footer/Footer"));
const react_1 = require("react");
const useDocumentTitle_1 = __importDefault(require("../../hooks/useDocumentTitle"));
const Wallets_1 = __importDefault(require("../Product/Wallets"));
const SocialMediaProduct_1 = __importDefault(require("../Product/SocialMediaProduct"));
const GoogleReview_1 = __importDefault(require("../Product/GoogleReview"));
const carousel_1 = require("../ui/carousel");
const Cart_1 = __importDefault(require("../Cart/Cart"));
const react_i18next_1 = require("react-i18next");
const assets_1 = require("@/assets");
const BusinessCard_1 = __importDefault(require("../Product/BusinessCard"));
const Products = () => {
    const [title] = (0, react_1.useState)("Shop our Products");
    (0, useDocumentTitle_1.default)(title);
    const { t } = (0, react_i18next_1.useTranslation)();
    // Scroll to top
    (0, react_1.useEffect)(() => {
        window.scrollTo(0, 0);
    }, []);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Navbar_1.default, {}), (0, jsx_runtime_1.jsx)(Cart_1.default, {}), (0, jsx_runtime_1.jsx)("div", { className: "lg:container mx-auto lg:mt-36 mt-28 ", children: (0, jsx_runtime_1.jsx)("h1", { className: "lg:text-4xl text-2xl lg:text-center px-3 font-extrabold text-white", children: t("productTitle") }) }), (0, jsx_runtime_1.jsx)("div", { className: "lg:container mx-auto mt-16 lg:px-0 px-3", children: (0, jsx_runtime_1.jsxs)("div", { className: "mb-10 lg:mx-40", children: [(0, jsx_runtime_1.jsxs)(carousel_1.Carousel, { children: [(0, jsx_runtime_1.jsxs)(carousel_1.CarouselContent, { children: [(0, jsx_runtime_1.jsx)(carousel_1.CarouselItem, { className: "lg:basis-1/3 md:basis-1/2", children: (0, jsx_runtime_1.jsx)(BusinessCard_1.default, { img: assets_1.card1 }) }), (0, jsx_runtime_1.jsx)(carousel_1.CarouselItem, { className: "lg:basis-1/3 md:basis-1/2", children: (0, jsx_runtime_1.jsx)(BusinessCard_1.default, { img: assets_1.card2 }) }), (0, jsx_runtime_1.jsx)(carousel_1.CarouselItem, { className: "lg:basis-1/3 md:basis-1/2", children: (0, jsx_runtime_1.jsx)(BusinessCard_1.default, { img: assets_1.card3 }) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "lg:hidden md:block block", children: [(0, jsx_runtime_1.jsx)(carousel_1.CarouselPrevious, { className: "absolute z-40 left-0 bg-black text-white" }), (0, jsx_runtime_1.jsx)(carousel_1.CarouselNext, { className: "absolute z-40 right-0 bg-black text-white" })] })] }), (0, jsx_runtime_1.jsxs)(carousel_1.Carousel, { children: [(0, jsx_runtime_1.jsxs)(carousel_1.CarouselContent, { children: [(0, jsx_runtime_1.jsx)(carousel_1.CarouselItem, { className: "lg:basis-1/3 md:basis-1/2", children: (0, jsx_runtime_1.jsx)(SocialMediaProduct_1.default, { img: assets_1.ig }) }), (0, jsx_runtime_1.jsx)(carousel_1.CarouselItem, { className: "lg:basis-1/3 md:basis-1/2", children: (0, jsx_runtime_1.jsx)(SocialMediaProduct_1.default, { img: assets_1.fb }) }), (0, jsx_runtime_1.jsx)(carousel_1.CarouselItem, { className: "lg:basis-1/3 md:basis-1/2", children: (0, jsx_runtime_1.jsx)(SocialMediaProduct_1.default, { img: assets_1.tk }) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "lg:hidden md:block block", children: [(0, jsx_runtime_1.jsx)(carousel_1.CarouselPrevious, { className: "absolute z-40 left-0 bg-black text-white" }), (0, jsx_runtime_1.jsx)(carousel_1.CarouselNext, { className: "absolute z-40 right-0 bg-black text-white" })] })] }), (0, jsx_runtime_1.jsxs)(carousel_1.Carousel, { children: [(0, jsx_runtime_1.jsxs)(carousel_1.CarouselContent, { children: [(0, jsx_runtime_1.jsx)(carousel_1.CarouselItem, { className: "lg:basis-1/3 md:basis-1/2", children: (0, jsx_runtime_1.jsx)(GoogleReview_1.default, { img: assets_1.g1 }) }), (0, jsx_runtime_1.jsx)(carousel_1.CarouselItem, { className: "lg:basis-1/3 md:basis-1/2", children: (0, jsx_runtime_1.jsx)(GoogleReview_1.default, { img: assets_1.g3 }) }), (0, jsx_runtime_1.jsx)(carousel_1.CarouselItem, { className: "lg:basis-1/3 md:basis-1/2", children: (0, jsx_runtime_1.jsx)(GoogleReview_1.default, { img: assets_1.g2 }) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "lg:hidden md:block block", children: [(0, jsx_runtime_1.jsx)(carousel_1.CarouselPrevious, { className: "absolute z-40 left-0 bg-black text-white" }), (0, jsx_runtime_1.jsx)(carousel_1.CarouselNext, { className: "absolute z-40 right-0 bg-black text-white" })] })] }), (0, jsx_runtime_1.jsx)(Wallets_1.default, {}), (0, jsx_runtime_1.jsx)(Wallets_1.default, { review_card: true })] }) }), (0, jsx_runtime_1.jsx)(Footer_1.default, {})] }));
};
exports.default = Products;
