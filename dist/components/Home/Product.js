"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const carousel_1 = require("../ui/carousel");
const SocialMediaProduct_1 = __importDefault(require("../Product/SocialMediaProduct"));
const GoogleReview_1 = __importDefault(require("../Product/GoogleReview"));
const embla_carousel_autoplay_1 = __importDefault(require("embla-carousel-autoplay"));
const BusinessCard_1 = __importDefault(require("../Product/BusinessCard"));
const assets_1 = require("@/assets");
const Product = () => {
    return ((0, jsx_runtime_1.jsx)(carousel_1.Carousel, { plugins: [
            (0, embla_carousel_autoplay_1.default)({
                delay: 3000,
            }),
        ], children: (0, jsx_runtime_1.jsxs)(carousel_1.CarouselContent, { className: "flex gap-x-2 lg:px-1 px-3", children: [(0, jsx_runtime_1.jsx)(carousel_1.CarouselItem, { className: "lg:basis-1/4 md:basis-1/2", children: (0, jsx_runtime_1.jsx)(BusinessCard_1.default, { img: assets_1.card1 }) }, 1), (0, jsx_runtime_1.jsx)(carousel_1.CarouselItem, { className: "lg:basis-1/4 md:basis-1/2", children: (0, jsx_runtime_1.jsx)(BusinessCard_1.default, { img: assets_1.card2 }) }, 2), (0, jsx_runtime_1.jsx)(carousel_1.CarouselItem, { className: "lg:basis-1/4 md:basis-1/2", children: (0, jsx_runtime_1.jsx)(BusinessCard_1.default, { img: assets_1.card3 }) }, 3), (0, jsx_runtime_1.jsx)(carousel_1.CarouselItem, { className: "lg:basis-1/4 md:basis-1/2", children: (0, jsx_runtime_1.jsx)(SocialMediaProduct_1.default, { img: assets_1.fb }) }, 4), (0, jsx_runtime_1.jsx)(carousel_1.CarouselItem, { className: "lg:basis-1/4 md:basis-1/2", children: (0, jsx_runtime_1.jsx)(SocialMediaProduct_1.default, { img: assets_1.ig }) }, 5), (0, jsx_runtime_1.jsx)(carousel_1.CarouselItem, { className: "lg:basis-1/4 md:basis-1/2", children: (0, jsx_runtime_1.jsx)(SocialMediaProduct_1.default, { img: assets_1.tk }) }, 6), (0, jsx_runtime_1.jsx)(carousel_1.CarouselItem, { className: "lg:basis-1/4 md:basis-1/2", children: (0, jsx_runtime_1.jsx)(GoogleReview_1.default, { img: assets_1.g1 }) }, 7), (0, jsx_runtime_1.jsx)(carousel_1.CarouselItem, { className: "lg:basis-1/4 md:basis-1/2", children: (0, jsx_runtime_1.jsx)(GoogleReview_1.default, { img: assets_1.g3 }) }, 8), (0, jsx_runtime_1.jsx)(carousel_1.CarouselItem, { className: "lg:basis-1/4 md:basis-1/2", children: (0, jsx_runtime_1.jsx)(GoogleReview_1.default, { img: assets_1.g2 }) }, 9)] }) }));
};
exports.default = Product;
