"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const embla_carousel_autoplay_1 = __importDefault(require("embla-carousel-autoplay"));
const carousel_1 = require("../ui/carousel");
const ProductDetailCard = ({ images }) => {
    return ((0, jsx_runtime_1.jsx)(carousel_1.Carousel, { plugins: [
            (0, embla_carousel_autoplay_1.default)({
                delay: 10000,
            }),
        ], children: (0, jsx_runtime_1.jsx)(carousel_1.CarouselContent, { className: "flex gap-x-2 px-1", children: images.map((img) => ((0, jsx_runtime_1.jsx)(carousel_1.CarouselItem, { children: (0, jsx_runtime_1.jsx)("img", { src: img, alt: "card", className: "rounded-xl lg:h-96 h-80 lg:w-[90%] w-full object-cover cursor-pointer" }) }, img))) }) }));
};
exports.default = ProductDetailCard;
